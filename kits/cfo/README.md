# CxOPack — CFO Kit

> **Cash discipline, metrics you can defend, investor-grade numbers.**

The CFO Kit is six production workflows for the money side of a solo-founder startup — the part most founders avoid until it's too late to avoid. Cash flow, SaaS metrics, investor updates, fundraise data rooms, pricing experiments, runway scenarios.

---

## 📖 Full walkthrough

**→ [cxopack.com/docs/kits/cfo](https://cxopack.com/docs/kits/cfo)**

---

## 🗺️ The CFO journey — how to actually use this kit

### Day 1 — See your real numbers for the first time

1. **Install** (see below).
2. **Export your subscriptions from Stripe** → CSV.
3. Run **`/cfo:saas-metrics`** on the export. You'll see MRR, ARR, NRR, GRR, CAC (fully loaded, including your time), LTV, CAC payback.
4. One of three things happens:
   - You learn your real numbers for the first time. (Most common.)
   - You confirm what you thought. Now defendable to investors.
   - You discover concentration risk (one customer >20% of MRR). That's your #1 priority this quarter.

### Week 1 — Establish the Friday cash-flow ritual

1. **Friday 4:30pm:** `/cfo:cash-flow` — 10 minutes rolling the 13-week cash flow forward.
2. The skill applies conservative modeling (inflows × 0.7, outflows × 1.1) and flags any runway drop >2 weeks.
3. **Skip this one week → 2 hours to catch up next time.** Keep it on the calendar.

### Month 1 — Monthly investor update

1. **First business day of the month:** `/cfo:investor-update`. Pulls the latest metrics snapshot, builds the KPI table with MoM deltas, auto-flags red conditions (runway −2mo, churn >5%, NRR <90%, concentration >20%).
2. If you also own the CEO Kit: this block feeds directly into `/ceo:board-update` which wraps the narrative (wins, challenges, asks).

### Ad-hoc — Before any pricing change

- **`/cfo:pricing`** — forces a hypothesis (expected conversion, ARPU, revenue-per-visitor), a primary metric, specific guardrails, a 24-hour rollback plan, 30-day notice to existing customers.
- **Never change prices silently.** Ever.

### Quarterly — Runway scenarios

- **`/cfo:runway`** — Base (conservative), Bull (revenue × 1.5 + hires), Bear (flat or −20%). Each with specific triggers to switch + pre-planned actions.
- If Base runway ≤9 months → start fundraise prep now. Investors move in 90–180 day cycles.

### Before fundraising

- **`/cfo:data-room`** — generates the 8-section folder tree + missing-docs checklist. Start this **90 days** before you send the first deck.

### The commands in order

```
/cfo:saas-metrics     first business day of the month
/cfo:cash-flow        Friday 16:30, weekly ritual
/cfo:investor-update  monthly, after saas-metrics
/cfo:pricing          ad-hoc, before any price change
/cfo:runway           monthly, or after significant event
/cfo:data-room        90 days before a planned raise
```

---

## What's inside

| Workflow | Does |
|---|---|
| `cash-flow-13w` | Rolling 13-week cash flow model; conservative defaults; CSV + markdown output |
| `saas-metrics` | MRR, ARR, NRR, GRR, CAC, LTV, payback from transactional data — not estimates |
| `investor-update` | Numbers section for the monthly investor email; red-condition alerts |
| `data-room` | 8-section fundraise folder + missing-docs checklist per round (pre-seed / seed / A) |
| `pricing-experiments` | Bounded pricing changes — hypothesis, guardrails, rollback plan, 30-day notice |
| `runway-scenarios` | Base / Bull / Bear runway projections with named triggers for switching |

---

## Install

### Claude Code

```bash
git clone git@github.com:cxopack/cxopack-cfo.git .cxopack-cfo
mkdir -p .claude/skills .claude/commands/cfo
cp -r .cxopack-cfo/claude/skills/*         .claude/skills/
cp -r .cxopack-cfo/claude/commands/cfo/*   .claude/commands/cfo/
mkdir -p finance founder-log/investor-updates founder-log/metrics
```

### ChatGPT / Cursor / Any LLM

See `chatgpt/custom-gpt.md`, `cursor/rules/`, `prompts/main.md`.

---

## The Board (orchestration)

Pricing decisions, hiring calls, fundraise prep — all touch CEO + CFO + Sales + CMO. The Board routes across and synthesizes one brief. Included with All-Access Pass.

→ [cxopack.com/docs/kits/board](https://cxopack.com/docs/kits/board)

---

## Changelog

```
v0.1.0 — Initial release — 6 skills
```
