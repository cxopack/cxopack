---
name: data-room
description: Build an investor-grade data room — structured index + missing-docs checklist. Use when the user says "prep for fundraising", "data room", or "build the investor folder".
allowed-tools: Read, Write, Glob
---

# Data Room — structured for diligence

Pre-seed and seed investors want a clean data room before they wire. A messy Google Drive folder costs you 2 weeks of back-and-forth. The skill builds the structure, flags what's missing, and tells you what can wait.

## The structure (strict tree)

```
data-room/
├── 00-readme.md                      # what investors will find here
├── 01-company/
│   ├── certificate-of-incorporation.pdf
│   ├── articles.pdf
│   ├── cap-table.xlsx
│   ├── founders-agreement.pdf
│   └── employee-option-plan.pdf
├── 02-financials/
│   ├── bank-statements-last-6-months/
│   ├── p-and-l-last-12-months.pdf
│   ├── saas-metrics-snapshot.pdf     # from /cfo:saas-metrics
│   ├── cash-flow-13w.csv
│   └── burn-and-runway-history.pdf
├── 03-product/
│   ├── demo-video.mp4
│   ├── product-screenshots/
│   ├── roadmap.pdf                    # kept at high level
│   └── architecture-one-pager.pdf
├── 04-customers/
│   ├── customer-list-anonymized.csv   # MRR, tenure, industry
│   ├── top-5-customer-case-studies/
│   ├── logo-list.pdf
│   └── references.md                  # 3 customers willing to take an investor call
├── 05-market/
│   ├── competitive-landscape.pdf
│   ├── market-sizing-bottoms-up.xlsx
│   └── customer-research.md           # interview notes, survey data
├── 06-team/
│   ├── founder-bios.md
│   ├── org-chart.pdf
│   ├── key-hires-plan.md              # what you'll hire with the raise
│   └── linkedin-links.md
├── 07-legal/
│   ├── ip-assignment-agreements/
│   ├── customer-contracts/
│   ├── data-processing-agreements/
│   └── privacy-policy-and-terms.pdf
└── 08-pitch/
    ├── pitch-deck-cold.pdf            # from /ceo:pitch
    ├── pitch-deck-warm.pdf
    └── memo.md                        # 1-pager investor FAQ
```

## Required vs. optional by round

| Section | Pre-seed | Seed | Series A |
|---|---|---|---|
| 01 Company | Required | Required | Required |
| 02 Financials | Partial (whatever you have) | Full 12-month P&L | Full + audited if possible |
| 03 Product | Required | Required | Required |
| 04 Customers | Required (even if 5 customers) | Required | Required + cohort retention |
| 05 Market | 1-pager fine | Full bottoms-up | Full + competitor wins/losses |
| 06 Team | Required | Required | Required + key-hires signed |
| 07 Legal | Minimum viable | Full | Full + audit trail |
| 08 Pitch | Required | Required | Optional |

## Workflow

1. Ask: what round are you raising? (pre-seed / seed / A / bridge)
2. Scan the user's existing folders (Google Drive, Dropbox, local) — ask for locations.
3. Generate the folder tree in `data-room/`.
4. For each file location, check if it exists. If yes: ✅. If no: ❌ with a required/optional tag.
5. Produce `data-room/00-readme.md` — a one-page index for investors:

```md
# <Company> data room — <round>, <YYYY-MM>

## Navigation
- 01 Company — incorporation, cap table
- 02 Financials — bank statements, P&L, SaaS metrics, cash flow
- 03 Product — demo, screenshots, architecture
- 04 Customers — list, case studies, references
- 05 Market — landscape, sizing, research
- 06 Team — bios, hiring plan
- 07 Legal — agreements, policies
- 08 Pitch — deck, memo

## Point of contact
<name>, <role>
<email> · <phone>

## Latest metrics (<YYYY-MM>)
MRR €<X> · Runway <Y> months · Churn <Z>% · NRR <W>%
(See 02-financials/saas-metrics-snapshot.pdf for breakdown)
```

6. Output a **missing-docs checklist** sorted by priority:
```md
## Must-have before sending to investors
- [ ] cap-table.xlsx
- [ ] saas-metrics-snapshot.pdf
- [ ] customer-list-anonymized.csv

## Nice-to-have
- [ ] architecture-one-pager.pdf
- [ ] org-chart.pdf

## Skip at this stage
- [ ] audit-report (Series A+)
```

## Anti-patterns

- **Sharing the entire Google Drive** — investors hate navigating your mess. Invest 2 hours to structure this.
- **Making investors ask for customer references** — include them. Warm investors call refs within 48h.
- **Stale financials** — every number in the room must match the latest investor update.
- **No point of contact** — the readme always says who to ask.
- **"It's in Notion"** — export to PDF for legal/financial docs. Notion links rot.

## Access control

The skill also writes `data-room/ACCESS.md` — tracking who has access, when granted, when revoked. Critical if the raise stalls — revoke to prevent lingering stale copies.

## Composing with other skills

- Run `/cfo:saas-metrics` first → output goes into `02-financials/`.
- Run `/ceo:pitch` → output goes into `08-pitch/`.
- Run `/cfo:cash-flow-13w` → output goes into `02-financials/`.
