---
description: Weekly 20-min debt triage — rank by (pain × freq) / fix-cost, ship 1 item this week.
---

Run the **tech-debt-triage** skill. Friday ritual:

1. Inventory candidates (grep TODOs, last week's Sentry, avoided files).
2. Score each: pain × frequency / fix-cost. Max 10 candidates per triage.
3. Pick 1 to ship this week (highest score; on ties, lowest fix-cost wins).
4. Save to `founder-log/tech-debt/YYYY-WW.md`.
5. Kill any item that's been on the list >3 weeks without action (either the score is wrong or you're avoiding it — decide).
