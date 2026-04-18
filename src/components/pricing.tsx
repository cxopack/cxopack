"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "lucide-react";

export function Pricing() {
  const t = useTranslations("pricing");

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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <PricingCard
            badge={t("solo.badge")}
            title={t("solo.title")}
            price={t("solo.price")}
            priceSuffix={t("solo.priceSuffix")}
            desc={t("solo.desc")}
            cta={t("solo.cta")}
            features={t.raw("solo.features") as string[]}
            ctaHref="/checkout?plan=kit&kit=ceo"
          />
          <PricingCard
            badge={t("allAccess.badge")}
            title={t("allAccess.title")}
            price={t("allAccess.price")}
            priceSuffix={t("allAccess.priceSuffix")}
            strike={t("allAccess.strike")}
            desc={t("allAccess.desc")}
            cta={t("allAccess.cta")}
            features={t.raw("allAccess.features") as string[]}
            highlight
            ctaHref="/checkout?plan=all-access"
          />
          <PricingCard
            badge={t("launch100.badge")}
            title={t("launch100.title")}
            price={t("launch100.price")}
            priceSuffix={t("launch100.priceSuffix")}
            desc={t("launch100.desc")}
            cta={t("launch100.cta")}
            features={t.raw("launch100.features") as string[]}
            accent="gold"
            ctaHref="/checkout?plan=launch-100"
          />
        </div>

        {/* Autopilot teaser strip */}
        <AutopilotTeaser />
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
  accent?: "gold";
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
  accent,
  ctaHref,
}: CardProps) {
  const ringClass = highlight
    ? "border-[var(--color-brand)] shadow-[0_0_0_1px_var(--color-brand)]"
    : accent === "gold"
      ? "border-[var(--color-gold-700)]/60"
      : "";

  return (
    <div className={`card flex flex-col p-6 ${ringClass}`}>
      <span
        className={`inline-block w-fit rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
          highlight
            ? "bg-[var(--color-brand)] text-[#0a0a0b]"
            : accent === "gold"
              ? "bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
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

function AutopilotTeaser() {
  const t = useTranslations("pricing.autopilotTeaser");
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-elevated)] via-[var(--color-bg)] to-[var(--color-bg-elevated)] p-6">
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="flex-1">
          <div className="mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_8px_var(--color-brand)]" />
            {t("badge")}
          </div>
          <h3 className="mt-2 text-xl font-semibold">{t("title")}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-fg-muted)]">
            {t("desc")}
          </p>
        </div>
        <a href="#waitlist" className="btn-primary text-sm shrink-0">
          {t("cta")} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
