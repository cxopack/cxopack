---
name: pitch-deck
description: Generate a 10-slide pre-seed pitch deck in markdown. One metric per slide. No fluff slides. Use when the user says "write my pitch", "draft a deck", or "deck for investor [X]".
allowed-tools: Read, Write, Grep
---

# Pitch Deck — 10 slides, no fluff

A pre-seed deck has one job: **get the investor to say "tell me more"**. Not "explain the whole business." Shorter = better — investors read 100 decks a month; yours loses the second it feels like everyone else's.

## The 10 slides (strict — add none, remove none)

1. **Title.** Company name, one-line positioning, your name + role, the raise target + stage.
2. **Why now.** The shift in the world that makes this company inevitable *this year*, not 2 years ago or 2 years from now.
3. **The problem.** Specific. Who feels it. How much it costs them today. Ideally with a real quote from a customer conversation.
4. **The solution.** One screenshot or demo gif. One sentence of what it does. Resist the urge to explain; show.
5. **How it works.** The 3-step mechanism. A customer's journey: trigger → use → outcome. Not a tech architecture diagram.
6. **Traction.** One big number front and center (MRR, paid users, retention curve). Trend line since launch. No vanity metrics.
7. **Business model.** Price × who pays × expansion mechanic. A single unit economics table if post-revenue: ARPU, CAC, payback, LTV/CAC.
8. **Market.** Bottom-up. "Our ICP is X, there are Y of them in this region, average willingness to pay Z = addressable market of A." NOT top-down McKinsey TAM charts.
9. **Why us.** Founder-market fit — why *this team* solves *this problem*. One line per founder. Unfair advantage, not a LinkedIn résumé.
10. **The ask.** Amount, runway it buys, 3 milestones you commit to hit by next raise. Contact email.

## Slide principles (apply to all)

- **One idea per slide.** If you want to say 2 things, make 2 slides.
- **One metric front and center** on slides 2-6 (problem / solution / how / traction / model). A big number + one line of context.
- **Photo of a customer or product > photo of team** on slide 4.
- **No logos from companies you don't have relationships with.** "Customers like X" when X is a one-off LinkedIn message = credibility killer.
- **No swoosh graphs.** Plot the real data. If it's ugly, fix the business, not the chart.

## Output

Write to `pitch/<investor-or-generic>.md` as markdown slides (triple-dash separators):

```md
# <Company>
<one-line positioning>
<Founder>, <role> · Raising €<X>k pre-seed
---
## Why now
<the shift, one paragraph, one source if you have data>
---
## Problem
<who><what><how much it costs>
"<real customer quote>"
---
...
```

If a slide image or metric is missing, the skill leaves a `[ADD: ...]` marker instead of inventing.

## Anti-patterns

- **"Team" slide before traction.** Fundable teams earn the right to talk about themselves on slide 9, not 2.
- **TAM = SAM = SOM chart.** Any investor who likes this is not who you want.
- **Roadmap slide.** You don't have a roadmap; you have a runway. Slide 10 already says what you'll ship. One's enough.
- **Competitive matrix.** Tells investors you're definition-shopping. Show your *wedge*, not a feature grid.
- **"We are 10x better than X."** 10x what, measured how, by whom. If you can't answer those three in 10 seconds, delete the claim.

## Variants

The skill can generate:
- **Cold deck** — public-facing, meant to be forwarded. No live numbers that get stale.
- **Warm deck** — sent after a first call. Deeper numbers, specific asks.
- **Update deck** — quarterly investor email delivered as 5-slide format (Headline, Traction, Wins, Challenges, Asks).
