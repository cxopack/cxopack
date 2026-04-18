import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { KITS } from "@/config/kits";
import { KitIcon } from "@/components/brand/kit-icon";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] grid-fade"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* gold radial glow */}
      <div className="pointer-events-none absolute inset-0 radial-gold" />

      <div className="container-narrow relative">
        <div className="flex items-center justify-between">
          <span className="eyebrow-plain">{t("badge")}</span>
          <span className="eyebrow-plain hidden md:inline-block">{t("edition")}</span>
        </div>

        <h1 className="headline mt-8 max-w-4xl text-balance">
          {t("title1")}{" "}
          <span className="bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-300)] bg-clip-text italic text-transparent">
            {t("titleHighlight")}
          </span>
          {t("title2")}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
          {t("subtitle")}
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <a href="#pricing" className="btn-primary">
            {t("ctaPrimary")} <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#kits" className="btn-ghost">
            {t("ctaSecondary")}
          </a>
        </div>

        <p className="mt-6 text-xs text-[var(--color-fg-dim)]">{t("socialProof")}</p>

        {/* 5 kit icons row — editorial footer */}
        <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-[var(--color-border)] pt-8 md:gap-10">
          {KITS.map((k) => (
            <div key={k.slug} className="flex items-center gap-2.5">
              <KitIcon slug={k.slug} className="h-6 w-6" />
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-muted)]">
                {k.slug === "sales" ? "Sales" : k.slug.toUpperCase()}
              </span>
            </div>
          ))}
          <div className="ml-auto mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
            cxopack.com
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
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
      <div className="mono mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
        {label}
      </div>
    </div>
  );
}
