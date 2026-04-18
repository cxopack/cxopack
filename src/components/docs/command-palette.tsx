"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { Search, FileText, ArrowRight } from "lucide-react";
import { searchDocs, type SearchEntry } from "./search-index";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setQuery("");
      setIndex(0);
    }
  }, [open]);

  const results = useMemo<SearchEntry[]>(() => searchDocs(query, 10), [query]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  const go = useCallback(
    (entry: SearchEntry | undefined) => {
      if (!entry) return;
      setOpen(false);
      router.push(entry.href as never);
    },
    [router]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[index]);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search docs"
        className="mono flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--color-fg-muted)] transition hover:border-[var(--color-brand)]/50 hover:text-[var(--color-fg)]"
      >
        <Search className="h-3.5 w-3.5" />
        Search
        <kbd className="ml-2 rounded border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-1.5 py-0.5 text-[10px] text-[var(--color-fg-dim)]">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4">
              <Search className="h-4 w-4 text-[var(--color-fg-dim)]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search docs…"
                className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-[var(--color-fg-dim)]"
              />
              <kbd className="rounded border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-1.5 py-0.5 text-[10px] text-[var(--color-fg-dim)]">
                esc
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto py-2">
              {!query ? (
                <div className="px-4 py-8 text-center text-sm text-[var(--color-fg-dim)]">
                  Type to search — kits, skills, quickstart, support.
                </div>
              ) : results.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-[var(--color-fg-dim)]">
                  No results for <span className="text-[var(--color-fg)]">"{query}"</span>.
                </div>
              ) : (
                results.map((r, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={r.href + i}
                      onMouseEnter={() => setIndex(i)}
                      onClick={() => go(r)}
                      className={cn(
                        "flex w-full items-start gap-3 px-4 py-2.5 text-left text-sm",
                        active && "bg-[var(--color-brand-soft)]"
                      )}
                    >
                      <FileText
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          active ? "text-[var(--color-brand)]" : "text-[var(--color-fg-dim)]"
                        )}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "truncate font-medium",
                              active ? "text-[var(--color-brand)]" : "text-[var(--color-fg)]"
                            )}
                          >
                            {r.title}
                          </span>
                          <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-dim)]">
                            {r.section}
                          </span>
                        </div>
                        {r.snippet && (
                          <p className="mt-0.5 truncate text-xs text-[var(--color-fg-muted)]">
                            {r.snippet}
                          </p>
                        )}
                      </div>
                      {active && <ArrowRight className="mt-1 h-3.5 w-3.5 text-[var(--color-brand)]" />}
                    </button>
                  );
                })
              )}
            </div>
            <div className="mono flex items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-bg)]/40 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
              <span>
                <kbd className="rounded border border-[var(--color-border-strong)] px-1 py-0.5">↑↓</kbd> navigate{" "}
                <kbd className="ml-1 rounded border border-[var(--color-border-strong)] px-1 py-0.5">↵</kbd> select
              </span>
              <span>CxOPack docs</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
