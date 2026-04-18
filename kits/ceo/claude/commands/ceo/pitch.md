---
description: Generate a 10-slide pre-seed pitch deck in markdown.
argument-hint: [cold | warm | update — default cold]
---

$ARGUMENTS

Run the **pitch-deck** skill. Generate the 10 strict slides (title, why now, problem, solution, how it works, traction, model, market, team, ask). One idea per slide; one metric front and center on slides 2-6; no TAM charts, no swoosh graphs, no team slide before traction.

Variant:
- `cold` (default): public-facing, forwardable, no freshness-decay numbers
- `warm`: post-first-call, deeper traction numbers, specific asks
- `update`: 5-slide quarterly investor update format

Save to `pitch/<variant>-<YYYY-MM-DD>.md`.
