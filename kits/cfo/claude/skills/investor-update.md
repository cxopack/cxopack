---
name: investor-update
description: Generate the monthly investor update email — numbers section grounded in real metrics. Companion to the CEO's board-update skill but finance-first. Use when the user says "draft the investor numbers", "write the finance section of the update", or is prepping for a board call.
allowed-tools: Read, Write, Grep
---

# Investor Update — Numbers Section

Two kinds of investor updates exist: the CEO's narrative version (wins, challenges, asks) and the CFO's numbers version. This skill produces the **numbers** half — the part investors skim first, and the part that gets you un-funded if wrong.

## The rule

Every number in an investor update has a source. If you can't point to the transaction, export, or spreadsheet row that produced it, don't ship it.

## Required metrics (monthly)

At minimum, every update includes:

1. **Cash in bank** — end of month, exact.
2. **Monthly burn** — cash spent last 30 days. Gross, not "net of revenue."
3. **Runway** — cash / avg 3-month burn, in months.
4. **MRR / ARR** — end of month, normalized. Annual subs ÷ 12.
5. **Net new MRR** — new + expansion − contraction − churn.
6. **Top-of-funnel metric** — the one you track weekly. Signups, demos, waitlist.
7. **Logo churn %** — customers who canceled / customers at start of month.
8. **MoM delta** on each of the above.

If applicable:
9. **NRR** — net revenue retention. >100% = expansionary.
10. **CAC payback** — CAC / (ARPU × gross margin %).

## Format

Always a KPI table followed by a **1-paragraph interpretation**. Never just numbers.

```md
## KPIs — <Month YYYY>

| Metric | Last month | This month | Δ |
|---|---|---|---|
| Cash in bank | €<X> | €<Y> | <±Δ%> |
| Monthly burn | €<X> | €<Y> | <±Δ%> |
| Runway | <X> months | <Y> months | <±w> |
| MRR | €<X> | €<Y> | <+X%> |
| Net new MRR | €<X> | €<Y> | <+X%> |
| <ToFu metric> | <X> | <Y> | <+X%> |
| Logo churn | <X>% | <Y>% | <±Δ> |
| NRR | <X>% | <Y>% | <±Δ> |

### Interpretation
<1 paragraph. What moved, why, what it means for next month. No spin. No invention.>
```

## Workflow

1. Ask for the data source: Stripe export, bank CSV, spreadsheet link.
2. Compute each metric from the source. **Never estimate.** If data is missing, emit `[MISSING: …]` instead of guessing.
3. Pull last month's numbers from the previous update (`founder-log/investor-updates/YYYY-MM-1.md`) to compute deltas.
4. Flag **red** conditions automatically:
   - Runway dropped >2 months vs. last update.
   - Logo churn > 5% (SMB) or 3% (enterprise).
   - NRR < 90%.
   - Single customer > 20% of MRR (concentration risk).
   - Burn grew > 15% MoM.
5. Write the interpretation — must be ≤ 4 sentences. No "we're excited about..."; state what moved and the consequence.
6. Save to `founder-log/investor-updates/YYYY-MM.md`. Append to index.

## Interpretation rubric

For each metric that moved materially (±5% or more), answer:
- What drove it? (Specific: "new cohort from ProductHunt launch" ≠ "marketing efforts")
- Is it repeatable? (One-time spike vs. trend)
- What's next month's projection?

## Anti-patterns

- **"Steady growth"** as interpretation. Steady = flat = concerning. Say why.
- **Hiding bad months** — investors detect this and stop opening your emails. Always send; always honest.
- **Vanity metrics** (signups without activation, page views, follower count) in a finance update. Leave those for the CMO section.
- **Quoting churn without defining it** — always specify logo churn vs. revenue churn vs. NRR.
- **Blending segments** (SMB + enterprise in one NRR number). Split if segments behave differently.
- **Present-tense optimism about the future** ("we expect MRR to double"). Commit to numbers, not vibes. State the plan and the signal that would prove it right.

## Composing with the CEO update

This skill produces the KPI + interpretation block only. The CEO's `board-update` skill consumes it as the `## KPIs` section and wraps it with the narrative (headline, wins, challenges, asks, next). Run both in order: `/cfo:investor-update` first, then `/ceo:board-update`.
