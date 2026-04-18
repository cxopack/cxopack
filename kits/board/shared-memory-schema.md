# `founder-log/` — Shared Memory Schema

Every CxOPack agent reads from and writes to a single shared workspace: `founder-log/`. This is where the board's collective memory lives. Without it, each kit operates in isolation; with it, they behave like a real executive team.

## Layout

```
founder-log/
├── priorities.md               # Current quarter priorities (CEO owns, everyone reads)
├── metrics.md                  # Source of truth on numbers (CFO owns, everyone reads)
├── decisions/
│   ├── index.md                # Chronological table of all decisions
│   └── YYYY-MM-DD-<slug>.md    # One file per strategic decision
├── weekly/
│   ├── index.md                # Optional — recent weeks list
│   └── YYYY-WW.md              # One file per week (priorities Monday + retro Friday merge into one file)
├── handoffs/
│   ├── index.md                # Open handoffs list
│   └── YYYY-MM-DD-<from>-<to>-<slug>.md
├── investor-updates/
│   └── YYYY-MM.md              # Monthly investor update (both numbers + narrative)
├── runway-scenarios-YYYY-MM.md # Refreshed monthly
└── tech-debt/
    └── YYYY-WW.md              # Weekly tech debt triage
```

## File semantics

### `priorities.md` (CEO owns)
- 3 priorities only. No more.
- Replaced every Monday during `/ceo:weekly` or `/board:weekly`.
- Format: one `## Priority N: <title>` block per priority with outcome, leading indicator, kill criteria, Monday-AM action.

### `metrics.md` (CFO owns)
- Single source of truth for numbers.
- Updated on first business day of each month via `/cfo:saas-metrics`.
- Never edited by hand — always output of a skill.
- Other personas **read-only** — they cite the file when quoting numbers.

### `decisions/` (append-only)
- One file per strategic decision (see `/ceo:decision-log`).
- `index.md` lists all decisions with status (Open / Decided / Reversed / Superseded).
- Decisions are append-only: new states (reversal, supersedure) create new files, linked back.
- Read by every agent before giving advice on adjacent topics — the memory of what's already been decided.

### `weekly/` (CEO + Chief of Staff own)
- One file per calendar week.
- Contains Monday priorities + Friday retro + (during `/board:weekly`) all-persona reads.
- Read by every agent at the start of a new conversation.

### `handoffs/` (Chief of Staff manages)
- One file per structured handoff (see `/board:handoff`).
- `index.md` lists open handoffs sorted by due date.
- Automatically surfaced in `/board:weekly` if past due.

### `investor-updates/` (CEO + CFO co-own)
- Monthly — both numbers section (CFO) and narrative (CEO).
- Cited by CMO when doing launch comms; cited by CFO for concentration-risk tracking.

### `runway-scenarios-*.md` (CFO owns)
- Refreshed monthly or when triggers fire (new hire, big churn, price change).
- Read by CEO before any hiring / spend decision.

### `tech-debt/` (CTO owns)
- Weekly triage output.
- Read by CTO (trend watching) and CEO (if pattern of unfixed debt hurts priorities).

## Rules

1. **One agent writes; all agents read.** The ownership column above is the writer; everyone reads.
2. **Never edit another agent's file by hand.** Always via that agent's skill or command.
3. **Files are cheap; re-running skills is expensive.** Save outputs early; re-run only when needed.
4. **Old files stay.** No deletion. History compounds over time.
5. **The `index.md` of each folder is auto-maintained** by the skill that writes the folder. Never hand-editing.

## How it enables the board

Because every agent reads `founder-log/` before responding:

- The **CMO** knows the latest MRR when writing launch copy (`metrics.md`) → no false claims.
- The **Sales Director** knows the latest priorities when prioritizing deals (`priorities.md`) → deals align with strategy.
- The **CTO** knows the runway posture when proposing architectures (`runway-scenarios-*.md`) → no over-engineering before signal.
- The **CEO** sees pending CTO handoffs (`handoffs/`) → doesn't drop the ball.
- The **Chief of Staff** sees everything → can intelligently route.

## Privacy

`founder-log/` lives in the user's own project. It never leaves their machine unless they deliberately share it. This is the founder's cognitive backup, not a cloud service.
