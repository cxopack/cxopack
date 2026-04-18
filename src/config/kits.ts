export type KitSlug = "ceo" | "cto" | "cfo" | "sales" | "cmo";

export type Kit = {
  slug: KitSlug;
  code: string;
  repoEnvKey:
    | "GITHUB_REPO_CEO"
    | "GITHUB_REPO_CTO"
    | "GITHUB_REPO_CFO"
    | "GITHUB_REPO_SALES"
    | "GITHUB_REPO_CMO";
  stripeEnvKey:
    | "STRIPE_PRICE_KIT_CEO"
    | "STRIPE_PRICE_KIT_CTO"
    | "STRIPE_PRICE_KIT_CFO"
    | "STRIPE_PRICE_KIT_SALES"
    | "STRIPE_PRICE_KIT_CMO";
};

export const KITS: Kit[] = [
  { slug: "ceo",   code: "CEO·01", repoEnvKey: "GITHUB_REPO_CEO",   stripeEnvKey: "STRIPE_PRICE_KIT_CEO" },
  { slug: "cto",   code: "CTO·02", repoEnvKey: "GITHUB_REPO_CTO",   stripeEnvKey: "STRIPE_PRICE_KIT_CTO" },
  { slug: "cfo",   code: "CFO·03", repoEnvKey: "GITHUB_REPO_CFO",   stripeEnvKey: "STRIPE_PRICE_KIT_CFO" },
  { slug: "sales", code: "SLS·04", repoEnvKey: "GITHUB_REPO_SALES", stripeEnvKey: "STRIPE_PRICE_KIT_SALES" },
  { slug: "cmo",   code: "CMO·05", repoEnvKey: "GITHUB_REPO_CMO",   stripeEnvKey: "STRIPE_PRICE_KIT_CMO" },
];

export const ALL_KIT_SLUGS: KitSlug[] = KITS.map((k) => k.slug);

/** Pricing v2 — Edition II */
export const PRICING = {
  /** One single kit, lifetime. */
  singleKit: 49,
  /** Subscription — every kit current + future, the Board, monthly drops, community. */
  allAccessYearly: 149,
  /** First 100 buyers — locked at this price forever. */
  launch100Yearly: 99,
  /** Total à-la-carte if you bought all 5 kits at €49 — used for "save €X" framing. */
  allKitsTotal: 245,
} as const;
