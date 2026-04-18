---
description: Big-decision board round — each relevant executive weighs in, synthesis recommends.
argument-hint: [the decision in one sentence]
---

$ARGUMENTS

Invoke the **chief-of-staff** to run a board-level decision review.

## Sequence

1. **Restate the decision in one sentence.** If the founder gave a vague question, narrow it until it's a concrete decision with named options.

2. **Route to relevant personas.** Default: all 5. Skip any whose function is genuinely irrelevant (be generous — most big decisions touch ≥3).

3. **Each persona answers 4 questions** about the decision from their function's POV:
   - What's the upside if we do this?
   - What's the downside?
   - What would have to be true for this to work?
   - What's the one thing you'd push back on?

4. **Synthesize into:**

```md
# Board decision — <title>

## The decision
<one sentence>

## Named options
1. <Option A>
2. <Option B>
3. <Option C — status quo, always include>

## By function

### CEO
- Upside: …
- Downside: …
- Required: …
- Pushback: …

### CTO
- ...

(...each persona consulted...)

## Disagreements to resolve
- <CEO vs. CTO on <point>>: reconcile by <decision>
- (...)

## Recommendation
<One paragraph. Pick an option. Name why. Name what you'd do differently than the default.>

## Kill criteria
<Specific, observable signals that would reverse this decision.>

## Log
Saved to `founder-log/decisions/YYYY-MM-DD-<slug>.md` via `/ceo:decision-log`.
```

5. **Save the decision** via the `decision-log` skill — this is not optional for board-level decisions.

## Rules

- Every persona must give an answer. "I have nothing to add" is not acceptable for a board decision.
- Surface disagreements — don't smooth them over.
- Always include the status-quo option ("don't do this"). Many decisions should end there.
- The recommendation is one option, not "it depends."
