import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import type { KitSlug } from "@/config/kits";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const { stripe } = await import("@/lib/stripe");
  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, secret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "invoice.payment_failed":
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      case "invoice.upcoming":
        await handleInvoiceUpcoming(event.data.object as Stripe.Invoice);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      default:
        // Ignore unhandled event types — still acknowledge the delivery.
        break;
    }
  } catch (err) {
    console.error(`webhook handler failed for ${event.type}:`, err instanceof Error ? err.message : err);
    // Returning 500 lets Stripe retry automatically.
    return NextResponse.json({ error: "handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

// ---------------------------------------------------------------------------
// checkout.session.completed — new paid customer
// ---------------------------------------------------------------------------
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const [{ db, schema }, { eq, sql }, { inviteToKitRepos }, { sendWelcomeEmail }] =
    await Promise.all([
      import("@/db"),
      import("drizzle-orm"),
      import("@/lib/github"),
      import("@/lib/email"),
    ]);

  const meta = session.metadata ?? {};
  const email = session.customer_details?.email ?? session.customer_email ?? meta.email;
  if (!email) return;

  const plan = (meta.plan ?? "all-access") as
    | "kit"
    | "all-access"
    | "launch-100";
  const kitSlugs = (meta.kitSlugs ?? "").split(",").filter(Boolean) as KitSlug[];
  const githubUsername = meta.githubUsername ?? "";

  const amountCents = session.amount_total ?? 0;

  const [order] = await db
    .insert(schema.orders)
    .values({
      email,
      plan: plan as typeof schema.orders.$inferInsert.plan,
      kitSlug: plan === "kit" ? (kitSlugs[0] ?? null) : null,
      amountCents,
      currency: (session.currency ?? "eur").toUpperCase(),
      status: "paid",
      stripeSessionId: session.id,
      stripePaymentIntentId:
        typeof session.payment_intent === "string" ? session.payment_intent : null,
      stripeSubscriptionId:
        typeof session.subscription === "string" ? session.subscription : null,
      paidAt: new Date(),
      metadata: meta,
    })
    .onConflictDoNothing({ target: schema.orders.stripeSessionId })
    .returning();

  if (plan === "launch-100") {
    await db
      .insert(schema.foundingCounter)
      .values({ id: 1, sold: 1, limit: 100 })
      .onConflictDoUpdate({
        target: schema.foundingCounter.id,
        set: { sold: sql`${schema.foundingCounter.sold} + 1` },
      });
    // Bust the home page cache so the counter reflects this purchase
    // sooner than the 60s ISR window.
    try {
      const { revalidatePath } = await import("next/cache");
      revalidatePath("/", "page");
      revalidatePath("/[locale]", "page");
    } catch {
      // revalidatePath is unavailable in some test contexts — non-fatal.
    }
  }

  if (githubUsername && kitSlugs.length > 0) {
    const results = await inviteToKitRepos(githubUsername, kitSlugs);
    const allOk = results.every((r) => r.ok);
    if (order && allOk) {
      await db
        .update(schema.orders)
        .set({ githubInviteSent: true })
        .where(eq(schema.orders.id, order.id));
    }
  }

  await sendWelcomeEmail({
    to: email,
    kitSlugs: kitSlugs.length ? kitSlugs : ["ceo", "cto", "cfo", "sales", "cmo"],
    githubUsername: githubUsername || "your-github",
  });
}

// ---------------------------------------------------------------------------
// invoice.payment_failed — card charge didn't go through on renewal
// ---------------------------------------------------------------------------
async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const { sendPaymentFailedEmail } = await import("@/lib/email");
  const to = invoice.customer_email;
  if (!to) return;
  await sendPaymentFailedEmail({
    to,
    amountCents: invoice.amount_due ?? 0,
    currency: invoice.currency ?? "eur",
    hostedInvoiceUrl: invoice.hosted_invoice_url,
    attemptCount: invoice.attempt_count ?? 1,
    nextAttemptDate: invoice.next_payment_attempt
      ? new Date(invoice.next_payment_attempt * 1000)
      : null,
  });
}

// ---------------------------------------------------------------------------
// invoice.upcoming — Stripe sends ~3–14 days before the next charge
// ---------------------------------------------------------------------------
async function handleInvoiceUpcoming(invoice: Stripe.Invoice) {
  const { sendRenewalUpcomingEmail } = await import("@/lib/email");
  const to = invoice.customer_email;
  if (!to) return;
  const renewalTs = invoice.next_payment_attempt ?? invoice.period_end;
  await sendRenewalUpcomingEmail({
    to,
    amountCents: invoice.amount_due ?? 0,
    currency: invoice.currency ?? "eur",
    renewalDate: new Date(renewalTs * 1000),
    manageSubscriptionUrl: invoice.hosted_invoice_url,
  });
}

// ---------------------------------------------------------------------------
// customer.subscription.deleted — subscription cancelled
// ---------------------------------------------------------------------------
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const { sendCancellationEmail } = await import("@/lib/email");
  const { stripe } = await import("@/lib/stripe");
  const { db, schema } = await import("@/db");
  const { eq } = await import("drizzle-orm");

  // Mark any matching order as refunded/cancelled for our records.
  await db
    .update(schema.orders)
    .set({ status: "refunded" })
    .where(eq(schema.orders.stripeSubscriptionId, subscription.id));

  const customer =
    typeof subscription.customer === "string"
      ? await stripe.customers.retrieve(subscription.customer)
      : subscription.customer;

  const to = customer && "email" in customer && customer.email ? customer.email : null;
  if (!to) return;

  const endsAt = subscription.current_period_end
    ? new Date(subscription.current_period_end * 1000)
    : null;

  await sendCancellationEmail({
    to,
    accessEndsDate: endsAt,
  });
}
