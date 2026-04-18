---
description: Structured handoff from one executive persona to another.
argument-hint: [from: CEO|CTO|CFO|SALES|CMO] [to: CEO|CTO|CFO|SALES|CMO] [task description]
---

$ARGUMENTS

Invoke the receiving persona (the `to:` persona) with the handoff below.

## Format used across the board

```md
FROM: <from-persona>
TO: <to-persona>
TASK: <one sentence>
CONTEXT: <why this matters, what changed, relevant numbers / documents>
DELIVERABLE: <what you want back, in what format, saved where>
DUE: <date>
KILL CRITERIA: <if X by Y, stop and revisit>
```

## Sequence

1. Parse the arguments. Ensure FROM and TO are both valid persona names.
2. Read the most recent `founder-log/weekly/` brief for context the receiving persona needs.
3. Write the handoff to `founder-log/handoffs/YYYY-MM-DD-<from>-<to>-<slug>.md`.
4. Invoke the receiving persona with the full handoff as context.
5. The receiving persona **acknowledges** the handoff (confirms understanding of the task, surfaces any missing context, confirms the deliverable + due date) — they do NOT execute yet. Execution is a separate step.
6. Update the handoff file with the acknowledgement + "confirmed" status.

## Why handoffs are structured

Unstructured handoffs (Slack messages, emails) fail because:
- The "TO" doesn't know the deadline
- The "DELIVERABLE" is vague
- There's no kill criteria (= it drifts or never dies)

A structured handoff forces clarity before work starts. That's the whole point.

## Closing a handoff

When the deliverable is done, the receiving persona updates the handoff file with:

```md
STATUS: Complete
DELIVERED: <link to output>
NOTES: <anything the requester should know>
```

Open handoffs that are past their DUE date get surfaced in the next `/board:weekly` meeting.
