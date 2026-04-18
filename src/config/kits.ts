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
  { slug: "ceo", code: "CEO·01", repoEnvKey: "GITHUB_REPO_CEO", stripeEnvKey: "STRIPE_PRICE_KIT_CEO" },
  { slug: "cto", code: "CTO·02", repoEnvKey: "GITHUB_REPO_CTO", stripeEnvKey: "STRIPE_PRICE_KIT_CTO" },
  { slug: "cfo", code: "CFO·03", repoEnvKey: "GITHUB_REPO_CFO", stripeEnvKey: "STRIPE_PRICE_KIT_CFO" },
  { slug: "sales", code: "SLS·04", repoEnvKey: "GITHUB_REPO_SALES", stripeEnvKey: "STRIPE_PRICE_KIT_SALES" },
  { slug: "cmo", code: "CMO·05", repoEnvKey: "GITHUB_REPO_CMO", stripeEnvKey: "STRIPE_PRICE_KIT_CMO" },
];

export const ALL_KIT_SLUGS: KitSlug[] = KITS.map((k) => k.slug);

export const PRICING = {
  singleKit: 99,
  fullPack: 299,
  founding100: 249,
  clubMonthly: 49,
  clubYearly: 399,
  aLaCarteTotal: 495,
} as const;
