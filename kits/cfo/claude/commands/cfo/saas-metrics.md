---
description: Compute MRR, ARR, NRR, GRR, CAC, LTV, payback from Stripe export.
argument-hint: [path to Stripe export CSV or "from stripe MCP"]
---

$ARGUMENTS

Run the **saas-metrics** skill. Require a transaction source (Stripe export or live MCP). Refuse to estimate.

Compute: MRR, ARR, net-new MRR, logo + revenue churn, NRR, GRR, ARPU, CAC (fully loaded — include founder time at shadow rate), LTV (capped 36 months), LTV/CAC, CAC payback.

Always include interpretation paragraph (1 paragraph, ≤4 sentences). Flag concentration risk (single customer >20% MRR), NRR <95%, churn spikes.

Save to `founder-log/metrics/YYYY-MM.md`.
