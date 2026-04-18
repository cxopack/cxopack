---
name: seo-page
description: Generate a programmatic SEO page targeting a specific search intent. Use when the user says "write an SEO page for [keyword]", "create programmatic SEO content", or is building out /compare, /alternatives, /use-cases directories.
allowed-tools: Read, Write, WebSearch
---

# SEO Page — intent-first, not keyword-first

## Principles

- **Match intent, not keyword.** "Best CRM for freelancers" is navigational / comparative. "CRM vs. spreadsheet" is evaluative. They need different page shapes.
- **E-E-A-T signals.** First-hand experience > second-hand authority. If you can't bring experience or data, don't write the page.
- **One page, one intent.** Never conflate "what is X" with "best X" — two pages.
- **Internal links as skeleton.** Every page should link to 3 related pages in your cluster and be linked *from* 3.
- **Real content > thin wrappers.** If the page is a template with {{values}} only, Google's helpful-content update will kill it.

## Intent types and page shapes

| Intent | Keyword shape | Page shape |
|---|---|---|
| Informational | "what is X", "how does X work" | Definition → mechanics → example → TL;DR |
| Evaluative | "X vs Y", "X alternatives" | TL;DR recommendation → criteria table → per-option deep dive → conclusion |
| Navigational | "best X for [segment]" | Ranked list → per-option 3-sentence review → decision tree |
| Transactional | "X pricing", "buy X" | Clear pricing table → FAQ about billing → CTA |

## Workflow

### 1. Intent diagnosis
Read the target keyword. Identify intent and page shape.

### 2. SERP check
Look at the top 5 results (via `WebSearch` if available). Note the shape they use. You'll match it or deliberately break from it — but only knowingly.

### 3. Required sections
Based on the intent + SERP, list the must-have sections.

### 4. Data commitment
What real data, screenshots, or first-hand experience will you bring? If nothing, *don't write the page*.

### 5. Draft
Write for the intent. Use short paragraphs. Include:
- H1 with keyword in natural position
- H2s that answer the question fully on-page
- At least one table or comparison matrix
- Internal links to 3 related pages
- FAQ at the bottom with People-Also-Ask questions

### 6. Output

```md
---
title: "[Page title — keyword early, natural]"
slug: "/[url-slug]"
description: "[150–160 chars, includes keyword, has a reason to click]"
intent: informational | evaluative | navigational | transactional
cluster: "[topic cluster this belongs to]"
links_out: [/page-a, /page-b, /page-c]
---

# [H1]

[Hook paragraph — why this matters to the reader]

## [H2 1]
…

## [H2 2]
…

## FAQ
**Q:** …
**A:** …
```

## Anti-patterns

- Thin content (<300 words) on competitive keywords
- Keyword-stuffed H2s that don't answer anything
- Pages with no internal links (orphan pages)
- Duplicate pages targeting slight keyword variants (merge or specialize)
- AI-written pages with zero first-hand experience signals
