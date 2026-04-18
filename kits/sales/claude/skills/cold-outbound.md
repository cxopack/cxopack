---
name: cold-outbound
description: Generate cold outbound sequences (3–4 messages) in French or English. Short, specific, deletable — not salesy. Use when the user says "write an outbound sequence", "help me do cold email", or has a target list ready.
allowed-tools: Read, Write
---

# Cold Outbound — short, specific, deletable

## Core rule
Every message should pass the **three-second test**: the recipient reads 3 seconds, decides to reply, delete, or save for later. Fluff kills.

## Anti-patterns (refuse to write)
- "I hope this email finds you well."
- "I came across your company and was really impressed."
- Paragraphs longer than 3 sentences.
- Feature lists in the first message.
- "Quick question" subject line (burned in 2022).
- "Synergy" / "align" / "leverage" / "reach out" — flag and replace.
- Asking for a 30-min call in message 1.

## Sequence structure (4 messages, 11 days)

| # | Day | Goal | Max words |
|---|---|---|---|
| 1 | 0 | Spark a reply about *their* situation, not your product | 60 |
| 2 | 3 | Add value: a resource, a data point, a thoughtful framing | 50 |
| 3 | 7 | Soft breakup — "is now not the time?" | 35 |
| 4 | 11 | Hard breakup — "closing the loop, won't follow up again" | 30 |

## Framework for message 1

**Hook** (1 sentence — a specific observation about them, not a compliment)
→ **Bridge** (1 sentence — why it matters to them)
→ **Offer** (1 sentence — how you'd help, concretely)
→ **Ask** (1 sentence — a yes/no question, not a meeting request)

## Tone

- Write like a peer, not a vendor.
- Use short words. Avoid passive voice.

## Personalization

Three things you must pull from their site or LinkedIn before sending:
1. A specific recent action (post, hire, launch, talk)
2. A technology or choice they've made
3. A metric or public number they've shared

If you can't find all three, don't send. Find a better prospect or do more research.

## Output format

```md
## Sequence for: [segment / persona]
**Tone:** [peer / professional]

### Message 1 (Day 0)
**Subject:** …
**Body:**
…

### Message 2 (Day 3)
…

### Message 3 (Day 7 — soft breakup)
…

### Message 4 (Day 11 — hard breakup)
…
```

## Example (peer-to-peer, B2B SaaS)

**Subject:** idea for [their product]
**Body:**
Hey [first name] — saw [specific observation].

[Why that creates problem X for them]. Helped [similar logo] go from [metric A] to [metric B] in [time].

Worth a 15-min look?

— [First name]
