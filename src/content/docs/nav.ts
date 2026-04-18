import { KIT_DOCS_LIST } from "./index";
import boardDoc from "./board";

export type DocNavItem = { label: string; href: string; description?: string };
export type DocNavSection = { title: string; items: DocNavItem[] };

export const DOCS_NAV: DocNavSection[] = [
  {
    title: "Getting started",
    items: [
      { label: "Overview", href: "/docs", description: "What CxOPack is and how the kits work together." },
      { label: "Quickstart", href: "/docs/quickstart", description: "Zero to first workflow in 5 minutes." },
    ],
  },
  {
    title: "Kits",
    items: KIT_DOCS_LIST.map((k) => ({
      label: k.title,
      href: `/docs/kits/${k.slug}`,
      description: k.tagline,
    })),
  },
  {
    title: "The Board",
    items: [
      {
        label: boardDoc.title,
        href: `/docs/kits/board`,
        description: boardDoc.tagline,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Changelog", href: "/docs/changelog", description: "Version history and release notes." },
      { label: "Support", href: "/docs/support", description: "Help, contact, and community." },
    ],
  },
];

/** Flattened ordering for prev/next navigation */
export const DOCS_ORDER: DocNavItem[] = DOCS_NAV.flatMap((s) => s.items);

export function adjacentDocs(pathname: string): {
  prev: DocNavItem | null;
  next: DocNavItem | null;
} {
  const idx = DOCS_ORDER.findIndex((d) => d.href === pathname);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? DOCS_ORDER[idx - 1] : null,
    next: idx < DOCS_ORDER.length - 1 ? DOCS_ORDER[idx + 1] : null,
  };
}

export function docTitle(pathname: string): string | null {
  return DOCS_ORDER.find((d) => d.href === pathname)?.label ?? null;
}

export function docSection(pathname: string): string | null {
  for (const section of DOCS_NAV) {
    if (section.items.some((i) => i.href === pathname)) return section.title;
  }
  return null;
}
