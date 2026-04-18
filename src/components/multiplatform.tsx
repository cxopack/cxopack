import { useTranslations } from "next-intl";
import { Bot, MessageSquare, Code2, FileText } from "lucide-react";

const ICONS = {
  claude: Bot,
  chatgpt: MessageSquare,
  cursor: Code2,
  agnostic: FileText,
} as const;

export function Multiplatform() {
  const t = useTranslations("multiplatform");
  const keys = ["claude", "chatgpt", "cursor", "agnostic"] as const;

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {t("body")}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {keys.map((k) => {
            const Icon = ICONS[k];
            return (
              <div key={k} className="card p-6">
                <Icon className="h-6 w-6 text-[var(--color-brand)]" />
                <h3 className="mt-4 font-semibold">
                  {t(`platforms.${k}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {t(`platforms.${k}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
