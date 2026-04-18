---
description: Numbers section for the monthly investor update — KPI table + interpretation.
argument-hint: [month/year]
---

$ARGUMENTS

Run the **investor-update** skill. Pulls metrics from `founder-log/metrics/` (run `/cfo:saas-metrics` first if stale). Outputs:

- KPI table with MoM delta for: cash, burn, runway, MRR, net-new MRR, ToFu metric, logo churn, NRR.
- 1-paragraph interpretation (≤4 sentences, no "excited about…").

Flag red conditions automatically (runway drop >2 months, churn >5%, NRR <90%, concentration risk, burn +15% MoM).

Save to `founder-log/investor-updates/YYYY-MM.md` (numbers section only; the CEO wraps with narrative via `/ceo:board-update`).
