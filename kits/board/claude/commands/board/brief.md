---
description: Ad-hoc board brief — Chief of Staff routes to the most relevant executives for a specific topic.
argument-hint: [topic / question — can be broad]
---

$ARGUMENTS

Invoke the **chief-of-staff** subagent with the topic above. Unlike `/board:decision` (which needs a concrete choice), `/board:brief` is for *exploration* — when the founder wants to understand a topic from multiple angles but isn't yet deciding.

## Sequence

1. **Identify the 1-3 most relevant personas** for this topic. Don't over-route; if it's clearly one function, call one.

2. **Ask each persona**: "Brief me on <topic> from your function's POV. What should the founder know, and what's the one question they haven't asked?"

3. **Synthesize:**

```md
# Board brief — <topic>

## What you asked
<1-2 sentences>

## By function

### <Persona 1>
<2-3 paragraph brief. End with: "The question you haven't asked: <…>">

### <Persona 2>
<same>

## Connected dots
<one paragraph: what links these perspectives the founder should see>

## Next step
<either: "make a decision using /board:decision" OR "need more data — <specific action>" OR "low-stakes, proceed">
```

## Rules

- Briefs are shorter than decisions — 1 page max total.
- Each persona's brief ends with "the question you haven't asked" — this is where the founder usually gets unstuck.
- No recommendation unless the founder asks. Briefs inform; decisions conclude.
- Don't route to personas whose input would be filler. 2-3 focused voices beat 5 generic ones.
