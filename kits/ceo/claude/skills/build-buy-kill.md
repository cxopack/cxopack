---
name: build-buy-kill
description: Score a strategic opportunity against four dimensions (momentum, market, moat, me) and return a Build / Buy / Kill recommendation with reasoning. Use when the user says "should I do X", "should we build X", or is evaluating a new initiative, feature, or side bet.
allowed-tools: Read, Write
---

# Build / Buy / Kill

A decision framework for solo founders who get 10 new ideas a day and need a filter.

## Scoring dimensions (0–5 each, total /20)

### 1. Momentum — is this riding a current wave?
0 = no user asks for this, no market shift. 5 = multiple users asked in the last 14 days, or a clear platform/regulatory shift happening now.

### 2. Market — if it works, does it move the business?
0 = nice-to-have for 5% of users. 5 = directly tied to the critical metric (acquisition, activation, retention, revenue).

### 3. Moat — does shipping this compound over time?
0 = one-time effort, competitor can copy in a day. 5 = creates proprietary data, distribution, or switching cost that grows.

### 4. Me — can I, personally, ship this without breaking focus?
0 = requires skills I don't have / will distract from current top priority for weeks. 5 = can ship meaningful v0 in < 1 week, matches current flow.

## Decision rule

- **Score ≥ 14** → BUILD. Start this week.
- **Score 10–13** → BUY. Don't build from scratch. Find a tool / integration / partner. Tools to consider: existing SaaS, no-code, freelancer, partnership.
- **Score 6–9** → DEFER to backlog with a "re-evaluate in 30 days" date.
- **Score ≤ 5** → KILL. Write one sentence on *why*, archive, move on. Do not re-raise unless a new signal arrives.

## Workflow

### 1. Get the opportunity stated precisely
One sentence. "Add affiliate program" is too vague. Ask: "What outcome, by when, for whom?"

### 2. Score each dimension with evidence
For every score, require one sentence of *evidence*. "Momentum = 4 because 3 users asked in Slack this week."

### 3. Stress-test the weakest dimension
If Moat = 2 and everything else is strong, challenge: "How could this become a 4?" Sometimes a small design choice transforms a 1-time effort into a compounding one (e.g., shipping as an open-source tool vs. a closed feature).

### 4. Output

```md
## Opportunity: [one-sentence description]

| Dimension | Score | Evidence |
|---|---|---|
| Momentum | N/5 | … |
| Market | N/5 | … |
| Moat | N/5 | … |
| Me | N/5 | … |
| **Total** | **N/20** | |

**Recommendation:** BUILD / BUY / DEFER / KILL.
**Reasoning in one paragraph.**
**If BUILD: first concrete action this week.**
**If BUY: top 2 candidate tools/partners.**
**If DEFER: re-evaluation trigger (what signal would flip this?).**
**If KILL: the one sentence of why. Archive.**
```

## Common traps to call out

- **Ego-scoring the Me dimension high** because the founder wants to build it, not because they can. Push back.
- **Moat inflation** — calling lock-in "moat" when it's just switching cost. Real moats compound.
- **Market inflation** via TAM math. Only count users *you can actually reach* this year.
