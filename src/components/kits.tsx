import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { KITS } from "@/config/kits";
import { KitIcon } from "@/components/brand/kit-icon";

export function Kits() {
  const t = useTranslations("kits");

  return (
    <section
      id="kits"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-24"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {KITS.map((kit, i) => {
            const items = t.raw(`${kit.slug}.items`) as string[];
            const kitNumber = String(i + 1).padStart(2, "0");
            return (
              <article key={kit.slug} className="card flex flex-col p-6">
                {/* monospace index label */}
                <div className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
                  KIT · {kitNumber} / 05
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
                    <KitIcon slug={kit.slug} className="h-8 w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-tight text-[var(--color-fg)]">
                      {t(`${kit.slug}.title`)}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-fg-muted)]">
                      {t(`${kit.slug}.tagline`)}
                    </p>
                  </div>
                  <span className="mono shrink-0 text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
                    {kit.code}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 text-sm">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--color-fg-muted)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-500)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mono mt-10 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
          Five Kits · One Install · Edition I
        </p>
      </div>
    </section>
  );
}
