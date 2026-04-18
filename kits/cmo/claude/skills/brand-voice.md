---
name: brand-voice
description: Generate a brand voice doc — 5 rules, 5 anti-rules, 10 before/after examples — so every piece of copy (yours or a contractor's) sounds the same. Use when the user says "build my brand voice", "why does our copy sound inconsistent", or before hiring any writer.
allowed-tools: Read, Write
---

# Brand Voice

Your brand voice is the rule set that makes your copy sound like **you** no matter who writes it. Without a voice doc, every piece is re-invented; with one, contractors and AI tools produce work that lands in your tone.

## The output — 3 parts

A complete voice doc is always:

1. **5 rules** — what the voice does.
2. **5 anti-rules** — what the voice never does.
3. **10 before/after examples** — a crappy sentence → a voiced sentence, with a one-line reason.

Nothing else. Brand guidelines that are 20 pages don't get used. The 5/5/10 format fits on a single page and gets referenced.

## The rules format

```md
# Brand voice — <Company>

## Sounds like
<In one paragraph: the overall feel. E.g., "Senior operator. Writes like an email to a peer founder — short, specific, skeptical of fluff, willing to disagree.">

## 5 rules

1. **<Short imperative.>** <1-line explanation with why.>
   *Example:* <short sentence that embodies it>
2. **<Short imperative.>**
…

## 5 anti-rules (never do)

1. **Never use <pattern>.** <Why — usually what it signals to readers.>
   *Counter-example we'd flag:* <short sentence>
…

## 10 before/after

### 1
❌ Before: <the kind of sentence a generic writer produces>
✅ After: <our version>
Why: <one-line reason>

### 2
…
```

## The workshop — how to derive voice from existing content

You don't invent voice — you extract it. Steps:

1. **Collect 5 artifacts** the founder is proud of: tweets, emails to customers, a blog post, a landing-page section, a LinkedIn post. These are the ground truth.
2. **Collect 2 artifacts** the founder is embarrassed by or that feel off-brand (often generic templates or contractor output).
3. **Analyze patterns across the proud 5:**
   - Sentence length (short / medium / mixed)?
   - Humor (dry / warm / absent)?
   - Formality (tutoyer / vouvoyer mental model — peer or formal)?
   - Self-reference (I / we / neither)?
   - Signature phrases that recur?
4. **Articulate the rules** from those patterns. Don't invent; describe.
5. **Articulate the anti-rules** from the off-brand 2 — what makes them feel wrong.
6. **Generate 10 before/after examples** across contexts: hero copy, FAQ answer, cold email opener, tweet, LinkedIn post, newsletter intro, product-update post, testimonial ask, sales rebuttal, out-of-office message.

## Common voice archetypes (pick or remix)

- **The senior peer.** Confident but never condescending. Writes to other operators, not to students. Short sentences; rare exclamation marks; willing to say "I was wrong."
- **The dry expert.** Minimal emotion. Numbers over adjectives. Dry humor in rare moments. No exclamation marks.
- **The warm guide.** Patient, second-person, explains without oversimplifying. Sentences can breathe. Never condescends.
- **The sharp operator.** Fast, sometimes abrasive, always specific. "This is how it is" energy. Polarizing on purpose.
- **The cheerful maker.** Open, excited, transparent. Shares numbers, including bad ones. Low-stakes tone.

Pick **one**. If your voice "is a bit of everything" you don't have a voice yet.

## Workflow

1. Ask for the 5 proud artifacts and 2 off-brand artifacts.
2. Read them back analytically (not approvingly). Identify 5 patterns in the proud 5 and 5 patterns in the off-brand 2.
3. Turn patterns into rules (positive from the 5) and anti-rules (negative from the 2).
4. Generate 10 before/after examples, each with a ❌ generic version, ✅ your version, and a one-line why.
5. Write to `content/brand-voice.md`.
6. **Test**: feed 3 new prompts to a generic LLM using only the voice doc as system prompt, and see if the outputs pass the founder's taste. Iterate if they don't.

## Using the voice doc

- Every content contract starts with the voice doc as a deliverable requirement.
- Every AI prompt includes the voice doc as system context.
- Every piece of copy is reviewed against: does it follow the 5 rules? does it break any anti-rule?

## Anti-patterns

- **"Voice is authentic and confident"** — not useful. Authentic how? Confident about what? Rules must be specific.
- **Mixing voice with brand attributes** — "Our brand is bold, innovative, and friendly" is adjective soup, not voice. Voice is observable in a sentence.
- **Writing 30 rules** — contractors won't read 30. Pick the 5 highest-leverage.
- **No before/after examples** — rules alone don't teach; examples do.
- **Not updating** — voice evolves. Review the doc every 6 months, especially after a pivot or rebrand.

## Edge case — founder's voice vs. brand voice

For very small companies, the brand voice ≈ the founder's voice. That's fine until you hire. Once you have a second writer, the doc is what lets the brand survive the hire. Write it early.
