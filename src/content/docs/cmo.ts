import type { KitDoc } from "./types";

export const cmoDoc: KitDoc = {
  slug: "cmo",
  title: "Don · CMO Kit",
  tagline: "Positioning that disqualifies. Content with proof. Zero fluff words.",
  heroSentence:
    "Don is your CMO Kit — the anti-content-marketer. Every claim is verifiable, every hook is specific, and 'synergy' is literally banned in the Cursor rules. Story over features, identity over specs. Built for solo founders who hate marketing but need distribution — he batches a week of LinkedIn posts, writes SEO pages that match search intent, and sharpens your positioning until a subset of people self-disqualify.",
  review: {
    intro:
      "Marketing without real proof points is just noise. Audit what you actually have before installing — most founders discover they've been writing around their strongest differentiator.",
    questions: [
      "In one sentence: who is your product *not* for? (If your answer is 'everyone can use it,' your positioning is broken.)",
      "What's your most surprising / counter-intuitive POV about your space? (If you don't have one, you don't have content.)",
      "How many LinkedIn posts have you published in the last 30 days? X posts? Newsletter? (Count, don't estimate.)",
      "What's the last measurable result you can cite about your product? (MRR growth, speed improvement, churn drop.)",
    ],
    brainstormPrompts: [
      "Name your 3 biggest competitors. Write one sentence that would make you *lose* a deal to each of them on purpose. That's your positioning frame.",
      "What's a 'rule' everyone in your industry follows that is actually dumb? (Hot take = content for months.)",
      "Find 3 customer conversations where they described the problem in their words. Which of those phrases are in your landing page? If zero, fix that.",
    ],
  },
  mcps: [
    {
      name: "Google Analytics / Plausible",
      why: "seo-page + linkedin-batch read actual traffic and engagement, so recommendations are grounded in data, not vibes.",
      docsUrl: "https://plausible.io/docs/integration-guides",
    },
    {
      name: "Ahrefs / Semrush",
      why: "seo-page checks the SERP before writing. Matches intent + shape. Skips keywords where you won't rank.",
      docsUrl: "https://ahrefs.com/api",
    },
    {
      name: "LinkedIn (via Buffer / Typefully MCP)",
      why: "linkedin-batch writes 7 posts + schedules them. You approve drafts, tool posts Mon-Sun.",
      docsUrl: "https://typefully.com/developers",
    },
    {
      name: "Resend / Mailchimp / Beehiiv",
      why: "launch-comms writes the newsletter + subject line + preview text. Sends via your existing tool.",
      docsUrl: "https://resend.com/docs",
    },
    {
      name: "Webflow / Ghost / Framer CMS",
      why: "SEO pages go live directly to your CMS — no copy-paste, no formatting loss.",
      docsUrl: "https://developers.webflow.com/",
    },
  ],
  cadence: {
    daily: [
      {
        when: "Morning, 5 min",
        duration: "5 min",
        action: "Post the day's LinkedIn piece. (Already written Monday — today's job is to publish + engage replies.)",
      },
    ],
    weekly: [
      {
        when: "Monday 10:00",
        duration: "45 min",
        action: "Batch the week's 7 LinkedIn posts. 7 formats, same topic. Queue in Buffer / Typefully.",
        skill: "linkedin-batch",
      },
      {
        when: "Wednesday",
        duration: "60 min",
        action: "Write + publish 1 SEO page. Tie it to the cluster you're building this quarter.",
        skill: "seo-page",
      },
    ],
    monthly: [
      {
        when: "First Monday",
        duration: "90 min",
        action: "Review last month's posts: 3 that worked, 3 that didn't, why. Feed back into next month's angle.",
      },
    ],
    adhoc: [
      {
        when: "Before any launch (product, feature, partnership)",
        duration: "2 hours",
        action: "Generate launch comms: tweet thread + LinkedIn + newsletter + PR pitch, each a different angle.",
        skill: "launch-comms",
      },
      {
        when: "Whenever your landing isn't converting",
        duration: "60 min",
        action: "Sharpen positioning. Force disqualifiers. Drop generic words. Re-test.",
        skill: "positioning",
      },
    ],
  },
  skills: [
    {
      name: "positioning",
      type: "skill",
      trigger: '"fix my positioning" / "write my positioning"',
      when: "On day 1. Then whenever landing-page conversion drops or you can't explain the product in 1 sentence.",
      steps: [
        "The skill runs April Dunford's method — alternatives → unique attributes → value → segment → category → statement.",
        "Forces real disqualifiers. ('Who is this not for?')",
        "Produces the statement, proof points (facts, not claims), and the 'stop saying' list of words to drop.",
      ],
      example: {
        input:
          '"AI C-suite for solo founders. Alternatives: generic Claude usage, hiring, other AI kits. Unique: multi-platform + 5 roles bundled."',
        output:
          "For solo founders who are shipping alone and can't afford a €500k/yr executive team, CxOPack is an AI C-suite pack that gives you five battle-tested executive roles in any AI tool you already use — unlike single-tool AI kits, we ship every workflow in Claude, ChatGPT, Cursor and raw-prompt form. Not for: funded teams with in-house executives.",
      },
      pitfalls: [
        "If you list 5 differentiators → skill cuts to 1. Customers remember zero of five.",
        "If 'AI-powered' is your differentiator → skill will reject. It's table stakes now.",
      ],
    },
    {
      name: "seo-page",
      type: "skill",
      trigger: '"write an SEO page for [keyword]"',
      when: "Weekly. Pick one keyword per week. Build a cluster over a quarter.",
      steps: [
        "Give the keyword. Skill identifies intent (informational / evaluative / navigational / transactional).",
        "Checks the top 5 SERP results. Matches shape or deliberately breaks from it.",
        "Requires you to commit first-hand data — screenshots, benchmarks, customer quotes. If you have none, it stops.",
        "Writes H1, H2s, table, 3 internal links, FAQ with People-Also-Ask questions, meta description 150-160 chars.",
      ],
      example: {
        input: '"AI tools for solo founders"',
        output:
          "Page shape: navigational (ranked list). H1: 'The 9 AI Tools Solo Founders Actually Ship With in 2026'. Content: ranked list with per-tool 3-sentence review, decision tree, comparison table. Internal links to /kits/ceo, /kits/cto, /docs/platforms/claude. FAQ targeting 'which AI tool for solo founder' and 'is Claude or ChatGPT better for founders'.",
      },
      pitfalls: [
        "Thin content (<300 words) on competitive keywords → skill will refuse.",
        "AI-written pages with zero first-hand experience → skill blocks output until you add data.",
      ],
    },
    {
      name: "linkedin-batch",
      type: "skill",
      trigger: '"batch me a week of LinkedIn posts"',
      when: "Monday morning. One topic, 7 formats, 7 posts.",
      steps: [
        "Give the topic + any raw material (a post you shipped, a number you hit, a story).",
        "Skill drafts 7 posts across 7 formats: hot take, case study, how-to, anti-pattern, behind-the-scenes, data point, question.",
        "Writes hooks first — they do 80% of the work. If 3 hooks sound same-y, regenerates.",
        "Output: all 7 posts formatted and day-tagged, ready to paste into Buffer / Typefully.",
      ],
      example: {
        input: '"Topic: why we raised prices from €99 to €149 and kept conversion flat."',
        output:
          "Mon hot take: 'Raising prices by 50% kept conversion flat. We were underpriced. Most founders are.' Tue case study: '€99 → €149. Conversion 2.1% → 2.0%. Revenue per visitor +47%.' Wed how-to: '5 signals you\\'re underpriced.' Thu anti-pattern: 'Why I waited 18 months to raise prices (don\\'t).' Fri behind-the-scenes: the Slack thread where we argued about it. Sat data point: 2.1% vs 2.0%. Sun question: 'What price change scares you?'",
      },
      pitfalls: [
        "Don't batch 7 variations of the same angle. 7 different formats is the point.",
        "No hashtag spam. Max 3, specific.",
        "Never 'if this resonated, like and share.' It doesn't resonate — you just said it did.",
      ],
    },
    {
      name: "landing-copy",
      type: "skill",
      trigger: '"write landing copy" / landing isn\'t converting',
      when: "Any time claims ≥ proof, or conversion is weak.",
      steps: [
        "Require positioning + ICP + 3 proofs + 3 disqualifiers.",
        "Audit banned words + unprovable claims.",
        "Hero first: outcome headline, one counter-intuitive element.",
        "Structure: hero · problem (quote) · product shot · 3 benefits w/ proof · social proof · pricing · FAQ · final CTA + 'not for'.",
        "Output 2 hero variants for A/B.",
      ],
      example: {
        input: "current landing + positioning",
        output:
          "Hero A: 'Replace €500k of payroll with €299 of AI agents.' Hero B: 'The AI C-suite your startup can actually afford.' 3 benefits with proof each. Not-for: funded teams with in-house execs.",
      },
      pitfalls: [
        "'AI-powered' as value prop in 2026.",
        "3-paragraph hero with gradient (design hiding weak copy).",
      ],
    },
    {
      name: "launch-comms",
      type: "skill",
      trigger: '"I\'m launching X" / release prep',
      when: "2 weeks before any launch.",
      steps: [
        "Define: 1-sentence launch, core insight, one proof point.",
        "5 formats same insight different frames: X thread · LinkedIn · newsletter · PR pitch · PH/HN first comment.",
        "Write hooks first — regenerate if same-y.",
        "Plan T+2, T+4, T+7 follow-up content.",
      ],
      example: {
        input: 'launching CxOPack Edition I',
        output:
          "X: personal-origin. LinkedIn: outcome. Newsletter: insider. PR: industry-trend. PH: direct-product. All share the €299/5-kit proof.",
      },
      pitfalls: [
        "Same text cross-posted.",
        "'Thrilled to announce' — delete.",
        "No follow-up = 1-day window instead of 7.",
      ],
    },
    {
      name: "brand-voice",
      type: "skill",
      trigger: '"build my brand voice" / copy feels inconsistent',
      when: "Once early. Then every 6 months or after a pivot.",
      steps: [
        "Collect 5 proud + 2 off-brand artifacts.",
        "Analyze patterns: sentence length, humor, formality, self-reference, signature phrases.",
        "5 rules + 5 anti-rules.",
        "10 before/after examples across contexts.",
      ],
      example: {
        input: "5 past tweets + landing + 2 contractor drafts",
        output:
          "Voice: 'The senior peer.' Rules: short sentences, one number per post, dry humor, 2nd person, no exclamations.",
      },
      pitfalls: [
        "'Authentic and confident' — not specific enough.",
        "30 rules contractors won't read.",
      ],
    },
  ],
  playbook: [
    {
      title: "Sharpen your positioning",
      when: "Day 1. Then any time your landing isn't converting.",
      asset: "positioning",
      assetType: "skill",
      input: '"fix my positioning — alternatives and disqualifiers I\'ll share"',
      output:
        "A Dunford-style positioning statement, proof points (facts, not claims), and the 'stop saying' list of banned words to drop.",
      time: "60 min · ad-hoc",
    },
    {
      title: "Find your brand voice",
      when: "Once, after positioning.",
      asset: "brand-voice",
      assetType: "skill",
      input: '"build my brand voice from 5 proud artifacts"',
      output:
        "A voice archetype with 5 rules + 5 anti-rules and 10 before/after examples across tweet, landing, and email contexts.",
      time: "60 min · one-off",
    },
    {
      title: "Batch a week of LinkedIn posts",
      when: "Every Monday morning.",
      asset: "linkedin-batch",
      assetType: "skill",
      input: '"7 posts on why we raised prices and kept conversion"',
      output:
        "7 posts across 7 formats (hot take, case study, how-to, anti-pattern, BTS, data, question) — queued Mon→Sun.",
      time: "45 min · weekly",
    },
    {
      title: "Publish one SEO page that ranks",
      when: "Every Wednesday.",
      asset: "seo-page",
      assetType: "skill",
      input: '"write SEO page for \'AI tools for solo founders\'"',
      output:
        "A page matched to search intent, H1/H2 structure, internal links, and a FAQ targeting real People-Also-Ask questions.",
      time: "60 min · weekly",
    },
    {
      title: "Rewrite the landing",
      when: "Any time claims are louder than your proof.",
      asset: "landing-copy",
      assetType: "skill",
      input: '"rewrite the hero — kill banned words, add proof"',
      output:
        "Two hero variants for A/B, a problem-quote section, 3 benefits each with a proof point, and a Not-For block.",
      time: "60 min · ad-hoc",
    },
    {
      title: "Prep a real launch",
      when: "2 weeks before any launch.",
      asset: "launch-comms",
      assetType: "skill",
      input: '"launch CxOPack Edition I"',
      output:
        "5 on-message but format-specific pieces (X, LinkedIn, newsletter, PR, PH first comment) and a T+2 / T+4 / T+7 follow-up plan.",
      time: "2h · per launch",
    },
  ],
  firstWin: "Run positioning today. Write the disqualifiers on your landing page. Watch your close rate improve when bad-fit leads self-disqualify.",
};
