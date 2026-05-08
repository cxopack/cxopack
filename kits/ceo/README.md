# CxOPack — Harvey · CEO Kit

> **Meet Harvey. Your strategic co-founder. Installed in 30 seconds.**

Harvey is your CEO. Closer mentality — every output forces a decision, won't let you hedge. The kit is six production workflows plus a devil's-advocate subagent: the operating system for the "strategy + priorities + decisions + communications" loop — the work a founder always does and rarely does systematically.

---

## 📖 Full walkthrough

The deep documentation — every skill's inputs, outputs, example runs, MCPs to connect, and common pitfalls — lives on the docs site:

**→ [cxopack.com/docs/kits/ceo](https://cxopack.com/docs/kits/ceo)**

Come back here for the install; go there for the usage detail.

---

## 🗺️ The CEO journey — how to actually use this kit

Most founders over-index on "install" and under-index on "ritual." The kit only creates value if you run it on a cadence. Here's the onboarding journey:

### Week 1 — Install + first Monday ritual

1. **Install the kit** (see below)
2. **Create your `founder-log/` folder** in the project root — this is the shared workspace every skill reads and writes to:
   ```bash
   mkdir -p founder-log/{decisions,weekly,handoffs,investor-updates}
   ```
3. **Run `/ceo:weekly` on Monday morning.** 15 minutes. Brain-dump everything. Let the skill cut to 3 priorities with kill criteria. This is the anchor of everything else — **do not skip.**

### Week 2 — Add the Friday retro + your first decision log

1. **Friday 5pm:** `/ceo:journal`. Ten-minute end-of-week ritual. 3 wins, 1 failure, 1 lesson, 1 recalibration for Monday.
2. **Any decision that took >2 hours this week** → log it with `/ceo:decision-log`. Force two alternatives, one negative consequence, one observable "I was wrong if…" trigger.

### Week 4 — Monthly rhythm emerges

1. **First business day of the month:** `/ceo:board-update`. Six sections, investor-grade, whether you have investors yet or not. Reading last month's next to this month's is the real exercise.
2. If you also own the CFO Kit: run `/cfo:investor-update` first — its numbers block feeds into `/ceo:board-update` automatically.

### Ad-hoc — When a decision is weighing on you

- **Score it.** `/ceo:build-buy-kill` — Momentum, Market, Moat, Me (0–5 each). ≥14 → BUILD. 10–13 → BUY. 6–9 → DEFER. ≤5 → KILL.
- **Stress-test it.** If you've already decided and want pushback, invoke the `strategic-advisor` subagent. It steelmans your thinking, then attacks it, then recommends proceed / modify / pause.

### Before a fundraise

- **`/ceo:pitch`** generates a 10-slide pre-seed deck — strict structure, one idea per slide, one metric front-and-center on slides 2–6.
- Pair with `/cfo:data-room` (CFO Kit) and `/cmo:positioning` (CMO Kit) for the full raise package.

### The commands in order

```
/ceo:weekly          Monday 09:00
/ceo:journal         Friday 17:00
/ceo:decision-log    ad-hoc, for any call >€500 or >1 week
/ceo:build-buy-kill  ad-hoc, for any "should I" question
/ceo:board-update    first business day of each month
/ceo:pitch           before a raise
strategic-advisor    subagent, invoked explicitly
```

---

## What's inside

| Workflow | Does |
|---|---|
| `weekly-priorities` | Turn a Monday brain dump into 3 outcome-shaped priorities with kill criteria |
| `board-update` | Monthly 6-section investor update: headline, KPIs, wins, challenges, asks, what's next |
| `build-buy-kill` | Score any opportunity on Momentum / Market / Moat / Me — verdict with evidence |
| `decision-log` | Append-only decision log with alternatives, consequences, "I was wrong if" triggers |
| `founder-journal` | Friday retro ritual — wins, failure, lesson, recalibration |
| `pitch-deck` | 10-slide pre-seed deck generator — cold, warm, or update variant |
| `strategic-advisor` *(subagent)* | Devil's advocate on decisions you've already made |
| `/ceo:weekly` *(slash cmd)* | Monday ritual — runs weekly-priorities with full context from founder-log/ |

---

## Install

### Claude Code

```bash
git clone git@github.com:cxopack/cxopack-ceo.git .cxopack-ceo
mkdir -p .claude/skills .claude/agents .claude/commands/ceo
cp -r .cxopack-ceo/claude/skills/*         .claude/skills/
cp -r .cxopack-ceo/claude/subagents/*      .claude/agents/
cp -r .cxopack-ceo/claude/commands/ceo/*   .claude/commands/ceo/
mkdir -p founder-log/{decisions,weekly,handoffs,investor-updates}
```

Restart Claude Code. The slash menu now shows `/ceo:weekly`, `/ceo:board-update`, `/ceo:build-buy-kill`, `/ceo:decision-log`, `/ceo:journal`, `/ceo:pitch`.

### ChatGPT

Open `chatgpt/custom-gpt.md`. Paste the Instructions block into a new Custom GPT. Upload the files in `claude/skills/` as Knowledge for higher fidelity.

### Cursor / Windsurf

```bash
mkdir -p .cursor/rules && cp cursor/rules/*.mdc .cursor/rules/
```

### Any other LLM

Copy-paste `prompts/main.md` as system prompt.

---

## The Board (orchestration)

Harvey is even more valuable when he sits alongside the full suite under **The Board** — Donna (Chief of Staff) routes cross-functional questions to the right executives and synthesizes one answer. The Board is included with the All-Access Pass.

→ [cxopack.com/docs/kits/board](https://cxopack.com/docs/kits/board)

---

## Changelog

```
v0.1.0 — Initial release — 6 skills + 1 subagent + 1 slash command
```
