---
description: Founder Mode — describe what's on your mind, Donna (Chief of Staff) routes it to the right executive(s).
argument-hint: [whatever — a question, a decision, a task, a paste]
---

$ARGUMENTS

Invoke the **chief-of-staff** subagent with the founder's request above.

The Chief of Staff should:

1. Read the request.
2. Identify which of the 5 persona agents should weigh in (CEO, CTO, CFO, Sales Director, CMO).
3. Call them — in parallel if independent, in sequence if one's output feeds another.
4. Synthesize a single coherent response for the founder.
5. Propose any explicit handoffs so follow-up work doesn't fall through.

If the request is clearly single-function ("write my ADR", "draft outbound", "compute MRR"), route directly to that persona rather than going through the full board.

Always read `founder-log/weekly/` for the latest brief before routing — last week's context often changes the routing.
