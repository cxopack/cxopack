import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-12-18.acacia" as Stripe.LatestApiVersion,
  typescript: true,
});

export type Plan =
  | { kind: "kit"; kitSlug: "ceo" | "cto" | "cfo" | "sales" | "cmo" }
  | { kind: "all-access" }
  | { kind: "launch-100" };

export function resolvePrice(plan: Plan): { priceId: string; mode: "payment" | "subscription" } {
  const map: Record<string, string | undefined> = {
    "kit:ceo": process.env.STRIPE_PRICE_KIT_CEO,
    "kit:cto": process.env.STRIPE_PRICE_KIT_CTO,
    "kit:cfo": process.env.STRIPE_PRICE_KIT_CFO,
    "kit:sales": process.env.STRIPE_PRICE_KIT_SALES,
    "kit:cmo": process.env.STRIPE_PRICE_KIT_CMO,
    "all-access": process.env.STRIPE_PRICE_ALL_ACCESS_YEARLY,
    "launch-100": process.env.STRIPE_PRICE_LAUNCH_100_YEARLY,
  };

  let key: string;
  let mode: "payment" | "subscription" = "payment";
  switch (plan.kind) {
    case "kit":
      key = `kit:${plan.kitSlug}`;
      break;
    case "all-access":
      key = "all-access";
      mode = "subscription";
      break;
    case "launch-100":
      key = "launch-100";
      mode = "subscription";
      break;
  }

  const priceId = map[key];
  if (!priceId) {
    throw new Error(`Stripe price not configured for plan "${key}". Set env var.`);
  }
  return { priceId, mode };
}
