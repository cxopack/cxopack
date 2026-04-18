"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing-autopilot" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-y border-[var(--color-border)] py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 radial-gold" />
      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_8px_var(--color-brand)]" />
            Coming Q4 2026 · Limited beta
          </div>
          <h2 className="headline-2 mt-4 text-balance">
            Get on the <span className="italic text-[var(--color-brand)]">Autopilot</span> waitlist.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            Be one of the first 10 founders running a company where the agents own the work, the
            budget, and the outcomes. Early access before public launch. Founder pricing locked.
          </p>

          {status === "ok" ? (
            <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-[var(--color-brand)]/30 bg-[var(--color-brand-soft)] p-6">
              <CheckCircle2 className="h-7 w-7 text-[var(--color-brand)]" />
              <p className="text-sm text-[var(--color-fg)]">
                You're on the list. We just sent a confirmation to{" "}
                <span className="font-medium">{email}</span>.
              </p>
              <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
                Talk soon — Djalil
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
            >
              <input
                type="email"
                required
                placeholder="founder@yourstartup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="flex-1 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-fg-dim)] focus:border-[var(--color-brand)]"
              />
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="btn-primary shrink-0"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Joining…
                  </>
                ) : (
                  <>
                    Join waitlist <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {error && (
            <p className="mt-3 text-sm text-red-400">{error}</p>
          )}

          <p className="mono mt-6 text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
            No spam · One email at launch · Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}
