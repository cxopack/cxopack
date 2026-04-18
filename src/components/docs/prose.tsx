import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

export function DocsProse({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("docs-prose", className)}>{children}</div>;
}

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-[var(--color-fg)] md:text-[42px]">
      {children}
    </h1>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="group relative mt-16 scroll-mt-20 border-b border-[var(--color-border)] pb-3 text-[26px] font-semibold tracking-tight text-[var(--color-fg)]"
    >
      {id && (
        <a
          href={`#${id}`}
          aria-label={`Link to ${id}`}
          className="absolute -left-5 top-[18px] opacity-0 transition group-hover:opacity-100 text-[var(--color-fg-dim)] hover:text-[var(--color-brand)]"
        >
          #
        </a>
      )}
      {children}
    </h2>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="group relative mt-10 scroll-mt-20 text-lg font-semibold text-[var(--color-fg)]"
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-7 text-[var(--color-fg-muted)]">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-fg-muted)]">{children}</p>
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

type CalloutVariant = "info" | "warn" | "success" | "tip";

const CALLOUT_STYLES: Record<CalloutVariant, { tint: string; icon: typeof Info; iconColor: string }> = {
  info: {
    tint: "border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)]",
    icon: Info,
    iconColor: "text-[var(--color-brand)]",
  },
  tip: {
    tint: "border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)]",
    icon: Lightbulb,
    iconColor: "text-[var(--color-brand)]",
  },
  warn: {
    tint: "border-amber-500/30 bg-amber-500/[0.06]",
    icon: AlertTriangle,
    iconColor: "text-amber-400",
  },
  success: {
    tint: "border-emerald-500/30 bg-emerald-500/[0.06]",
    icon: CheckCircle2,
    iconColor: "text-emerald-400",
  },
};

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}) {
  const style = CALLOUT_STYLES[variant];
  const Icon = style.icon;
  return (
    <div className={cn("mt-6 flex gap-3 rounded-lg border px-4 py-3.5 text-sm", style.tint)}>
      <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", style.iconColor)} />
      <div className="min-w-0">
        {title && <div className="mb-1 font-semibold text-[var(--color-fg)]">{title}</div>}
        <div className="leading-6 text-[var(--color-fg-muted)]">{children}</div>
      </div>
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

export { CodeBlock as Pre } from "./copy-button";
