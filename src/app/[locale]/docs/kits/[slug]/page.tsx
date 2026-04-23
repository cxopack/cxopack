import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { KIT_DOCS, KIT_DOCS_LIST, ALL_DOCS } from "@/content/docs";
import type { KitDoc } from "@/content/docs";
import { H1, H2, Lead, Callout } from "@/components/docs/prose";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { Pager } from "@/components/docs/pager";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
import { KitIcon } from "@/components/brand/kit-icon";
import { KitPlaybook } from "@/components/docs/kit-playbook";
import { KitMcps } from "@/components/docs/kit-mcps";
import { KitAssets } from "@/components/docs/kit-assets";

export async function generateStaticParams() {
  return ALL_DOCS.map((k) => ({ slug: k.slug }));
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

  const isBoard = (kit.slug as string) === "board";
  const kitIndex = KIT_DOCS_LIST.findIndex((k) => k.slug === kit.slug) + 1;

  return (
    <div className="max-w-3xl">
      <Breadcrumbs />
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]">
          {isBoard ? (
            <span className="mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
              Board
            </span>
          ) : (
            <KitIcon slug={kit.slug} className="h-8 w-8" />
          )}
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
            {isBoard ? "Orchestration layer" : `KIT · 0${kitIndex} / 05`}
          </div>
          <H1>{kit.title}</H1>
        </div>
      </div>
      <div className="text-[17px] text-[var(--color-fg-muted)]">{kit.tagline}</div>
      <Lead>{kit.heroSentence}</Lead>

      <PlaybookSection kit={kit} />
      <McpsSection kit={kit} />
      <AssetsSection kit={kit} />

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

function PlaybookSection({ kit }: { kit: KitDoc }) {
  return (
    <section>
      <H2 id="playbook">Playbook</H2>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
        Click a step to see exactly what to run and what you get back. Do them in order on your first
        week; re-run them as the cadence suggests after that.
      </p>
      <KitPlaybook steps={kit.playbook} />
    </section>
  );
}

function McpsSection({ kit }: { kit: KitDoc }) {
  return (
    <section>
      <H2 id="mcps">MCPs to connect</H2>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
        Optional. Pick one or two to start — the kit works without them, it just gets sharper with
        your real data.
      </p>
      <KitMcps mcps={kit.mcps} />
    </section>
  );
}

function AssetsSection({ kit }: { kit: KitDoc }) {
  return (
    <section>
      <H2 id="assets">All assets reference</H2>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
        Every skill, subagent, and command in this kit — click one for full detail, examples, and
        pitfalls.
      </p>
      <KitAssets skills={kit.skills} />
    </section>
  );
}
