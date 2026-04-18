import { setRequestLocale } from "next-intl/server";
import { Mail, Github, Clock, ShieldCheck, RefreshCcw, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { Pager } from "@/components/docs/pager";
import { EditOnGitHub } from "@/components/docs/edit-on-github";
import { H1, H2, H3, Lead, P, Ul, Callout } from "@/components/docs/prose";

export const metadata = {
  title: "Support — CxOPack",
  description: "How to get help, refund policy, response times, and community.",
};

export default async function Support({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl">
      <Breadcrumbs />
      <div className="eyebrow-plain mb-4">Resources</div>
      <H1>Support</H1>
      <Lead>
        How to get help, what to expect from response times, and the policies that apply to your
        purchase. Customer support is direct and fast.
      </Lead>

      <H2 id="contact">Contact</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href="mailto:hello@cxopack.com"
          className="card group flex items-start gap-3 p-5 transition hover:border-[var(--color-brand)]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
            <Mail className="h-4 w-4 text-[var(--color-brand)]" />
          </div>
          <div>
            <div className="font-semibold text-[var(--color-fg)]">Email</div>
            <div className="mt-1 text-sm text-[var(--color-fg-muted)]">
              hello@cxopack.com — product questions, billing, installs.
            </div>
          </div>
        </a>
        <a
          href="https://github.com/cxopack/cxopack/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="card group flex items-start gap-3 p-5 transition hover:border-[var(--color-brand)]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
            <Github className="h-4 w-4 text-[var(--color-brand)]" />
          </div>
          <div>
            <div className="font-semibold text-[var(--color-fg)]">Issues on GitHub</div>
            <div className="mt-1 text-sm text-[var(--color-fg-muted)]">
              Landing-page bugs, docs typos, feature requests.
            </div>
          </div>
        </a>
        <a
          href="mailto:security@cxopack.com"
          className="card group flex items-start gap-3 p-5 transition hover:border-[var(--color-brand)]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
            <ShieldCheck className="h-4 w-4 text-[var(--color-brand)]" />
          </div>
          <div>
            <div className="font-semibold text-[var(--color-fg)]">Security disclosures</div>
            <div className="mt-1 text-sm text-[var(--color-fg-muted)]">
              security@cxopack.com — private channel, 24-hour first reply.
            </div>
          </div>
        </a>
        <div className="card flex items-start gap-3 p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
            <MessageCircle className="h-4 w-4 text-[var(--color-brand)]" />
          </div>
          <div>
            <div className="font-semibold text-[var(--color-fg)]">Community</div>
            <div className="mt-1 text-sm text-[var(--color-fg-muted)]">
              Private community for All-Access subscribers. Invite included in the welcome email.
            </div>
          </div>
        </div>
      </div>

      <H2 id="response-time">Response time</H2>
      <P>Service-level targets for each channel:</P>
      <Ul>
        <li><strong>Email (hello@cxopack.com)</strong> — first reply within 24 hours on business days, 48 hours on weekends.</li>
        <li><strong>GitHub issues</strong> — triage within 48 hours.</li>
        <li><strong>Security email</strong> — first reply within 24 hours, always.</li>
        <li><strong>Subscriber community</strong> — daily replies; peer responses are typically faster.</li>
      </Ul>

      <H2 id="refunds">Refunds</H2>
      <Callout variant="success" title="14-day, no-questions-asked">
        If a purchase isn&apos;t the right fit, email hello@cxopack.com within 14 days of purchase
        with your order email. Full refund, no forms, no survey, no negotiation. Repository access
        is revoked at the time of refund.
      </Callout>
      <P>
        After 14 days, refund requests are reviewed case-by-case — typically granted when a
        documented workflow is unavailable and cannot be restored. Subscriptions are cancellable
        at any time; access continues through the end of the current billing period.
      </P>

      <H2 id="faq">Frequently asked</H2>

      <H3 id="faq-gh">I didn&apos;t receive a GitHub invite — what now?</H3>
      <P>
        Invites are sent to your GitHub-account email, which is separate from your purchase email.
        Check spam for a message from <Code>notifications@github.com</Code>. If still missing,
        email us with your GitHub username and order email — we re-send manually.
      </P>

      <H3 id="faq-upgrade">I bought one kit. Can I add more later?</H3>
      <P>
        Yes. Email hello@cxopack.com to upgrade your plan. Anything previously paid is credited
        toward the new tier.
      </P>

      <H3 id="faq-team">Can my team share a license?</H3>
      <P>
        Licenses are single-seat by default. Multi-seat plans for teams of three or more are
        available — email hello@cxopack.com to arrange one.
      </P>

      <H3 id="faq-platforms">A workflow behaves differently in my AI tool. Is that a bug?</H3>
      <P>
        Possibly. Workflows are validated primarily against Claude Code and ChatGPT. Cursor and
        other tools may interpret instructions with slight variance. Please email the tool, the
        workflow name, and what you observed; the prompt will be tuned in the next release.
      </P>

      <H2 id="sla">Status &amp; uptime</H2>
      <P>
        The landing page and checkout run on Vercel (target uptime 99.99%). Kit content is hosted
        on GitHub. The underlying AI providers (Anthropic, OpenAI, etc.) maintain their own uptime
        independently.
      </P>
      <p className="mono mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)]">
        <Clock className="h-3 w-3" />
        Last reviewed: Edition I
      </p>

      <div className="mt-12 flex justify-end">
        <EditOnGitHub />
      </div>

      <Pager />
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-[var(--color-bg-elevated)] px-1.5 py-0.5 font-mono text-[0.875em] text-[var(--color-brand)]">
      {children}
    </code>
  );
}
