---
name: pricing-experiments
description: Design a pricing change as a proper experiment — hypothesis, guardrails, kill criterion, rollout plan. Use when the user says "should I raise prices", "redesign my pricing", or is about to change a price.
allowed-tools: Read, Write
---

# Pricing Experiments

Pricing is the single highest-ROI change a solo founder can make. It's also the single biggest way to accidentally break a business. Every pricing change is run as a **bounded experiment** with a written hypothesis, guardrails, and a kill criterion.

## Core principle: no silent changes

- Existing customers: 30 days' notice for any increase. Law in most jurisdictions, reputation-protection everywhere.
- New customers: change from a specific date. Annotate in Stripe metadata so you can compare cohorts.
- Always set a kill criterion before running. "Roll back if conversion drops >25% for 2 weeks."

## The experiment template

```md
# Pricing experiment: <descriptive name>

## Hypothesis
If we change pricing from <A> to <B>, we expect:
- Conversion rate: <baseline X%> → <expected X% ± margin>
- ARPU: <€X> → <expected €Y>
- Revenue per visitor: <€X> → <expected €Y>
Net impact on MRR in 90 days: <+/-€X>

## Change
- What exactly changes: …
- Who it affects: new customers only / existing at renewal / all on <date>
- Effective date: <YYYY-MM-DD>

## Guardrails
- Cancel if D30 conversion drops > <X%> of baseline
- Cancel if NRR drops > <X>pp
- Cancel if churn signal spikes (cancellations within 48h of notice > baseline × 2)

## Rollback plan
- Revert to prior pricing within 24h
- Communication: email template in `pricing/rollback-template.md`
- Offer affected customers: …

## Measurement
Primary metric: <revenue per visitor / MRR growth / conversion %>
Measurement period: <N> days after launch
Data source: Stripe + analytics

## Review date
<YYYY-MM-DD> — <N> days after launch
```

## Common experiment shapes

### 1. Raise anchor price
New customers pay the new price; existing keep theirs (grandfather).
- Hypothesis: conversion drops 0–15%, ARPU rises 30%+, revenue per visitor goes up.
- Guardrail: if conversion drops >25%, roll back.

### 2. Add annual discount
Introduce annual plan at X% discount to monthly.
- Hypothesis: 20–40% of new customers take annual, locking in retention.
- Guardrail: watch for monthly cannibalization — if monthly % of new drops <50% for 2 weeks, review.

### 3. Tier split
Split existing plan into two (Standard + Pro) with feature gates.
- Hypothesis: 10–20% of existing migrate to Pro at renewal.
- Guardrail: hard — if customers downgrade to Standard in high numbers, revenue per logo drops; need NRR protection.

### 4. Simplify (combine tiers)
Opposite of split. Common when you have too many SKUs.
- Hypothesis: sales cycle shortens; some customers pay more, some less; net positive if the removed tier was confusing bottom.

### 5. Charge for something currently free
Convert a free feature to paid.
- Guardrail: churn watch; the narrative matters more than the price here.

## Workflow

1. Ask what pricing change is on the table. Specific: "monthly $29 → $49" ≥ "raise prices."
2. Ask for baseline numbers: current conversion, ARPU, monthly new customers, churn.
3. Draft the experiment template with specific numbers in every field. Refuse to write vague ranges.
4. Force the **one primary metric**. "Several things" = experiment can't be read.
5. Set a review date — usually 30 days for volume products, 90 days for enterprise.
6. Write the rollback communication template so it's ready if needed.
7. Save to `pricing/experiments/YYYY-MM-DD-<slug>.md`.

## Anti-patterns

- **"Let's just try it and see"** — no. Without a baseline or guardrail, you'll either keep a bad change or kill a good one too fast.
- **Measuring "revenue" without a time horizon** — raise + churn in 90 days is the real test.
- **Running 3 experiments at once** — you can't attribute. Run sequentially.
- **Ignoring existing customers** — retention through price changes is 80% communication, 20% price.
- **"I feel underpriced"** as hypothesis — calibrate with data. If 10% of demos say price is a blocker, you're probably right; if 60% say it's a steal, definitely right.
- **Raising price with no improved product story** — always pair a price change with a narrative (new feature, new positioning, market context).

## After the experiment

Add a new log entry at the review date: what actually happened, keep or rollback, what you'd do differently. That's how you build an organizational pricing muscle instead of re-learning every time.
