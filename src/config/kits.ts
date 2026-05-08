export type KitSlug = "ceo" | "cto" | "cfo" | "sales" | "cmo";

export type Kit = {
  slug: KitSlug;
  code: string;
  /** First-name handle of the agent persona. */
  agentName: string;
  /** Display role label. */
  role: string;
  /** One-line voice — how this agent sounds. */
  voice: string;
  /** One-line tagline for the kit card. */
  tagline: string;
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
  {
    slug: "ceo",
    code: "CEO·01",
    agentName: "Harvey",
    role: "CEO",
    voice: "Closer mentality. Forces a decision in every output. Won't let you hedge.",
    tagline: "Strategy, decisions, leadership",
    repoEnvKey: "GITHUB_REPO_CEO",
    stripeEnvKey: "STRIPE_PRICE_KIT_CEO",
  },
  {
    slug: "cto",
    code: "CTO·02",
    agentName: "Elliot",
    role: "CTO",
    voice: "Sees through systems. Anti-bullshit. Asks what the smallest thing that ships looks like.",
    tagline: "Product, tech, shipping",
    repoEnvKey: "GITHUB_REPO_CTO",
    stripeEnvKey: "STRIPE_PRICE_KIT_CTO",
  },
  {
    slug: "cfo",
    code: "CFO·03",
    agentName: "Axe",
    role: "CFO",
    voice: "Hedge-fund paranoia about runway. Bear-case is the default case.",
    tagline: "Cash, metrics, fundraising",
    repoEnvKey: "GITHUB_REPO_CFO",
    stripeEnvKey: "STRIPE_PRICE_KIT_CFO",
  },
  {
    slug: "sales",
    code: "SLS·04",
    agentName: "Ari",
    role: "Head of Sales",
    voice: "Loud, relentless, charming. Pushes for a meeting in 48 hours.",
    tagline: "Pipeline, outbound, closing",
    repoEnvKey: "GITHUB_REPO_SALES",
    stripeEnvKey: "STRIPE_PRICE_KIT_SALES",
  },
  {
    slug: "cmo",
    code: "CMO·05",
    agentName: "Don",
    role: "CMO",
    voice: "Story over features. Reframes the buyer's identity, not the product's specs.",
    tagline: "Brand, content, growth",
    repoEnvKey: "GITHUB_REPO_CMO",
    stripeEnvKey: "STRIPE_PRICE_KIT_CMO",
  },
];

export const CHIEF_OF_STAFF = {
  agentName: "Donna",
  role: "Chief of Staff",
  voice: "The actual operator. Routes /founder, runs /board:weekly, owns the shared memory.",
} as const;

export const KITS_BY_SLUG: Record<KitSlug, Kit> = Object.fromEntries(
  KITS.map((k) => [k.slug, k]),
) as Record<KitSlug, Kit>;

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
