import { Resend } from "resend";
import { KITS, type KitSlug } from "@/config/kits";

let _resend: Resend | null = null;
function getResend(): Resend {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set.");
  _resend = new Resend(key);
  return _resend;
}
const FROM = () => process.env.RESEND_FROM_EMAIL ?? "hello@cxopack.com";
const ORG = () => process.env.GITHUB_ORG ?? "cxopack";

export async function sendWelcomeEmail(opts: {
  to: string;
  kitSlugs: KitSlug[];
  githubUsername: string;
}) {
  const { to, kitSlugs, githubUsername } = opts;
  const org = ORG();
  const repoLinks = kitSlugs
    .map((slug) => {
      const kit = KITS.find((k) => k.slug === slug)!;
      const repo = process.env[kit.repoEnvKey] ?? `cxopack-${slug}`;
      const url = `https://github.com/${org}/${repo}`;
      return `  • <a href="${url}">${repo}</a>`;
    })
    .join("<br/>");

  const subject = "Welcome to CxOPack — your GitHub access is ready";

  const body = `
    <h2>Welcome 👋</h2>
    <p>Your payment is confirmed. We just invited <b>@${githubUsername}</b> to the following repos:</p>
    <p>${repoLinks}</p>
    <p>Accept the GitHub invite from your inbox, then open each repo's <b>README</b> for the install guide (Claude, ChatGPT, Cursor).</p>
    <p>Need help? Just reply to this email.</p>
    <p>— The CxOPack team</p>
  `;

  return getResend().emails.send({
    from: FROM(),
    to,
    subject,
    html: body,
  });
}
