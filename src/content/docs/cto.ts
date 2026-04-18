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
  ],
  firstWin: "Run the code-review subagent on your next PR. If it flags something you would've missed, the kit has paid for itself.",
};
