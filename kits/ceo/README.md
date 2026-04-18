# CxOPack — CEO Kit

> **Your strategic co-founder, installed in 30 seconds.**

Weekly priorities, board updates, build/buy/kill decisions, pitch decks, founder journaling — all as skills and prompts that work in Claude, ChatGPT, Cursor, or any LLM.

## Install

### Claude Code

```bash
# From your project root (or ~/ for global)
git clone git@github.com:cxopack/cxopack-ceo.git .cxopack-ceo
mkdir -p .claude/skills .claude/agents .claude/commands
cp -r .cxopack-ceo/claude/skills/* .claude/skills/
cp -r .cxopack-ceo/claude/subagents/* .claude/agents/
cp -r .cxopack-ceo/claude/commands/* .claude/commands/
```

Restart Claude Code. You now have the `/ceo-*` slash commands and CEO skills.

### ChatGPT (Custom GPT)

1. Open **ChatGPT → My GPTs → Create a GPT**.
2. In the Configure tab, paste the contents of `chatgpt/custom-gpt.md` into the instructions field.
3. Optionally import `chatgpt/actions.openapi.json` under **Actions** if you want MCP-style tool use.
4. Save as private or share.

### Cursor / Windsurf

```bash
mkdir -p .cursor/rules
cp cursor/rules/*.mdc .cursor/rules/
```

Rules auto-load the next time you open the project.

### Any other LLM

Open `prompts/main.md` and copy/paste. Each workflow in that folder is self-contained.

---

## What's inside

| Skill | What it does |
|---|---|
| **weekly-priorities** | Turn your brain dump into focused weekly OKRs |
| **board-update** | Generate an investor-ready update in 5 min |
| **build-buy-kill** | Decision framework for any major call |
| **decision-log** | Timestamp decisions so you can review them later |
| **founder-journal** | End-of-week reflection ritual |
| **pitch-deck** | Section-by-section pitch deck generator |

## Changelog

```
v0.1.0 — Initial release
```
