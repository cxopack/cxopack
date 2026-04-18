"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import { KITS } from "@/config/kits";

export function Pricing() {
  const t = useTranslations("pricing");
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
          <p className="mt-4 text-lg text-[var(--color-fg-muted)] text-balance">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          <PricingCard
            badge={t("perKit.badge")}
            title={t("perKit.title")}
            price={t("perKit.price")}
            priceSuffix={t("perKit.priceSuffix")}
            desc={t("perKit.desc")}
            cta={t("perKit.cta")}
            features={t.raw("perKit.features") as string[]}
            ctaHref={`/checkout?plan=kit&kit=${KITS[0].slug}`}
          />
          <PricingCard
            badge={t("fullPack.badge")}
            title={t("fullPack.title")}
            price={t("fullPack.price")}
            priceSuffix={t("fullPack.priceSuffix")}
            strike={t("fullPack.strike")}
            desc={t("fullPack.desc")}
            cta={t("fullPack.cta")}
            features={t.raw("fullPack.features") as string[]}
            highlight
            ctaHref="/checkout?plan=full-pack"
          />
          <PricingCard
            badge={t("founding.badge")}
            title={t("founding.title")}
            price={t("founding.price")}
            priceSuffix={t("founding.priceSuffix")}
            desc={t("founding.desc")}
            cta={t("founding.cta")}
            ctaHref="/checkout?plan=founding-100"
          />
          <div className="card flex flex-col p-6">
            <div className="flex items-start justify-between">
              <span className="inline-block rounded-full border border-[var(--color-border-strong)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                {t("club.badge")}
              </span>
              <div className="flex rounded-full border border-[var(--color-border-strong)] p-0.5 text-[11px]">
                <button
                  onClick={() => setYearly(false)}
                  className={`rounded-full px-2 py-0.5 ${
                    !yearly ? "bg-[var(--color-brand)] text-[#0a0a0b]" : "text-[var(--color-fg-muted)]"
                  }`}
                >
                  M
                </button>
                <button
                  onClick={() => setYearly(true)}
                  className={`rounded-full px-2 py-0.5 ${
                    yearly ? "bg-[var(--color-brand)] text-[#0a0a0b]" : "text-[var(--color-fg-muted)]"
                  }`}
                >
                  Y
                </button>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{t("club.title")}</h3>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold">
                {yearly ? t("club.priceYearly") : t("club.priceMonthly")}
              </span>
              <span className="text-sm text-[var(--color-fg-muted)]">
                {yearly ? t("club.priceSuffixYearly") : t("club.priceSuffixMonthly")}
              </span>
              {yearly && (
                <span className="ml-2 rounded-full bg-[var(--color-brand-soft)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-brand)]">
                  {t("club.yearlyBadge")}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-[var(--color-fg-muted)]">{t("club.desc")}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm">
              {(t.raw("club.features") as string[]).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--color-fg-muted)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={`/checkout?plan=club&period=${yearly ? "yearly" : "monthly"}`}
              className="btn-ghost mt-6 w-full"
            >
              {t("club.cta")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  badge: string;
  title: string;
  price: string;
  priceSuffix: string;
  strike?: string;
  desc: string;
  cta: string;
  features?: string[];
  highlight?: boolean;
  ctaHref: string;
};

function PricingCard({
  badge,
  title,
  price,
  priceSuffix,
  strike,
  desc,
  cta,
  features,
  highlight,
  ctaHref,
}: CardProps) {
  return (
    <div
      className={`card flex flex-col p-6 ${
        highlight ? "border-[var(--color-brand)] shadow-[0_0_0_1px_var(--color-brand)]" : ""
      }`}
    >
      <span
        className={`inline-block w-fit rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
          highlight
            ? "bg-[var(--color-brand)] text-[#0a0a0b]"
            : "border border-[var(--color-border-strong)] text-[var(--color-fg-muted)]"
        }`}
      >
        {badge}
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-sm text-[var(--color-fg-muted)]">{priceSuffix}</span>
        {strike && (
          <span className="text-sm text-[var(--color-fg-dim)] line-through">{strike}</span>
        )}
      </div>
      <p className="mt-3 text-sm text-[var(--color-fg-muted)]">{desc}</p>
      {features && (
        <ul className="mt-5 flex-1 space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-[var(--color-fg-muted)]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href={ctaHref}
        className={`${highlight ? "btn-primary" : "btn-ghost"} mt-6 w-full`}
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
