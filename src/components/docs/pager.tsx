"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { adjacentDocs } from "@/content/docs/nav";

export function Pager() {
  const pathname = usePathname();
  const { prev, next } = adjacentDocs(pathname);

  if (!prev && !next) return null;

  return (
    <nav className="mt-16 grid grid-cols-2 gap-4 border-t border-[var(--color-border)] pt-8">
      {prev ? (
        <Link
          href={prev.href}
          className="group card flex flex-col p-5 transition hover:border-[var(--color-brand)]"
        >
          <span className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
            ← Previous
          </span>
          <span className="mt-2 flex items-center gap-1.5 font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-brand)]">
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group card flex flex-col items-end p-5 text-right transition hover:border-[var(--color-brand)]"
        >
          <span className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
            Next →
          </span>
          <span className="mt-2 flex items-center gap-1.5 font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-brand)]">
            {next.label}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
