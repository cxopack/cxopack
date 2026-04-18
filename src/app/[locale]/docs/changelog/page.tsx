import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { Pager } from "@/components/docs/pager";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
import { H1, H2, Lead, P, Ul } from "@/components/docs/prose";

export const metadata = {
  title: "Changelog — CxOPack",
  description: "Version history and release notes for CxOPack.",
};

type Release = {
  version: string;
  date: string;
  status?: "latest" | "stable" | "upcoming";
  highlights: string[];
};

const RELEASES: Release[] = [
  {
    version: "v0.3.0 — Edition II",
    date: "2026-04-19",
    status: "latest",
    highlights: [
      "Repricing: Solo Kit €49 lifetime · All-Access Pass €149/yr · Launch 100 €99/yr forever (first 100).",
      "All-Access Pass replaces the Full Pack — you get every current and future kit while subscribed (the catalog flywheel).",
      "Sam: the Chief of Staff now has a name, a persona, and a signature line on every brief.",
      "New landing section: 'A week in the life' — visual timeline of the daily/weekly rituals.",
      "Autopilot teaser: agents-with-budgets product previewed for Q4 2026; waitlist live.",
      "BOARD repo (v0.2.0) updated to reference Sam everywhere.",
    ],
  },
  {
    version: "v0.2.0",
    date: "2026-04-19",
    status: "stable",
    highlights: [
      "16 missing skill files written — 30 standalone skills total, matching the marketed 6-per-kit count.",
      "30 namespaced commands: /ceo:* /cto:* /cfo:* /sales:* /cmo:*",
      "The Board orchestration kit shipped: chief-of-staff + 5 persona subagents + /founder + /board:weekly /decision /brief /handoff",
      "Shared founder-log/ memory schema across all agents.",
      "Per-kit dynamic OG images for /docs/kits/<slug>.",
      "Detailed installation page at /docs/installation (per platform).",
      "CxOPack installed into Prezto for dogfooding.",
    ],
  },
  {
    version: "v0.1.0",
    date: "2026-04-18",
    status: "stable",
    highlights: [
      "Initial release: CEO, CTO, CFO, Sales, CMO kits published.",
      "13 standalone Claude skills, 2 subagents, 1 slash command, 5 ChatGPT Custom GPT configs, 5 Cursor rule files.",
      "Landing page, full docs site, Stripe Checkout live, post-payment webhook (DB + GitHub invite + email).",
      "Brand Kit Edition I applied: Ink/Gold/Ivory palette, Inter + JetBrains Mono, 4-bar logo, 5 kit icons.",
    ],
  },
];

const PLANNED: Release = {
  version: "v0.4.0",
  date: "targeting 2026-Q3",
  status: "upcoming",
  highlights: [
    "5 new kits to grow All-Access value: DevOps, Cloud Architect, Financial Analyst, Product Manager, Customer Success.",
    "Decision cards: shareable images exported from /board:decision outputs (LinkedIn-ready).",
    "Subscription lifecycle webhook handling (renewal, cancellation, refund) for All-Access.",
    "Public 'How I shipped Prezto with CxOPack' case study + weekly behind-the-scenes posts.",
    "Interactive /founder demo widget on the landing — try the routing without installing.",
    "Hexagon All-Access crest + email header banner from the Brand Kit.",
  ],
};

const AUTOPILOT: Release = {
  version: "v1.0 — Autopilot",
  date: "targeting 2026-Q4",
  status: "upcoming",
  highlights: [
    "Agents with real budgets connected to MCPs (Stripe, Gmail, HubSpot, Apollo, Vercel, Sentry).",
    "Each agent gets a virtual card with category + cap controls. CFO agent watches everyone's spend.",
    "Weekly autonomy audit to the founder — every action logged, anomalies flagged, kill switch always available.",
    "Pricing: €499/mo base + agent-spend credits + usage. The first 'agent-operated company' product tier.",
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
        Every release. What shipped, when, why. Kits auto-update when you re-pull the repos — no
        re-purchase needed.
      </Lead>

      <div className="mt-10 space-y-12">
        {RELEASES.map((r) => (
          <ReleaseCard key={r.version} release={r} />
        ))}
      </div>

      <H2 id="upcoming">Upcoming</H2>
      <P>Roadmap, not a promise. Pulled into live releases as workflows stabilize.</P>
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
