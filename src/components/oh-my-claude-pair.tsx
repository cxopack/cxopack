import { useTranslations } from "next-intl";
import { GitBranch, Briefcase } from "lucide-react";

type Row = { k: string; v: string };

export function OhMyClaudePair() {
  const t = useTranslations("omcPair");
  const omcRows = t.raw("omcColumn.rows") as Row[];
  const cxoRows = t.raw("cxoColumn.rows") as Row[];

  return (
    <section className="border-y border-[var(--color-border)] py-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {t("body")}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
          <Column
            icon={<GitBranch className="h-4 w-4" />}
            label={t("omcColumn.label")}
            tag={t("omcColumn.tag")}
            rows={omcRows}
            tone="neutral"
          />
          <Column
            icon={<Briefcase className="h-4 w-4" />}
            label={t("cxoColumn.label")}
            tag={t("cxoColumn.tag")}
            rows={cxoRows}
            tone="brand"
          />
        </div>

        <p className="mono mt-10 text-center text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)] text-balance">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}

function Column({
  icon,
  label,
  tag,
  rows,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  tag: string;
  rows: Row[];
  tone: "neutral" | "brand";
}) {
  const headerToneClass =
    tone === "brand"
      ? "border-[var(--color-brand)] text-[var(--color-brand)]"
      : "border-[var(--color-border-strong)] text-[var(--color-fg-muted)]";

  return (
    <div
      className={`card flex flex-col p-6 ${
        tone === "brand"
          ? "border-[var(--color-brand)]/40 shadow-[0_0_0_1px_var(--color-brand-soft)]"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`mono inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] ${headerToneClass}`}
        >
          {icon}
          {label}
        </div>
        <span className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
          {tag}
        </span>
      </div>

      <dl className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.k}>
            <dt className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
              {r.k}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-[var(--color-fg)]">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
