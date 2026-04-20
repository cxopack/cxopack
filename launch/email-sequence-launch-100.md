# Email sequence — Launch 100 subscribers

**Audience:** the first 100 buyers of the All-Access Pass at Launch-100 pricing. These are your most engaged customers — treat them like founders of the product, not mailing-list members.
**Cadence:** day 0 (instant) → day 3 → day 7 → day 21.
**Sender:** Djalil / hello@cxopack.com.
**Tone:** personal, specific, no template-feel. Every email ends with a single ask.

---

## Email 1 — Day 0 (instant on purchase)

**Subject:** Welcome to CxOPack — here's where to start, and the favor I'm asking

**Preview:** One setup path, one first workflow, one ask.

Hey,

Welcome. You're one of the first 100 — your price is locked at €99/yr forever, and I'm going to make sure you get more than that back in the first month.

**Start here (5 minutes):**

1. Accept the GitHub invites in your inbox (one per kit, from notifications@github.com).
2. Pick ONE kit. Not all five. The one that maps to your biggest pain this quarter.
3. Run the installation guide for your AI tool: https://cxopack.com/docs/installation
4. Run the first workflow: `/ceo:weekly` if you picked CEO, `/cto:adr` for CTO, `/cfo:cash-flow` for CFO, `/sales:icp` for Sales, `/cmo:positioning` for CMO.

**The favor:** in 30 days, I'll ask for one line of feedback — what's working, what's confusing, what's missing. Your Launch-100 price is a discount on that feedback, not on the product. Say no now if that's not a trade you want to make; I'll refund you immediately. Otherwise, see you in 30 days.

Djalil · hello@cxopack.com

P.S. There's a live demo on the landing page where you can see `/founder` route a real question. If a colleague is on the fence, send them that link.

---

## Email 2 — Day 3

**Subject:** Day 3 — one question

**Preview:** What's one thing you haven't run yet and why?

Hey,

Quick one. It's day 3. Three questions, one-line answers each:

1. Did you run at least one workflow? (yes / no)
2. Did the output help you make a different decision than you would have made? (yes / no / too early)
3. What's the first workflow you haven't run yet — and why haven't you?

Question 3 is the one I care about. Usually the unrun workflow is the one that would've been most useful. I want to know why it's staying unrun — is the name wrong, the trigger confusing, the output format unclear?

Reply with two sentences max. No pressure.

Djalil

---

## Email 3 — Day 7

**Subject:** Day 7 — what shipped this week

**Preview:** What CxOPack did + a small bonus.

Hey,

One week in. What's shipped since you subscribed:

- 2 new skills in the CMO kit (`/cmo:launch-comms` refined + added T+7 follow-up templates)
- 1 bug fix in the Board orchestration (handoffs weren't surfacing overdue items)
- Docs polish on the /docs/installation page

All of it ships automatically when you re-pull the repos — no re-download needed. Instructions: https://cxopack.com/docs/installation#updates

**Bonus for Launch 100 only:** I just opened a private community. Invite link is below. Not a community for generic AI chat — it's for specific "I ran /ceo:build-buy-kill this morning and here's what I decided" conversations. Small, dense, high signal.

[Join the community → ...]

Djalil

---

## Email 4 — Day 21

**Subject:** Day 21 — collecting the one thing I promised

**Preview:** Two sentences + a testimonial ask.

Hey,

Twenty-one days in. It's the feedback check-in.

Reply with two sentences: one thing that worked, one thing that didn't. I read every one of these personally — this is how v0.4 gets shaped.

And one optional ask: if CxOPack helped you make a better decision this month, would you be willing to share it publicly? A quote I can feature on the landing. 2-3 sentences, your name, link to your startup. In exchange, I send you an extra invite code to share with a friend at Launch-100 pricing even after we've closed to the public.

No pressure. "Not this month" is a valid answer. But if you're game, reply here and I'll send the exact format.

See you next month,
Djalil

---

## Admin notes

- Send email 1 from Resend, transactional — immediate on Stripe `checkout.session.completed` webhook
- Emails 2, 3, 4 from Resend broadcast — segment = "launch-100"
- Day-0 email MUST land within 60 seconds of purchase. If it's delayed, the experience collapses.
- Track replies manually for the first 50 customers. After that, consider a Fathom-style survey tool, but never at the expense of personal replies for Launch 100.
