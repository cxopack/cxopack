import type { KitDoc } from "./types";

export const cfoDoc: KitDoc = {
  slug: "cfo",
  title: "CFO Kit",
  tagline: "Cash discipline, metrics you can defend, investor-grade numbers.",
  heroSentence:
    "The CFO Kit turns your Stripe export into a defendable metric deck, keeps your 13-week cash flow up to date in 10 minutes a week, and flags concentration risk before an investor does. It won't replace your accountant — it makes you the founder who never shows up to a board call with bad math.",
  review: {
    intro:
      "Before you install anything: find your financial raw data. If you don't know where your Stripe export lives, fix that first.",
    questions: [
      "When did you last update your cash flow? (If 'never' or '>30 days', that's the #1 thing the kit fixes.)",
      "If asked right now, can you name: MRR, ARR, monthly burn, runway in weeks? (To the nearest 10%.)",
      "What percentage of your MRR comes from your top customer? Your top 3? (>20% from one = concentration risk.)",
      "When is your next investor update / board call / fundraising push? Count back 4 weeks — that's when you should start using the kit.",
    ],
    brainstormPrompts: [
      "If an investor asked to see your data room *tomorrow*, what's missing?",
      "Which of your recurring expenses do you not fully remember signing up for? (Run the audit.)",
      "If your runway halved next month, what are the first 3 things you'd cut? Those aren't essential — why are they in there now?",
    ],
  },
  mcps: [
    {
      name: "Stripe",
      why: "saas-metrics pulls subscription data directly — MRR, ARR, churn from transactions, not guesses.",
      docsUrl: "https://github.com/stripe/agent-toolkit",
    },
    {
      name: "Plaid or bank MCP",
      why: "cash-flow-13w reads actual balances + recent outflows, no copy-paste from bank exports.",
      docsUrl: "https://plaid.com/developers/",
    },
    {
      name: "QuickBooks / Xero / Pennylane",
      why: "Investor-grade P&L + balance sheet on demand, without bugging your accountant.",
      docsUrl: "https://developer.intuit.com/app/developer/qbo/docs/get-started",
    },
    {
      name: "Google Sheets",
      why: "cash-flow-13w can write directly to a shared sheet so co-founders + investors can view live.",
      docsUrl: "https://developers.google.com/sheets/api",
    },
    {
      name: "Notion",
      why: "data-room writes the investor-ready folder structure and missing-docs checklist.",
      docsUrl: "https://developers.notion.com/docs/mcp",
    },
  ],
  cadence: {
    daily: [
      {
        when: "Never",
        duration: "—",
        action: "Finance is a weekly discipline, not a daily one. Resist the urge to check MRR more than once a week.",
      },
    ],
    weekly: [
      {
        when: "Friday 16:30",
        duration: "10 min",
        action: "Roll the 13-week cash flow forward one week. Flag any delta >2 weeks.",
        skill: "cash-flow-13w",
      },
    ],
    monthly: [
      {
        when: "First business day",
        duration: "30 min",
        action: "Pull SaaS metrics snapshot. If NRR dropped below 95% or a single customer >20% MRR, act that week.",
        skill: "saas-metrics",
      },
      {
        when: "Before every investor update",
        duration: "20 min",
        action: "Generate the numbers block: MRR, ARR, runway, top-of-funnel, all with MoM delta.",
      },
    ],
    adhoc: [
      {
        when: "Before any pricing change",
        duration: "60 min",
        action:
          "Pricing experiment: hypothesis (conversion drop %, ARPU rise %) + kill criterion + 30-day notice to existing customers.",
      },
      {
        when: "Before fundraising",
        duration: "half-day",
        action: "Build the data room: cap table, bank statements, Stripe export, P&L, investor updates. Close the checklist.",
      },
    ],
  },
  skills: [
    {
      name: "cash-flow-13w",
      type: "skill",
      trigger: '"update the cash flow" / "what\'s my runway"',
      when: "Weekly, Friday afternoon. It takes 10 minutes if you do it every week. It takes 2 hours if you wait a month.",
      steps: [
        "Reads last week's cash-flow file in finance/ (if any) and rolls it forward.",
        "Asks you to confirm actuals for the just-ended week: cash in, cash out.",
        "Flags any 'expected' line that didn't materialize — moves to next week or downgrades to 'possible'.",
        "Applies conservative model: inflows × 0.7, outflows × 1.1.",
        "Outputs markdown + CSV. Runway delta vs. last week in bold if >2 weeks.",
      ],
      example: {
        input:
          '"Actuals last week: in €1,200 (Stripe), out €4,500 (hosting + salary + 1 contractor). Expected this week: €2,800 in from 2 annual renewals."',
        output:
          "13-week table, closing cash €58.4k, runway 5.3 months (was 5.6 last week, Δ −0.3w), variance paragraph: 'Contractor invoice was expected 2 weeks ago — shift to possible.'",
      },
      pitfalls: [
        "Don't show P&L-style accruals. This is CASH only.",
        "If you skip a week, the rollforward loses fidelity. Set a Friday calendar block.",
      ],
    },
    {
      name: "saas-metrics",
      type: "skill",
      trigger: '"compute my MRR / churn / NRR"',
      when: "First business day of each month. Also before any investor interaction.",
      steps: [
        "Point the skill at your Stripe export (CSV or live via MCP).",
        "It computes: MRR, ARR, Net New MRR, logo & revenue churn, NRR, GRR, ARPU, CAC (fully loaded), LTV (capped 36 months), LTV/CAC, CAC payback.",
        "Flags concentration risk: single customer >20% MRR, vendor >50% COGS.",
        "Interprets — doesn't just list. 'NRR dropped below 95% — investigate expansion pipeline before next board update.'",
      ],
      example: {
        input: 'Stripe subscriptions.csv',
        output:
          "MRR €5,100 (+18% MoM), ARR €61.2k, NRR 108%, logo churn 2.1%, CAC €180, LTV €1,800, LTV/CAC 10x, CAC payback 6.5 months. 🚨 One customer represents 22% of MRR — diversify or lose them = 22% hit.",
      },
      pitfalls: [
        "Don't blend enterprise + SMB customer segments. The skill will ask which cohort to compute for.",
        "CAC without founder time = vanity. Include a shadow rate for your own hours.",
      ],
    },
  ],
  firstWin:
    "Run saas-metrics on your Stripe export today. Either you learn your NRR for the first time, or you confirm what you thought — both are valuable.",
};
