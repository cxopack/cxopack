# CxOPack — CFO Kit

> **Your finance co-founder — cash, metrics, investor-grade numbers.**

13-week cash flow, SaaS metrics, investor updates, data room, runway and pricing experiments.

## Install

### Claude Code
```bash
git clone git@github.com:cxopack/cxopack-cfo.git .cxopack-cfo
mkdir -p .claude/skills .claude/agents .claude/commands
cp -r .cxopack-cfo/claude/skills/* .claude/skills/
cp -r .cxopack-cfo/claude/subagents/* .claude/agents/
cp -r .cxopack-cfo/claude/commands/* .claude/commands/
```

### ChatGPT / Cursor / Any LLM
Same pattern as the other kits — see `chatgpt/`, `cursor/rules/`, `prompts/main.md`.

## What's inside

| Skill | Does |
|---|---|
| **cash-flow-13w** | 13-week rolling cash flow model (markdown + CSV output) |
| **saas-metrics** | Turn Stripe exports into MRR, ARR, CAC, LTV, churn with deltas |
| **investor-update** | Numbers-first monthly update for investors |
| **data-room** | Structured data room index + missing-docs checklist |
| **pricing-experiments** | Design A/B pricing experiments with hypothesis & guardrails |
| **runway-scenarios** | Base/bull/bear runway with hiring triggers |
