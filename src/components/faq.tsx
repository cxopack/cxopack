"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="container-tight">
        <div className="text-center">
          <div className="eyebrow mb-5">{t("eyebrow")}</div>
          <h2 className="headline-2 text-balance">{t("title")}</h2>
        </div>
        <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[var(--color-fg-muted)] transition ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-[var(--color-fg-muted)]">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
