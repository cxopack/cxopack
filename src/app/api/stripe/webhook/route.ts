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

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    await handleCheckoutCompleted(session);
  }

  return NextResponse.json({ received: true });
}

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

  const plan = (meta.plan ?? "full-pack") as
    | "kit"
    | "full-pack"
    | "founding-100"
    | "club";
  const kitSlugs = (meta.kitSlugs ?? "").split(",").filter(Boolean) as KitSlug[];
  const githubUsername = meta.githubUsername ?? "";

  const planDbValue =
    plan === "club"
      ? session.mode === "subscription"
        ? "club-yearly"
        : "club-monthly"
      : plan;

  const amountCents = session.amount_total ?? 0;

  const [order] = await db
    .insert(schema.orders)
    .values({
      email,
      plan: planDbValue as typeof schema.orders.$inferInsert.plan,
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
    .returning();

  if (plan === "founding-100") {
    await db
      .insert(schema.foundingCounter)
      .values({ id: 1, sold: 1, limit: 100 })
      .onConflictDoUpdate({
        target: schema.foundingCounter.id,
        set: { sold: sql`${schema.foundingCounter.sold} + 1` },
      });
  }

  if (githubUsername && kitSlugs.length > 0) {
    const results = await inviteToKitRepos(githubUsername, kitSlugs);
    const allOk = results.every((r) => r.ok);
    if (allOk) {
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
