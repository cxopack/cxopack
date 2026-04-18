import { useTranslations } from "next-intl";

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
            <div className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-brand)] text-[#0a0a0b] text-sm font-bold">
                C
              </span>
              <span>CxOPack</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-fg-muted)]">
              {t("tagline")}
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-dim)]">
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
        <div className="mt-12 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-fg-dim)]">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
