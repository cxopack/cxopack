# CxOPack — Don · CMO Kit

> **Meet Don. The anti-content-marketer. Every claim is verifiable, every hook is specific, "synergy" is banned.**

Don is your CMO. Story over features, identity over specs — reframes the buyer's identity, not the product's specs. Six production workflows for the brand + content + growth loop — positioning, SEO pages, landing copy, LinkedIn/X batches, launch communications, brand voice. Opinionated, ban-list enforced, built for solo founders who hate marketing but need distribution.

---

## 📖 Full walkthrough

**→ [cxopack.com/docs/kits/cmo](https://cxopack.com/docs/kits/cmo)**

---

## 🗺️ The CMO journey — how to actually use this kit

### Day 1 — Sharpen the positioning

1. **Install** (see below).
2. Run **`/cmo:positioning`**. April Dunford's method — alternatives, unique attributes, value, segment, category, statement.
3. **Force disqualifiers.** A page "for everyone" is for no one. Name who this is *not* for.
4. Save to `content/positioning.md`. Every other skill reads this.

### Week 1 — Brand voice doc (before any content scales)

1. Collect 5 artifacts you're proud of + 2 that feel off-brand.
2. Run **`/cmo:voice`**. Output: 5 rules, 5 anti-rules, 10 before/after examples. Fits on one page.
3. Every future content contract references this doc.

### Week 2 — First LinkedIn batch (Monday ritual)

1. **Monday 10:00:** `/cmo:linkedin`. Pick one topic. Get 7 posts in 7 formats: hot take, case study, how-to, anti-pattern, behind-the-scenes, data point, question.
2. **Hooks first.** The first line does 80% of the work. If 3 hooks sound same-y, regenerate.
3. Schedule in Buffer / Typefully. Publish one each day.

### Week 3 — Rewrite the landing

1. **`/cmo:landing`** — rewrite the hero with two A/B variants. Every claim must have proof. Ban-list enforced (best-in-class, leverage, synergy, seamless, robust — all auto-flagged).
2. Include a **"not for" line.** This is where weak positioning dies publicly.

### Week 4 — First SEO page

1. **Wednesday afternoon:** `/cmo:seo` on one keyword. Intent-first: informational / evaluative / navigational / transactional.
2. Match the SERP shape or deliberately break from it. Requires first-hand data (screenshot, benchmark, customer quote). No first-hand data → skill refuses.
3. Build a cluster — one page per week for a quarter.

### Ad-hoc — Any launch

- **`/cmo:launch`** — 5 formats, same insight, different frames: X thread, LinkedIn, newsletter, PR pitch, Product Hunt / HN first comment.
- Plus a T+2 / T+4 / T+7 follow-up plan. Launch windows are a week, not a day.

### The commands in order

```
/cmo:positioning    once, then quarterly refresh or after a pivot
/cmo:voice          once, then every 6 months
/cmo:linkedin       Monday 10:00, weekly batch
/cmo:landing        on positioning change, or when conversion drops
/cmo:seo            weekly, one keyword
/cmo:launch         2 weeks before any launch
```

---

## What's inside

| Workflow | Does |
|---|---|
| `positioning` | April Dunford positioning statement — forced disqualifiers, proof over adjectives |
| `seo-page` | Intent-matched SEO page with required first-hand data |
| `landing-copy` | Landing copy with verifiable claims only; ban-list enforced; A/B hero variants |
| `linkedin-batch` | 7 posts, 7 formats, 1 topic — Monday batching ritual |
| `launch-comms` | 5-format launch pack + T+2/4/7 follow-up plan |
| `brand-voice` | 5 rules / 5 anti-rules / 10 before-after examples — fits on one page |

---

## Install

### Claude Code

```bash
git clone git@github.com:cxopack/cxopack-cmo.git .cxopack-cmo
mkdir -p .claude/skills .claude/commands/cmo
cp -r .cxopack-cmo/claude/skills/*         .claude/skills/
cp -r .cxopack-cmo/claude/commands/cmo/*   .claude/commands/cmo/
mkdir -p content/{seo,launches,linkedin}
```

### ChatGPT / Cursor / Any LLM

See `chatgpt/custom-gpt.md`, `cursor/rules/`, `prompts/main.md`.

---

## The Board (orchestration)

A launch touches CEO (strategic timing), CTO (readiness), Sales (pipeline support), CMO (all of this). The Board routes and synthesizes. Included with All-Access Pass.

→ [cxopack.com/docs/kits/board](https://cxopack.com/docs/kits/board)

---

## Changelog

```
v0.1.0 — Initial release — 6 skills
```
