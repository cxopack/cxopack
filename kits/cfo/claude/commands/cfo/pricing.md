---
description: Design a pricing change as a bounded experiment — hypothesis, guardrails, kill criterion.
argument-hint: [the pricing change in one sentence]
---

$ARGUMENTS

Run the **pricing-experiments** skill. Require:

- Baseline: current conversion, ARPU, monthly new customers, churn
- Hypothesis: expected conversion %, ARPU, revenue-per-visitor after change
- One primary metric (not "several things")
- Specific guardrails (cancel-if conditions)
- Rollback plan (within 24h, comms template)
- 30-day notice plan for existing customers (if price increase)
- Review date

Refuse to output without every field concretely filled. Save to `pricing/experiments/YYYY-MM-DD-<slug>.md`.
