import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Nav() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-brand)] text-[#0a0a0b] text-sm font-bold">
            C
          </span>
          <span>CxOPack</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-[var(--color-fg-muted)] md:flex">
          <a href="#kits" className="hover:text-[var(--color-fg)]">{t("kits")}</a>
          <a href="#pricing" className="hover:text-[var(--color-fg)]">{t("pricing")}</a>
          <a href="#how" className="hover:text-[var(--color-fg)]">{t("how")}</a>
          <a href="#faq" className="hover:text-[var(--color-fg)]">{t("faq")}</a>
        </nav>

        <a href="#pricing" className="btn-primary text-sm">
          {t("getStarted")}
        </a>
      </div>
    </header>
  );
}
