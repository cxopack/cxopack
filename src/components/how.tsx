import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("how");
  const steps = t.raw("steps") as { title: string; desc: string }[];

  return (
    <section id="how" className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
        </div>
        <ol className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={i} className="card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-sm font-bold text-[var(--color-brand)]">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
