# CxOPack — Board

> **The orchestration layer that makes 5 kits feel like a team.**

The Board is what turns CxOPack from "5 useful kits" into "an executive team with a Chief of Staff." It's included in the **All-Access Pass** only — not sold standalone.

## What ships

| Type | Name | What it does |
|---|---|---|
| Subagent | `chief-of-staff` (Sam) | Routes any founder request to the right executive(s), synthesizes one answer |
| Subagent | `ceo`, `cto`, `cfo`, `sales-director`, `cmo` | Persona agents — each uses its kit's skills under a consistent voice |
| Slash cmd | `/founder` | Top-level entry: describe anything, Sam routes it |
| Slash cmd | `/board:weekly` | Monday ritual — all 5 personas give a read, synthesized into one brief |
| Slash cmd | `/board:decision` | Big decisions — each relevant exec weighs in, synthesis recommends |
| Slash cmd | `/board:brief` | Exploratory — "brief me on X from the board's perspective" |
| Slash cmd | `/board:handoff` | Structured handoff from one exec to another with SLA |
| Shared | `founder-log/` schema | Single workspace all agents read/write — the board's collective memory |

## Install

```bash
git clone git@github.com:cxopack/cxopack-board.git .cxopack-board
mkdir -p .claude/agents .claude/commands/board
cp -r .cxopack-board/claude/agents/*       .claude/agents/
cp -r .cxopack-board/claude/commands/board/* .claude/commands/board/
cp    .cxopack-board/claude/commands/founder.md .claude/commands/

# Initialize the shared workspace (one-time)
mkdir -p founder-log/{decisions,weekly,handoffs,investor-updates,tech-debt}
cp .cxopack-board/shared-memory-schema.md founder-log/README.md
```

Restart Claude Code. Verify:
- `/founder` appears in the slash menu
- `/board:weekly`, `/board:decision`, `/board:brief`, `/board:handoff` appear

## How to use it

### First-time ritual
```
/founder My startup's pricing is probably wrong and I don't know where to start.
```
Chief of Staff routes to CFO (model), Sales Director (sell-through), CMO (narrative), CEO (strategic framing). You get one synthesized brief.

### Weekly cadence
- **Monday 9:00** — `/board:weekly` (15–20 min, the cornerstone ritual)
- **Friday 17:00** — `/ceo:journal` (end-of-week retro, updates the weekly file)

### Big decisions
`/board:decision Should I raise a seed round now or extend runway via revenue?` → every exec weighs in, one recommendation.

### Handoffs
After any brief that implies action:
`/board:handoff CEO CTO "Scope the 2-week MVP for the referral feature by Friday"` → CTO acknowledges, writes spec to `docs/specs/`, updates handoff file when done.

## The `founder-log/` workspace

Every agent reads from and writes to this shared folder. See `shared-memory-schema.md` for the full spec.

Critically: the Board is not magical without this layer. Skip it and agents operate in isolation.

## ChatGPT install

See `chatgpt/custom-gpt.md` — the Chief of Staff configured as a Custom GPT with all 5 personas in its instructions. Lossy compared to Claude's subagent delegation, but workable if Claude Code isn't your main tool.

## Principles

1. **The Chief of Staff doesn't write; it routes and synthesizes.**
2. **Personas disagree sometimes.** The CEO may say build; the CTO may say buy. Surface the disagreement; don't smooth it over.
3. **Every handoff has a deadline.** Unstructured passes drift; structured handoffs resolve.
4. **Write once, read five times.** The shared `founder-log/` is the point — don't duplicate state across skills.
5. **Keep the weekly ritual non-negotiable.** The whole system compounds on the weekly brief.
