import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  const t = useTranslations("cta");
  return (
    <section className="py-24">
      <div className="container-tight">
        <div className="card relative overflow-hidden p-12 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top, rgba(212,175,55,0.15), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="headline-2 text-balance">{t("title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-fg-muted)] text-balance">
              {t("subtitle")}
            </p>
            <a href="#pricing" className="btn-primary mt-8">
              {t("primary")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
