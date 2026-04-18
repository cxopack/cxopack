import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { KitIcon } from "@/components/brand/kit-icon";
import { Link } from "@/i18n/routing";

const PERSONAS = [
  { slug: "ceo" as const, label: "CEO" },
  { slug: "cto" as const, label: "CTO" },
  { slug: "cfo" as const, label: "CFO" },
  { slug: "sales" as const, label: "Sales" },
  { slug: "cmo" as const, label: "CMO" },
];

export function BoardSection() {
  const t = useTranslations("board");
  return (
    <section className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-narrow relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {t("subtitle")}
          </p>
        </div>

        {/* Visual: Chief of Staff at center, 5 personas around */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative grid grid-cols-6 items-stretch gap-3">
            {/* Left column: CEO + CTO + CFO */}
            <div className="col-span-1 flex flex-col gap-3">
              {PERSONAS.slice(0, 3).map((p) => (
                <PersonaPill key={p.slug} slug={p.slug} label={p.label} />
              ))}
            </div>

            {/* Center: Chief of Staff + arrows */}
            <div className="col-span-4 flex flex-col items-center justify-center">
              <div className="w-full rounded-xl border border-[var(--color-brand)] bg-[var(--color-bg)] p-6 text-center shadow-[0_0_0_1px_var(--color-brand)]">
                <div className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Chief of Staff
                </div>
                <div className="mt-2 text-lg font-semibold">Routes · Synthesizes · Closes loops</div>
                <div className="mt-3 text-xs leading-6 text-[var(--color-fg-muted)]">
                  <span className="mono">/founder &lt;anything&gt;</span> → picks who handles it,
                  <br />
                  combines their outputs into one brief.
                </div>
              </div>

              {/* Shared memory strip */}
              <div className="mt-6 w-full rounded-lg border border-dashed border-[var(--color-border-strong)] bg-[var(--color-bg)] p-4">
                <div className="mono mb-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
                  Shared memory · founder-log/
                </div>
                <div className="mono flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[var(--color-fg-muted)]">
                  <span>priorities.md</span>
                  <span>metrics.md</span>
                  <span>decisions/</span>
                  <span>weekly/</span>
                  <span>handoffs/</span>
                </div>
              </div>
            </div>

            {/* Right column: Sales + CMO */}
            <div className="col-span-1 flex flex-col gap-3 justify-center">
              {PERSONAS.slice(3).map((p) => (
                <PersonaPill key={p.slug} slug={p.slug} label={p.label} />
              ))}
            </div>
          </div>
        </div>

        {/* Three selling points */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="card p-5">
              <div className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
                0{i + 1} / 03
              </div>
              <div className="mt-2 font-semibold text-[var(--color-fg)]">
                {t(`points.${i}.title`)}
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-fg-muted)]">
                {t(`points.${i}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Full Pack callout */}
        <div className="mt-10 flex flex-col items-center">
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Included in the Full Pack — not sold separately
          </p>
          <Link
            href="/docs/kits/board"
            className="btn-ghost mt-4 text-sm"
          >
            Read the Board walkthrough <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PersonaPill({ slug, label }: { slug: "ceo" | "cto" | "cfo" | "sales" | "cmo"; label: string }) {
  return (
    <div className="flex flex-1 items-center gap-2 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3 py-2">
      <KitIcon slug={slug} className="h-5 w-5 shrink-0" />
      <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-muted)]">
        {label}
      </span>
    </div>
  );
}
