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
    version: "v0.1.0",
    date: "2026-04-18",
    status: "latest",
    highlights: [
      "Initial Edition I release: CEO, CTO, CFO, Sales, CMO kits published.",
      "13 standalone Claude skills, 2 subagents, 1 slash command, 5 ChatGPT Custom GPT configs, 5 Cursor rule files, 5 platform-agnostic master prompts.",
      "Landing page, full docs site (overview, quickstart, 5 kit walkthroughs, support).",
      "Stripe Checkout live (1 kit / Full Pack / Founding 100 / Founder's Club monthly + yearly).",
      "Post-payment webhook: Supabase order row, GitHub auto-invite, Resend welcome email.",
      "Brand Kit Edition I applied: Ink/Gold/Ivory palette, Inter + JetBrains Mono, 4-bar logo, 5 kit icons.",
    ],
  },
];

const PLANNED: Release = {
  version: "v0.2.0",
  date: "targeting 2026-05",
  status: "upcoming",
  highlights: [
    "Weekly Board Meeting meta-workflow (runs all 5 kits in sequence for Monday review).",
    "Founder Mode slash command (auto-routes to the right C-suite agent based on task intent).",
    "17 additional standalone skills to reach 6 per kit (parity with landing-page claims).",
    "Startup-stage templates: pre-seed SaaS, agency, marketplace variants.",
    "Subscription lifecycle webhook handling (renewal, cancellation, refund).",
    "Hexagon Full Pack crest + email header banner from the Brand Kit.",
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
      <div className="mt-6">
        <ReleaseCard release={PLANNED} />
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
