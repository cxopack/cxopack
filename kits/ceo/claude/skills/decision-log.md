---
name: decision-log
description: Log a strategic decision with its alternatives, reasoning, reversal criteria, and owner. Use when the user says "log this decision", "I'm deciding X", or "document this call". Not for reversible micro-decisions — those don't need logging.
allowed-tools: Read, Write, Edit
---

# Decision Log

Founders forget why they decided things. Three months later, they re-relitigate the same question with no memory of the original trade-offs. The decision log fixes that.

## When to log (and when NOT to)

Log when:
- The decision costs >€500 or >1 week of work.
- It affects more than one function (e.g., pricing touches sales + finance).
- Reversing it is slow (>1 week) or painful (customer-facing).
- You'll need to explain it to an investor, new hire, or yourself in 6 months.

Don't log:
- Reversible micro-choices (library versions, color hex, copy tweaks).
- Decisions already covered by an ADR (those live in `docs/adr/`).

## Format (strict)

Write to `founder-log/decisions/YYYY-MM-DD-<slug>.md`:

```md
# Decision · <short title>

**Date:** YYYY-MM-DD
**Owner:** <who owns the outcome>
**Status:** Open | Decided | Reversed | Superseded by <link>

## The question
<one or two sentences>

## The decision
<imperative voice: "We will X because Y">

## Alternatives considered
1. **<option A>** — rejected because …
2. **<option B>** — rejected because …

## Expected consequences
- Positive: …
- Negative: … *(force at least one)*
- Uncertain: …

## I was wrong if
<observable signal — specific number or event — that means revisit>

## Review date
<when to check in; usually 30 or 90 days out>
```

## Workflow

1. Ask the founder for: title, question, decision (imperative), 2+ alternatives.
2. Force one **negative** consequence. If they can't name one, challenge: "What's the downside? What's the tradeoff?"
3. Force the "I was wrong if" trigger to be **observable** — a number, a customer action, a calendar date. Not "if it doesn't work out."
4. Auto-increment if a file at today's date+slug already exists.
5. Add a line to `founder-log/decisions/index.md` (create it if missing): `- [YYYY-MM-DD — <title>](./<filename>.md) — <status>`.
6. Confirm the review date is in the user's calendar (if the calendar MCP is available, add the event).

## Anti-patterns

- "I chose X because it felt right." → Force a concrete reason.
- "We'll reassess later." → Force a specific trigger and date.
- Rewriting old decisions in place. → New decisions go in new files. Old ones get `Superseded by` to link forward.
- Logging the same question twice across files. → If the question already has a log, append or supersede.

## Quarterly review

Every quarter, read `founder-log/decisions/index.md`. For each `Decided` entry past its review date: check the "I was wrong if" signal. If hit, flip to `Reversed` and write a short why. Decision hygiene = compounding clarity.
