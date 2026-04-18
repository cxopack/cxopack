---
name: landing-copy
description: Write landing-page copy with only verifiable claims, zero fluff words, and a specific "not for" section. Use when the user says "write landing copy", "rewrite the hero", or their landing page isn't converting.
allowed-tools: Read, Write, Grep
---

# Landing Copy

Most landing pages fail because every sentence could be said about any product. The skill strips every unprovable claim and writes only what's verifiable, specific, and polarizing enough to make a subset of readers self-disqualify.

## The 3 rules

1. **Every claim has proof.** A number, a quote, a screenshot, a named customer, a demo. Unprovable = delete.
2. **No fluff words.** Banned list enforced automatically: *best-in-class · world-class · cutting-edge · powerful · seamless · intuitive · robust · leverage (verb) · synergy · align (fluff) · transformative · revolutionary · game-changing · next-generation · innovative · industry-leading · mission · passion*.
3. **Include a "not for" line.** A landing page that's for everyone is for no one. Name who this isn't for — that makes the positive message land.

## The landing-page structure

### Hero (above the fold — 5 seconds to land)
- **Headline** — states the outcome, not the product. One counter-intuitive element if possible.
- **Subhead** — 1-2 sentences. Who this is for + what you get + the "unlike" reference.
- **Primary CTA** — the action, not "Learn more."
- **Social proof strip** — logos (only real ones), or a single number ("20k orders/month processed").

### Problem (one screen)
- The problem as customers describe it. A real quote if possible.
- The cost of not solving it — in their units (time, money, risk).
- What people do today (the real alternative — not a competitor, their actual workaround).

### Product shot (one screen)
- A screenshot or demo loop. Not a stock illustration.
- One-sentence caption naming the job it does.

### 3 benefits (one screen, 3 columns)
- Each benefit has a measurable proof point.
- Format: *Benefit name · What it means for you · Proof.*

### Social proof (one screen)
- 2-3 testimonials. Each with: name, role, company, photo or avatar, a specific measurable result.
- "Loved it" quotes without attribution = worse than nothing.

### Pricing (one screen)
- Price visible, not "request a quote" unless enterprise only.
- 3 tiers max. Most popular highlighted.
- What's included, in plain language. No feature matrix for SMB pricing.

### FAQ (one screen, 5-7 questions)
- Only real objections. Not "what is <feature>?" invented questions.
- Each answer is short — if long, it goes on its own page.

### Final CTA + Not-for line
- Repeat the primary CTA.
- "Not for you if: <concrete disqualifier 1> · <concrete disqualifier 2>."

## Writing rules

- **Second-person, present tense.** "You ship twice as fast" beats "Customers have reported 2× faster shipping."
- **Short sentences.** 15 words or fewer per sentence on average.
- **One idea per section.** If you have two points, make two sections.
- **Specific > abstract.** "CEO, CTO, CFO, Sales, CMO — 5 roles, one pack" beats "A complete AI executive suite."
- **Show, don't claim.** "Proven by 200+ paying customers" ≥ "Trusted worldwide."

## Workflow

1. Ask for the user's current landing copy (paste or URL). If no existing copy, ask for: positioning (via `/cmo:positioning`), ICP (via `/sales:icp-workshop`), top 3 proof points, top 3 disqualifiers.
2. Audit for banned words — flag every occurrence with a replacement suggestion.
3. Audit for unprovable claims — every sentence gets a ✅ (provable) or ❌ (fluff, rewrite).
4. Write the hero first. Force a counter-intuitive element.
5. Work down the structure. Every benefit bullet requires a proof point — demand it.
6. Write the "Not for" line. If the founder can't name who it's not for, send them back to positioning.
7. Output the full page as markdown. Save to `content/landing/v<N>.md`.

## A/B test-ready output

The skill can output 2 hero variants (A/B): one more direct, one more counter-intuitive. Same benefits, same proof; just a different opening frame. That's the test that produces the clearest signal in the first week.

## Anti-patterns

- **"AI-powered"** as the headline value prop → in 2026, table stakes. Not a differentiator.
- **"Built for teams of all sizes"** → pick one size; the copy will be 5× sharper.
- **3-paragraph hero with gradient text** → the design is hiding weak copy. Fix copy first.
- **Testimonial without a number or specific before/after** → "We love it" testimonials hurt credibility more than they help.
- **"Request a demo" for a $49/mo product** → direct-sales friction on a self-serve price point.
- **Carousel of 10 benefits** → 3 beats 10. Readers remember 0 of 10.
- **Feature matrix with checkmarks** → for prosumer / SMB, this is usually overkill. Use clear plain-language pricing cards.

## Review rubric

Before shipping, apply this test to every section:

1. Could this sentence be on a competitor's landing? If yes, rewrite or cut.
2. Is there a claim without proof? Cut or add proof.
3. Would a subset of readers self-disqualify after reading? If not, the positioning is too broad.
4. If you read the page aloud, does any sentence feel corporate? Rewrite in your voice.
