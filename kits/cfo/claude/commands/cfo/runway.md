---
description: Base / bull / bear runway scenarios with named triggers for switching.
---

Run the **runway-scenarios** skill. Read the last 3 months of actuals from `finance/`. Build three scenarios:

- **Base**: trailing 3-month revenue × 0.9, costs = current + approved hires only
- **Bull**: revenue × 1.5, costs include planned hires if triggered
- **Bear**: flat or -20% revenue, pause all discretionary

For each: 12-month table (revenue / costs / net / cash EOM / runway), specific trigger to switch to it, specific actions when triggered, key dates (plausible fundraise, required fundraise, zero runway).

If Base runway ≤9 months: flag that fundraise prep starts *now*.

Save to `founder-log/runway-scenarios-YYYY-MM.md`.
