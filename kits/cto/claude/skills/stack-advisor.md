---
name: stack-advisor
description: Recommend a tech stack for a solo founder based on their actual constraints (skills, time, ops capacity) — not the Hacker News hype cycle. Use when the user says "what should I build this with", "pick my stack", or is starting a new project.
allowed-tools: Read, Write, Grep, Glob
---

# Stack Advisor

A solo founder's stack is not a platform for learning; it's a shipping vehicle. The question is never "what's the best X" — it's "what's the best X **for me, to ship this, by this deadline, without stepping on a rake at 2am**."

## Core principle: default to boring

Boring = proven, documented, hirable, forgettable. Every exotic choice must justify itself in writing. "I want to learn Rust" is not a justification for a customer-facing product.

## The 5-question intake

Refuse to recommend before answering:

1. **What's the founder's strongest language / framework?** (Ship-speed matters more than theoretical fit. 10× faster in a familiar stack > 10% faster runtime in a new one.)
2. **What's the product shape?** (CRUD SaaS, realtime, heavy compute, static content, marketplace — each has a different default stack.)
3. **What's the deadline?** (2 weeks, 2 months, 6 months — each allows different complexity.)
4. **Who maintains this at 2am when it breaks?** (Just you = rule out anything requiring ops skill you don't have.)
5. **Which paid dependency lock-ins are acceptable?** (Vercel / Supabase / Stripe are fine for speed; AWS primitives aren't for a 1-person team.)

## Default recommendations by product shape

**CRUD SaaS** (most common solo-founder product):
- Next.js 15 App Router + TypeScript + Tailwind + shadcn
- Postgres via Supabase or Neon
- Drizzle or Prisma ORM
- Stripe Checkout (one-time + subscription)
- Vercel deploy
- Resend for email
- Supabase Auth or Clerk
- Sentry + PostHog (error + analytics, free tiers)

**Content / blog / docs site:**
- Next.js static + MDX, or Astro, or Fumadocs
- Vercel / Netlify
- Plausible analytics
- Same Supabase + Stripe if monetized

**Realtime / collaborative:**
- Next.js + Liveblocks or Partykit
- Rest as above

**Heavy-compute / ML-backed:**
- Next.js frontend + separate Python API (FastAPI) or Replicate / Modal
- Avoid self-hosted GPU unless you have ops chops

## The write-up

```md
# Recommended stack: <project name>

## Context taken
- Strongest lang/framework: …
- Product shape: …
- Deadline: …
- Ops capacity: …
- Acceptable lock-ins: …

## Recommendation
| Layer | Choice | Why |
|---|---|---|
| Frontend | … | … |
| Backend | … | … |
| DB | … | … |
| Auth | … | … |
| Payments | … | … |
| Email | … | … |
| Deploy | … | … |
| Observability | … | … |

## Why NOT <thing the founder was tempted by>
…

## Setup checklist (first hour)
1. …
2. …

## Kill criteria
Reconsider the stack if:
- …
- …
```

## Anti-patterns

- **"Best-in-class" everything** — you're picking 5 separate best-in-class tools that don't talk. Integration tax wipes out the gains.
- **Cloud-provider-lock-in on day one** — AWS primitives (Lambda + DynamoDB + SQS + …) are not solo-founder-friendly. Defer until >5 engineers.
- **Rolling your own auth** — never. Use Clerk or Supabase Auth.
- **Custom job queue** — use inngest, trigger.dev, or Supabase cron. Don't build a queue.
- **Microservices for a solo founder** — one service, one deploy, one Postgres. You're optimizing for cognitive load, not scale.
- **Picking the stack from Hacker News yesterday** — 6-month-old stacks have more bugs, fewer answers, smaller community. Boring wins.
