"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = { id: string; text: string; level: 2 | 3 };

export function DocsToc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLHeadingElement>("main h2[id], main h3[id]"));
    const extracted: Heading[] = nodes.map((n) => ({
      id: n.id,
      text: n.innerText,
      level: n.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(extracted);
  }, []);

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  const hasHeadings = useMemo(() => headings.length > 0, [headings]);
  if (!hasHeadings) return null;

  return (
    <aside className="sticky top-16 hidden w-52 shrink-0 self-start py-10 pl-8 xl:block xl:h-[calc(100vh-4rem)] xl:overflow-y-auto">
      <div className="mono mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
        On this page
      </div>
      <ul className="space-y-1 border-l border-[var(--color-border)]">
        {headings.map((h) => {
          const active = activeId === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={cn(
                  "block border-l-2 py-1 pl-3 text-[12px] leading-5 transition -ml-px",
                  h.level === 3 && "pl-6",
                  active
                    ? "border-[var(--color-brand)] text-[var(--color-brand)]"
                    : "border-transparent text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                )}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
