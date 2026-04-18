---
name: pipeline-review
description: Weekly 15-minute pipeline review — per-deal next step, blocker, date — with a hard rule that any deal without a next step + date gets killed. Use every Friday or when the user says "review my pipeline", "what deals are real".
allowed-tools: Read, Write
---

# Pipeline Review — Friday, 15 minutes, no mercy

Solo-founder pipelines die of **wishful thinking**. Deals sit in "interested" for 6 weeks, get logged as "warm" on Friday, and produce zero revenue. Pipeline review's job is to separate deals that are moving from deals the founder is emotionally attached to.

## The 3 rules

1. **Every open deal needs a next step + a date.** If you can't name both, the deal is closed. Move it to `lost` with reason `no momentum`.
2. **Any deal >45 days old with no stage change is killed.** No exceptions. The deal didn't die; it just never lived.
3. **Stage changes require evidence.** "Demo done" means a demo happened. "Proposal sent" means a document was sent with a specific price.

Apply these rules rigorously. Small founders have small pipelines; tolerating dead weight makes forecasting impossible.

## The review format

```md
# Pipeline review — Week <YYYY-WW>

## Active pipeline (<N> deals, weighted €<X>)

### Stage 1 — Discovery
| Company | Contact | Deal size | Last touch | Next step | Date | Blocker |
|---|---|---|---|---|---|---|
| … | … | €X | YYYY-MM-DD | <specific> | YYYY-MM-DD | <what, or —> |

### Stage 2 — Evaluation
<same table format>

### Stage 3 — Negotiation
<same>

### Stage 4 — Verbal yes
<same>

## This week
### Deals that moved (+)
- <Company>: <stage A → stage B> because <evidence>

### Deals that stalled (−)
- <Company>: <reason>; next action …

### Deals killed (🗑)
- <Company>: reason <no next step / 45-day rule / customer disqualified / lost to competitor>

## Focus for next week
3 deals, in order of close probability × deal size:
1. <Company> — action: <specific>
2. …
3. …

## Leading indicators
- Cold emails sent last week: <N>
- Discovery calls taken: <N>
- Demos delivered: <N>
- Proposals sent: <N>
- Closed won: <N>
- Churn (logo): <N>
```

## Stages — stricter than "interested"

- **Stage 0 — Prospect.** Sourced, not yet responded. *Not in active pipeline.*
- **Stage 1 — Discovery.** Responded, had a ≥20-min call, pain + buying process identified.
- **Stage 2 — Evaluation.** Pilot / demo / proof of concept in flight. Clear decision date.
- **Stage 3 — Negotiation.** Proposal out, terms discussed.
- **Stage 4 — Verbal yes.** Committed; contract pending.
- **Stage 5 — Closed won.** Money received.
- **Closed lost.** Know why (specific reason, not "not a fit").

Don't invent new stages. More stages = more room to hide non-movement.

## The weekly workflow

1. **Read last week's review.** Before touching any numbers: what moved vs. what was predicted? This calibrates your forecasting reliability.
2. **Per open deal (60 seconds each):**
   - Did the stage change? If yes, evidence.
   - Is there a next step + date?
   - Any new blocker? Named or unnamed?
3. **Kill list.** Any deal failing the 3 rules — move to Closed lost with a specific reason.
4. **Next week focus.** 3 deals max. Write the specific action per deal. If you can't name 3 moveable deals, that's the week's output — the funnel is too thin, shift to outbound.
5. **Leading indicators.** Count activity: emails, calls, demos, proposals. These predict next week's stage changes.

## Forecasting

Once you have 3+ months of reviews, you can compute weighted forecast:
- Stage 1: ×10% close probability
- Stage 2: ×25%
- Stage 3: ×50%
- Stage 4: ×85%

Weighted pipeline = Σ (deal size × stage %). Compare to actuals monthly; adjust weights per your history.

## Anti-patterns

- **"Let's see if they come back"** — they won't. Reach out once with a soft breakup; if no response, kill.
- **Keeping deals "warm" with no activity** — a warm deal with no next step is a cold deal in denial.
- **Moving stages on "good vibes"** — require evidence. A pleasant call is not a stage change.
- **Hiding lost deals to protect ego** — lost deals are the most valuable pipeline data. Log every one with a specific reason.
- **Avoiding the activity count** — if the leading indicators are empty, the weekly review is a ceremony, not a tool.
- **Single funnel for all customer types** — if enterprise and SMB deals behave very differently, split into two pipelines.

## Monthly roll-up

Last review of each month: compute conversion rate per stage, identify the biggest leak, pick one experiment to fix it.
