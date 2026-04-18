---
description: Monday weekly board meeting — all 5 personas give a read, Chief of Staff synthesizes.
---

Run the weekly board meeting. Orchestrated by the **chief-of-staff** subagent.

## Sequence

1. **Read the previous weekly brief** at `founder-log/weekly/<YYYY-WW-1>.md` if it exists. Check: which priorities were set, which were hit, which slipped.

2. **Ask the founder for 2 minutes of raw thoughts.** Whatever's on their mind right now — concerns, wins, questions. Don't let them skip this.

3. **In parallel, invoke each persona** with: "What's your 3-bullet read for this week given the context above?"
   - **CEO** — strategic posture, priorities health
   - **CTO** — shipping velocity, tech debt, upcoming decisions
   - **CFO** — cash, metrics, runway posture
   - **Sales Director** — pipeline state, deals worth focus
   - **CMO** — content shipped, positioning test results, next launch

4. **Synthesize the weekly board brief** — single document the founder can re-read on Friday:

```md
# Weekly Board — Week YYYY-WW

## Context from last week
<1 line on what was planned vs. what happened>

## Founder's raw dump
<their 2-minute brain dump, summarized in 3 lines>

## By function

### CEO
- <bullet>
- <bullet>
- <bullet>

### CTO
- ...

### CFO
- ...

### Sales Director
- ...

### CMO
- ...

## Cross-functional pattern
<the one pattern that shows up across multiple functions>

## This week's 3 priorities (locked)
1. <outcome, kill criteria>
2. <outcome, kill criteria>
3. <outcome, kill criteria>

## Open handoffs
- <CEO → CTO>: <task, due>
- <CFO → CEO>: <task, due>

## Question to answer before Monday
<one provocative question>
```

5. **Save to** `founder-log/weekly/YYYY-WW.md`.

6. **Update** `founder-log/priorities.md` with the 3 priorities (replace last week's).

## Rules

- Cap the whole meeting at 20 minutes.
- If a persona's read is generic, re-invoke asking for the one specific thing they'd flag this week.
- The "cross-functional pattern" is the real value — if no pattern emerges, the board is fine; if one does, that's the strategic focus.
- Always end with the one question. Questions compound more than answers.
