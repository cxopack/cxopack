"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Loader2, Sparkles, Terminal } from "lucide-react";
import { KitIcon } from "@/components/brand/kit-icon";
import type { KitSlug } from "@/config/kits";
import { cn } from "@/lib/utils";

type PersonaTake = {
  slug: KitSlug;
  label: string;
  bullet: string;
};

type Scenario = {
  id: string;
  prompt: string;
  routing: KitSlug[];
  takes: PersonaTake[];
  synthesis: string;
  signature: "Decide today." | "Read this twice." | "Sleep on it then ship Monday.";
};

const SCENARIOS: Scenario[] = [
  {
    id: "raise-prices",
    prompt: "Should I raise prices on my SaaS?",
    routing: ["ceo", "cfo", "sales", "cmo"],
    takes: [
      {
        slug: "ceo",
        label: "CEO",
        bullet: "Pricing is the highest-leverage change you can make. Do it — but with a guardrail and a rollback plan in a document. Don't go silent.",
      },
      {
        slug: "cfo",
        label: "CFO",
        bullet: "Hypothesis: conversion drops 10–15%, ARPU rises 50%, revenue-per-visitor rises ~35%. Kill if conversion drops >25% for 2 weeks.",
      },
      {
        slug: "sales",
        label: "Sales",
        bullet: "Most demos already treat your price as low. Raise it before next cohort. Grandfather existing customers; it protects retention.",
      },
      {
        slug: "cmo",
        label: "CMO",
        bullet: "Pair the raise with one new positioning proof point. Silent price bumps read as greedy; bundled with a narrative they read as maturity.",
      },
    ],
    synthesis:
      "Raise prices. Grandfather existing customers for 30 days with written notice; charge new signups the new price starting Monday. Pair the change with one new proof point on the pricing page. Roll back only if new-customer conversion drops >25% for two consecutive weeks.",
    signature: "Decide today.",
  },
  {
    id: "hire-engineer",
    prompt: "I'm thinking about hiring my first engineer.",
    routing: ["ceo", "cto", "cfo"],
    takes: [
      {
        slug: "ceo",
        label: "CEO",
        bullet: "First hire defines the next 18 months of cadence. Only hire if a priority is breaking — not because hiring feels like progress.",
      },
      {
        slug: "cto",
        label: "CTO",
        bullet: "Define the role by the 3 bottlenecks slowing shipping this quarter. Not 'generalist full-stack.' If you can't name 3, you don't need the hire.",
      },
      {
        slug: "cfo",
        label: "CFO",
        bullet: "At €5k/mo fully loaded, Base-scenario runway drops from 14 → 9 months. Below the fundraise-prep threshold. Start investor conversations before offer.",
      },
    ],
    synthesis:
      "Pause the hire for 2 weeks. Name the 3 bottlenecks first, in writing. Model runway impact in the cash flow. If Base runway drops below 9 months, start fundraise conversations before sending the offer. If the bottlenecks are around shipping speed specifically, consider a senior contractor for 3 months as a lower-risk test.",
    signature: "Read this twice.",
  },
  {
    id: "launch-next-month",
    prompt: "How do I launch next month?",
    routing: ["ceo", "cmo", "sales", "cto"],
    takes: [
      {
        slug: "ceo",
        label: "CEO",
        bullet: "Define what 'launched' means in one sentence with a metric. Otherwise the launch stretches into a quarter. Set a kill date.",
      },
      {
        slug: "cmo",
        label: "CMO",
        bullet: "2 weeks before launch: ship 7 LinkedIn posts + 1 SEO page building the narrative. Launch day is the peak, not the start.",
      },
      {
        slug: "sales",
        label: "Sales",
        bullet: "Pre-commit 10 prospects with 'would you buy if launched Tuesday?' before writing a single line of launch copy.",
      },
      {
        slug: "cto",
        label: "CTO",
        bullet: "Feature-freeze 10 days before launch. No new features, only polish + observability. Set up error alerts that page you.",
      },
    ],
    synthesis:
      "Lock the launch definition in writing today. Start the narrative arc this week via 7 LinkedIn posts. Pre-qualify 10 prospects before the launch post goes live — if fewer than 3 say yes, delay by 2 weeks. Feature-freeze 10 days out. Launch Tuesday 10am Pacific.",
    signature: "Sleep on it then ship Monday.",
  },
];

