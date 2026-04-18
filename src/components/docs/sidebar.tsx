"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { DOCS_NAV } from "@/content/docs/nav";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden w-60 shrink-0 self-start border-r border-[var(--color-border)] py-10 pr-6 md:block md:h-[calc(100vh-4rem)] md:overflow-y-auto">
      <nav className="space-y-8">
        {DOCS_NAV.map((section) => (
          <div key={section.title}>
            <h3 className="mono mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
              {section.title}
            </h3>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2.5 py-1.5 text-[13px] transition",
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
