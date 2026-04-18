import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/brand/logo";

export function Nav() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" aria-label="CxOPack home">
          <Logo size="md" />
        </Link>

        <nav className="hidden gap-6 text-sm text-[var(--color-fg-muted)] md:flex">
          <a href="/#kits" className="hover:text-[var(--color-fg)]">{t("kits")}</a>
          <a href="/#pricing" className="hover:text-[var(--color-fg)]">{t("pricing")}</a>
          <Link href="/docs" className="hover:text-[var(--color-fg)]">Docs</Link>
          <a href="/#faq" className="hover:text-[var(--color-fg)]">{t("faq")}</a>
        </nav>

        <a href="/#pricing" className="btn-primary text-sm">
          {t("getStarted")}
        </a>
      </div>
    </header>
  );
}
