# CxOPack — CTO Kit

> **Your technical co-founder. Boring choices, sharp reviews, MVP discipline.**

The CTO Kit is six production workflows plus a code-review subagent. It enforces the discipline a senior staff engineer brings to a small team — default to the boring choice, write the ADR, cut the MVP, pay down the right debt.

---

## 📖 Full walkthrough

**→ [cxopack.com/docs/kits/cto](https://cxopack.com/docs/kits/cto)**

Every skill's inputs, outputs, example runs, MCPs to connect, common pitfalls.

---

## 🗺️ The CTO journey — how to actually use this kit

### Day 1 — Install + document your current architecture

1. **Install** the kit (see below).
2. **Create `docs/adr/`** if it doesn't exist — this is where every architecture decision lives.
3. Pick the three biggest architectural choices you've made in the last six months that are *not* written down. Run `/cto:adr` on each — 10 minutes per ADR. You now have a real architecture record.

### Week 1 — Code-review becomes a habit

1. Before merging the next PR, invoke the `code-review` subagent on the diff.
2. **Rule:** no merge into `main` if the subagent flags a ✋ **Must-fix** item.
3. After 5 PRs, you'll start writing PRs differently — you'll anticipate the review.

### Week 2 — Friday debt triage

1. **Friday 4pm:** `/cto:tech-debt` — 20-minute scan. Score items on `(pain × frequency) / fix-cost`.
2. Ship one item next week. **Just one.** Solo founders can't afford refactor weeks.

### Ad-hoc — Any "should I build X?" moment

- **`/cto:build-vs-buy`** — score on Differentiation, Speed-to-value, Ops burden, Switching cost.
- Default is BUY for: auth, email, payments, analytics, storage, search, queues, feature flags.
- Default is BUILD only for: your core UX, your domain model, the thing customers pay you for.

### Before any new feature

- **`/cto:mvp-scope`** — force the hypothesis into one sentence, RICE-score every feature, cut to 5, produce the "explicitly NOT in MVP" list.
- If you can't ship the MVP in 2 weeks, the hypothesis is too big. Split it.

### Before a new project

- **`/cto:stack`** — intake your strongest language, product shape, deadline, ops capacity. Default to the boring, proven stack. Novelty requires justification.

### The commands in order

```
/cto:adr            ad-hoc, before any hard-to-reverse decision
/cto:mvp-scope      ad-hoc, before shipping a new feature set
/cto:code-review    before every merge (subagent)
/cto:stack          ad-hoc, starting a new project / rewrite
/cto:build-vs-buy   ad-hoc, any capability question
/cto:tech-debt      Friday 16:00, weekly ritual
```

---

## What's inside

| Workflow | Does |
|---|---|
| `adr` | Architecture Decision Record generator (Michael Nygard format) — forces one negative consequence + observable revisit trigger |
| `mvp-scope` | Cut a feature list into a 2-week shippable MVP with RICE + kill criteria |
| `stack-advisor` | Pick a boring, proven stack based on your actual constraints |
| `build-vs-buy` | Score capabilities on Differentiation / Speed / Ops burden / Switching cost |
| `tech-debt-triage` | Weekly 20-min scan; produces 1 item to ship this week |
| `code-review` *(subagent)* | PR review focused on correctness + blast radius; skips style nits |

---

## Install

### Claude Code

```bash
git clone git@github.com:cxopack/cxopack-cto.git .cxopack-cto
mkdir -p .claude/skills .claude/agents .claude/commands/cto
cp -r .cxopack-cto/claude/skills/*         .claude/skills/
cp -r .cxopack-cto/claude/subagents/*      .claude/agents/
cp -r .cxopack-cto/claude/commands/cto/*   .claude/commands/cto/
mkdir -p docs/adr founder-log/tech-debt
```

### ChatGPT / Cursor / Any LLM

Same pattern as other kits — see `chatgpt/custom-gpt.md`, `cursor/rules/`, `prompts/main.md`.

---

## The Board (orchestration)

Decisions like "build vs. buy" or "hire an engineer" usually need the CEO + CFO alongside the CTO. The Board (included with All-Access Pass) routes to all three in parallel and synthesizes one brief.

→ [cxopack.com/docs/kits/board](https://cxopack.com/docs/kits/board)

---

## Changelog

```
v0.1.0 — Initial release — 6 skills + 1 subagent
```
