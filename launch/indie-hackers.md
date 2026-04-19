# Indie Hackers — launch post

**Title:** I built an AI C-suite for solo founders — here's what I learned pricing it
**Where:** indiehackers.com/post/new
**Category:** Launching
**Tone:** transparent, personal, builder-first. IH readers hate pitchy. They love numbers.

---

## Post body

I just launched CxOPack — five AI executive kits (CEO, CTO, CFO, Sales, CMO) + a Chief of Staff that routes questions to the right ones. Public launch was this week.

Before I talk about the product, I want to share the pricing experiment I ran, because IH readers know pricing is the hardest thing solo founders get wrong. This was my third iteration; the first two were wrong in instructive ways.

**Iteration 1 (never shipped):** €99 per kit, €299 for all five. Anchor was "hiring a CEO costs €500k." Felt great on paper. Two problems: €299 is above impulse-buy for indie hackers, and the model assumes the catalog doesn't grow. When I realized I'd want to ship DevOps, Cloud, Financial Analyst, Product, Customer Success kits over the next year, the lifetime-bundle math broke.

**Iteration 2 (also killed):** €149 lifetime full pack. Simpler, but again — breaks when I launch kit #6.

**Iteration 3 (launched):** Netflix-shaped.
- Solo Kit: €49 lifetime (try-before-commit)
- All-Access Pass: €149/year (every current and future kit)
- Launch 100: first 100 buyers lock €99/yr forever
- Autopilot (Q4 2026): €499+/mo, agents with real budgets

The thesis: as the catalog grows, subscription becomes the only rational choice. By kit #10, €149/yr vs. €490 one-time is a no-brainer. That's the flywheel.

**What I'm watching:**
- Conversion on All-Access vs. Solo Kit. If All-Access is <60% of purchases, I priced Solo too aggressively.
- Launch-100 pace. If 100 sell in week 1, it's a strong signal. If it takes 4 weeks, the narrative isn't sharp enough yet.
- Cohort retention on All-Access after 3 months. If >90% renew, the subscription premise is right.

**What I built alongside:**
- A shared `founder-log/` workspace so agents have memory across sessions
- A Chief of Staff ("Sam") that routes multi-function questions and synthesizes one answer
- A live demo on the landing where you can type a real question and watch the routing — no signup
- Dogfood: I'm shipping my actual startup (Prezto, if you're curious) using these kits. Every `/ceo:weekly` output is the real Monday ritual.

**Tech stack** for fellow builders: Next.js 15 + Tailwind v4 + Supabase Auth/Postgres + Drizzle + Stripe Checkout + Resend + Vercel. Kits live in private GitHub repos, buyers get invited on purchase. ~2 months of nights + weekends.

**The live demo is on the landing**: cxopack.vercel.app

Drop questions on pricing, the stack, the subagent design, or anything else. Especially curious what other solo founders think about the Autopilot direction — agents with real budgets, executing work autonomously, is a bet I want to pressure-test.

---

## If the post gets traction, drop this in comments

### "What exactly does Sam do that a normal Claude prompt doesn't?"
> Sam reads `founder-log/priorities.md`, `metrics.md`, and last week's brief BEFORE responding. Then decides which 1-5 persona subagents to call. Each persona also reads the shared memory, gives its take, and Sam synthesizes. The key difference vs. one big prompt: the personas disagree with each other sometimes. That's by design — surfacing disagreement is where value is. One prompt can't disagree with itself.

### "What's the best skill in the kit?"
> Honestly? `/ceo:weekly` — the Monday planning ritual. Takes 15 minutes, locks 3 priorities with kill criteria. I've run it 8 weeks in a row on Prezto. Every week I've caught at least one priority that would've drifted.

### "How do you prevent prompt-injection from the `founder-log/`?"
> Everything in `founder-log/` is written by me or by the agents themselves. No external input. So the surface is small. If I ever open it to team sharing, that becomes a real concern.

### "Why not open-source it?"
> The scaffolding will be. The refined per-role workflows stay paid — that's the IP. Think of it like Laravel Nova vs. Laravel itself.
