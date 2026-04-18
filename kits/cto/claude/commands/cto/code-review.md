---
description: PR-style code review — correctness, blast radius, robustness. Skip style nits.
argument-hint: [diff / PR / files to review]
---

$ARGUMENTS

Invoke the **code-review** subagent on the provided diff. Priorities:

1. Correctness + blast radius (data loss, security, regressions, rollback path)
2. Robustness at boundaries (timeouts, null checks, error handling at I/O)
3. Clarity a future reader will thank you for (names, dead code)

Skip: style nits a linter catches. Bikeshedding. Hypothetical edge cases without evidence.

Output: ✋ Must fix / 🤔 Should consider / 👀 Nit / What's good (always name one).
