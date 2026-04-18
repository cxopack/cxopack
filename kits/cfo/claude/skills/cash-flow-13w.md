---
name: cash-flow-13w
description: Build and maintain a rolling 13-week cash flow model. Use when the user says "update the cash flow", "what's my runway", "can I afford X", or asks about burn rate.
allowed-tools: Read, Write, Edit
---

# 13-Week Cash Flow

The most important spreadsheet a solo founder never updates often enough. Your job is to make it maintainable in 10 minutes a week.

## Structure

| Column | Contents |
|---|---|
| Row labels | Weeks (W+0 … W+12), with dates |
| Opening cash | Balance at start of week |
| Inflows | Customer payments, refunds (negative), grants, loans |
| Outflows | Payroll, contractors, tools, hosting, taxes, legal, other |
| Net | Inflows − Outflows |
| Closing cash | Opening + Net |
| Runway (weeks) | Closing cash / avg 4-week outflow |

## Principles

- **Conservative.** Model inflows at 70% of expectation, outflows at 110%.
- **Tag each line** as `confirmed` / `expected` / `possible`. Possible lines don't count toward closing cash but appear below the fold.
- **Never net numbers.** Show gross inflows and gross outflows separately.
- **13 weeks forward only.** Monthly reviews zoom out; this is tactical.

## Output

Always produce both formats:
1. Markdown table in the chat/response
2. A CSV file at `finance/cash-flow-YYYY-WW.csv` (current week in filename)

Include a one-paragraph summary above the table:
- Opening cash
- Expected closing cash (13 weeks out)
- Runway delta vs. last update
- The single biggest variance vs. last update and *why*

## Workflow

1. Read the last `cash-flow-*.csv` in `finance/` (if any) — roll forward one week, drop W-1.
2. Ask the founder to confirm actuals for the just-ended week: cash received, cash spent.
3. Update the new week column with confirmed actuals.
4. Flag any expected inflows that didn't materialize — move them to the next week or downgrade to `possible`.
5. If runway dropped >2 weeks since last model, highlight in bold and suggest 3 concrete actions (delay X, accelerate Y, cut Z).

## Anti-patterns

- Showing P&L instead of cash. This is CASH flow. Accruals are irrelevant.
- Including the current week's "projected" numbers — only actuals go in the current week column.
- Averaging away spikes. Big lumpy outflows (yearly subs, VAT quarter) get their own line item.
