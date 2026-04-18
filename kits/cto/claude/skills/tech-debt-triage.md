---
name: tech-debt-triage
description: Weekly 20-minute tech debt scan that ranks debt by (pain × frequency) / fix-cost and produces one item to ship this week. Use on Fridays, or when the user says "what should I fix", or when velocity feels slow.
allowed-tools: Read, Grep, Glob, Write
---

# Tech Debt Triage — Friday ritual

Tech debt isn't "all code that could be better." It's **code that makes the next change slower than it should be**. The triage finds the piece of that debt with the highest ROI this week, and you ship it.

## The formula

Every debt item gets scored:
```
score = (pain × frequency) / fix-cost
```

- **Pain** (1-5): how much does this slow you when you touch it? (1 = mild annoyance, 5 = fear)
- **Frequency** (1-5): how often do you touch this code/flow? (1 = quarterly, 5 = daily)
- **Fix cost** (hours): honest engineering time, including tests + deploy

## The 20-minute ritual (Friday, on repeat)

### Step 1: Inventory (5 min)
Collect debt candidates from:
- Every `TODO`, `FIXME`, `HACK` in the codebase (`grep -r` across repo).
- Last week's production incidents / errors from Sentry.
- Any PR comment that said "we should clean this up later."
- Your own notes: the files you avoided on Tuesday.

Max 10 items per triage. If more, skip the obvious non-issues.

### Step 2: Score (10 min)
For each:
```md
| Item | Pain | Freq | Fix (h) | Score |
|---|---|---|---|---|
| <desc> | 4 | 5 | 2 | 10.0 |
```

### Step 3: Pick 1 (2 min)
Highest-score item. If tied, pick the one with the lowest fix cost (ship something, learn).

### Step 4: Commit (3 min)
Write to `founder-log/tech-debt/YYYY-WW.md`:
```md
# Week YYYY-WW · tech debt

## Shipping this week
**<Item>** — score <N> — fix cost <h>h
Definition of done: …

## Deferred
- <Item 2> — will revisit when …
- <Item 3> — kill (reason)

## Killed
- <Item 4> — not actually debt, was just dislike of the code
```

## Anti-patterns

- **"Big refactor week"** — solo founders cannot afford refactor weeks. Ship one debt item per week in a normal sprint, forever.
- **Rewriting for rewrite's sake** — if pain × frequency is low, the fix is worth zero regardless of how much better the new code looks.
- **Collecting debt without ever shipping a fix** — the ritual fails if you triage more than you ship. Alternate: if you haven't shipped a debt fix in 3 weeks, you're avoiding the list.
- **Score inflation** — everything at pain 5 means the scoring is broken. Calibrate: pain 5 should be reserved for "I genuinely fear this code."
- **"This is a bigger rewrite"** — if you can't fix it in <1 day, break it into smaller slices. Ship one slice.

## Anti-patterns specifically for debt detection

- **Code that's ugly but stable** — not debt. Leave it.
- **Test coverage gaps** — debt only if you're shipping bugs there. If it's boring code that hasn't broken in a year, don't "improve coverage" for its own sake.
- **Outdated dependencies** — debt only when a CVE hits or a required feature lives in a newer version. "Keeping deps up to date" as a ritual wastes hours.

## Monthly review

Once a month, look at the trailing 4 triages. If the same item is scored high every week but never fixed, either:
1. The fix-cost estimate is wrong — re-estimate.
2. The item isn't actually worth fixing — downgrade and move on.
3. You're avoiding it for a non-technical reason — that's the signal to force the schedule.
