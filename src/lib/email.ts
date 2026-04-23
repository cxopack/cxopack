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
const SITE = () => process.env.NEXT_PUBLIC_SITE_URL ?? "https://cxopack.com";

// --------- Brand tokens ---------
const INK_900 = "#0a0a0b";
const INK_800 = "#101114";
const IVORY = "#ede6d3";
const GOLD = "#c9a961";
const FG_MUTED = "#a1a1aa";
const FG_DIM = "#71717a";
const BORDER = "#1f1f24";

/** Email-safe: pure HTML + inline styles, no external CSS, no images. */
function renderWelcomeEmail(opts: {
  githubUsername: string;
  kitSlugs: KitSlug[];
  site: string;
  org: string;
}): string {
  const { githubUsername, kitSlugs, site, org } = opts;

  const kitRows = kitSlugs
    .map((slug) => {
      const kit = KITS.find((k) => k.slug === slug)!;
      const repo = process.env[kit.repoEnvKey] ?? `cxopack-${slug}`;
      const docsUrl = `${site}/docs/kits/${slug}`;
      const ghUrl = `https://github.com/${org}/${repo}`;
      return `
      <tr>
        <td style="padding:10px 14px;background:${INK_900};border:1px solid ${BORDER};border-radius:6px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:13px;color:${IVORY};">
                <a href="${ghUrl}" style="color:${IVORY};text-decoration:none;">${org}/${repo}</a>
              </td>
              <td align="right" style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:11px;">
                <a href="${docsUrl}" style="color:${GOLD};text-decoration:none;letter-spacing:0.08em;text-transform:uppercase;">Walkthrough →</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr><td style="height:6px;line-height:6px;">&nbsp;</td></tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>Welcome to CxOPack</title>
</head>
<body style="margin:0;padding:0;background:${INK_900};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${INK_900};padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;background:${INK_800};border:1px solid ${BORDER};border-radius:16px;">

          <!-- Logo + wordmark -->
          <tr>
            <td style="padding:36px 36px 24px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="padding-bottom:4px;"><div style="width:58px;height:4px;background:${IVORY};border-radius:1px;line-height:0;font-size:0;">&nbsp;</div></td></tr>
                <tr><td style="padding-bottom:4px;"><div style="width:43px;height:4px;background:${IVORY};border-radius:1px;line-height:0;font-size:0;">&nbsp;</div></td></tr>
                <tr><td style="padding-bottom:4px;"><div style="width:64px;height:5px;background:${GOLD};border-radius:1px;line-height:0;font-size:0;">&nbsp;</div></td></tr>
                <tr><td><div style="width:49px;height:4px;background:${IVORY};border-radius:1px;line-height:0;font-size:0;">&nbsp;</div></td></tr>
              </table>
              <div style="margin-top:18px;font-size:20px;font-weight:700;letter-spacing:-0.02em;color:${IVORY};line-height:1;">
                Cx<span style="color:${GOLD};">O</span>Pack
              </div>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="padding:8px 36px 28px 36px;">
              <h1 style="margin:0 0 14px 0;font-size:34px;font-weight:700;letter-spacing:-0.025em;color:${IVORY};line-height:1.05;">
                Your C-suite<br>is ready.
              </h1>
              <p style="margin:0;font-size:16px;line-height:1.6;color:${FG_MUTED};">
                Purchase confirmed. <strong style="color:${IVORY};">@${githubUsername}</strong> has been invited to the repositories below.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 36px;"><div style="height:1px;background:${BORDER};line-height:0;font-size:0;">&nbsp;</div></td></tr>

          <!-- Repos -->
          <tr>
            <td style="padding:24px 36px;">
              <div style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:10px;font-weight:500;color:${FG_DIM};letter-spacing:0.16em;text-transform:uppercase;margin-bottom:14px;">
                Your kits · ${kitSlugs.length}
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${kitRows}
              </table>
            </td>
          </tr>

          <!-- Next steps -->
          <tr>
            <td style="padding:0 36px 28px 36px;">
              <div style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:10px;font-weight:500;color:${GOLD};letter-spacing:0.16em;text-transform:uppercase;margin-bottom:14px;">
                Next — 5 minutes
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="28" valign="top" style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:13px;color:${GOLD};padding-top:2px;">01</td>
                  <td style="font-size:14px;line-height:1.55;color:${FG_MUTED};padding-bottom:12px;">
                    Accept the GitHub invites landing in your inbox from <span style="color:${IVORY};">notifications@github.com</span>.
                  </td>
                </tr>
                <tr>
                  <td width="28" valign="top" style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:13px;color:${GOLD};padding-top:2px;">02</td>
                  <td style="font-size:14px;line-height:1.55;color:${FG_MUTED};padding-bottom:12px;">
                    Follow the install guide for your AI tool — Claude, ChatGPT, Cursor, or any LLM.
                  </td>
                </tr>
                <tr>
                  <td width="28" valign="top" style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:13px;color:${GOLD};padding-top:2px;">03</td>
                  <td style="font-size:14px;line-height:1.55;color:${FG_MUTED};">
                    Open any kit's walkthrough above for the recommended journey — which workflow to run first, which cadence to build.
                  </td>
                </tr>
              </table>
              <div style="margin-top:22px;">
                <a href="${site}/docs/installation" style="display:inline-block;background:${GOLD};color:${INK_900};padding:13px 22px;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;letter-spacing:-0.005em;">
                  Open the install guide →
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer inside card -->
          <tr>
            <td style="padding:22px 36px 30px 36px;border-top:1px solid ${BORDER};">
              <p style="margin:0 0 6px 0;font-size:13px;line-height:1.5;color:${FG_MUTED};">
                Questions? Reply directly — this goes to a human.
              </p>
              <p style="margin:0;font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:10px;color:${FG_DIM};letter-spacing:0.16em;text-transform:uppercase;">
                — Djalil · Founder
              </p>
            </td>
          </tr>
        </table>

        <!-- Outer footer -->
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;margin-top:24px;">
          <tr>
            <td align="center" style="font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:10px;color:${FG_DIM};letter-spacing:0.16em;text-transform:uppercase;padding-bottom:8px;">
              CxOPack · Edition I
            </td>
          </tr>
          <tr>
            <td align="center" style="font-size:12px;color:${FG_DIM};">
              <a href="${site}" style="color:${FG_DIM};text-decoration:none;">cxopack.com</a>
              &nbsp;·&nbsp;
              <a href="${site}/docs" style="color:${FG_DIM};text-decoration:none;">docs</a>
              &nbsp;·&nbsp;
              <a href="${site}/docs/support" style="color:${FG_DIM};text-decoration:none;">support</a>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendWelcomeEmail(opts: {
  to: string;
  kitSlugs: KitSlug[];
  githubUsername: string;
}) {
  const { to, kitSlugs, githubUsername } = opts;
  const subject = "Welcome to CxOPack — your C-suite is ready";
  const html = renderWelcomeEmail({
    githubUsername,
    kitSlugs,
    site: SITE(),
    org: ORG(),
  });

  return getResend().emails.send({
    from: FROM(),
    to,
    subject,
    html,
  });
}
