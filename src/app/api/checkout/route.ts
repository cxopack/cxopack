import { NextRequest, NextResponse } from "next/server";
import type { Plan } from "@/lib/stripe";
import { ALL_KIT_SLUGS, KITS } from "@/config/kits";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  plan: z.enum(["kit", "all-access", "launch-100"]),
  kit: z.enum(["ceo", "cto", "cfo", "sales", "cmo"]).optional(),
  email: z.string().email().optional(),
  githubUsername: z.string().min(1).max(39).optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { plan, kit, email: bodyEmail, githubUsername } = parsed.data;

  let planArg: Plan;
  switch (plan) {
    case "kit":
      if (!kit) return NextResponse.json({ error: "Missing kit" }, { status: 400 });
      planArg = { kind: "kit", kitSlug: kit };
      break;
    case "all-access":
      planArg = { kind: "all-access" };
      break;
    case "launch-100":
      planArg = { kind: "launch-100" };
      break;
  }

  const { stripe, resolvePrice } = await import("@/lib/stripe");
  const { createClient } = await import("@/lib/supabase/server");

  const { priceId, mode } = resolvePrice(planArg);

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  // For kit purchase: just that kit. For all-access / launch-100: every kit.
  const kitSlugs = plan === "kit" ? [kit!] : ALL_KIT_SLUGS;

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user?.email ?? bodyEmail,
    locale: "en",
    success_url: `${site}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${site}/#pricing`,
    allow_promotion_codes: true,
    metadata: {
      plan,
      kitSlugs: kitSlugs.join(","),
      userId: user?.id ?? "",
      githubUsername: githubUsername ?? "",
      kitTitles: KITS.filter((k) => kitSlugs.includes(k.slug)).map((k) => k.slug).join(","),
    },
  });

  return NextResponse.json({ url: session.url });
}
