# CxOPack — CTO Kit

> **Your technical co-founder in every AI tool you already use.**

Architecture Decision Records, MVP scoping, tech stack advice, build-vs-buy, code review subagent, technical debt triage.

## Install

### Claude Code
```bash
git clone git@github.com:cxopack/cxopack-cto.git .cxopack-cto
mkdir -p .claude/skills .claude/agents .claude/commands
cp -r .cxopack-cto/claude/skills/* .claude/skills/
cp -r .cxopack-cto/claude/subagents/* .claude/agents/
cp -r .cxopack-cto/claude/commands/* .claude/commands/
```

### ChatGPT
Paste `chatgpt/custom-gpt.md` into a new Custom GPT's instructions.

### Cursor
```bash
mkdir -p .cursor/rules && cp cursor/rules/*.mdc .cursor/rules/
```

### Any LLM
Copy-paste `prompts/main.md`.

## What's inside

| Skill | Does |
|---|---|
| **adr** | Generate Architecture Decision Records in the Michael Nygard format |
| **mvp-scope** | Cut a feature list into an MVP using RICE + kill criteria |
| **stack-advisor** | Recommend a stack for the *founder's* context, not the hype cycle |
| **build-vs-buy** | Score building in-house vs. adopting an existing tool |
| **code-review** (subagent) | PR-style review focused on correctness + blast radius |
| **tech-debt-triage** | Weekly debt-scan + 3 items to actually fix |
