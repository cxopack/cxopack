import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DocsProse({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("docs-prose", className)}>{children}</div>;
}

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
      {children}
    </h1>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-16 scroll-mt-20 border-b border-[var(--color-border)] pb-3 text-2xl font-semibold tracking-tight text-[var(--color-fg)]"
    >
      {children}
    </h2>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="mt-10 scroll-mt-20 text-lg font-semibold text-[var(--color-fg)]">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-7 text-[var(--color-fg-muted)]">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)]">{children}</p>
  );
}

export function Ul({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-fg-muted)] marker:text-[var(--color-fg-dim)]">
      {children}
    </ul>
  );
}

export function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-[var(--color-fg-muted)] marker:text-[var(--color-fg-dim)]">
      {children}
    </ol>
  );
}

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: "info" | "warn" | "success";
  title?: string;
  children: ReactNode;
}) {
  const tint =
    variant === "warn"
      ? "border-amber-500/30 bg-amber-500/5"
      : variant === "success"
        ? "border-emerald-500/30 bg-emerald-500/5"
        : "border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)]";
  return (
    <div className={cn("mt-6 rounded-lg border px-4 py-3 text-sm", tint)}>
      {title && <div className="mb-1 font-semibold text-[var(--color-fg)]">{title}</div>}
      <div className="leading-6 text-[var(--color-fg-muted)]">{children}</div>
    </div>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-[var(--color-bg-elevated)] px-1.5 py-0.5 font-mono text-[0.875em] text-[var(--color-brand)]">
      {children}
    </code>
  );
}

export function Pre({ children }: { children: ReactNode }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 font-mono text-sm leading-6 text-[var(--color-fg)]">
      {children}
    </pre>
  );
}
