import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { Pager } from "@/components/docs/pager";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
import { H1, H2, Lead, P, Ul } from "@/components/docs/prose";

export const metadata = {
  title: "Changelog — CxOPack",
  description: "Release notes — what's new in each version of CxOPack.",
};

type Release = {
  version: string;
  date: string;
  status?: "latest" | "stable" | "upcoming";
  highlights: string[];
};

const RELEASES: Release[] = [
  {
    version: "Edition I · v0.3",
    date: "2026-04-19",
    status: "latest",
    highlights: [
      "The Board now ships with every All-Access Pass — Chief of Staff (Sam) plus five persona agents that coordinate through a shared workspace.",
      "Sam, the Chief of Staff, signs every synthesized brief with a clear next-step prompt (Decide today / Read this twice / Sleep on it).",
      "New documentation section — “A week in the life” — illustrates the Monday-to-Friday rhythm of running a startup with the kits.",
      "Autopilot early-access waitlist is open. Subscribers will be invited to the closed beta first.",
      "Per-kit social cards: every documentation page generates a tailored preview when shared on X, LinkedIn, or in messaging tools.",
    ],
  },
  {
    version: "Edition I · v0.2",
    date: "2026-04-19",
    status: "stable",
    highlights: [
      "Thirty named workflows across the five kits — every advertised skill now ships as a standalone, documented file.",
      "Namespaced slash commands across every kit — /ceo:weekly, /cto:adr, /cfo:cash-flow, /sales:icp, /cmo:positioning, and twenty-five more.",
      "The Board orchestration layer introduced: a Chief of Staff that routes any request to the right executive(s) and synthesizes one coherent brief.",
      "Shared founder-log/ memory schema — every agent reads and writes to one workspace (priorities, metrics, decisions, weekly briefs, handoffs).",
      "New documentation pages: deep installation guide per platform, per-kit walkthroughs covering review, MCPs, cadence, and every skill.",
      "Per-kit dynamic Open Graph images — every documentation page gets a tailored social preview.",
    ],
  },
  {
    version: "Edition I · v0.1",
    date: "2026-04-18",
    status: "stable",
    highlights: [
      "Initial release of five executive kits: CEO, CTO, CFO, Sales, and CMO.",
      "Every kit ships in four formats: Claude (skills, subagents, slash commands), ChatGPT (Custom GPT configs), Cursor / Windsurf (rules), and platform-agnostic master prompts for any LLM.",
      "Full documentation site, customer-ready Stripe Checkout, automated GitHub repository invitations on purchase, and welcome emails.",
      "Edition I brand system applied across the product: Ink and Gold palette, Inter and JetBrains Mono typography, custom kit iconography.",
    ],
  },
];

const PLANNED: Release = {
  version: "v0.4 · upcoming",
  date: "targeting 2026-Q3",
  status: "upcoming",
  highlights: [
    "Five additional kits to broaden the catalog: DevOps, Cloud Architect, Financial Analyst, Product Manager, and Customer Success.",
    "Decision cards — shareable, LinkedIn-ready exports from /board:decision outputs.",
    "Refinements to subscription lifecycle handling (renewals, cancellations, pauses).",
    "Public case studies and behind-the-scenes content showing the kits in real-world use.",
    "Interactive /founder demo on the landing page so visitors can try the routing without installing.",
    "Additional Brand Kit assets, including the Edition crest and email header banner.",
  ],
};

const AUTOPILOT: Release = {
  version: "Autopilot · Q4 2026",
  date: "early access via waitlist",
  status: "upcoming",
  highlights: [
    "Agents move from assistants to operators — connected to MCPs (Stripe, Gmail, HubSpot, Apollo, Vercel, Sentry) with category- and cap-controlled spending authority.",
    "The CFO agent monitors all activity and flags anomalies; every action is logged and reviewable.",
    "Weekly autonomy audit delivered to the founder; a kill switch is always one click away.",
    "The first product tier in the agent-operated company category. Early-access details available to waitlist members.",
  ],
};

export default async function Changelog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl">
      <Breadcrumbs />
      <div className="eyebrow-plain mb-4">Resources</div>
      <H1>Changelog</H1>
      <Lead>
        Every release of CxOPack — what&apos;s new, what changed, and what&apos;s coming. Customers
        receive updates automatically by re-pulling their kit repositories.
      </Lead>

      <div className="mt-10 space-y-12">
        {RELEASES.map((r) => (
          <ReleaseCard key={r.version} release={r} />
        ))}
      </div>

      <H2 id="upcoming">Roadmap</H2>
      <P>Directional, not committed. Items move into a release as they stabilize.</P>
      <div className="mt-6 space-y-12">
        <ReleaseCard release={PLANNED} />
        <ReleaseCard release={AUTOPILOT} />
      </div>

      <div className="mt-12 flex justify-end">
        <EditOnGitHub />
      </div>

      <Pager />
    </div>
  );
}

function ReleaseCard({ release }: { release: Release }) {
  const statusLabel =
    release.status === "latest"
      ? "Latest"
      : release.status === "upcoming"
        ? "Upcoming"
        : release.status === "stable"
          ? "Stable"
          : null;

  return (
    <section className="relative border-l-2 border-[var(--color-border)] pl-6">
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-[var(--color-brand)] bg-[var(--color-bg)]" />
      <div className="mono flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
        <span className="text-[var(--color-fg)]">{release.version}</span>
        <span>·</span>
        <span>{release.date}</span>
        {statusLabel && (
          <span
            className={
              release.status === "latest"
                ? "ml-2 rounded-full border border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)] px-2 py-0.5 text-[10px] text-[var(--color-brand)]"
                : "ml-2 rounded-full border border-[var(--color-border-strong)] px-2 py-0.5 text-[10px] text-[var(--color-fg-dim)]"
            }
          >
            {statusLabel}
          </span>
        )}
      </div>
      <Ul>
        {release.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </Ul>
    </section>
  );
}
