import type { KitDoc } from "./types";

export const salesDoc: KitDoc = {
  slug: "sales",
  title: "Sales Kit",
  tagline: "ICP that disqualifies. Outbound that replies. Discovery that closes.",
  heroSentence:
    "The Sales Kit is built on the assumption that solo-founder sales problems are 80% ICP problems and 20% execution problems. It forces you to name who you won't sell to, writes outbound that passes the 3-second test, and runs your discovery calls so you listen 70% of the time. No fluff, no 'synergy,' no meetings by week 1.",
  review: {
    intro:
      "This is the most diagnostic kit of the five. Answer these before installing. If you can't, that's exactly what you need to fix first.",
    questions: [
      "Who are your 3 best customers? Not highest-paying — most successful. What 3 things do they have in common?",
      "Before a customer bought from you, what were they doing instead? (The real alternative — not a competitor logo on a G2 grid.)",
      "Name 3 people or companies you've sold to who churned / complained / were painful. What's the common pattern?",
      "How many cold emails have you sent in the last 30 days? What's the reply rate? (Don't guess. Count.)",
    ],
    brainstormPrompts: [
      "If you could only sell to one type of company for the next 12 months — company size, industry, stage — which would it be? Why?",
      "What's the 'compelling event' in your best customers' lives that made NOW the time to buy? (A hire? A launch? A failed quarter?)",
      "What would you stop saying in your sales pitch if you could never say 'best-in-class' again?",
    ],
  },
  mcps: [
    {
      name: "HubSpot / Pipedrive / Attio",
      why: "pipeline-review reads live deal stages. cold-outbound writes follow-ups against activity history.",
      docsUrl: "https://developers.hubspot.com/docs/api/overview",
    },
    {
      name: "Apollo / Clay",
      why: "cold-outbound pulls enrichment: company size, tech stack, recent hires — the 3 specifics every message needs.",
      docsUrl: "https://apolloio.github.io/apollo-api-docs/",
    },
    {
      name: "LinkedIn Sales Navigator",
      why: "ICP + personalization hooks come from here. The skill reads recent activity to build the opening line.",
      docsUrl: "https://www.linkedin.com/developers/",
    },
    {
      name: "Gmail / Outlook",
      why: "Outbound drafts are written directly to your drafts folder — you review + hit send.",
      docsUrl: "https://developers.google.com/gmail/api",
    },
    {
      name: "Calendly / Cal.com",
      why: "discovery-script reads the prospect's booking context (role, company, stated reason) so you walk in prepped.",
      docsUrl: "https://developer.calendly.com/",
    },
  ],
  cadence: {
    daily: [
      {
        when: "Morning",
        duration: "30 min",
        action: "Send 5 personalized cold emails using the cold-outbound skill. Every message = 3 specifics.",
        skill: "cold-outbound",
      },
    ],
    weekly: [
      {
        when: "Friday",
        duration: "15 min",
        action: "Pipeline review. Kill any deal >45 days old with no movement. No exceptions.",
      },
    ],
    monthly: [
      {
        when: "Last Thursday",
        duration: "45 min",
        action: "ICP refresh. Did your customer base shift? Are the disqualifiers still right?",
        skill: "icp-workshop",
      },
    ],
    adhoc: [
      {
        when: "Before every discovery call",
        duration: "15 min",
        action: "Generate the call script. Frame → Pain → Stakes → Buying process → Fit → Next step.",
        skill: "discovery-script",
      },
    ],
  },
  skills: [
    {
      name: "icp-workshop",
      type: "skill",
      trigger: '"define my ICP" / "who should I be selling to"',
      when: "Once, on install. Then every quarter. Also any time your close rate drops.",
      steps: [
        "The skill asks 5 questions — one at a time, won't move on until you answer concretely.",
        "Question 1: your 3 best customers, what they have in common. Question 2: their trigger event. Question 3: their alternative. Question 4: willingness to pay anchor. Question 5: disqualifiers.",
        "Output: a 1-page ICP doc with hard disqualifiers, willingness-to-pay anchor, top 3 channels to find them.",
      ],
      example: {
        input: '"3 best customers: all B2B SaaS, €500k-€5M ARR, 3-15 people, already using Stripe, CEO was technical."',
        output:
          "ICP: 'French or EU-based B2B SaaS, €500k-€5M ARR, 3-15 staff, Stripe users, technical CEO — buying during or just after first outbound hire.' Disqualifiers: <€500k ARR (too early), 20+ staff (not our buyer), non-technical founder (longer sales cycle). Channels: LinkedIn search + a handful of FR/EU solo-founder communities.",
      },
      pitfalls: [
        "If you name 3 ICPs, the skill will force a ranking. Pick one for the next 90 days.",
        "Skip the disqualifier question → skill will refuse to output.",
      ],
    },
    {
      name: "cold-outbound",
      type: "skill",
      trigger: '"write an outbound sequence" / "help me do cold email"',
      when: "Daily — for 5-10 emails. Fresh-prospect batch at a time. Not mass-spray.",
      steps: [
        "Give the skill your ICP doc + a prospect list (names, companies, LinkedIn URLs).",
        "For each prospect, the skill pulls 3 specifics: a recent action (post, hire, launch), a tech choice, a public metric.",
        "Writes a 4-message sequence: D0 (60 words), D3 (50), D7 (35 soft breakup), D11 (30 hard breakup).",
        "Every message passes the 3-second test. No 'hope this finds you well', no 'quick question'.",
      ],
      example: {
        input: '"Prospect: VP Eng at SmallSaaS, just posted on LinkedIn about hiring their first head of sales. €2M ARR, Stripe user."',
        output:
          '"Subject: head of sales #1 — Saw you\'re hiring your first head of sales. We help post-€2M SaaS sellers hit quota 40% faster by automating outbound. Happy to share how Loom founders did it in month 2?" — 47 words, 3 specifics, 1 yes/no ask.',
      },
      pitfalls: [
        "If you can't find 3 specifics on the prospect in 2 minutes, you're prospecting in the wrong segment — stop and re-run ICP.",
        "Don't modify outputs to add 'I hope this finds you well' — you'll make it worse.",
      ],
    },
    {
      name: "discovery-script",
      type: "skill",
      trigger: '"prep my call" / "discovery script"',
      when: "Before every discovery call. 15 minutes pre-call.",
      steps: [
        "Feed prospect name, company, role, stated reason for the meeting.",
        "The skill builds a 45-min script: 0–5 frame, 5–20 pain, 20–30 stakes, 30–38 buying process, 38–43 fit, 43–45 next step.",
        "Includes the listening targets (must hear: quantified pain, urgency driver, buying process).",
        "Reminds you to count to 3 after each question. Silence is a tool.",
      ],
      example: {
        input: '"VP Sales at 40-person SaaS, booked a demo after reading our positioning post, said they\'re losing deals to Gong."',
        output:
          'Script: Open with "walk me through a deal you lost to Gong in the last 30 days." Pain targets: deal size, # lost this quarter, what Gong has that we don\'t. Stakes question: "what happens if this pattern continues for 2 more quarters?" Next step: demo with their 2 reps.',
      },
      pitfalls: [
        "Don't pitch in the first 30 minutes. The skill literally removes pitch language from the script.",
        "If the prospect asks for a demo in the first 10 min, push back: 'Let me understand the pain first.'",
      ],
    },
    {
      name: "objections",
      type: "skill",
      trigger: '"how do I handle [objection]" / prepping a close call',
      when: "Before or during any deal with an objection.",
      steps: [
        "Identify which of 20 canonical patterns.",
        "Surface the real question underneath (often not what they said).",
        "Peer-tone response in the founder's voice.",
        "Qualifying follow-up that forces commit or disqualify.",
      ],
      example: {
        input: '"\'It\'s too expensive\'"',
        output:
          "Real question: 'Will this justify to budget owner?' Response: 'Compared to what? Right now you're paying in dollars or paying in <cost>.' Follow-up: 'If price weren't the issue, would you move forward?'",
      },
      pitfalls: [
        "Responding to the literal objection, not the real question.",
        "Discounting as first concession.",
      ],
    },
    {
      name: "proposal",
      type: "skill",
      trigger: '"write the proposal" / after a discovery call',
      when: "Within 48h of a promising discovery call.",
      steps: [
        "Require discovery notes.",
        "'Why we're here' using customer's language + direct quote.",
        "Map outcomes to deliverables. Timeline table. Who-does-what table.",
        "Measurable success criteria. One price. One next step with date.",
      ],
      example: {
        input: 'Acme discovery notes',
        output:
          "2-page proposal with customer's own pain words, 3 outcomes → 3 deliverables, 4-week timeline, success: 'X% by day 60 or extension free,' €12k fee, signed by Friday → kickoff Monday.",
      },
      pitfalls: [
        "'About us' section.",
        "Template language that'd fit any customer.",
        "No follow-up cadence planned.",
      ],
    },
    {
      name: "pipeline-review",
      type: "skill",
      trigger: '"review my pipeline" / Friday cadence',
      when: "Every Friday, 15 min, no mercy.",
      steps: [
        "Per deal (60s): stage change with evidence? next step + date? blocker?",
        "Kill list: no next step + date, OR >45d no movement.",
        "Next week focus: 3 deals max.",
        "Count leading indicators.",
      ],
      example: {
        input: "(runs against CRM MCP)",
        output:
          "12 active → 9 post-kill. 3 focus. Leading: 42 emails, 6 discoveries, 3 proposals, 1 won. Weighted pipeline €48k.",
      },
      pitfalls: [
        "'Let's see if they come back' → they won't.",
        "Moving stages on good vibes.",
      ],
    },
  ],
  firstWin: "Run the ICP workshop today. Write the 1-pager. Disqualify 3 deals in your current pipeline that don't fit. Your close rate goes up next week.",
};
