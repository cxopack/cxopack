# CxOPack — Ari · Head of Sales Kit

> **Meet Ari. Your head of sales — pipeline, outbound, closing.**

Ari is your head of sales. Loud, relentless, charming. Pushes for the meeting in 48 hours. Built on the assumption that 80% of solo-founder sales problems are ICP problems and 20% are execution problems. Six workflows that force you to name who you won't sell to, write outbound that gets replies, and run discovery calls where you listen more than you pitch.

---

## 📖 Full walkthrough

**→ [cxopack.com/docs/kits/sales](https://cxopack.com/docs/kits/sales)**

---

## 🗺️ The Sales journey — how to actually use this kit

### Day 1 — Define who you're selling to (and who you're not)

1. **Install** (see below).
2. Run **`/sales:icp`**. Five questions, one at a time, no skipping. Force hard disqualifiers. **Refuse a three-way ICP** — pick one for the next 90 days.
3. Save the 1-pager at `sales/icp.md`. Every other skill reads this.

### Day 2 onwards — Daily outbound

1. **Every morning:** 5 personalized cold emails via `/sales:outbound`.
2. Every prospect gets 3 specifics pulled before any outreach: recent action (post, hire, launch), tech choice, public metric. **No 3 specifics → don't send — they're off-ICP.**
3. 4-message sequence: D0 (≤60 words), D3 (≤50), D7 soft breakup (≤35), D11 hard breakup (≤30).

### Before every call — Discovery prep

1. **15 minutes pre-call:** `/sales:discovery`. Generates a 45-min call script: 0–5 frame, 5–20 pain, 20–30 stakes, 30–38 buying process, 38–43 fit, 43–45 next step.
2. **70% listen, 30% frame.** No pitching in the first 30 minutes.

### During / after a call — Objections library

- Any objection the prospect raises → `/sales:objections`. Identifies the real question underneath (often not what they said), gives a peer-tone response, and a qualifying follow-up.
- Log new patterns as you encounter them to `sales/objections/`.

### After a discovery call — Proposal

- **Within 48 hours:** `/sales:proposal`. Every paragraph must tie to something the prospect said. No template language. 2 pages max.
- Refuse to write without discovery notes.

### Friday — Pipeline review

1. **Friday 15:00:** `/sales:pipeline` — 15-minute no-mercy review.
2. **Rule:** any deal without a next step + date is killed. Any deal >45 days old with no movement is killed. No exceptions.
3. Pick 3 deals for next week's focus (probability × size).

### The commands in order

```
/sales:icp            once, then quarterly refresh
/sales:outbound       daily 09:00, 5 emails
/sales:discovery      before every call
/sales:objections     during/after every objection
/sales:proposal       within 48h of a promising call
/sales:pipeline       Friday 15:00, weekly ritual
```

---

## What's inside

| Workflow | Does |
|---|---|
| `icp-workshop` | 5-question interview — forces hard disqualifiers, trigger events, willingness-to-pay anchor |
| `cold-outbound` | 4-message sequence with mandatory personalization |
| `discovery-script` | 45-min call script; 70% listen, 30% frame, no early pitching |
| `objections` | Library of 20 common objections — real question underneath + peer response + qualifying follow-up |
| `proposal` | SOW / proposal tightly tied to discovery notes; no template language |
| `pipeline-review` | Weekly 15-min ritual; kills deals with no next step or >45d stagnation |

---

## Install

### Claude Code

```bash
git clone git@github.com:cxopack/cxopack-sales.git .cxopack-sales
mkdir -p .claude/skills .claude/commands/sales
cp -r .cxopack-sales/claude/skills/*         .claude/skills/
cp -r .cxopack-sales/claude/commands/sales/* .claude/commands/sales/
mkdir -p sales/{pipeline,proposals,outbound,objections,discovery}
```

### ChatGPT / Cursor / Any LLM

See `chatgpt/custom-gpt.md`, `cursor/rules/`, `prompts/main.md`.

---

## The Board (orchestration)

When pipeline dries up or a top customer churns, the question touches CEO (strategic posture), CFO (revenue impact), CMO (positioning shift). The Board routes across and synthesizes. Included with All-Access Pass.

→ [cxopack.com/docs/kits/board](https://cxopack.com/docs/kits/board)

---

## Changelog

```
v0.1.0 — Initial release — 6 skills
```
