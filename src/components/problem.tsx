import { useTranslations } from "next-intl";

export function Problem() {
  const t = useTranslations("problem");
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-20">
      <div className="container-tight text-center">
        <div className="eyebrow mb-5">{t("eyebrow")}</div>
        <h2 className="headline-2 text-balance">{t("title")}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
