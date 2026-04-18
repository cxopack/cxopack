---
description: Build an investor-grade data room — structured folder tree + missing-docs checklist.
argument-hint: [pre-seed | seed | series-a]
---

$ARGUMENTS

Run the **data-room** skill. Generate the 8-section folder structure under `data-room/`: 01-company / 02-financials / 03-product / 04-customers / 05-market / 06-team / 07-legal / 08-pitch.

For the round-level required (pre-seed vs. seed vs. A), produce:
1. The folder tree (create empty folders so they're visible).
2. A readme at `data-room/00-readme.md` (index + point of contact + latest metrics).
3. A checklist of missing docs tagged Must-have / Nice-to-have / Skip.
4. An `ACCESS.md` with grant/revoke dates.

Pull metrics from `/cfo:saas-metrics`, pitch from `/ceo:pitch`, cash flow from `/cfo:cash-flow`.
