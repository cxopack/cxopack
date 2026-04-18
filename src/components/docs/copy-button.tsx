"use client";

import { useState, useRef, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({ children, language }: { children: ReactNode; language?: string }) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  async function onCopy() {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // silently ignore
    }
  }

  return (
    <div className="group relative mt-4">
      {language && (
        <div className="mono absolute right-14 top-2.5 text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
          {language}
        </div>
      )}
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute right-2.5 top-2 flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg)]/60 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-[var(--color-gold-500)]" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <pre
        ref={preRef}
        className="overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 font-mono text-sm leading-6 text-[var(--color-fg)]"
      >
        {children}
      </pre>
    </div>
  );
}
