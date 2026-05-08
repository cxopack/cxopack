import type { KitDoc } from "./types";

// The Board isn't a kit — it's the orchestration layer on top of the 5 kits.
// We reuse KitDoc shape for docs rendering, but it represents a meta-layer.
// Slug is "board" but it's not in KitSlug; we keep it string-typed via any-cast.

export const boardDoc = {
  slug: "board" as const,
  title: "The Board",
  tagline: "Your 5 kits stop being 5 kits. They become a team.",
  heroSentence:
    "The Board is the orchestration layer included with the All-Access Pass. Donna — your Chief of Staff — routes any request to the right executive persona; a /board:weekly ritual runs all 5 in sequence; a shared founder-log/ workspace gives them collective memory. Without the Board, you have 5 kits. With it, you have an AI executive team that remembers, hands off, and disagrees — like a real one.",
  review: {
    intro:
      "The Board is included with the All-Access Pass — but it only works if the kits beneath it are installed first. Before you install Board, install at least one kit and run it once end-to-end. The routing is only as smart as the personas it routes to.",
    questions: [
      "Do you have at least 2 of the 5 kits installed and have you run one skill from each?",
      "Do you have a `founder-log/` folder yet? (If not, the Board's first job is to initialize it.)",
      "What's the single decision you're stuck on right now? (That's your first /board:decision.)",
      "How often do you find yourself saying 'I don't know who to ask about this'? That's the frequency with which you'll run /founder.",
    ],
    brainstormPrompts: [
      "If you had a real Chief of Staff like Donna sitting next to you, what's the first meeting you'd have her set up?",
      "Which of your last 10 decisions were made without input from the function that mattered most? (Those are the ones to re-run via /board:decision.)",
      "What's a decision you've quietly been deferring because it touches too many parts of the business? Run /board:brief on it first, then /board:decision.",
    ],
  },
  mcps: [
    {
      name: "All kit-level MCPs",
      why: "The Board inherits every MCP you've installed for the individual kits. It doesn't add new ones — it reads the same data through the persona agents.",
      docsUrl: "/docs/quickstart",
    },
    {
      name: "File system (built-in)",
      why: "The `founder-log/` shared workspace is just files in your project. Every persona reads + writes here. No external service.",
      docsUrl: "https://modelcontextprotocol.io/quickstart/user",
    },
  ],
  cadence: {
    daily: [
      {
        when: "Morning",
        duration: "30 sec",
        action: "If in doubt, /founder <whatever's on your mind> instead of forcing a specific kit.",
      },
    ],
    weekly: [
      {
        when: "Monday 09:00",
        duration: "20 min",
        action: "The cornerstone ritual. All 5 personas give a read, Donna synthesizes into one weekly brief.",
        skill: "/board:weekly",
      },
    ],
    monthly: [
      {
        when: "First Monday",
        duration: "30 min",
        action: "Review open handoffs in founder-log/handoffs/. Kill anything >30 days old with no movement.",
      },
    ],
    adhoc: [
      {
        when: "Any big decision",
        duration: "20 min",
        action: "Get each relevant exec's POV + one recommendation. Logs to decisions/ automatically.",
        skill: "/board:decision",
      },
      {
        when: "Any cross-functional exploration",
        duration: "10 min",
        action: "1-3 personas brief you with 'the question you haven't asked' on a topic.",
        skill: "/board:brief",
      },
      {
        when: "Any time one exec needs to pass work to another",
        duration: "3 min",
        action: "Structured handoff with deadline, kill criteria, explicit deliverable.",
        skill: "/board:handoff",
      },
    ],
  },
  skills: [
    {
      name: "chief-of-staff",
      type: "subagent",
      trigger: "Invoked automatically by /founder or /board:* commands.",
      when: "Any request you don't know who to route to, or any request touching multiple functions.",
      steps: [
        "Reads the request.",
        "Reads founder-log/weekly/ for last week's context.",
        "Decides which personas to call (1 to 5). Over-consult before under-consulting.",
        "Invokes each persona in parallel or sequence with their function-specific slice.",
        "Synthesizes into one brief: by function + consolidated recommendation + proposed handoffs + the decision you need to make.",
      ],
      example: {
        input: '"/founder Should I raise prices from $29 to $49?"',
        output:
          "Brief with CEO (strategic framing), CFO (model of impact), Sales (how deals respond), CMO (narrative around change). Disagreements surfaced. Single recommendation: yes, with 30-day notice and a kill criterion. 2 handoffs queued: CFO → model, CMO → rewrite pricing page.",
      },
      pitfalls: [
        "Asking Donna to *execute* — she routes + synthesizes, not executes. That's the personas' job.",
        "Skipping the `founder-log/` initialization — without it, personas operate without shared memory.",
      ],
    },
    {
      name: "ceo / cto / cfo / sales-director / cmo",
      type: "subagent",
      trigger: "Called by Donna, or directly: 'call the ceo agent for <X>'.",
      when: "Each persona is the function's voice. Talk to them like a person, not a script.",
      steps: [
        "Each persona reads founder-log/ on invocation (priorities, metrics, recent decisions, last weekly).",
        "They use their kit's skills under the hood (CEO uses weekly-priorities, board-update, build-buy-kill, etc.).",
        "They can request handoffs to other personas if the work crosses function.",
        "They push back in their voice — CEO on 4th priorities, CFO on unsourced numbers, CMO on banned words, Sales on stale pipeline.",
      ],
      example: {
        input: '"Ask the CFO if we can afford to hire a designer in Q3"',
        output:
          "CFO reads cash-flow-13w + runway-scenarios. Replies: 'At €9k/mo for the designer, Base runway drops from 11 → 8 months. Below the fundraise-prep threshold. Recommendation: delay hire OR start fundraise prep this week. Handoff to CEO: decide which.'",
      },
      pitfalls: [
        "Bypassing the persona and calling skills directly — works, but you lose voice consistency and cross-function awareness.",
        "Running multiple personas in parallel on genuinely sequential work (e.g., CMO needs CFO's numbers first).",
      ],
    },
    {
      name: "/board:weekly",
      type: "command",
      trigger: "Type /board:weekly on Mondays.",
      when: "The non-negotiable cornerstone ritual. 20 minutes.",
      steps: [
        "Reads last week's weekly brief.",
        "Asks for 2 minutes of raw founder thoughts.",
        "Invokes all 5 personas in parallel: '3-bullet read for this week.'",
        "Synthesizes weekly brief: by-function section, cross-functional pattern, 3 locked priorities, open handoffs, one provocative question.",
        "Writes founder-log/weekly/YYYY-WW.md. Updates priorities.md.",
      ],
      example: {
        input: "(Monday 9am ritual)",
        output:
          "Weekly brief across all functions. Cross-functional pattern detected: 'outbound response rate dropped same week positioning changed — causal?' 3 priorities set with kill criteria. 2 handoffs surfaced. Question: 'Is the positioning test working on new segment but breaking cold outbound?'",
      },
      pitfalls: [
        "Skipping the 2-min raw dump — that's where the shadow backlog lives.",
        "Letting one persona's section dominate — Donna should weight evenly.",
        "Not re-reading the weekly brief mid-week — it's a living document.",
      ],
    },
    {
      name: "/board:decision",
      type: "command",
      trigger: "Type /board:decision <topic>.",
      when: "Any decision big enough to warrant the full board's input — typically those costing >€500, spanning >1 week, or crossing functions.",
      steps: [
        "Narrow the decision to a concrete choice with named options (include status quo).",
        "All relevant personas answer 4 questions: upside, downside, what must be true, one pushback.",
        "Surface disagreements — don't smooth them over.",
        "Single recommendation + kill criteria.",
        "Logs to founder-log/decisions/ via /ceo:decision-log.",
      ],
      example: {
        input: '"/board:decision Launch a referral program?"',
        output:
          "Options: A) full referral program now, B) ambassador test with 5 customers, C) don't do it. CEO / CTO / CFO / Sales / CMO each with 4 answers. Disagreements: CTO says 2-week build, CMO says narrative isn't sharp yet. Recommendation: Option B (ambassador test) by <date>. Kill: if <5 referrals in 30 days, close.",
      },
      pitfalls: [
        "Decisions without named options — always include 'don't do it.'",
        "Personas giving 'I have nothing to add' — re-prompt for the one thing they'd push back on.",
        "Smoothing over disagreements.",
      ],
    },
    {
      name: "/board:handoff",
      type: "command",
      trigger: "Type /board:handoff <FROM> <TO> <task>.",
      when: "After any brief where work needs to pass between executives.",
      steps: [
        "Parse FROM and TO (both valid persona names).",
        "Write handoff file with: TASK, CONTEXT, DELIVERABLE, DUE, KILL CRITERIA.",
        "Receiving persona acknowledges (confirms understanding, names missing context, confirms deadline).",
        "Status moves: Open → Confirmed → Complete.",
        "Open handoffs past DUE surface in next /board:weekly.",
      ],
      example: {
        input: '"/board:handoff CEO CTO Scope the 2-week MVP for the referral feature by Friday"',
        output:
          "Handoff file at founder-log/handoffs/2026-04-19-ceo-cto-referral-mvp.md. CTO acknowledges: 'Will use /cto:mvp-scope, need CEO\\'s kill criteria for the referral program first (what defines success for the test?). Deliverable: specs/referral-mvp.md by Friday 17:00.'",
      },
      pitfalls: [
        "Unstructured handoffs in Slack — drift, fail silently.",
        "No kill criteria — handoffs that 'complete' without a success signal are the most dangerous.",
        "Ignoring open handoffs past due — they compound into dropped balls.",
      ],
    },
  ],
  playbook: [
    {
      title: "Ask anything, route automatically",
      when: "Any time you don't know which kit to pick.",
      asset: "/founder",
      assetType: "command",
      input: "/founder Should I raise prices from $29 to $49?",
      output:
        "Donna decides which of the 5 personas to call, invokes them, and synthesises one brief with recommendation and proposed handoffs.",
      time: "2 min · ad-hoc",
    },
    {
      title: "Run the weekly board ritual",
      when: "Monday 9am. The cornerstone.",
      asset: "/board:weekly",
      assetType: "command",
      input: "/board:weekly",
      output:
        "A weekly brief with each function's read, cross-functional pattern spotted, 3 locked priorities, open handoffs, and one provocative question.",
      time: "20 min · weekly",
    },
    {
      title: "Make a multi-function decision",
      when: "Anything spanning >1 function or >€500.",
      asset: "/board:decision",
      assetType: "command",
      input: "/board:decision launch a referral program?",
      output:
        "Named options (including 'don't do it'), each persona's 4-question take, surfaced disagreements, one recommendation with kill criteria.",
      time: "20 min · ad-hoc",
    },
    {
      title: "Brief yourself on a cross-cutting topic",
      when: "Before any big push in an unfamiliar area.",
      asset: "/board:brief",
      assetType: "command",
      input: "/board:brief fundraising readiness",
      output:
        "1–3 relevant personas each give you 'the question you haven't asked yet' plus the one piece of data you'd regret missing.",
      time: "10 min · ad-hoc",
    },
    {
      title: "Hand off work between personas",
      when: "Any time one exec needs to pass to another.",
      asset: "/board:handoff",
      assetType: "command",
      input: "/board:handoff CEO CTO scope the MVP for the referral feature by Friday",
      output:
        "A structured handoff file with task, context, deliverable, due date, kill criteria — plus the receiving persona's ack and missing-context asks.",
      time: "3 min · per handoff",
    },
    {
      title: "Call a specific executive",
      when: "When you know exactly whose voice you want.",
      asset: "ceo / cto / cfo / sales / cmo",
      assetType: "subagent",
      input: '"Ask the CFO if we can afford to hire a designer in Q3"',
      output:
        "The persona reads founder-log/, uses their kit's skills under the hood, and replies in their voice — with a proposed handoff if the work crosses functions.",
      time: "5 min · ad-hoc",
    },
  ],
  firstWin:
    "Next Monday at 9am, run /board:weekly. If the synthesized brief changes one decision you were about to make, the Board has paid for itself.",
} as const;

// Coerce type — Board isn't a standard kit but renders like one.
export default boardDoc as unknown as KitDoc;
