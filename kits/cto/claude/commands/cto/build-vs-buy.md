---
description: Score a capability on build-in-house vs. adopt existing tool — default is BUY.
argument-hint: [the capability, e.g., "auth", "email sending", "analytics"]
---

$ARGUMENTS

Run the **build-vs-buy** skill. Score on Differentiation / Speed-to-value / Ops burden / Switching cost (0-5 each). Apply the decision rule:

- Differentiation ≥4 AND ops burden ≤2 → BUILD
- Switching cost ≥4 AND differentiation ≤2 → BUILD (lock-in risk)
- Differentiation ≤2 AND (speed ≥3 OR ops ≥3) → BUY
- Otherwise → BUY, set revisit trigger

For common capabilities (auth, payments, email, analytics, storage, search, queues, feature flags), default is BUY — push back on any urge to build them.
