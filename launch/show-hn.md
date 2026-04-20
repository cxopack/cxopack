# Show HN — launch post

**Title:** Show HN: CxOPack – an AI C-suite (5 agents + Chief of Staff) for solo founders
**When:** Tuesday, 07:00 Pacific. Never Monday (HN is flooded), never Friday (HN is dead).
**Where:** news.ycombinator.com/submit

---

## Post body

CxOPack is five AI executive kits — CEO, CTO, CFO, Sales, CMO — plus a Chief of Staff ("Sam") that routes any founder question to the right ones and synthesizes a single recommendation.

I built it because I kept hitting the same problem shipping my own startup solo: every decision touches 3+ functions, and I was spending hours spinning on things a real executive team would resolve in a meeting.

The kits are structured workflows, not chatbots. Each ships in four formats:

- Claude Code: skills (auto-activated), subagents (the 6 Board personas), slash commands (30+, namespaced as /ceo:*, /cto:*, etc.)
- ChatGPT: Custom GPT configurations
- Cursor / Windsurf: .cursor/rules files
- Any other LLM: platform-agnostic master prompt you paste in

They share a `founder-log/` workspace on disk — priorities, metrics, decisions, weekly briefs, handoffs — so every agent reads the same context before responding. That's the part that actually differentiates it from "just use Claude."

Sam (the Chief of Staff) is a subagent that does three things:
1. Reads the request and the shared memory.
2. Routes to the relevant personas in parallel.
3. Synthesizes one brief with a single recommendation, signed "Decide today" / "Read this twice" / "Sleep on it."

There's a live demo on the landing — you type a question, watch the routing. No signup. cxopack.com

Pricing: single kit €49 lifetime, All-Access €149/yr, first 100 lock €99/yr forever.

Happy to answer anything — product, prompt engineering, pricing, architecture. I'll be here all day.

---

## Expected questions + prepared answers (put these in your first comment, or reply as they come in)

### "Isn't this just prompts?"
> Yes. The value is the structure, the shared memory, and the orchestration — not the raw intelligence. You could write these prompts yourself over 6 months; the product is skipping that step and having the conventions ready-made.

### "Why not just use one Claude agent with system prompts?"
> Single-agent setups lose coherence fast. The persona subagents are specialized — the CFO refuses to answer questions a CFO wouldn't answer, the CTO pushes back on premature feature work. Splitting responsibilities produces sharper answers than any one prompt can.

### "How is this different from MultiOn / OpenDevin / AutoGen / etc.?"
> Those are general-purpose agent frameworks. CxOPack is an opinionated product: it assumes you're a solo founder running a real startup, and every workflow is designed for that use case. I'd rather ship 5 excellent workflows than 50 generic ones.

### "What about privacy — does my data leave my machine?"
> The kits run locally in your AI tool. The `founder-log/` folder is yours. Nothing phones home. The only external calls are to your AI provider (Anthropic / OpenAI) which you already have a relationship with.

### "Why subscription?"
> The catalog grows. DevOps, Cloud, Financial Analyst, and Product Manager kits are coming. All-Access subscribers get every new kit automatically. Single-kit lifetime is there for people who only want one role.

### "Can I see the actual skill files?"
> They're in private GitHub repos. If you want to peek, I'll send a preview of 2-3 skills from the CEO kit. Email hello@cxopack.com.

### "Is this built with Next.js / Vercel?"
> The landing + checkout is Next.js 15 + Tailwind + Stripe + Supabase + Drizzle. The kit content is just markdown with YAML frontmatter — by design, they're legible to humans and AI alike.

### "Why not open source?"
> The kits are commercial work product — the refinement of each workflow is what you're paying for. I'll open-source the scaffolding and the platform-agnostic master prompts at some point, but the battle-tested per-role skills stay paid.

### "What's Autopilot?"
> The Q4 2026 tier. Agents get real budgets, connect to MCPs (Stripe, Gmail, HubSpot, Apollo, Vercel, Sentry), and execute autonomously. CMO agent runs ads, Sales agent sends outbound, CFO watches everyone's spend. Full audit trail + kill switch. Waitlist is open.

## Rules for the HN day

- Reply to every comment for the first 6 hours. Every reply is a chance to sell or clarify.
- Never use marketing voice in replies. Peer tone, always.
- If someone criticizes, agree with the valid part first, then respond to the invalid part. Never defensive.
- If there's a technical question, be specific. HN respects depth.
- Don't ask people to upvote. Ever.
