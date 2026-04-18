# CxOPack — Kits Source

Each kit in this folder is mirrored to its own private GitHub repo under `github.com/cxopack/*` at release time. Buyers get invited to the specific repos they purchase.

## Layout

```
kits/
├── ceo/        # → cxopack-ceo    (private repo)
├── cto/        # → cxopack-cto
├── cfo/        # → cxopack-cfo
├── sales/      # → cxopack-sales
└── cmo/        # → cxopack-cmo
```

Every kit ships in four formats:

- **`claude/`** — skills (with YAML frontmatter), subagents, slash commands, MCP configs. Drop into `~/.claude/` or `.claude/` in your project.
- **`chatgpt/`** — Custom GPT configs (JSON) and Actions (OpenAPI).
- **`cursor/`** — `.cursor/rules/*.mdc` files you drop into your project.
- **`prompts/`** — platform-agnostic markdown prompts. Paste into any LLM, any tool.

## Release flow

```bash
# From repo root, publish one kit
pnpm run release --kit=ceo   # pushes kits/ceo/ → github.com/cxopack/cxopack-ceo (main)
```

(Release script can be a simple `rsync + git push` wrapper — see `scripts/release-kit.ts`.)
