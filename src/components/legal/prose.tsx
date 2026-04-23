import type { ReactNode } from "react";

export function LegalHeader({
  title,
  lastUpdated,
  summary,
}: {
  title: string;
  lastUpdated: string;
  summary?: string;
}) {
  return (
    <header className="mb-10">
      <div className="mono mb-3 text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
        Legal · Last updated {lastUpdated}
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-[var(--color-fg)]">{title}</h1>
      {summary && (
        <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-fg-muted)]">
          {summary}
        </p>
      )}
    </header>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2
        id={id}
        className="mb-3 scroll-mt-24 border-b border-[var(--color-border)] pb-2 text-xl font-semibold text-[var(--color-fg)]"
      >
        {title}
      </h2>
      <div className="space-y-4 leading-7 text-[var(--color-fg-muted)]">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-[var(--color-fg-dim)]">{children}</ul>
  );
}

export function Contact() {
  return (
    <p className="text-sm leading-6 text-[var(--color-fg-muted)]">
      For any question related to this document, contact{" "}
      <a
        href="mailto:hello@cxopack.com"
        className="text-[var(--color-brand)] underline decoration-dotted underline-offset-4 hover:text-[var(--color-brand-hover)]"
      >
        hello@cxopack.com
      </a>
      .
    </p>
  );
}
