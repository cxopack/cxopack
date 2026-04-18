import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { KITS } from "@/config/kits";

export function Kits() {
  const t = useTranslations("kits");

  return (
    <section id="kits" className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {KITS.map((kit) => {
            const items = t.raw(`${kit.slug}.items`) as string[];
            return (
              <article key={kit.slug} className="card flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-xl text-[var(--color-brand)]">
                    {kit.emoji}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{t(`${kit.slug}.title`)}</h3>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-fg-dim)]">
                      {t(`${kit.slug}.tagline`)}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--color-fg-muted)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
