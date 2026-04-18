import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-12-18.acacia" as Stripe.LatestApiVersion,
  typescript: true,
});

export type Plan =
  | { kind: "kit"; kitSlug: "ceo" | "cto" | "cfo" | "sales" | "cmo" }
  | { kind: "full-pack" }
  | { kind: "founding-100" }
  | { kind: "club"; period: "monthly" | "yearly" };

export function resolvePrice(plan: Plan): { priceId: string; mode: "payment" | "subscription" } {
  const map: Record<string, string | undefined> = {
    "kit:ceo": process.env.STRIPE_PRICE_KIT_CEO,
    "kit:cto": process.env.STRIPE_PRICE_KIT_CTO,
    "kit:cfo": process.env.STRIPE_PRICE_KIT_CFO,
    "kit:sales": process.env.STRIPE_PRICE_KIT_SALES,
    "kit:cmo": process.env.STRIPE_PRICE_KIT_CMO,
    "full-pack": process.env.STRIPE_PRICE_FULL_PACK,
    "founding-100": process.env.STRIPE_PRICE_FOUNDING_100,
    "club:monthly": process.env.STRIPE_PRICE_CLUB_MONTHLY,
    "club:yearly": process.env.STRIPE_PRICE_CLUB_YEARLY,
  };

  let key: string;
  let mode: "payment" | "subscription" = "payment";
  switch (plan.kind) {
    case "kit":
      key = `kit:${plan.kitSlug}`;
      break;
    case "full-pack":
      key = "full-pack";
      break;
    case "founding-100":
      key = "founding-100";
      break;
    case "club":
      key = `club:${plan.period}`;
      mode = "subscription";
      break;
  }

  const priceId = map[key];
  if (!priceId) {
    throw new Error(`Stripe price not configured for plan "${key}". Set env var.`);
  }
  return { priceId, mode };
}
