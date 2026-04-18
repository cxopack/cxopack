import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { H1, H2, H3, Lead, P, Ol, Ul, Pre, Code, Callout } from "@/components/docs/prose";

export const metadata = {
  title: "Quickstart — CxOPack",
  description: "From purchase to first workflow in 5 minutes.",
};

export default async function Quickstart({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl">
      <div className="eyebrow mb-4">Getting started</div>
      <H1>Quickstart</H1>
      <Lead>Zero to first workflow in 5 minutes. Works regardless of which kit(s) you purchased.</Lead>

      <H2 id="1-accept">1. Accept the GitHub invite</H2>
      <P>
        After purchase you'll receive an email from GitHub — one per kit you bought — inviting you to a private repo like <Code>cxopack/cxopack-ceo</Code>. Accept each invite. Clone the repo locally:
      </P>
      <Pre>{`git clone git@github.com:cxopack/cxopack-<slug>.git .cxopack-<slug>`}</Pre>

      <H2 id="2-install">2. Install in your AI tool</H2>

      <H3>Option A — Claude Code / Claude Desktop</H3>
      <Pre>{`mkdir -p .claude/skills .claude/agents .claude/commands
cp -r .cxopack-<slug>/claude/skills/*    .claude/skills/
cp -r .cxopack-<slug>/claude/subagents/* .claude/agents/ 2>/dev/null || true
cp -r .cxopack-<slug>/claude/commands/*  .claude/commands/ 2>/dev/null || true`}</Pre>
      <P>Restart Claude Code. Skills auto-register. Trigger by natural language (e.g. <Code>"plan my week"</Code>) or slash command (<Code>/ceo-weekly</Code>).</P>

      <H3>Option B — ChatGPT (Custom GPT)</H3>
      <Ol>
        <li>ChatGPT → <strong>Explore GPTs</strong> → <strong>Create</strong> → Configure tab.</li>
        <li>Open <Code>chatgpt/custom-gpt.md</Code> from the kit repo. Paste its contents into <strong>Instructions</strong>.</li>
        <li>Copy the <strong>Conversation starters</strong> listed at the bottom of the file into the conversation-starters field.</li>
        <li>Save. Use the Custom GPT. Click a starter or type a trigger phrase.</li>
      </Ol>
      <Callout title="Tip">
        Upload the files in <Code>claude/skills/</Code> as <strong>Knowledge</strong> files on the Custom GPT — the GPT will reference them verbatim.
      </Callout>

      <H3>Option C — Cursor / Windsurf</H3>
      <Pre>{`mkdir -p .cursor/rules
cp .cxopack-<slug>/cursor/rules/*.mdc .cursor/rules/`}</Pre>
      <P>
        Rules auto-load next time you open the project. They enforce the role's discipline while you edit matching file globs (e.g. finance/ for CFO, docs/adr/ for CTO).
      </P>

      <H3>Option D — Any other LLM</H3>
      <P>
        Open <Code>prompts/main.md</Code>. Copy-paste into Gemini, Mistral, DeepSeek, or any LLM. Every workflow inside that file is self-contained.
      </P>

      <H2 id="3-connect-mcps">3. Connect your MCPs (recommended, not required)</H2>
      <P>
        Skills get dramatically better when they can read your actual data. For each kit, install 1–2 MCP servers from the kit's walkthrough page — start with the top one:
      </P>
      <Ul>
        <li><strong>CEO</strong>: Notion (decision log)</li>
        <li><strong>CTO</strong>: GitHub (code-review reads diffs)</li>
        <li><strong>CFO</strong>: Stripe (saas-metrics reads live subscription data)</li>
        <li><strong>Sales</strong>: HubSpot or Pipedrive (pipeline-review reads live deal stages)</li>
        <li><strong>CMO</strong>: Plausible or Google Analytics (content recommendations grounded in traffic)</li>
      </Ul>
      <P>
        Full MCP list and install guides live on each <Link href="/docs" className="text-[var(--color-brand)] underline">kit walkthrough page</Link>.
      </P>

      <H2 id="4-first-run">4. Run your first workflow</H2>
      <P>Pick the lowest-friction skill for your kit and run it now. Don't wait for a perfect moment — 60% of the value comes from the ritual of running it consistently.</P>
      <Ul>
        <li><strong>CEO:</strong> <Code>/ceo-weekly</Code> — Monday planning in 15 min</li>
        <li><strong>CTO:</strong> <Code>adr</Code> — document one decision you made last month</li>
        <li><strong>CFO:</strong> <Code>saas-metrics</Code> — feed your Stripe export, get your real MRR/churn/NRR</li>
        <li><strong>Sales:</strong> <Code>icp-workshop</Code> — sharpen your ICP, set disqualifiers</li>
        <li><strong>CMO:</strong> <Code>positioning</Code> — rewrite your one-liner until a subset of people self-disqualify</li>
      </Ul>

      <H2 id="next">Next: per-role walkthroughs</H2>
      <P>
        The <Link href="/docs" className="text-[var(--color-brand)] underline">docs home</Link> links to each kit's full walkthrough: review prompts, every MCP, daily/weekly/monthly cadence, and every skill with examples and pitfalls.
      </P>
    </div>
  );
}
