import { useTranslations } from "next-intl";
import { Logo } from "@/components/brand/logo";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const cols: { heading: string; links: [string, string][] }[] = [
    {
      heading: t("product"),
      links: [
        [t("links.kits"), "/#kits"],
        [t("links.pricing"), "/#pricing"],
        [t("links.club"), "/#pricing"],
        ["Docs", "/docs"],
        [t("links.how"), "/#how"],
      ],
    },
    {
      heading: t("company"),
      links: [
        [t("links.about"), "/about"],
        [t("links.contact"), "mailto:hello@cxopack.com"],
        [t("links.blog"), "/blog"],
      ],
    },
    {
      heading: t("legal"),
      links: [
        [t("links.terms"), "/legal/terms"],
        [t("links.privacy"), "/legal/privacy"],
        [t("links.refund"), "/legal/refund"],
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] py-16">
      <div className="container-narrow">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm text-[var(--color-fg-muted)]">
              {t("tagline")}
            </p>
            <div className="mono mt-4 text-[10px] text-[var(--color-fg-dim)]">EDITION · I</div>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mono mt-12 flex items-center justify-between border-t border-[var(--color-border)] pt-6 text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
          <span>{t("copyright", { year })}</span>
          <span>CXOPACK · EDITION I</span>
        </div>
      </div>
    </footer>
  );
}
