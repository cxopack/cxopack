import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] grid-fade"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-narrow relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mb-6">
            <Sparkles className="h-3 w-3" />
            {t("badge")}
          </div>
          <h1 className="headline text-balance">
            {t("title1")}{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-hover)] bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
            {t("title2")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="btn-primary">
              {t("ctaPrimary")} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#kits" className="btn-ghost">
              {t("ctaSecondary")}
            </a>
          </div>
          <p className="mt-6 text-xs text-[var(--color-fg-dim)]">{t("socialProof")}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          <Stat number="5" label={t("stats.kits")} />
          <Stat number="40+" label={t("stats.workflows")} />
          <Stat number="120+" label={t("stats.skills")} />
          <Stat number="4" label={t("stats.platforms")} />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="card px-4 py-5 text-center">
      <div className="text-2xl font-bold tracking-tight">{number}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-[var(--color-fg-dim)]">
        {label}
      </div>
    </div>
  );
}
