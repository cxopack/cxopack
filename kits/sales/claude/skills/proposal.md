---
name: proposal
description: Generate a proposal / SOW tightly tied to discovery call notes — every paragraph traceable to something the customer said. Use when the user says "write the proposal", "draft the SOW", or has just finished a discovery call.
allowed-tools: Read, Write
---

# Proposal / SOW Generator

Template proposals lose deals. The best proposals read like a transcript of the discovery call with a price and a timeline added. Every section must be traceable to something the customer said — if it wasn't discussed, it doesn't go in.

## The anti-template principle

**Reject generic language.** If a section could apply to any customer, rewrite or delete. The proposal should feel like it was written for this customer specifically — because it was.

## Structure (strict)

```md
# Proposal — <Customer name> × <Your company>
<Date> · valid for 14 days

## Why we're here
<2-3 sentences based on the discovery call. Quote their words.>
"<Direct quote from the prospect about their pain>"

## What you want
1. <Outcome 1 — as they described it>
2. <Outcome 2>
3. <Outcome 3>

## What we'll deliver
For each of the 3 wants above:
- **<Want 1>** — <what we'll ship> → measured by <how they'll know it worked>
- **<Want 2>** — …
- **<Want 3>** — …

## Timeline
| Week | Milestone | What's live | Your involvement |
|---|---|---|---|
| 1 | Kickoff | <artifact> | <time commitment> |
| 2-4 | Build | <artifact> | <time commitment> |
| 5 | Launch | <artifact> | <time commitment> |
| 6+ | Iterate | ongoing | weekly sync |

## Who does what
| Responsibility | Us | You |
|---|---|---|
| <item> | ✅ | |
| <item> | | ✅ |
| <item> | ✅ | ✅ |

## Success criteria (what makes this proposal worth it)
We agree this engagement succeeded if:
- <Measurable outcome 1>
- <Measurable outcome 2>
- <Measurable outcome 3>

If these are not met by <date>, we'll <specific make-right: refund, extension, credit>.

## Investment
<Pricing — one clear number. Payment terms. Anything included beyond the core work.>

## Next step
<ONE thing. Not a menu. "Sign by <date> → kickoff <date>.">
```

## Workflow

1. **Require discovery notes.** Ask the founder for:
   - The pain as the customer described it (their words).
   - The outcomes they said would make this worth it.
   - The decision process (who approves, by when, against what budget).
   - Any objections / concerns they raised.
   If the founder can't provide these, stop. A proposal without discovery is a guess.

2. **Write the "Why we're here" section first** using the customer's language. Include at least one direct quote.

3. **Map outcomes to deliverables.** Every "What we'll deliver" bullet must tie to a "What you want" bullet. No orphan deliverables (things you want to sell that they didn't ask for).

4. **Timeline must be defensible.** If you don't know, ask the founder for a realistic estimate. Pad by 25% for contingency — never present 3-week estimates you believe are 4 weeks.

5. **Who-does-what table.** This is the section that saves projects. Every failed consulting engagement had an unnamed handoff.

6. **Success criteria must be measurable.** "Improve the website" is not. "Homepage converts at 3%+ by day 60" is.

7. **One next step.** Not "let me know what works for you." A specific date and signed document.

8. **Save to `sales/proposals/<customer>-<date>.md`.**

## Length rules

- Under 2 pages printed. Proposals longer than 2 pages don't get read — they get skimmed, and your ask gets missed.
- No appendices. If it matters, put it in the body. If it doesn't, cut it.
- No legal boilerplate in the sales proposal. The MSA / DPA is a separate document sent post-verbal-yes.

## Pricing presentation

- One number, prominently. Not three options unless they explicitly asked for tiers.
- State what's included in plain English next to the number.
- "Payment terms: 50% on signature, 50% on <milestone>" — always specify. Ambiguous terms = late payments.

## Anti-patterns

- **"About us" section.** The customer doesn't care. Cut.
- **Case studies inside the proposal.** Send separately if asked. The proposal is about THIS customer.
- **Features list.** They already know your product; they want your plan for them.
- **"Executive summary."** The whole proposal is 2 pages — you don't need a summary of a 2-page document.
- **Hedge language.** "We believe we may be able to help you…" — write "We will deliver X by Y."
- **Negotiable pricing presented upfront.** If there's a sticker price and a negotiated floor, show sticker. Negotiate on the call.
- **"Let us know if you have questions."** Replace with "Let's hop on a 20-min call <dates> to review together."

## Follow-up cadence built in

After the proposal is sent, schedule follow-ups explicitly:
- Day 2: "Did this land clearly? Any immediate questions?" — 3 sentences max.
- Day 5: "Still here — would a 15-min walkthrough help you or your team review?"
- Day 10: "Assuming this isn't moving — is it timing, scope, price? Happy to adjust."
- Day 14: "Closing this out. Reach out whenever makes sense."

Proposals without a follow-up cadence die silently; proposals with a cadence either close or fail fast (which is still progress).
