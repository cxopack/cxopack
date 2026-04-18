---
name: build-vs-buy
description: Score a capability on build-in-house vs. adopt-existing-tool. Use when the user says "should I build X or buy X", "looking at [tool name]", or is evaluating a third-party dependency.
allowed-tools: Read, Write, WebSearch
---

# Build vs. Buy

For a solo founder, the default answer to "should I build this?" is **no**. Your time is the scarcest resource in the system. Build only when the capability is the thing customers pay you for.

## The scoring framework

Four dimensions, 0–5 each:

### 1. Differentiation — is this what customers pay you for?
0 = invisible to the customer. 5 = they'd switch vendors if yours was better.

### 2. Speed-to-value — buy vs. build time difference
0 = build in 1 day, buy requires 1 week of evaluation. 5 = build is months of engineering, buy is a €50/mo SaaS that ships tomorrow.

### 3. Ongoing ops burden of building
0 = ships once and runs forever. 5 = needs continuous maintenance, security patches, upgrades, outage response.

### 4. Switching cost of buying
0 = can swap vendors in a weekend. 5 = data model lock-in, rewriting auth, migrating customers — years of cost to change.

## The decision rule

- **Differentiation ≥ 4 AND ops burden ≤ 2:** BUILD.
- **Switching cost ≥ 4 AND differentiation ≤ 2:** BUILD (lock-in risk too high).
- **Differentiation ≤ 2 AND (speed-to-value ≥ 3 OR ops burden ≥ 3):** BUY.
- **Everything else:** default BUY, set a revisit trigger.

## Common capabilities, my priors

These are the defaults — push back if the founder wants to build them:

| Capability | Default | Why |
|---|---|---|
| Auth | BUY (Clerk, Supabase Auth, Auth0) | Never your differentiator. Security edge cases will bite you for years. |
| Email sending | BUY (Resend, Postmark) | Deliverability is a specialty. |
| Payments | BUY (Stripe, Lemon Squeezy) | Regulatory minefield. |
| Analytics | BUY (PostHog, Plausible) | Not differentiating; free tiers are generous. |
| Error tracking | BUY (Sentry) | Same. |
| File storage | BUY (S3, R2, Supabase Storage) | CDN + redundancy is hard. |
| Search (<10M docs) | BUY (Typesense Cloud, Algolia) | Ranking quality ≠ quick win. |
| Job queue | BUY (Inngest, Trigger.dev) | Retries + DLQ + observability are the trap. |
| Feature flags | BUY (Statsig, PostHog) | Zero differentiation. |
| Transactional email templates | BUY | Use Resend + React Email, don't own a template engine. |

Build territory:
- Your core product UX
- Your domain model
- Your pricing logic (tightly coupled to your business rules)
- Your content / data / workflows (the thing users come for)

## Output

```md
# Build vs. buy: <capability>

## Candidate tools evaluated
- **<Tool A>** — pricing, key feature, main concern
- **<Tool B>** — …
- **Build in-house** — rough time estimate, maintenance shape

## Scores
| Dimension | Score | Evidence |
|---|---|---|
| Differentiation | n/5 | … |
| Speed-to-value | n/5 | … |
| Ops burden (if built) | n/5 | … |
| Switching cost (if bought) | n/5 | … |

## Recommendation
**BUY / BUILD** — one-paragraph reasoning.

## If BUY
Top choice: <tool> — because …
Contract / lock-in risk: …
Exit plan in case of migration: …

## If BUILD
First commit goal: …
Ops checklist: …
Kill criteria (flip to buy if): …
```

## Anti-patterns

- **"But we can do it better"** — maybe. But at what cost? Count the hours, not the quality.
- **"It's just a CRUD layer"** — every CRUD becomes a security + migration + monitoring surface.
- **Building for imagined future needs** — score for *today's* shape, not a hypothetical 2-year-out scale problem.
- **Free-tier myopia** — the tool's free tier fits today. Model the €500/mo tier 18 months out too.
