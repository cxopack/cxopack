import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { Pager } from "@/components/docs/pager";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
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
      <Breadcrumbs />
      <div className="eyebrow-plain mb-4">Getting started</div>
      <H1>Quickstart</H1>
      <Lead>
        Zero to first workflow in 5 minutes. Works regardless of which kit(s) you purchased, and
        regardless of which AI tool you use.
      </Lead>

      <H2 id="accept-invite">1. Accept the GitHub invite</H2>
      <P>
        After purchase, GitHub emails you an invitation per kit — e.g. to{" "}
        <Code>cxopack/cxopack-ceo</Code>. Accept each. Then clone locally:
      </P>
      <Pre language="bash">{`git clone git@github.com:cxopack/cxopack-<slug>.git .cxopack-<slug>`}</Pre>

      <H2 id="install">2. Install in your AI tool</H2>

      <H3 id="claude-code">Claude Code / Claude Desktop</H3>
      <Pre language="bash">{`mkdir -p .claude/skills .claude/agents .claude/commands
cp -r .cxopack-<slug>/claude/skills/*    .claude/skills/
cp -r .cxopack-<slug>/claude/subagents/* .claude/agents/   2>/dev/null || true
cp -r .cxopack-<slug>/claude/commands/*  .claude/commands/ 2>/dev/null || true`}</Pre>
      <P>
        Restart Claude Code. Skills auto-register. Trigger by natural language (<Code>"plan my week"</Code>) or slash command (<Code>/ceo-weekly</Code>).
      </P>

      <H3 id="chatgpt">ChatGPT (Custom GPT)</H3>
      <Ol>
        <li>ChatGPT → <strong>Explore GPTs</strong> → <strong>Create</strong> → Configure tab.</li>
        <li>Open <Code>chatgpt/custom-gpt.md</Code> from the kit repo. Paste its contents into <strong>Instructions</strong>.</li>
        <li>Copy the <strong>Conversation starters</strong> listed at the bottom of the file into the conversation-starters field.</li>
        <li>Save. Use the Custom GPT. Click a starter or type a trigger phrase.</li>
      </Ol>
      <Callout variant="tip" title="Bonus">
        Upload the files in <Code>claude/skills/</Code> as <strong>Knowledge</strong> files on the
        Custom GPT — the GPT references them verbatim, giving you skill-level precision inside
        ChatGPT.
      </Callout>

      <H3 id="cursor">Cursor / Windsurf</H3>
      <Pre language="bash">{`mkdir -p .cursor/rules
cp .cxopack-<slug>/cursor/rules/*.mdc .cursor/rules/`}</Pre>
      <P>
        Rules auto-load next time you open the project. They enforce the role's discipline while you
        edit matching globs (<Code>finance/</Code> for CFO, <Code>docs/adr/</Code> for CTO, etc.).
      </P>

      <H3 id="any-llm">Any other LLM</H3>
      <P>
        Open <Code>prompts/main.md</Code>. Copy-paste into Gemini, Mistral, DeepSeek, or any LLM.
        Every workflow inside is self-contained.
      </P>

      <H2 id="connect-mcps">3. Connect your MCPs (recommended)</H2>
      <P>
        Skills are dramatically more useful when they can read your actual data. Install 1–2 MCP
        servers per kit — top picks below. Full install guides live on each kit walkthrough.
      </P>
      <Ul>
        <li><strong>CEO</strong>: Notion (decision log + board-update drafts)</li>
        <li><strong>CTO</strong>: GitHub (code-review reads diffs directly)</li>
        <li><strong>CFO</strong>: Stripe (saas-metrics reads live subscription data)</li>
        <li><strong>Sales</strong>: HubSpot or Pipedrive (pipeline-review reads live deals)</li>
        <li><strong>CMO</strong>: Plausible or GA (content grounded in real traffic)</li>
      </Ul>
      <Callout title="No MCP yet?">
        MCP is Anthropic's standard for AI ↔ software connections. Setup guide at{" "}
        <a
          href="https://modelcontextprotocol.io/quickstart/user"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-brand)] underline"
        >
          modelcontextprotocol.io
        </a>
        . ChatGPT uses Actions (OpenAPI) for the same capability.
      </Callout>

      <H2 id="first-workflow">4. Run your first workflow</H2>
      <P>
        Pick the lowest-friction skill for your kit and run it now. 60% of the value comes from
        running the ritual consistently — don't wait for a perfect moment.
      </P>
      <Ul>
        <li><strong>CEO:</strong> <Code>/ceo-weekly</Code> — Monday planning in 15 min</li>
        <li><strong>CTO:</strong> <Code>adr</Code> — document one decision you made last month</li>
        <li><strong>CFO:</strong> <Code>saas-metrics</Code> — feed Stripe export, get real MRR/churn/NRR</li>
        <li><strong>Sales:</strong> <Code>icp-workshop</Code> — sharpen ICP, set disqualifiers</li>
        <li><strong>CMO:</strong> <Code>positioning</Code> — rewrite your one-liner</li>
      </Ul>

      <H2 id="next">Next: per-role walkthroughs</H2>
      <P>
        Each kit's full walkthrough covers the review prompts, every MCP, the daily/weekly/monthly
        cadence, and every skill with trigger / when / steps / example / pitfalls.{" "}
        <Link href="/docs/kits/ceo" className="text-[var(--color-brand)] underline">
          Start with the CEO Kit →
        </Link>
      </P>

      <div className="mt-12 flex justify-end">
        <EditOnGitHub />
      </div>

      <Pager />
    </div>
  );
}
