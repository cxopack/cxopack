# CxOPack

> **Your AI C-suite. Any AI tool. Built for solo founders.**

Storefront + landing + GitHub-invite delivery for the CxOPack kits (CEO, CTO, CFO, Sales, CMO).

## Stack

- **Next.js 15 (App Router)** + TypeScript + Tailwind v4 + shadcn-style primitives
- **next-intl** — currently English-only; can be re-extended to other locales without refactor
- **Stripe Checkout** — one-time (kits, Full Pack, Founding 100) + subscription (Founder's Club monthly/yearly)
- **Supabase** — auth + Postgres
- **Drizzle ORM** — schema in `src/db/schema.ts`
- **Octokit** — invites buyers to private kit repos on successful payment
- **Resend** — welcome email with install links

## Directory map

```
/
├── src/
│   ├── app/[locale]/          # pages (/, /checkout, /thank-you)
│   ├── app/api/
│   │   ├── checkout/          # creates Stripe Checkout session
│   │   └── stripe/webhook/    # payment → DB + GitHub invite + email
│   ├── components/            # landing sections (hero, kits, pricing, faq, …)
│   ├── config/kits.ts         # the five kits — single source of truth
│   ├── db/                    # Drizzle schema + client
│   ├── i18n/                  # next-intl routing + request config
│   └── lib/
│       ├── stripe.ts          # Stripe client + plan → price resolver
│       ├── github.ts          # Octokit invite helper
│       ├── email.ts           # Resend welcome email
│       └── supabase/          # server + client helpers
├── messages/
│   └── en.json                # all landing copy
└── kits/                      # kit *source* — mirrored to private GH repos at release
    ├── ceo/  cto/  cfo/  sales/  cmo/
    │   ├── claude/{skills,subagents,commands}/
    │   ├── chatgpt/
    │   ├── cursor/rules/
    │   └── prompts/
    └── README.md              # release flow
```

## Local dev

```bash
pnpm install
cp .env.example .env.local        # fill in values
pnpm db:push                      # push Drizzle schema (after DATABASE_URL set)
pnpm dev                          # http://localhost:3000
```

Run `pnpm typecheck && pnpm build` before pushing.

## Go-live checklist

### 1. Domain & email
- [ ] Buy **cxopack.com / .ai / .io** (all 3 available as of 2026-04-17 — grab the set).
- [ ] Resend: add `cxopack.com`, verify DNS, set `RESEND_FROM_EMAIL=hello@cxopack.com`.

### 2. GitHub org + kit repos
- [ ] Create the `cxopack` GitHub **organization** (manual on github.com — no API).
- [ ] Then I can create the 5 **private** repos and push every `kits/<slug>/` folder via the GitHub MCP.
- [ ] Create a **fine-grained PAT** with `Administration: Read & Write` scoped to the org → set `GITHUB_APP_TOKEN`.

### 3. Supabase
- [ ] Sign up at supabase.com (free tier is fine for launch).
- [ ] Copy `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, service role key, and Postgres `DATABASE_URL`.
- [ ] `pnpm db:push` to create tables.
- [ ] In Supabase auth settings, enable **magic-link** + **Google** (optional).

### 4. Stripe
Create **EUR** products in your Stripe Dashboard (or run `pnpm tsx scripts/setup-stripe.ts` after setting `STRIPE_SECRET_KEY`):

| Product | Price | Mode | Env var |
|---|---|---|---|
| CEO Kit | €99 | one-time | `STRIPE_PRICE_KIT_CEO` |
| CTO Kit | €99 | one-time | `STRIPE_PRICE_KIT_CTO` |
| CFO Kit | €99 | one-time | `STRIPE_PRICE_KIT_CFO` |
| Sales Kit | €99 | one-time | `STRIPE_PRICE_KIT_SALES` |
| CMO Kit | €99 | one-time | `STRIPE_PRICE_KIT_CMO` |
| Full Pack | €299 | one-time | `STRIPE_PRICE_FULL_PACK` |
| Founding 100 | €249 | one-time | `STRIPE_PRICE_FOUNDING_100` |
| Founder's Club monthly | €49/mo | recurring | `STRIPE_PRICE_CLUB_MONTHLY` |
| Founder's Club yearly | €399/yr | recurring | `STRIPE_PRICE_CLUB_YEARLY` |

- [ ] Create a webhook pointing at `https://cxopack.com/api/stripe/webhook`, events: `checkout.session.completed`. Copy signing secret → `STRIPE_WEBHOOK_SECRET`.
- [ ] Enable **Automatic Tax** (covers EU VAT and US sales tax).

### 5. Deploy (Vercel)
- [ ] `vercel` → link this repo (or use the Vercel MCP — I can do this for you).
- [ ] Paste all `.env.example` values in Vercel project settings (Production + Preview).
- [ ] Add `cxopack.com` domain, let Vercel configure DNS.
- [ ] Smoke test: all checkout flows with Stripe test cards, webhook fires, email arrives, GitHub invite sent.

### 6. Launch-day
- [ ] Publish the "Founding 100" post on LinkedIn, X, Hacker News (Show HN), IndieHackers, ProductHunt.
- [ ] Turn on the Founding-100 countdown (hard-coded cap at 100 in the DB `founding_counter` table).
- [ ] Set up Plausible or simple analytics.

## Pricing logic

| Plan | Price | Mode | Delivery |
|---|---|---|---|
| 1 kit | €99 | one-time | GH invite to one repo |
| Full Pack | €299 | one-time | GH invite to all 5 repos |
| Founding 100 | €249 | one-time | Full Pack + testimonial obligation after 30 days |
| Founder's Club monthly | €49/mo | subscription | Full Pack + monthly drops + community + live call |
| Founder's Club yearly | €399/yr | subscription | same, 32% off |

## Kit publishing flow

When you update a kit locally, mirror it to its private repo:

```bash
pnpm release:kit ceo --message "v0.1.0 — initial release"
```

Or do it manually:

```bash
cd kits/ceo
git init && git remote add origin git@github.com:cxopack/cxopack-ceo.git
git add . && git commit -m "v0.1.0" && git push -u origin main
```

## Post-MVP ideas

- **Weekly Board Meeting workflow** — meta-skill that runs all 5 kits in sequence for a Monday review.
- **Founder Mode slash command** — autodetects task intent, routes to right C-suite agent.
- **Startup-stage templates** — pre-seed SaaS, agency, marketplace variants per kit.
- **Dogfood case study** — public page on a real startup shipped using CxOPack.
- **Referral program** — €30 credit per converted referral.
- **Public leaderboard** of shipped startups using the kits.

## License

Landing-page source in this repo is public (to enable Vercel Hobby auto-deploys), but **all kit content lives in 5 separate private repos** (`cxopack/cxopack-{ceo,cto,cfo,sales,cmo}`) under a commercial license granted only to paying customers. Contributions to the landing repo are welcome; the kits are closed-source.

