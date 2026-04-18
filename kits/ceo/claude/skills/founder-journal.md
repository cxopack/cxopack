---
name: founder-journal
description: End-of-week founder reflection ritual — 3 wins, 1 failure, 1 lesson, 1 recalibration. Use when the user says "Friday reflection", "founder journal", or "retro the week".
allowed-tools: Read, Write
---

# Founder Journal — Friday ritual

Not therapy. Not a diary. A 10-minute compounding mechanism that extracts signal from a week and feeds it back into next week's priorities.

## Why this works

- **Wins prove the hypothesis.** Three specific wins beats "good week."
- **One failure, named.** Not three, not "some things didn't go well." One clearly named miss.
- **One lesson extracted.** The cost of the failure is paid — the lesson is the asset.
- **One recalibration.** What changes on Monday.

Keep it short. Long journals don't get read next week. That's the point — you want to re-read it.

## Format

Write to `founder-log/weekly/YYYY-WW.md`:

```md
# Week YYYY-WW · Friday retro

## 3 wins (specific, numeric where possible)
1. …
2. …
3. …

## 1 failure (named, no euphemism)
…

## 1 lesson (from the failure, testable)
…

## 1 recalibration (changes what you do Monday)
…

## Energy check (gut feel)
- This week I felt [crushed / productive / distracted / stuck / flying].
- If I had to name one thing that drained me: …
- If I had to name one thing that energized me: …
```

## Workflow

1. Ask for the week's 3 wins. If the founder lists 1 or 5, push to 3.
2. Ask for the 1 failure. Reject vague answers ("things didn't go smoothly"). Force a named event.
3. Ask: "What's the lesson?" — must be a testable statement, not a platitude. "Hire slower" ❌. "Require 2 paid trial weeks before any contractor" ✅.
4. Ask: "What changes Monday?" — specific, this-week action, not a value shift.
5. Energy check — 3 lines max. Helps detect burnout cycles when reviewed monthly.
6. Save to file. Update `founder-log/weekly/index.md`.

## Anti-patterns

- "No wins this week." → Dig harder. Even a canceled meeting that saved 2 hours counts. If truly no wins, that's the failure.
- "Everyone does their best." → Lessons are specific, not generic.
- Writing to self-impress. → Write for future-you reading this cold in 8 weeks. That person won't remember the context.
- Skipping the ritual. → Better a 3-minute entry than a skipped week. Consistency > depth.

## Monthly review

Once a month, re-read the last 4 weekly files in sequence. Look for: (a) a failure that repeats → that's the pattern to break; (b) wins that cluster around one bet → that's the lever to lean on.
