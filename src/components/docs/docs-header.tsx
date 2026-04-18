"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/brand/logo";
import { CommandPalette } from "./command-palette";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  {
    label: "Getting started",
    href: "/docs" as const,
    match: (p: string) =>
      p === "/docs" || p === "/docs/quickstart" || p === "/docs/installation",
  },
  { label: "Kits", href: "/docs/kits/ceo" as const, match: (p: string) => p.startsWith("/docs/kits") },
  { label: "Changelog", href: "/docs/changelog" as const, match: (p: string) => p === "/docs/changelog" },
  { label: "Support", href: "/docs/support" as const, match: (p: string) => p === "/docs/support" },
];

export function DocsHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="CxOPack home">
            <Logo size="md" />
          </Link>
          <span className="mono hidden text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)] md:inline-block">
            Docs · Edition I
          </span>
        </div>

        <nav className="mono hidden items-center gap-6 text-[11px] uppercase tracking-[0.14em] md:flex">
          {TABS.map((tab) => {
            const active = tab.match(pathname);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "transition",
                  active
                    ? "text-[var(--color-brand)]"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <CommandPalette />
          <Link
            href="/#pricing"
            className="btn-primary hidden text-xs md:inline-flex"
          >
            Get the pack
          </Link>
          <a
            href="https://github.com/cxopack/cxopack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden items-center gap-1 rounded-md border border-[var(--color-border-strong)] px-2.5 py-1.5 text-xs text-[var(--color-fg-muted)] hover:border-[var(--color-fg-dim)] hover:text-[var(--color-fg)] md:inline-flex"
          >
            GitHub <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
