import { useTranslations } from "next-intl";
import { CalendarClock } from "lucide-react";

type Day = {
  day: string;
  time: string;
  command: string;
  outcome: string;
};

const DAYS: Day[] = [
  { day: "Mon", time: "09:00", command: "/board:weekly",      outcome: "3 priorities locked, handoffs queued" },
  { day: "Tue", time: "10:00", command: "/cto:adr",           outcome: "decisions/0014-postgres-as-primary.md" },
  { day: "Wed", time: "14:00", command: "/founder \"hire?\"",   outcome: "Donna routes to Harvey + Elliot + Axe → one brief" },
  { day: "Thu", time: "15:00", command: "/sales:discovery",   outcome: "pre-call brief for tomorrow's demo" },
  { day: "Fri", time: "17:00", command: "/ceo:journal",       outcome: "this week's retro + Monday recalibration" },
];

export function WeekInLife() {
  const t = useTranslations("week");
  return (
    <section className="border-y border-[var(--color-border)] py-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">
            <CalendarClock className="h-3 w-3" />
            {t("eyebrow")}
          </div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
            {/* Timeline */}
            <ol className="relative space-y-3 border-l border-[var(--color-border-strong)] pl-6">
              {DAYS.map((d, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.85rem] top-3 h-3 w-3 rounded-full border-2 border-[var(--color-brand)] bg-[var(--color-bg)]" />
                  <div className="card flex flex-col gap-1.5 p-4 transition hover:border-[var(--color-brand-soft)] sm:flex-row sm:items-center sm:gap-4">
                    <div className="mono shrink-0 text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)] sm:w-24">
                      {d.day} · {d.time}
                    </div>
                    <code className="mono shrink-0 rounded bg-[var(--color-brand-soft)] px-2 py-1 text-[12px] font-medium text-[var(--color-brand)] sm:w-56">
                      {d.command}
                    </code>
                    <div className="text-sm text-[var(--color-fg-muted)]">{d.outcome}</div>
                  </div>
                </li>
              ))}
            </ol>

            {/* Side rail: founder-log/ growing */}
            <div className="card p-5">
              <div className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
                founder-log/ — by Friday
              </div>
              <pre className="mono mt-3 overflow-x-auto text-[12px] leading-6 text-[var(--color-fg-muted)]">{`founder-log/
├── priorities.md           ← Mon
├── metrics.md
├── weekly/
│   └── 2026-W17.md         ← Mon + Fri
├── decisions/
│   └── 2026-04-21-...md    ← Tue
├── handoffs/
│   └── ceo-cto-...md       ← Wed
└── tech-debt/
    └── 2026-W17.md         ← Fri`}</pre>
              <p className="mt-4 text-xs leading-6 text-[var(--color-fg-muted)]">
                Each week the workspace compounds. Every agent reads it before responding — no more
                explaining context five times.
              </p>
            </div>
          </div>
        </div>

        <p className="mono mt-12 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
          One founder · Six agents · One ritual
        </p>
      </div>
    </section>
  );
}
