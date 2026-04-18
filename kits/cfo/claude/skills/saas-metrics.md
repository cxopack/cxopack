---
name: saas-metrics
description: Compute and interpret the core SaaS metrics (MRR, ARR, NRR, GRR, CAC, LTV, payback, churn) from Stripe data. Use when the user says "what's my MRR", "compute my churn", asks about unit economics, or prepares for investor meetings.
allowed-tools: Read, Write, Bash
---

# SaaS Metrics

Compute, don't estimate. Every number comes from a transaction log (Stripe export, DB dump, CSV).

## Inputs expected
- Stripe export or equivalent CSV: `subscription_id, customer_id, plan, mrr, created_at, canceled_at, status`
- Optional: cost-of-acquisition data (ad spend by month, sales hours)

## Metrics to compute

### MRR / ARR
- **MRR** = sum of active monthly-normalized recurring revenue at the snapshot date. Annual plans divide by 12.
- **ARR** = MRR × 12. Always state the snapshot date.

### Net New MRR (month over month)
```
New MRR + Expansion MRR − Contraction MRR − Churned MRR
```

### Churn
- **Logo churn (monthly):** customers who canceled this month / customers active at start
- **Revenue churn (monthly):** $ churned / MRR at start
- **Net Revenue Retention (NRR):** (Start MRR + Expansion − Contraction − Churn) / Start MRR
- **Gross Revenue Retention (GRR):** (Start MRR − Contraction − Churn) / Start MRR

### CAC / LTV / Payback
- **CAC** = Total acquisition spend / New customers acquired. Include paid ads, sponsorships, content costs, founder's-time-in-sales at a shadow rate.
- **LTV** = ARPU / monthly logo churn. Cap at 36 months for conservatism.
- **CAC Payback (months)** = CAC / (ARPU × gross margin %)
- **LTV / CAC** — healthy SaaS >3x. Investor-grade >5x.

## Output format

```md
## [Company] — Metrics as of YYYY-MM-DD

### Recurring revenue
- MRR: €X,XXX (Δ vs. last month: +/-X%)
- ARR: €XXX,XXX
- Net new MRR: +€XXX

### Retention
- Monthly logo churn: X.X% (healthy <3% for SMB SaaS)
- Net Revenue Retention: XXX% (>100% is expansionary)

### Unit economics
- ARPU: €XX
- CAC: €XXX  (based on €X,XXX spent / XX customers)
- LTV: €X,XXX
- LTV/CAC: X.Xx
- CAC Payback: XX months

### Notable movements
- …
```

## Interpretation

- Don't hand wave. Every number needs its source method cited in a footnote.
- Flag when churn or NRR breaks threshold: "🚨 NRR dropped below 95% — requires attention before next investor update."
- If a single customer represents >20% of MRR, call out concentration risk.

## Anti-patterns

- Reporting "blended" churn across very different customer segments
- Quoting CAC without including founder time
- Using last-click CAC attribution for long sales cycles — use fully-loaded instead
- Running LTV with pre-product-market-fit churn numbers (meaningless)
