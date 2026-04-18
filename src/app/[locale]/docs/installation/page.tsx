import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Bot, MessageSquare, Code2, FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { Pager } from "@/components/docs/pager";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
import { H1, H2, H3, Lead, P, Ol, Ul, Pre, Code, Callout } from "@/components/docs/prose";

export const metadata = {
  title: "Installation — CxOPack",
  description:
    "Detailed install guides for Claude Code, ChatGPT, Cursor, Windsurf, and any other LLM.",
};

export default async function Installation({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl">
      <Breadcrumbs />
      <div className="eyebrow-plain mb-4">Getting started</div>
      <H1>Installation</H1>
      <Lead>
        Four platforms, four install paths. Each kit ships in all four formats — one is enough.
        If you want the full <strong>Board</strong> experience (Chief of Staff routing + 5 persona
        agents + shared memory), use Claude Code or ChatGPT.
      </Lead>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {[
          { icon: Bot, label: "Claude Code", anchor: "#claude-code", best: true },
          { icon: MessageSquare, label: "ChatGPT", anchor: "#chatgpt", best: false },
          { icon: Code2, label: "Cursor / Windsurf", anchor: "#cursor", best: false },
          { icon: FileText, label: "Any other LLM", anchor: "#any-llm", best: false },
        ].map((p) => (
          <a
            key={p.label}
            href={p.anchor}
            className="card group flex items-center gap-3 p-4 text-sm transition hover:border-[var(--color-brand)]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
              <p.icon className="h-4 w-4 text-[var(--color-brand)]" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[var(--color-fg)]">{p.label}</div>
              {p.best && (
                <div className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  Best for the Board
                </div>
              )}
            </div>
          </a>
        ))}
      </div>

      <H2 id="before-you-start">Before you start</H2>
      <P>After purchase, you&apos;ll receive a GitHub invite per kit (one email from{" "}
        <Code>notifications@github.com</Code> per repo). Accept each. You&apos;ll end up with access to:
      </P>
      <Ul>
        <li><Code>cxopack/cxopack-ceo</Code> — CEO Kit</li>
        <li><Code>cxopack/cxopack-cto</Code> — CTO Kit</li>
        <li><Code>cxopack/cxopack-cfo</Code> — CFO Kit</li>
        <li><Code>cxopack/cxopack-sales</Code> — Sales Kit</li>
        <li><Code>cxopack/cxopack-cmo</Code> — CMO Kit</li>
        <li><Code>cxopack/cxopack-board</Code> — The Board (included with All-Access Pass)</li>
      </Ul>
      <Callout title="Clone only what you bought">
        If you bought a single kit, only that repo is available to you. The install below works
        the same — just clone fewer repos.
      </Callout>

      <H2 id="claude-code">Claude Code / Claude Desktop</H2>
      <P>
        The most complete install. Claude Code natively supports skills (auto-activated),
        subagents (the 6 Board personas + 2 kit subagents), slash commands (all 35), and MCP
        integrations.
      </P>

      <H3 id="claude-clone">1. Clone the repos</H3>
      <Pre language="bash">{`# Clone each kit you bought (repeat per repo):
git clone git@github.com:cxopack/cxopack-ceo.git .cxopack-ceo
git clone git@github.com:cxopack/cxopack-cto.git .cxopack-cto
git clone git@github.com:cxopack/cxopack-cfo.git .cxopack-cfo
git clone git@github.com:cxopack/cxopack-sales.git .cxopack-sales
git clone git@github.com:cxopack/cxopack-cmo.git .cxopack-cmo
git clone git@github.com:cxopack/cxopack-board.git .cxopack-board  # All-Access Pass`}</Pre>

      <H3 id="claude-install">2. Wire into your project&apos;s .claude/</H3>
      <Pre language="bash">{`# From your project root:
mkdir -p .claude/skills .claude/agents .claude/commands

# Copy each kit's skills, subagents, and commands
for slug in ceo cto cfo sales cmo; do
  cp -r .cxopack-$slug/claude/skills/*       .claude/skills/        2>/dev/null
  cp -r .cxopack-$slug/claude/subagents/*    .claude/agents/        2>/dev/null
  mkdir -p .claude/commands/$slug
  cp -r .cxopack-$slug/claude/commands/$slug/* .claude/commands/$slug/ 2>/dev/null
done

# The Board (included with All-Access Pass)
cp -r .cxopack-board/claude/agents/*              .claude/agents/                2>/dev/null
cp    .cxopack-board/claude/commands/founder.md   .claude/commands/              2>/dev/null
mkdir -p .claude/commands/board
cp -r .cxopack-board/claude/commands/board/*      .claude/commands/board/        2>/dev/null`}</Pre>

      <H3 id="claude-memory">3. Initialize the shared memory workspace</H3>
      <Pre language="bash">{`mkdir -p founder-log/{decisions,weekly,handoffs,investor-updates,tech-debt}
cp .cxopack-board/shared-memory-schema.md founder-log/README.md`}</Pre>

      <H3 id="claude-verify">4. Restart Claude Code and verify</H3>
      <P>
        Restart the Claude Code session. The slash menu should now include:
      </P>
      <Ul>
        <li><Code>/founder</Code> — top-level routing</li>
        <li><Code>/board:weekly</Code>, <Code>/board:decision</Code>, <Code>/board:brief</Code>, <Code>/board:handoff</Code></li>
        <li><Code>/ceo:weekly</Code>, <Code>/ceo:board-update</Code>, <Code>/ceo:build-buy-kill</Code>, <Code>/ceo:decision-log</Code>, <Code>/ceo:journal</Code>, <Code>/ceo:pitch</Code></li>
        <li>...and 24 more across the other 4 kits.</li>
      </Ul>

      <Callout variant="success" title="First thing to try">
        Type <Code>/ceo:weekly</Code> — Monday planning ritual in 15 minutes. Or <Code>/founder I&apos;m thinking about hiring my first engineer</Code> to see the Chief of Staff route to CEO + CTO + CFO in parallel.
      </Callout>

      <H2 id="chatgpt">ChatGPT (Custom GPTs)</H2>
      <P>
        Each kit ships as a Custom GPT configuration. You create one GPT per kit (5-6 total),
        paste the instructions, and pick a conversation starter.
      </P>

      <H3 id="chatgpt-steps">1. Create a Custom GPT per kit</H3>
      <Ol>
        <li>Open ChatGPT → <strong>Explore GPTs</strong> → <strong>Create</strong>.</li>
        <li>Go to the <strong>Configure</strong> tab.</li>
        <li>
          Open the kit&apos;s <Code>chatgpt/custom-gpt.md</Code> file (cloned from the kit repo).
        </li>
        <li>Copy the entire <strong>Instructions</strong> section (below the <Code>## Instructions</Code> header) and paste it into the Instructions field.</li>
        <li>Copy the <strong>Conversation starters</strong> list (at the bottom of the file) and paste them one per line into the conversation-starters field.</li>
        <li>Name: <Code>CxO &lt;role&gt; — Your AI &lt;role-description&gt;</Code> (from the top of the file).</li>
        <li>Save as private.</li>
      </Ol>

      <H3 id="chatgpt-knowledge">2. Upload skills as Knowledge (recommended)</H3>
      <P>
        For higher-fidelity output, also upload the files in <Code>claude/skills/</Code> of each
        kit to the Custom GPT&apos;s <strong>Knowledge</strong> section. The GPT then references the
        skill files verbatim when producing output.
      </P>

      <H3 id="chatgpt-board">3. The Board in ChatGPT</H3>
      <P>
        ChatGPT doesn&apos;t support subagent delegation as cleanly as Claude Code does — but the Board
        kit ships a Chief-of-Staff Custom GPT that manages the 5 personas in one chat. Install the
        Chief of Staff GPT last; it orchestrates the others via role-playing.
      </P>
      <Callout variant="warn" title="ChatGPT trade-off">
        The Board in ChatGPT is slightly lossy compared to Claude Code: subagent invocation is
        simulated via personas-in-one-prompt rather than actual subagent calls. For the full
        experience, use Claude Code.
      </Callout>

      <H2 id="cursor">Cursor / Windsurf</H2>
      <P>
        Cursor and Windsurf consume <Code>.cursor/rules/*.mdc</Code> files. Each kit includes one
        rules file that enforces the role&apos;s discipline while you code.
      </P>

      <H3 id="cursor-steps">Install</H3>
      <Pre language="bash">{`mkdir -p .cursor/rules

for slug in ceo cto cfo sales cmo board; do
  cp .cxopack-$slug/cursor/rules/*.mdc .cursor/rules/ 2>/dev/null
done`}</Pre>
      <P>
        Restart Cursor. Rules auto-activate when editing files matching their globs —
        <Code>finance/</Code> triggers CFO discipline, <Code>docs/adr/</Code> triggers CTO, etc.
      </P>
      <Callout variant="warn" title="Cursor limitation">
        Cursor doesn&apos;t have native skills/subagents/slash commands. Rules enforce tone and
        discipline; they don&apos;t run workflows. Use Claude Code alongside for the workflow-ritual
        parts.
      </Callout>

      <H2 id="any-llm">Any other LLM (Gemini, Mistral, DeepSeek, Grok, Llama…)</H2>
      <P>
        Each kit ships a <Code>prompts/main.md</Code> — a consolidated, platform-agnostic master
        prompt covering every workflow for that role. Paste into any LLM as the system prompt (or
        first user message) and it behaves like the kit.
      </P>
      <Pre language="bash">{`cat .cxopack-ceo/prompts/main.md | pbcopy  # macOS copy to clipboard
# Paste into the system prompt of your LLM of choice`}</Pre>
      <Callout>
        The master-prompt version is lossy compared to the native Claude/ChatGPT/Cursor
        integrations — no auto-triggering, no subagent delegation, no shared memory. But it works
        in a pinch and covers 80% of what the skills do.
      </Callout>

      <H2 id="updates">Getting updates</H2>
      <P>Kits get updates — new skills, refined prompts, fixed pitfalls. To pull the latest:</P>
      <Pre language="bash">{`for slug in ceo cto cfo sales cmo board; do
  (cd .cxopack-$slug && git pull) 2>/dev/null
done

# Then re-run the install copy commands above`}</Pre>

      <H2 id="uninstall">Uninstall</H2>
      <Pre language="bash">{`# Remove copied files (keep founder-log/ — it's your data)
rm -rf .claude/skills/*
rm -rf .claude/agents/*
rm -rf .claude/commands/{ceo,cto,cfo,sales,cmo,board}
rm -f  .claude/commands/founder.md

# Remove the source clones
rm -rf .cxopack-*`}</Pre>

      <div className="mt-12 flex justify-end">
        <EditOnGitHub />
      </div>

      <Pager />
    </div>
  );
}
