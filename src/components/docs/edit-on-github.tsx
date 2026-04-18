"use client";

import { usePathname } from "next/navigation";
import { ExternalLink, Pencil } from "lucide-react";

const REPO = "cxopack/cxopack";
const BRANCH = "main";

// Map a doc path to the content file on GitHub.
function contentPath(pathname: string): string | null {
  if (pathname === "/docs") return "src/app/[locale]/docs/page.tsx";
  if (pathname === "/docs/quickstart") return "src/app/[locale]/docs/quickstart/page.tsx";
  if (pathname === "/docs/support") return "src/app/[locale]/docs/support/page.tsx";
  if (pathname === "/docs/changelog") return "src/app/[locale]/docs/changelog/page.tsx";
  const kit = pathname.match(/^\/docs\/kits\/([a-z]+)$/)?.[1];
  if (kit) return `src/content/docs/${kit}.ts`;
  return null;
}

export function EditOnGitHub() {
  const pathname = usePathname();
  const file = contentPath(pathname);
  if (!file) return null;
  return (
    <a
      href={`https://github.com/${REPO}/edit/${BRANCH}/${file}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mono inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--color-fg-dim)] transition hover:text-[var(--color-brand)]"
    >
      <Pencil className="h-3 w-3" />
      Edit this page on GitHub
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}
