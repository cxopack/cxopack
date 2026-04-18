import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Bot, MessageSquare, Code2, FileText, Rocket, Wrench, Clock, Compass, LifeBuoy, Github } from "lucide-react";
import { KIT_DOCS_LIST } from "@/content/docs";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { H1, H2, Lead, P } from "@/components/docs/prose";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
import { KitIcon } from "@/components/brand/kit-icon";

export const metadata = {
  title: "Docs — CxOPack",
  description:
    "How to review your business, connect MCPs, define your cadence, and use the 16 skills across the 5 CxOPack kits.",
};

const PLATFORMS = [
  { icon: Bot, title: "Claude Code", desc: "Skills auto-load from .claude/skills/." },
  { icon: MessageSquare, title: "ChatGPT", desc: "Paste Custom GPT config, done." },
  { icon: Code2, title: "Cursor / Windsurf", desc: ".cursor/rules/*.mdc files." },
  { icon: FileText, title: "Any LLM", desc: "prompts/main.md — copy-paste anywhere." },
];

const QUICK_CARDS = [
  {
    icon: Rocket,
    title: "Quickstart",
    desc: "Zero to first workflow in 5 minutes.",
    href: "/docs/quickstart" as const,
  },
  {
    icon: Compass,
    title: "Browse the 5 kits",
    desc: "Per-role walkthroughs — review, MCPs, cadence, skills.",
    href: "/docs/kits/ceo" as const,
  },
  {
    icon: Clock,
    title: "Changelog",
    desc: "Every release. What shipped, when, why.",
    href: "/docs/changelog" as const,
  },
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Help channels, refunds, response time.",
    href: "/docs/support" as const,
  },
];

export default async function DocsHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl">
      <Breadcrumbs />
      <div className="eyebrow-plain mb-4">Documentation · Edition I</div>
      <H1>Run your startup with an AI C-suite.</H1>
      <Lead>
        CxOPack gives you five executive roles — CEO, CTO, CFO, Sales, CMO — as skills,
        subagents, and Custom GPTs you install in whatever AI tool you already use. This
        documentation covers how to install, which MCPs to wire up, which skill to run when, and
        how to build a weekly rhythm that actually makes you ship.
      </Lead>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {QUICK_CARDS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="card group flex items-start gap-3 p-5 transition hover:border-[var(--color-brand)]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
              <c.icon className="h-4 w-4 text-[var(--color-brand)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 font-semibold text-[var(--color-fg)]">
                {c.title}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </div>
              <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{c.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      <H2 id="how-it-works">How the docs are structured</H2>
      <P>
        Every kit walkthrough follows the same four-step flow:
      </P>
      <ol className="mt-5 space-y-4 text-[var(--color-fg-muted)]">
        {[
          {
            n: 1,
            t: "Review, plan, brainstorm",
            d: "Audit your current state as that executive. Answer the prompts before installing anything — the kit is only as good as how precisely you know what you need.",
          },
          {
            n: 2,
            t: "Connect MCPs and tools",
            d: "Hook up the data sources that make each skill 10× more useful. Real MCP servers and integrations listed per kit.",
          },
          {
            n: 3,
            t: "Define your cadence",
            d: "Daily, weekly, monthly rituals. The kit works because you run it consistently.",
          },
          {
            n: 4,
            t: "Use the skills",
            d: "Every skill with trigger, steps, example input/output, and pitfalls.",
          },
        ].map((s) => (
          <li key={s.n} className="flex gap-4">
            <div className="mono mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)] text-xs font-semibold text-[var(--color-brand)]">
              0{s.n}
            </div>
            <div>
              <div className="font-medium text-[var(--color-fg)]">{s.t}</div>
              <div className="mt-1 text-sm leading-6">{s.d}</div>
            </div>
          </li>
        ))}
      </ol>

      <H2 id="platforms">Works in any AI tool</H2>
      <P>Every kit ships in four formats. One is enough — pick the one you already pay for.</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {PLATFORMS.map((p) => (
          <div key={p.title} className="card p-4">
            <p.icon className="h-5 w-5 text-[var(--color-brand)]" />
            <div className="mt-3 font-semibold text-[var(--color-fg)]">{p.title}</div>
            <div className="mt-1 text-sm leading-6 text-[var(--color-fg-muted)]">{p.desc}</div>
          </div>
        ))}
      </div>

      <H2 id="kits">The five kits</H2>
      <P>
        Click any kit for the full walkthrough. Each page covers review, MCP setup, cadence, and
        every skill inside.
      </P>
      <div className="mt-6 grid gap-3">
        {KIT_DOCS_LIST.map((k, i) => (
          <Link
            key={k.slug}
            href={`/docs/kits/${k.slug}`}
            className="card group flex items-center gap-4 p-5 transition hover:border-[var(--color-brand)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
              <KitIcon slug={k.slug} className="h-7 w-7" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
                KIT · 0{i + 1} / 05
              </div>
              <div className="font-semibold text-[var(--color-fg)]">{k.title}</div>
              <div className="mt-0.5 text-sm text-[var(--color-fg-muted)]">{k.tagline}</div>
            </div>
            <ArrowRight className="h-5 w-5 text-[var(--color-fg-dim)] transition group-hover:translate-x-1 group-hover:text-[var(--color-brand)]" />
          </Link>
        ))}
      </div>

      <H2 id="community">Community & support</H2>
      <P>
        Questions, feature requests, or anything else —{" "}
        <Link href="/docs/support" className="text-[var(--color-brand)] underline">
          see the Support page
        </Link>
        . Source code lives on GitHub:{" "}
        <a
          href="https://github.com/cxopack/cxopack"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[var(--color-brand)] underline"
        >
          <Github className="h-3.5 w-3.5" />
          cxopack/cxopack
        </a>
        .
      </P>

      <div className="mt-12 flex justify-end">
        <EditOnGitHub />
      </div>
    </div>
  );
}
