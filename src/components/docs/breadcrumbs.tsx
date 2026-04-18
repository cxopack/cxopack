"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { docSection, docTitle } from "@/content/docs/nav";

export function Breadcrumbs() {
  const pathname = usePathname();
  const section = docSection(pathname);
  const title = docTitle(pathname);

  if (!section && !title) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="mono mb-8 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]"
    >
      <Link href="/docs" className="hover:text-[var(--color-fg)]">
        Docs
      </Link>
      {section && (
        <>
          <ChevronRight className="h-3 w-3" />
          <span>{section}</span>
        </>
      )}
      {title && title !== "Overview" && (
        <>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[var(--color-fg)]">{title}</span>
        </>
      )}
    </nav>
  );
}
