import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { KIT_DOCS, KIT_DOCS_LIST } from "@/content/docs";
import type { KitDoc } from "@/content/docs";
import { H1, H2, H3, Lead, P, Ul, Ol, Pre, Callout } from "@/components/docs/prose";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { Pager } from "@/components/docs/pager";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
import { KitIcon } from "@/components/brand/kit-icon";
import { ExternalLink, Dot } from "lucide-react";

export async function generateStaticParams() {
  return KIT_DOCS_LIST.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kit = KIT_DOCS[slug];
  if (!kit) return {};
  return {
    title: `${kit.title} — CxOPack docs`,
    description: kit.tagline,
  };
}

export default async function KitDocPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const kit = KIT_DOCS[slug];
  if (!kit) notFound();

  const kitIndex = KIT_DOCS_LIST.findIndex((k) => k.slug === kit.slug) + 1;

  return (
    <div className="max-w-3xl">
      <Breadcrumbs />
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]">
          <KitIcon slug={kit.slug} className="h-8 w-8" />
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
            KIT · 0{kitIndex} / 05
          </div>
          <H1>{kit.title}</H1>
        </div>
      </div>
      <div className="text-[17px] text-[var(--color-fg-muted)]">{kit.tagline}</div>
      <Lead>{kit.heroSentence}</Lead>

      <ReviewSection kit={kit} />
      <McpSection kit={kit} />
      <CadenceSection kit={kit} />
      <SkillsSection kit={kit} />

      <Callout variant="success" title="Your first win">
        {kit.firstWin}
      </Callout>

      <div className="mt-12 flex justify-end">
        <EditOnGitHub />
      </div>

      <Pager />
    </div>
  );
}

function ReviewSection({ kit }: { kit: KitDoc }) {
  return (
    <section>
      <H2 id="review">1. Review, plan, brainstorm</H2>
      <P>{kit.review.intro}</P>

      <H3>Answer these first</H3>
      <Ol>
        {kit.review.questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </Ol>

      <H3>Brainstorm prompts</H3>
      <Ul>
        {kit.review.brainstormPrompts.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </Ul>
    </section>
  );
}

function McpSection({ kit }: { kit: KitDoc }) {
  return (
    <section>
      <H2 id="mcps">2. Connect MCPs and tools</H2>
      <P>
        Install these MCP servers (or their equivalent integrations) to make the {kit.title} 10× more useful. Not all are required — pick the top 1–2 to start.
      </P>

      <div className="mt-6 grid gap-3">
        {kit.mcps.map((mcp) => (
          <div key={mcp.name} className="card p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold text-[var(--color-fg)]">{mcp.name}</div>
                <p className="mt-1.5 text-sm leading-6 text-[var(--color-fg-muted)]">
                  {mcp.why}
                </p>
              </div>
              <a
                href={mcp.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-md border border-[var(--color-border-strong)] px-2.5 py-1 text-xs text-[var(--color-fg-muted)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                Docs <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            {mcp.install && <Pre>{mcp.install}</Pre>}
          </div>
        ))}
      </div>

      <Callout title="Don't have MCP set up yet?">
        MCP is the Model Context Protocol — Anthropic's standard for letting AI tools read from your software. Install guides:{" "}
        <a
          className="text-[var(--color-brand)] underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://modelcontextprotocol.io/quickstart/user"
        >
          Claude Code MCP setup
        </a>
        . ChatGPT uses Actions (OpenAPI) instead of MCP — same capabilities, different protocol.
      </Callout>
    </section>
  );
}

function CadenceSection({ kit }: { kit: KitDoc }) {
  const groups: { label: string; items?: typeof kit.cadence.weekly }[] = [
    { label: "Daily", items: kit.cadence.daily },
    { label: "Weekly", items: kit.cadence.weekly },
    { label: "Monthly", items: kit.cadence.monthly },
    { label: "Ad-hoc", items: kit.cadence.adhoc },
  ];

  return (
    <section>
      <H2 id="cadence">3. Define your cadence</H2>
      <P>
        The {kit.title} works because you run it consistently. Block the weekly ritual in your calendar now — even 15 minutes, non-negotiable, beats 2 hours every 3 months.
      </P>

      <div className="mt-6 space-y-8">
        {groups
          .filter((g) => g.items && g.items.length > 0)
          .map((g) => (
            <div key={g.label}>
              <H3>{g.label}</H3>
              <ul className="mt-4 space-y-4 border-l border-[var(--color-border)] pl-5">
                {g.items!.map((item, i) => (
                  <li key={i} className="relative">
                    <Dot className="absolute -left-[1.55rem] top-0.5 h-4 w-4 text-[var(--color-brand)]" />
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                      <span className="font-medium text-[var(--color-fg)]">{item.when}</span>
                      <span className="text-[var(--color-fg-dim)]">·</span>
                      <span className="text-[var(--color-fg-dim)]">{item.duration}</span>
                      {item.skill && (
                        <span className="inline-flex items-center gap-1 rounded bg-[var(--color-brand-soft)] px-2 py-0.5 font-mono text-xs text-[var(--color-brand)]">
                          {item.skill}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-[var(--color-fg-muted)]">
                      {item.action}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}

function SkillsSection({ kit }: { kit: KitDoc }) {
  const typeLabels = {
    skill: "Skill",
    subagent: "Subagent",
    command: "Slash command",
  };

  return (
    <section>
      <H2 id="skills">4. Use the skills</H2>
      <P>
        Every asset in the {kit.title} — with when to trigger it, the exact step-by-step, an example in/out, and the common pitfalls. Read them once; refer back as you run the cadence.
      </P>

      <div className="mt-6 space-y-10">
        {kit.skills.map((skill) => (
          <article
            key={skill.name}
            id={`skill-${skill.name}`}
            className="scroll-mt-20 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
          >
            <header className="flex flex-wrap items-center gap-3 border-b border-[var(--color-border)] pb-4">
              <code className="font-mono text-lg font-semibold text-[var(--color-brand)]">
                {skill.name}
              </code>
              <span className="rounded-full border border-[var(--color-border-strong)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                {typeLabels[skill.type]}
              </span>
            </header>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-dim)]">
                  Trigger
                </div>
                <div className="mt-1.5 text-sm leading-6 text-[var(--color-fg-muted)]">
                  {skill.trigger}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-dim)]">
                  When to use
                </div>
                <div className="mt-1.5 text-sm leading-6 text-[var(--color-fg-muted)]">
                  {skill.when}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-dim)]">
                Step-by-step
              </div>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-fg-muted)] marker:text-[var(--color-fg-dim)]">
                {skill.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-dim)]">
                  Example input
                </div>
                <div className="mt-2 font-mono text-xs leading-6 text-[var(--color-fg-muted)]">
                  {skill.example.input}
                </div>
              </div>
              <div className="rounded-lg border border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)] p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                  Example output
                </div>
                <div className="mt-2 font-mono text-xs leading-6 text-[var(--color-fg-muted)]">
                  {skill.example.output}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-dim)]">
                Pitfalls
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-fg-muted)] marker:text-[var(--color-fg-dim)]">
                {skill.pitfalls.map((pit, i) => (
                  <li key={i}>{pit}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
