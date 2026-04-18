---
name: runway-scenarios
description: Build base / bull / bear runway scenarios with named triggers for when to switch between them. Use when the user says "model my runway", "what if revenue grows Y% / stalls", or is planning a hire / raise.
allowed-tools: Read, Write
---

# Runway Scenarios

One runway number is a lie. Your runway under three plausible worlds — base / bull / bear — is the minimum to make decisions about hiring, spending, or when to start raising.

## The three scenarios

### Base
What you genuinely expect. Assumes:
- Revenue grows at the trailing 3-month average rate, discounted 10% for conservatism.
- Costs grow on known commitments only (signed contracts, salaries already paid).
- No new hires unless already offer-extended.

### Bull
What happens if things go right. Assumes:
- Revenue grows 50% faster than trailing average.
- Costs rise with the *hiring plan* you'd execute if revenue came in.
- Paid marketing tested at 2× current spend.

### Bear
What happens if a specific named risk hits. Assumes:
- Revenue **flat** or drops 20% for 3 months (pick the realistic version based on churn history).
- No new hires; pause discretionary contractors.
- Fixed costs as-is.

## The output

```md
# Runway scenarios — <YYYY-MM>

## Inputs
- Cash in bank today: €<X>
- Trailing 3-month revenue: €<A>, €<B>, €<C> (avg €<avg>)
- Trailing 3-month costs: €<A>, €<B>, €<C> (avg €<avg>)
- Trailing 3-month net burn: €<avg>
- Planned hires (approved): <list with offer dates and salaries>

## Base scenario
| Month | Revenue | Costs | Net | Cash EOM | Runway left |
|---|---|---|---|---|---|
| M+1 | … | … | … | … | … |
| M+2 | … | … | … | … | … |
| … | | | | | |
Runway: <X> months
Trigger to switch from Base to Bear: …

## Bull scenario
<same table; runway will extend because revenue outpaces cost adds>
Trigger to switch from Base to Bull: 2 consecutive months of >baseline × 1.3 revenue.
Actions when triggered: accelerate <specific hire>, test paid channel <name>.

## Bear scenario
<same table; runway compressed>
Trigger to switch from Base to Bear: <specific signal — e.g., 2 months of flat revenue, or a major customer churn>.
Actions when triggered: pause <contractor/hire>, cut <line item>, shift CEO time to <activity>.

## The one chart
<3-line plot: cash over 12 months, one line per scenario>

## Key dates
- Bull-scenario fundraise: plausible by <YYYY-MM>
- Base-scenario fundraise: required by <YYYY-MM>
- Bear-scenario cash-out (zero runway): <YYYY-MM>
```

## Workflow

1. Read the last 3 months of actuals from the 13-week cash flow (output of `/cfo:cash-flow-13w`).
2. Compute trailing averages.
3. Ask the founder: (a) approved hires in the plan; (b) biggest concentration risk (customer or channel); (c) if fundraising is being considered.
4. Populate the three scenarios with specific numbers, not bands.
5. Force specific triggers — date, event, or metric — for switching scenarios. No "feels like".
6. Save to `founder-log/runway-scenarios-<YYYY-MM>.md`.
7. If Base runway ≤ 9 months: flag fundraising prep starts **now** (investors move in 90-180 day cycles).

## Triggers — what real signals look like

- **Switch to Bull**: 2 consecutive months of revenue ≥ 130% of baseline; or a sales pipeline with ≥ 3× current MRR in deals past stage 3.
- **Switch to Bear**: 2 consecutive months of flat/declining revenue; OR a top-3 customer churn notice; OR a reduction in pipeline velocity of 50%+ for 6 weeks.

## Anti-patterns

- **Budgeting like it's the Base case no matter what** — hires commit you to Base cost structure even if Bear plays out.
- **"We'll cross that bridge when we get there"** — Bear scenarios fail because decisions are deferred until the last minute; the decisions that protect runway must be written before needed.
- **Ignoring fundraise lead time** — fundraising rounds take 3–6 months. Base runway of 9 months means you should already be in conversations.
- **Equal-probability thinking** — each scenario is NOT equally likely. Name which is most likely and plan accordingly.
- **Not updating after a significant event** — a new hire, a churn, a price change = re-run.

## Sharing with investors

Investors ask for scenarios. The Bear scenario *done well* builds credibility. A founder who shows a realistic Bear with named triggers and pre-planned responses is dramatically more fundable than one who says "we won't let that happen."
