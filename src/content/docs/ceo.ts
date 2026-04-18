import type { KitDoc } from "./types";

export const ceoDoc: KitDoc = {
  slug: "ceo",
  title: "CEO Kit",
  tagline: "Strategy, decisions, leadership — in 15 minutes a week.",
  heroSentence:
    "Your CEO Kit replaces what a real chief executive spends most of their time doing: setting priorities, making decisions, and communicating with investors. Use it as a weekly operating system, not as a chatbot.",
  review: {
    intro:
      "Before you install anything, write down answers to these — in Notion, a text file, anywhere. The kit is useful in direct proportion to how precisely you can answer these four questions.",
    questions: [
      "What is the single metric that will determine if this quarter was a success? (ARR, paying users, demos booked — pick one)",
      "If an investor asked you today 'what's the one thing that shipped this month that changes the trajectory?' — what would you say?",
      "What's the biggest decision that has been sitting on your desk for more than 14 days? Why is it still there?",
      "How many hours per week are you spending on work that a $15/hour VA could do? (email triage, scheduling, admin)",
    ],
    brainstormPrompts: [
      "What would change next Monday if you had a real CEO beside you?",
      "Which of your last 10 decisions do you regret? What pattern links them?",
      "What are you doing that is comfortable but not important? List 3.",
    ],
  },
  mcps: [
    {
      name: "Notion",
      why: "Decision log, board-update drafts, strategic one-pagers. The CEO Kit writes here.",
      docsUrl: "https://developers.notion.com/docs/mcp",
    },
    {
      name: "Linear",
      why: "OKRs and roadmap state. The skills pull current quarterly goals to anchor weekly planning.",
      docsUrl: "https://linear.app/docs/mcp",
    },
    {
      name: "Google Calendar",
      why: "The weekly-priorities skill reads your week to spot where time is actually going vs. what you say matters.",
      docsUrl: "https://github.com/google-gemini/mcp-google-calendar",
    },
    {
      name: "Gmail",
      why: "board-update skill drafts the email directly. Optional — you can paste manually.",
      docsUrl: "https://github.com/GongRzhe/Gmail-MCP-Server",
    },
    {
      name: "Slack",
      why: "Pulls recent channel context when writing investor updates — 'what shipped this week' without you typing it.",
      docsUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack",
    },
  ],
  cadence: {
    daily: [
      {
        when: "End of day",
        duration: "3 min",
        action: "One-line founder journal entry: what moved, what didn't, one thing to retry tomorrow.",
      },
    ],
    weekly: [
      {
        when: "Monday 09:00",
        duration: "15 min",
        action: "Run the Monday planning ritual. Set 3 priorities for the week. Lock them.",
        skill: "/ceo-weekly",
      },
      {
        when: "Friday 17:00",
        duration: "10 min",
        action: "Retro: what happened vs. what was planned. Log one lesson.",
        skill: "founder-journal",
      },
    ],
    monthly: [
      {
        when: "First Tuesday",
        duration: "30 min",
        action: "Draft the monthly investor update. 6 sections, short.",
        skill: "board-update",
      },
    ],
    adhoc: [
      {
        when: "Before any major decision",
        duration: "20 min",
        action: "Score the opportunity on Momentum / Market / Moat / Me. Get a verdict.",
        skill: "build-buy-kill",
      },
      {
        when: "When you've already decided and want a challenge",
        duration: "10 min",
        action: "Spin up the strategic-advisor subagent to steelman + attack your reasoning.",
        skill: "strategic-advisor",
      },
    ],
  },
  skills: [
    {
      name: "weekly-priorities",
      type: "skill",
      trigger: '"plan my week" / "what should I focus on"',
      when: "Every Monday morning. First thing before email.",
      steps: [
        "Brain-dump everything on your mind (voice note works).",
        "The skill categorizes each item into MOVE / LEARN / MAINTAIN / DEFER / KILL.",
        "It cuts to 3 priorities, each with outcome, leading indicator, kill criteria.",
        "Output is a single markdown file you save in your decision log.",
      ],
      example: {
        input:
          '"I need to ship the onboarding flow, respond to the Y Combinator email, fix the Stripe webhook bug, hire a designer, write next month\'s investor update, and figure out pricing."',
        output:
          "**Priority 1:** 20 new users completing onboarding in 7 days. **Priority 2:** Pricing test live by Friday. **Priority 3:** YC reply sent by Tuesday. Everything else → DEFER block on Friday afternoon.",
      },
      pitfalls: [
        "Don't ask for a 4th priority. The skill will refuse — this is a feature.",
        "Don't set outcomes like 'ship feature X' — it'll push back. Outcome = observable result.",
      ],
    },
    {
      name: "board-update",
      type: "skill",
      trigger: '"write the investor update" / "draft monthly board note"',
      when: "First week of each month. Or the day before your next investor call.",
      steps: [
        "The skill asks 6 questions: MRR + delta, cash + burn, ToFu metric, biggest win, biggest challenge, one specific ask.",
        "Fill each in 30 seconds — no polishing.",
        "Output is the 6-section investor email ready to send.",
      ],
      example: {
        input:
          '"MRR €4.2k → €5.1k. Cash €82k / €11k burn. Signups 180 → 240. Win: new activation flow doubled D7 retention. Challenge: hiring delayed — 3 senior eng candidates ghosted. Ask: intros to technical co-founders in EU."',
        output:
          "A 400-word investor email with KPI table, 3 wins, 2 challenges, 1 specific ask, next-month plan. Ready to paste into Gmail.",
      },
      pitfalls: [
        "If the month was quiet, write a shorter update. The skill won't invent news — don't override it.",
        "Asks must be specific. 'Any intros help' → the skill will refuse and ask for a role + company type.",
      ],
    },
    {
      name: "build-buy-kill",
      type: "skill",
      trigger: '"should I build X" / "is this worth doing"',
      when: "Any decision that takes more than 2 weeks or costs more than €500.",
      steps: [
        "State the opportunity in one sentence.",
        "The skill scores 0–5 on Momentum / Market / Moat / Me, each with one line of evidence you provide.",
        "Total /20 → verdict: BUILD (≥14), BUY (10–13), DEFER (6–9), KILL (≤5).",
        "Output includes the first concrete action or the kill rationale.",
      ],
      example: {
        input:
          '"Should I build an affiliate program?"',
        output:
          "Momentum 3 (no users asked). Market 2 (≤5% of MRR). Moat 1 (anyone can copy). Me 2 (≥2 weeks). Total 8/20 → DEFER. Re-evaluate when 3+ customers ask.",
      },
      pitfalls: [
        "Be honest on the Me score — most founders inflate it because they *want* to build it.",
        "Momentum ≠ 'I think it's a big market.' Momentum = real signal in the last 14 days.",
      ],
    },
    {
      name: "strategic-advisor",
      type: "subagent",
      trigger: "Explicitly invoke: 'call the strategic-advisor' or via subagent menu.",
      when: "You've already made a decision internally and want a hard challenge, not a plan.",
      steps: [
        "Describe the decision in 3 sentences.",
        "Subagent steelmans your decision, then attacks it with 2–3 specific counter-arguments.",
        "Ends with one of: proceed with mitigations, modify, or pause + run a test.",
      ],
      example: {
        input:
          '"I\'m raising a pre-seed round of €500k at a €3M cap."',
        output:
          "Steelman: cap leaves room for seed. Attack: €3M cap + €500k = 14% dilution — you\'ll hit 40% founder dilution by Series A. Recommendation: modify. Raise €350k at €4M, extend runway via revenue. Test first: 2 commitments at the new terms before finalizing.",
      },
      pitfalls: [
        "This is not a planner. Don't ask it to write a plan.",
        "Don't use it for reversible calls. Reserve for decisions >€5k or >1 month commitment.",
      ],
    },
    {
      name: "/ceo:weekly",
      type: "command",
      trigger: "Type /ceo:weekly in Claude Code.",
      when: "Monday morning ritual. Non-negotiable.",
      steps: [
        "Reads last week's entry from founder-log/weekly/.",
        "Asks for 60-second brain dump.",
        "Applies the weekly-priorities skill.",
        "Writes founder-log/weekly/YYYY-WW.md with 3 priorities locked.",
        "Ends with one provocative question.",
      ],
      example: {
        input: "(Just type /ceo:weekly.)",
        output:
          "A file founder-log/weekly/2026-16.md with priorities, kill criteria, and Friday retro pre-filled.",
      },
      pitfalls: [
        "Don't skip the brain dump — that's where shadow backlog surfaces.",
        "Cap at 15 minutes.",
      ],
    },
    {
      name: "decision-log",
      type: "skill",
      trigger: '"log this decision" / "I\'m deciding X"',
      when: "Decisions >€500, >1 week, cross-function, or hard to reverse.",
      steps: [
        "Required fields: title, question, decision (imperative), ≥2 alternatives, one negative consequence (forced), observable 'I was wrong if' trigger, review date.",
        "Save to founder-log/decisions/YYYY-MM-DD-<slug>.md and append to index.",
        "Quarterly review checks 'wrong-if' signals.",
      ],
      example: {
        input: '"Switching to monthly + annual pricing"',
        output:
          "decisions/2026-04-19-add-annual-plan.md with decision, 2 rejected alternatives, negative (cash-flow cliff if >40% take annual), wrong-if: annual <10% of new at 30d.",
      },
      pitfalls: [
        "Vague reasons → force concrete.",
        "Non-observable revisit triggers → force numbers or dates.",
      ],
    },
    {
      name: "founder-journal",
      type: "skill",
      trigger: '"Friday reflection" / "retro the week"',
      when: "Every Friday, 10 min, non-negotiable.",
      steps: [
        "3 specific wins (push back on 1 or 5).",
        "1 named failure (no euphemism).",
        "1 testable lesson.",
        "1 Monday recalibration.",
        "3-line energy check.",
        "Appends to founder-log/weekly/YYYY-WW.md.",
      ],
      example: {
        input: "(Friday prompt)",
        output:
          "Wins (20 users, Stripe webhook fixed, investor intro). Failure (candidate ghosted). Lesson (require 20-min intro before any contract). Monday action (new hiring loop).",
      },
      pitfalls: [
        "'No wins' → dig harder or that's the failure.",
        "Skipping Friday entirely — 3 min > 0 min.",
      ],
    },
    {
      name: "pitch-deck",
      type: "skill",
      trigger: '"write my pitch" / "deck for [investor]"',
      when: "Fundraise prep, specific investor, or update in deck form.",
      steps: [
        "Pick variant: cold / warm / update.",
        "Strict 10 slides: title, why-now, problem, solution, how, traction, model, market, team, ask.",
        "One idea per slide. One metric on slides 2-6.",
      ],
      example: {
        input: '"cold deck, generic seed"',
        output:
          "10 slides with raise target in title, why-now with data point, problem + customer quote, product shot, traction MoM, bottom-up market, founder-market fit, specific raise + 3 milestones.",
      },
      pitfalls: [
        "Team slide before traction → demote.",
        "TAM=SAM=SOM chart → delete.",
        "Competitive matrix → show wedge instead.",
      ],
    },
  ],
  firstWin: "Run /ceo:weekly next Monday. If your 3 priorities don't feel tighter than last week's, ask for a refund.",
};
