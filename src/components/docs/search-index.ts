import { DOCS_NAV } from "@/content/docs/nav";
import { KIT_DOCS_LIST } from "@/content/docs";

export type SearchEntry = {
  title: string;
  href: string;
  section: string;
  snippet: string;
  keywords: string;
};

function buildKitEntries(): SearchEntry[] {
  const out: SearchEntry[] = [];
  for (const kit of KIT_DOCS_LIST) {
    out.push({
      title: kit.title,
      href: `/docs/kits/${kit.slug}`,
      section: "Kits",
      snippet: kit.tagline,
      keywords: `${kit.title} ${kit.tagline} ${kit.heroSentence}`.toLowerCase(),
    });
    // Also index every skill as a deep-link entry
    for (const skill of kit.skills) {
      out.push({
        title: `${kit.title} · ${skill.name}`,
        href: `/docs/kits/${kit.slug}#skill-${skill.name}`,
        section: `Kits / ${kit.title}`,
        snippet: skill.when,
        keywords:
          `${skill.name} ${skill.type} ${skill.trigger} ${skill.when} ${skill.steps.join(" ")}`.toLowerCase(),
      });
    }
  }
  return out;
}

function staticEntries(): SearchEntry[] {
  const list: SearchEntry[] = [];
  for (const section of DOCS_NAV) {
    for (const item of section.items) {
      if (section.title === "Kits") continue; // kits handled separately
      list.push({
        title: item.label,
        href: item.href,
        section: section.title,
        snippet: item.description ?? "",
        keywords: `${item.label} ${item.description ?? ""}`.toLowerCase(),
      });
    }
  }
  return list;
}

export const SEARCH_ENTRIES: SearchEntry[] = [...staticEntries(), ...buildKitEntries()];

export function searchDocs(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored = SEARCH_ENTRIES.map((e) => {
    const hay = `${e.title.toLowerCase()} ${e.section.toLowerCase()} ${e.keywords}`;
    let score = 0;
    for (const t of terms) {
      if (e.title.toLowerCase().includes(t)) score += 10;
      if (e.section.toLowerCase().includes(t)) score += 4;
      if (e.keywords.includes(t)) score += 2;
      if (hay.includes(t)) score += 1;
    }
    return { e, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.e);
  return scored;
}
