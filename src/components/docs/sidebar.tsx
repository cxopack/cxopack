"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { KIT_DOCS_LIST } from "@/content/docs";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    title: "Getting started",
    items: [
      { label: "Overview", href: "/docs" as const },
      { label: "Quickstart", href: "/docs/quickstart" as const },
    ],
  },
  {
    title: "Per-role walkthroughs",
    items: KIT_DOCS_LIST.map((k) => ({
      label: k.title,
      href: `/docs/kits/${k.slug}` as const,
    })),
  },
] as const;

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden w-60 shrink-0 self-start border-r border-[var(--color-border)] py-8 pr-6 md:block md:h-[calc(100vh-4rem)] md:overflow-y-auto">
      <nav className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-fg-dim)]">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2 py-1 text-sm transition",
                        active
                          ? "bg-[var(--color-brand-soft)] font-medium text-[var(--color-brand)]"
                          : "text-[var(--color-fg-muted)] hover:bg-white/5 hover:text-[var(--color-fg)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