type Step = "idle" | "routing" | "takes" | "synthesis" | "done";

const PERSONA_LABEL: Record<KitSlug, string> = {
  ceo: "CEO",
  cto: "CTO",
  cfo: "CFO",
  sales: "Sales",
  cmo: "CMO",
};

export function FounderDemo() {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [step, setStep] = useState<Step>("idle");
  const [customInput, setCustomInput] = useState("");
  const [revealedTakes, setRevealedTakes] = useState(0);
  const [showCustomCta, setShowCustomCta] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step === "idle") return;
    const timers: NodeJS.Timeout[] = [];
    if (step === "routing") {
      timers.push(setTimeout(() => setStep("takes"), 1100));
    } else if (step === "takes" && scenario) {
      for (let i = 0; i <= scenario.takes.length; i++) {
        timers.push(setTimeout(() => setRevealedTakes(i), 550 * i));
      }
      timers.push(
        setTimeout(() => setStep("synthesis"), 550 * scenario.takes.length + 300)
      );
    } else if (step === "synthesis") {
      timers.push(setTimeout(() => setStep("done"), 900));
    }
    return () => timers.forEach(clearTimeout);
  }, [step, scenario]);

  const run = (s: Scenario) => {
    setScenario(s);
    setRevealedTakes(0);
    setShowCustomCta(false);
    setStep("routing");
  };

  const runCustom = () => {
    if (customInput.trim().length < 8) return;
    setScenario(null);
    setShowCustomCta(true);
    setStep("routing");
    setTimeout(() => setStep("done"), 1200);
  };

  const reset = () => {
    setScenario(null);
    setCustomInput("");
    setShowCustomCta(false);
    setRevealedTakes(0);
    setStep("idle");
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden border-y border-[var(--color-border)] py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] grid-fade"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 radial-gold" />

      <div className="container-narrow relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">
            <Sparkles className="h-3 w-3" />
            Try it live
          </div>
          <h2 className="headline-2 text-balance">
            Type anything. Watch <span className="italic text-[var(--color-brand)]">Sam</span> route it.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            This is what happens inside CxOPack when you type <span className="mono">/founder</span>.
            Sam (the Chief of Staff) decides which executives should weigh in, calls them, and
            synthesizes one answer.
          </p>
        </div>

        <div
          ref={containerRef}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-[0_0_60px_-20px_var(--color-brand)]"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-5 py-3">
            <Terminal className="h-4 w-4 text-[var(--color-fg-dim)]" />
            <span className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
              /founder — interactive demo
            </span>
            {step !== "idle" && (
              <button
                onClick={reset}
                className="mono ml-auto text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)] hover:text-[var(--color-brand)]"
              >
                Reset ↺
              </button>
            )}
          </div>

          {/* Chat window */}
          <div className="p-6 md:p-8">
            {step === "idle" ? (
              <IdleView
                onPick={run}
                customInput={customInput}
                setCustomInput={setCustomInput}
                runCustom={runCustom}
              />
            ) : (
              <PlayingView
                scenario={scenario}
                step={step}
                revealedTakes={revealedTakes}
                customInput={customInput}
                showCustomCta={showCustomCta}
              />
            )}
          </div>
        </div>

        <p className="mono mt-8 text-center text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
          No install · No signup · The real thing streams in ~30 seconds inside Claude Code
        </p>
      </div>
    </section>
  );
}

