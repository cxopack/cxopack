---
description: Weekly 13-week rolling cash flow update. 10 minutes if done weekly, 2 hours if skipped.
---

Run the **cash-flow-13w** skill. Friday ritual:

1. Read last week's `finance/cash-flow-*.csv`, roll forward one week.
2. Ask for the past week's actuals (cash in, cash out).
3. Flag expected inflows that didn't arrive — move to next week or downgrade to `possible`.
4. Apply conservative model: inflows ×0.7, outflows ×1.1.
5. Compute closing cash and runway. If runway dropped >2 weeks since last update, highlight with 3 concrete remediation actions.
6. Output markdown table + save CSV to `finance/cash-flow-YYYY-WW.csv`.
