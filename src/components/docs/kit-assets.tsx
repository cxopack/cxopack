"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SkillDoc } from "@/content/docs/types";

const TYPE_LABEL: Record<SkillDoc["type"], string> = {
  skill: "Skill",
  subagent: "Subagent",
  command: "Command",
};

export function KitAssets({ skills }: { skills: SkillDoc[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="mt-4 divide-y divide-[var(--color-border)] rounded-xl border border-[var(--color-border)]">
      {skills.map((skill) => {
        const isOpen = open === skill.name;
        return (
          <div key={skill.name} id={`skill-${skill.name}`} className="scroll-mt-20">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : skill.name)}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-[var(--color-bg-elevated)]"
              aria-expanded={isOpen}
            >
              <code className="font-mono text-sm font-semibold text-[var(--color-brand)]">
                {skill.name}
              </code>
              <span className="rounded border border-[var(--color-border-strong)] px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-fg-dim)]">
                {TYPE_LABEL[skill.type]}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm text-[var(--color-fg-muted)]">
                {skill.when}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[var(--color-fg-dim)] transition-transform",
                  isOpen && "rotate-180 text-[var(--color-brand)]",
                )}
              />
            </button>

            {isOpen && (
              <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Trigger">{skill.trigger}</Field>
                  <Field label="When to use">{skill.when}</Field>
                </div>

                <Field label="Steps" className="mt-5">
                  <ol className="mt-1 list-decimal space-y-1.5 pl-5 marker:text-[var(--color-fg-dim)]">
                    {skill.steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                </Field>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
                    <div className="mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-fg-dim)]">
                      Example input
                    </div>
                    <div className="mt-1.5 font-mono text-xs leading-6 text-[var(--color-fg-muted)]">
                      {skill.example.input}
                    </div>
                  </div>
                  <div className="rounded-lg border border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)] p-3">
                    <div className="mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-brand)]">
                      Example output
                    </div>
                    <div className="mt-1.5 font-mono text-xs leading-6 text-[var(--color-fg-muted)]">
                      {skill.example.output}
                    </div>
                  </div>
                </div>

                <Field label="Pitfalls" className="mt-5">
                  <ul className="mt-1 list-disc space-y-1.5 pl-5 marker:text-[var(--color-fg-dim)]">
                    {skill.pitfalls.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </Field>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-fg-dim)]">
        {label}
      </div>
      <div className="mt-1.5 text-sm leading-6 text-[var(--color-fg-muted)]">{children}</div>
    </div>
  );
}