function IdleView({
  onPick,
  customInput,
  setCustomInput,
  runCustom,
}: {
  onPick: (s: Scenario) => void;
  customInput: string;
  setCustomInput: (v: string) => void;
  runCustom: () => void;
}) {
  return (
    <div className="space-y-5">
      {/* Sam prompt */}
      <div className="flex gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-brand)] bg-[var(--color-bg)] text-[var(--color-brand)]">
          <span className="mono text-[11px] font-semibold">Sam</span>
        </div>
        <div className="flex-1">
          <div className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
            Chief of Staff
          </div>
          <p className="mt-1 text-sm leading-6 text-[var(--color-fg)]">
            What's on your mind? I'll route it to whichever executives should weigh in.
          </p>
        </div>
      </div>

      {/* Quick picks */}
      <div className="grid gap-2 pl-12">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => onPick(s)}
            className="group flex items-center justify-between rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-4 py-3 text-left text-sm transition hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)]"
          >
            <span className="text-[var(--color-fg)] group-hover:text-[var(--color-brand)]">
              "{s.prompt}"
            </span>
            <ArrowRight className="h-4 w-4 text-[var(--color-fg-dim)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" />
          </button>
        ))}
      </div>

      {/* Custom input */}
      <div className="relative pl-12">
        <div className="mono mb-2 text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
          Or type your own
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            runCustom();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            placeholder="e.g. Should I build a referral program?"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            className="flex-1 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-fg-dim)] focus:border-[var(--color-brand)]"
          />
          <button
            type="submit"
            disabled={customInput.trim().length < 8}
            className="btn-primary shrink-0 disabled:opacity-40"
          >
            Route <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

function PlayingView({
  scenario,
  step,
  revealedTakes,
  customInput,
  showCustomCta,
}: {
  scenario: Scenario | null;
  step: Step;
  revealedTakes: number;
  customInput: string;
  showCustomCta: boolean;
}) {
  const userMessage = scenario?.prompt ?? customInput;
  const routing = scenario?.routing ?? [];

  return (
    <div className="space-y-5">
      {/* Founder message */}
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-fg)]">
          {userMessage}
        </div>
      </div>

      {/* Sam routing */}
      <div className="flex gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-brand)] bg-[var(--color-bg)] text-[var(--color-brand)]">
          <span className="mono text-[11px] font-semibold">Sam</span>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)]">
            {step === "routing" ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin text-[var(--color-brand)]" />
                <span>Reading priorities and metrics…</span>
              </>
            ) : (
              <>
                <Check className="h-3.5 w-3.5 text-[var(--color-brand)]" />
                <span>
                  Routed to{" "}
                  {routing.length > 0 ? (
                    <>
                      {routing.map((r, i) => (
                        <span key={r}>
                          <span className="text-[var(--color-fg)]">{PERSONA_LABEL[r]}</span>
                          {i < routing.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      .
                    </>
                  ) : (
                    "the board."
                  )}
                </span>
              </>
            )}
          </div>

          {/* Persona takes */}
          {scenario && step !== "routing" && (
            <div className="space-y-3 pt-2">
              {scenario.takes.slice(0, revealedTakes).map((t) => (
                <PersonaTakeCard key={t.slug} take={t} />
              ))}
            </div>
          )}

          {/* Synthesis */}
          {scenario && (step === "synthesis" || step === "done") && (
            <div className="mt-5 rounded-xl border border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)] p-5">
              <div className="mono mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-brand)]">
                <Check className="h-3 w-3" />
                Sam's recommendation
              </div>
              <p className="text-sm leading-6 text-[var(--color-fg)]">{scenario.synthesis}</p>
              <p className="mono mt-4 text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
                — Sam · {scenario.signature}
              </p>
            </div>
          )}

          {/* Custom input CTA */}
          {showCustomCta && step === "done" && (
            <div className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg)] p-5">
              <p className="text-sm leading-6 text-[var(--color-fg-muted)]">
                Good question. The real board takes ~30 seconds to synthesize a full brief —
                consulting CEO/CTO/CFO/Sales/CMO with context from your{" "}
                <span className="mono">founder-log/</span>. Install CxOPack and try it on your
                actual startup.
              </p>
              <a href="#pricing" className="btn-primary mt-4 text-sm">
                See pricing <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}

          {/* Bottom CTA for demo-complete */}
          {scenario && step === "done" && (
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
                That's the product.
              </span>
              <a href="#pricing" className="btn-primary text-sm">
                Get CxOPack <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PersonaTakeCard({ take }: { take: PersonaTake }) {
  return (
    <div className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3 duration-500 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]">
        <KitIcon slug={take.slug} className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-brand)]">
          {take.label}
        </div>
        <p className="mt-1 text-sm leading-6 text-[var(--color-fg-muted)]">{take.bullet}</p>
      </div>
    </div>
  );
}
