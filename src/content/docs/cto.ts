import type { KitDoc } from "./types";

export const ctoDoc: KitDoc = {
  slug: "cto",
  title: "CTO Kit",
  tagline: "Ship more, rewrite less. Decisions documented. Blast radius scoped.",
  heroSentence:
    "The CTO Kit is a senior-staff-engineer co-founder that documents your decisions, scopes your MVP, reviews your PRs, and refuses to let you add auth, admin, or analytics before signal. Install once, then let it push back when you drift.",
  review: {
    intro:
      "A CTO Kit is only useful if you can articulate what you're building, how, and where the cracks already are. Write these out first.",
    questions: [
      "In one sentence: what's the hypothesis your MVP is testing? (If >1 sentence, the hypothesis is too big.)",
      "Name the 3 biggest architectural decisions you've made in the last 6 months. Are any of them documented? Anywhere?",
      "Last production incident: what broke, how did you find out, how long was recovery, what changed after?",
      "What's one piece of tech debt you feel at least once a week but haven't fixed? Why haven't you?",
    ],
    brainstormPrompts: [
      "If you got hit by a bus tomorrow, what's the single hardest thing for a new dev to rebuild? That's your highest-leverage ADR.",
      "What have you built that a 3-person team would have bought instead? Could you buy it now?",
      "Which part of your codebase do you avoid on Fridays? That's the triage list.",
    ],
  },
  mcps: [
    {
      name: "GitHub",
      why: "code-review subagent reads the diff directly. adr skill writes to docs/adr/ in your repo.",
      docsUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/github",
    },
    {
      name: "Linear",
      why: "mvp-scope pulls your feature list and writes back the cut version tagged 'not in MVP'.",
      docsUrl: "https://linear.app/docs/mcp",
    },
    {
      name: "Sentry",
      why: "tech-debt-triage pulls top error frequencies + user counts to score what actually hurts.",
      docsUrl: "https://github.com/getsentry/sentry-mcp",
    },
    {
      name: "Vercel",
      why: "Deploy + rollback context for incident post-mortems. Links errors to specific deployments.",
      docsUrl: "https://vercel.com/docs/vercel-mcp",
    },
    {
      name: "PostgreSQL (your DB)",
      why: "build-vs-buy asks it whether you can answer your question with existing tables before building a new feature.",
      docsUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres",
    },
  ],
  cadence: {
    daily: [
      {
        when: "Before any merge",
        duration: "2 min",
        action: "Run code-review subagent on the diff. Only merge if Must-fix list is empty.",
        skill: "code-review",
      },
    ],
    weekly: [
      {
        when: "Friday afternoon",
        duration: "20 min",
        action: "Tech debt triage. Pick 1 item to fix next week. Close the rest.",
        skill: "tech-debt-triage",
      },
    ],
    monthly: [
      {
        when: "First Monday",
        duration: "30 min",
        action: "Scan your 4 most-used third-party tools. Any worth replacing? Any consolidating?",
      },
    ],
    adhoc: [
      {
        when: "Before any decision that is hard to reverse",
        duration: "15 min",
        action: "Write an ADR. The skill forces one negative consequence + an observable revisit trigger.",
        skill: "adr",
      },
      {
        when: "When scoping a new feature or MVP",
        duration: "30 min",
        action: "RICE-score everything, cut to 5, produce the 'explicitly not in MVP' list.",
        skill: "mvp-scope",
      },
    ],
  },
  skills: [
    {
      name: "adr",
      type: "skill",
      trigger: '"write an ADR" / "document this decision"',
      when:
        "Any decision that (a) is hard to reverse, (b) you'd need to explain to a new dev in 6 months, or (c) involves paid dependency or platform lock-in.",
      steps: [
        "Give the skill the title, context, and at least 2 alternatives you considered.",
        "It writes docs/adr/NNN-title.md (auto-incremented number) in the Michael Nygard format.",
        "Sections: Status, Date, Context, Decision, Consequences (+/−/neutral), Alternatives, Revisit trigger.",
        "It forces at least one negative consequence — if you can't name one, you haven't thought hard enough.",
      ],
      example: {
        input:
          '"We\'re picking Postgres as primary store. Alternatives: DynamoDB (we tried), Planetscale (expensive)."',
        output:
          "docs/adr/0014-use-postgres-as-primary-store.md with explicit negative consequence ('JSON column queries will be slower than DynamoDB at >1M rows') and revisit trigger ('if p99 > 200ms for 3 consecutive days').",
      },
      pitfalls: [
        "Revisit triggers must be observable. 'If performance becomes an issue' → the skill will ask for a specific threshold.",
        "Don't write ADRs for reversible choices. Use a simple decision log entry instead.",
      ],
    },
    {
      name: "mvp-scope",
      type: "skill",
      trigger: '"scope my MVP" / "what should be in v1"',
      when: "Every new feature set, every time the scope starts creeping past 2 weeks.",
      steps: [
        "State the hypothesis in one sentence: If I ship X, then Y will do Z in N days, proven by metric M.",
        "The skill RICE-scores every feature on the list.",
        "Cuts to top 5 by score. If they don't deliver the hypothesis together, adds 1 more; if still not, says the hypothesis is too big.",
        "Produces the 'NOT in MVP' list with the trigger for each item.",
        "Defines kill criteria: if metric < threshold by day N, pivot before adding more features.",
      ],
      example: {
        input:
          '10-feature list for a new landing + onboarding flow',
        output:
          "5 locked features (scored, totaling ~8 dev-days), 'not in MVP' list of 5 with 'revisit when X' triggers, kill criterion: 'if <10% signup-to-activation in week 1, pause and talk to users.'",
      },
      pitfalls: [
        "If the founder lists 'polish' or 'analytics' as features → the skill auto-cuts them.",
        "Admin panels: rejected until you have 50+ users. Use the DB directly.",
      ],
    },
    {
      name: "code-review",
      type: "subagent",
      trigger: "Invoke on a diff or changed-files set. Works with git show, gh pr view, Cursor PR view.",
      when: "Before every merge into main. Non-negotiable for anything touching payments or auth.",
      steps: [
        "Feed the diff to the subagent.",
        "It prioritizes: P1 correctness + blast radius, P2 robustness at boundaries, P3 clarity.",
        "Skips style nits a linter catches.",
        "Output: ✋ Must-fix / 🤔 Should-consider / 👀 Nit / What's good.",
      ],
      example: {
        input:
          'Diff: a new /api/refund endpoint with no auth check, using SQL string interpolation.',
        output:
          '✋ auth missing (unauthenticated refund = financial loss). ✋ SQL injection risk. 🤔 no idempotency key — duplicate refunds possible. What\'s good: error messages avoid leaking internal IDs.',
      },
      pitfalls: [
        "If the review returns zero 'Must fix' + has no 'What\\'s good' bullet — re-prompt. The subagent should always call out a good choice.",
        "For very large diffs (>500 lines), split into logical chunks. Otherwise signal-to-noise collapses.",
      ],
    },
    {
      name: "stack-advisor",
      type: "skill",
      trigger: '"what should I build this with" / new project',
      when: "Starting a new project, rewriting a component, evaluating a migration.",
      steps: [
        "5-question intake: strongest lang/framework, product shape, deadline, ops capacity, acceptable lock-ins.",
        "Default boring and proven — novelty requires justification.",
        "Output: stack table, 'Why NOT <the tempting option>', setup checklist, kill criteria.",
      ],
      example: {
        input: '"New SaaS, TS bg, 4 weeks, solo, no infra chops"',
        output:
          "Next.js + Supabase + Drizzle + Stripe + Resend + Vercel + Sentry. Reject: AWS primitives, microservices, rolled-own auth. Setup checklist (6 steps, first hour).",
      },
      pitfalls: [
        "'Best-in-class' of everything — integration tax wipes gains.",
        "Cloud-primitives lock-in on day 1 for 1-person team.",
      ],
    },
    {
      name: "build-vs-buy",
      type: "skill",
      trigger: '"should I build X" / "<SaaS tool> or ship myself"',
      when: "Any non-trivial capability where build is an option.",
      steps: [
        "Score 0-5 on Differentiation / Speed-to-value / Ops burden / Switching cost.",
        "Rule: Diff ≥4 & ops ≤2 → BUILD · Switching ≥4 & Diff ≤2 → BUILD · Diff ≤2 & speed ≥3 → BUY · else BUY.",
        "Common capabilities default to BUY: auth, email, payments, analytics, storage, search, queues, flags.",
      ],
      example: {
        input: '"Build auth with Lucia?"',
        output:
          "Diff 1 / speed 4 (Clerk 2h) / ops 5 (security forever) / switching 3. Verdict: BUY Clerk.",
      },
      pitfalls: [
        '"But we can do it better" — at what cost.',
        "Building for imagined future scale.",
      ],
    },
    {
      name: "tech-debt-triage",
      type: "skill",
      trigger: '"what should I fix" / Friday cadence',
      when: "Every Friday afternoon, 20 min.",
      steps: [
        "Inventory: TODOs, Sentry errors, avoided files.",
        "Score: (pain × frequency) / fix-cost. Max 10 candidates.",
        "Pick 1 to ship next week.",
        "Save to founder-log/tech-debt/YYYY-WW.md.",
      ],
      example: {
        input: "(runs on Friday)",
        output:
          "Top: 'Stripe webhook retries flaky' — 4×5/3h = 6.7. Ship next week. Deferred 2. Killed 1 that wasn't really debt.",
      },
      pitfalls: [
        "Big refactor weeks are a trap.",
        "Score inflation (everything at pain 5).",
      ],
    },
  ],
  playbook: [
    {
      title: "Scope the next 2-week build",
      when: "Start of any new feature bigger than a hotfix.",
      asset: "mvp-scope",
      assetType: "skill",
      input: '"scope the referral MVP — target ship by Friday week 2"',
      output:
        "A spec with one user story, the smallest shippable surface, a NOT-in-MVP list, and a kill criterion if scope creeps >20%.",
      time: "20 min · per feature",
    },
    {
      title: "Decide before you code",
      when: "Any architectural call you'll regret in 6 months.",
      asset: "adr",
      assetType: "skill",
      input: '"adr: Postgres vs. DynamoDB as primary store"',
      output:
        "A numbered ADR with context, decision, rejected alternatives, one forced negative consequence, and a revisit trigger — written to docs/adr/.",
      time: "10 min · ad-hoc",
    },
    {
      title: "Review a diff before merge",
      when: "Every PR touching money, auth, or external APIs.",
      asset: "code-review",
      assetType: "subagent",
      input: '"review this diff against our security + correctness standards"',
      output:
        "A structured review: Must-fix, Should-consider, Nit, and What's good — reading the diff directly from GitHub.",
      time: "5 min · per PR",
    },
    {
      title: "Pick a stack or a library",
      when: "Starting a project, or swapping a dependency.",
      asset: "stack-advisor",
      assetType: "skill",
      input: '"new SaaS, solo, 4 weeks, TS background"',
      output:
        "A concrete stack table, a 'why NOT the tempting option' section, a first-hour checklist, and kill criteria.",
      time: "15 min · ad-hoc",
    },
    {
      title: "Build it or buy it",
      when: "Any capability someone has already shipped as a product.",
      asset: "build-vs-buy",
      assetType: "skill",
      input: '"build auth from scratch or use Clerk?"',
      output:
        "A 4-axis score (diff / speed / ops / switching cost) with a BUY or BUILD verdict in two lines.",
      time: "10 min · ad-hoc",
    },
    {
      title: "Stop tech debt from eating the roadmap",
      when: "Every Friday afternoon.",
      asset: "tech-debt-triage",
      assetType: "skill",
      input: "/cto:tech-debt",
      output:
        "Top-10 debt items scored by (pain × frequency) / fix-cost, the one to ship next week, and the ones you can close guilt-free.",
      time: "20 min · weekly",
    },
  ],
  firstWin: "Run the code-review subagent on your next PR. If it flags something you would've missed, the kit has paid for itself.",
};
