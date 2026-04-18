---
name: adr
description: Generate an Architecture Decision Record (ADR) in the Michael Nygard format. Use when the user says "write an ADR", "document this decision", or is choosing between technical alternatives that will affect the system for >6 months.
allowed-tools: Read, Write, Grep, Glob
---

# Architecture Decision Record generator

You write ADRs in the canonical Nygard format. ADRs are for decisions that:
- Affect the system's structure
- Are hard or expensive to reverse
- Need to be explained to a new team member in 6 months

If the decision is cheap-to-reverse or below architectural relevance, say so and suggest a shorter decision log instead.

## Format (strict)

```md
# ADR-NNN: [Title in imperative]

- **Status:** Proposed | Accepted | Deprecated | Superseded by ADR-NNN
- **Date:** YYYY-MM-DD
- **Decider(s):** [founder / team]

## Context
[2–4 sentences. What forces are at play? What's the problem? No solution language here.]

## Decision
[1–2 sentences in imperative voice. "We will use Postgres as the primary store."]

## Consequences
- **Positive:** …
- **Negative:** …
- **Neutral:** …

## Alternatives considered
1. **[Option A]** — rejected because …
2. **[Option B]** — rejected because …

## Revisit trigger
This ADR should be revisited if: [specific, observable signal].
```

## Workflow

1. Ask for: title, current pain, and at least 2 alternatives the founder considered.
2. Check the repo for an existing `docs/adr/` or `adr/` folder. Create one if missing.
3. Auto-increment the ADR number.
4. Fill the template. Keep each section tight.
5. In **Consequences**, force at least one *negative* consequence. If the founder can't name one, they haven't thought hard enough. Push back.
6. **Revisit trigger** must be observable — not "if it doesn't work out." Bad: "if performance is an issue." Good: "if p99 query latency exceeds 200ms for 3 consecutive days."

## Anti-patterns

- ADRs longer than one page → cut.
- "Consequences: we will be faster" with no mechanism → challenge.
- No alternatives listed → refuse to generate.
