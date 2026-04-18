import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Bot, MessageSquare, Code2, FileText } from "lucide-react";
import { KIT_DOCS_LIST } from "@/content/docs";
import { H1, H2, Lead, P } from "@/components/docs/prose";

export const metadata = {
  title: "Docs — CxOPack",
  description:
    "How to review your business, connect MCPs, define your cadence, and use the 16 skills across the 5 CxOPack kits.",
};

const PLATFORMS = [
  { icon: Bot, title: "Claude Code / Claude Desktop", desc: "Skills auto-load from .claude/skills/. Trigger by natural language or slash commands." },
  { icon: MessageSquare, title: "ChatGPT", desc: "Each kit ships as a Custom GPT config — paste instructions once, pick a workflow via conversation starter." },
  { icon: Code2, title: "Cursor / Windsurf", desc: "Drop .cursor/rules/*.mdc files in your project. Rules auto-enforce while you code." },
  { icon: FileText, title: "Any LLM", desc: "prompts/main.md is platform-agnostic. Paste into Gemini, Mistral, DeepSeek — same workflows, any tool." },
];

export default async function DocsHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl">
      <div className="eyebrow mb-4">Docs</div>
      <H1>Run your startup with an AI C-suite.</H1>
      <Lead>
        CxOPack gives you five executive roles — CEO, CTO, CFO, Sales, CMO — as skills, subagents, and Custom GPTs you install in whatever AI tool you already use. This documentation covers how to install, how to wire up your MCPs, which skill to run when, and how to build a weekly rhythm that actually makes you ship.
      </Lead>

      <H2 id="structure">How the docs are structured</H2>
      <P>
        Everything is organized around the four-step flow every founder runs when adopting the kit:
      </P>
      <ol className="mt-5 space-y-4 text-[var(--color-fg-muted)]">
        {[
          { n: 1, t: "Review, plan, brainstorm", d: "Audit your current state as that executive. Write down answers to the prompts before installing anything — the kit is only as good as how precisely you know what you need." },
          { n: 2, t: "Connect MCPs and tools", d: "Hook up the data sources that make each skill 10× more useful (Notion for CEO, Stripe for CFO, GitHub for CTO, etc.). Skill list per kit." },
          { n: 3, t: "Define your cadence", d: "Daily, weekly, monthly rituals. The kit works because you run it consistently — not because you ask it questions once." },
          { n: 4, t: "Use the skills", d: "Every skill: when to trigger, what it asks, what it outputs, what the common pitfalls are." },
        ].map((s) => (
          <li key={s.n} className="flex gap-4">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-sm font-semibold text-[var(--color-brand)]">
              {s.n}
            </div>
            <div>
              <div className="font-medium text-[var(--color-fg)]">{s.t}</div>
              <div className="mt-1 text-sm leading-6">{s.d}</div>
            </div>
          </li>
        ))}
      </ol>

      <H2 id="platforms">Works in any AI tool</H2>
      <P>
        Every kit ships in four formats. Pick the platform you already pay for — one is enough.
      </P>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PLATFORMS.map((p) => (
          <div key={p.title} className="card p-5">
            <p.icon className="h-5 w-5 text-[var(--color-brand)]" />
            <div className="mt-3 font-semibold text-[var(--color-fg)]">{p.title}</div>
            <div className="mt-1 text-sm leading-6 text-[var(--color-fg-muted)]">{p.desc}</div>
          </div>
        ))}
      </div>

      <H2 id="kits">The five kits</H2>
      <P>Click any kit for the full walkthrough. Each page covers review, MCP setup, cadence, and every skill inside.</P>
      <div className="mt-6 grid gap-3">
        {KIT_DOCS_LIST.map((k) => (
          <Link
            key={k.slug}
            href={`/docs/kits/${k.slug}`}
            className="card group flex items-center justify-between p-5 transition hover:border-[var(--color-brand)]"
          >
            <div>
              <div className="font-semibold text-[var(--color-fg)]">{k.title}</div>
              <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{k.tagline}</div>
            </div>
            <ArrowRight className="h-5 w-5 text-[var(--color-fg-dim)] transition group-hover:translate-x-1 group-hover:text-[var(--color-brand)]" />
          </Link>
        ))}
      </div>

      <H2 id="quickstart">Start here</H2>
      <P>
        New to CxOPack? The{" "}
        <Link href="/docs/quickstart" className="text-[var(--color-brand)] underline">
          Quickstart
        </Link>{" "}
        gets you from zero to your first workflow in 5 minutes.
      </P>
    </div>
  );
}
