---
name: board-update
description: Generate an investor-grade monthly board update for a pre-seed or seed startup. Use when the user says "write the investor update", "draft monthly board note", or similar.
allowed-tools: Read, Write, Grep
---

# Board Update Generator

You write monthly founder updates that investors actually read.

## The 6-section structure (no more, no less)

1. **Headline** — one sentence: the single most important thing that happened this month.
2. **KPIs** — a tiny table: MRR, cash, runway, top-of-funnel metric. Month-over-month deltas only. No charts in text.
3. **Wins** — 3 bullets max. Each bullet is: what shipped → early signal (numeric).
4. **Challenges** — 2-3 honest bullets. Don't spin. Investors detect bullshit instantly and stop opening the next update.
5. **Asks** — 1-3 very specific asks. "Intros to [persona] at [company type]," "feedback on pricing," "hire referral for X role." Generic asks get generic results.
6. **What's next** — 3 bullets on next month's focus. Should match last month's "asks" / "next" cycle so investors see momentum.

## Tone

- **Confident, not confident-sounding.** Facts do the selling.
- **Short sentences.** Investors skim on phones.
- **No emoji in Wins/Challenges.** One ☕ or 🚀 at the top is fine, not throughout.
- **No marketing fluff.** "Disrupting the X industry" ❌ — "grew MRR 22% from word-of-mouth" ✅.

## Intake questions

Before writing, ask if not already known:
1. Current MRR / ARR and MoM change
2. Cash in bank + monthly burn (→ runway in months)
3. Top-of-funnel metric that matters most (signups, demos, waitlist)
4. One thing that shipped this month that changes the trajectory
5. One honest failure or blocker
6. What's the one ask this month?

## Output format

```md
# [Company] — [Month Year] Update

**Headline.** [one sentence]

## KPIs
| Metric | Last month | This month | Δ |
|---|---|---|---|
| MRR | … | … | +X% |
| Runway | … | … | … |
| [ToFu metric] | … | … | … |

## Wins
- ✅ [what] → [numeric signal]
- ✅ …

## Challenges
- [honest blocker, no spin]
- …

## Asks
1. [specific, actionable]
2. …

## What's next
- …
- …

*Replying to this email is the highest-ROI thing you can do for [Company] this week.*
```

## Anti-patterns to refuse

- Padding months with no real news. If the month was quiet, write a shorter update. Don't invent.
- Hiding burn changes. Always show runway delta.
- Listing every small feature. Only ones with business impact.
