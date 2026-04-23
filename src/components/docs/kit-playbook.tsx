"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlaybookStep } from "@/content/docs/types";

const TYPE_LABEL: Record<PlaybookStep["assetType"], string> = {
  skill: "Skill",
  subagent: "Subagent",
  command: "Command",
};

export function KitPlaybook({ steps }: { steps: PlaybookStep[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <ol className="mt-6 space-y-3">
      {steps.map((step, i) => {
        const isOpen = open === i;
        const isActive = isOpen;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={cn(
                "group flex w-full items-start gap-4 rounded-xl border px-5 py-4 text-left transition",
                isActive
                  ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)]"
                  : "border-[var(--color-border)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-strong)]",
              )}
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "mono mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                  isActive
                    ? "bg-[var(--color-brand)] text-[var(--color-ink-900)]"
                    : "bg-[var(--color-bg)] text-[var(--color-fg-muted)] group-hover:text-[var(--color-fg)]",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[15px] font-semibold text-[var(--color-fg)]">
                    {step.title}
                  </span>
                  <span className="text-xs text-[var(--color-fg-dim)]">· {step.time}</span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-[var(--color-fg-muted)]">
                  <span>Run</span>
                  <code className="rounded bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[12px] font-medium text-[var(--color-brand)]">
                    {step.asset}
                  </code>
                  <span className="rounded border border-[var(--color-border-strong)] px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-fg-dim)]">
                    {TYPE_LABEL[step.assetType]}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "mt-1 h-4 w-4 shrink-0 text-[var(--color-fg-dim)] transition-transform",
                  isOpen && "rotate-180 text-[var(--color-brand)]",
                )}
              />
            </button>

            {isOpen && (
              <div className="mt-2 ml-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5">
                <div className="grid gap-4 md:grid-cols-[auto,1fr]">
                  <div className="mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-fg-dim)] md:pt-0.5">
                    When
                  </div>
                  <div className="text-sm leading-6 text-[var(--color-fg-muted)]">{step.when}</div>

                  <div className="mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-fg-dim)] md:pt-0.5">
                    You type
                  </div>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3 font-mono text-xs leading-6 text-[var(--color-fg-muted)]">
                    {step.input}
                  </div>

                  <div className="mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-brand)] md:pt-0.5">
                    You get
                  </div>
                  <div className="rounded-lg border border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)] p-3 text-sm leading-6 text-[var(--color-fg-muted)]">
                    {step.output}
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setOpen(i + 1)}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-brand)] hover:text-[var(--color-brand-hover)]"
                  >
                    Next step <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
