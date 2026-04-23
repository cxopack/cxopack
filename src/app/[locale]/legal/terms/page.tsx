import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LegalHeader, Section, LegalList, Contact } from "@/components/legal/prose";

export const metadata: Metadata = {
  title: "Terms of Service — CxOPack",
  description: "The agreement between you and CxOPack.",
};

const LAST_UPDATED = "20 April 2026";

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article>
      <LegalHeader
        title="Terms of Service"
        lastUpdated={LAST_UPDATED}
        summary="These terms govern your use of CxOPack. Short version: use the kits for your own work, don't redistribute them, subscriptions renew automatically, refunds are available for 14 days. The detail follows."
      />

      <Section id="definitions" title="1. Definitions">
        <p>
          <strong>&quot;CxOPack&quot;</strong>, <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong> refers to
          the CxOPack service operated by Abdeldjalil Sichaib, sole proprietor, based in France,
          contactable at <code>hello@cxopack.com</code>.
        </p>
        <p>
          <strong>&quot;Kit&quot;</strong> refers to a collection of software workflows, prompts,
          subagents, and configurations distributed under a specific name (e.g. CEO Kit, CTO Kit,
          etc.) through a private GitHub repository.
        </p>
        <p>
          <strong>&quot;Customer&quot;</strong>, <strong>&quot;you&quot;</strong> refers to any natural or legal
          person who creates an account, places an order, or subscribes to a plan.
        </p>
        <p>
          <strong>&quot;Content&quot;</strong> refers to all materials provided as part of a Kit — including
          prompts, skills, subagents, documentation, configuration files.
        </p>
      </Section>

      <Section id="acceptance" title="2. Acceptance of Terms">
        <p>
          By completing a purchase, creating an account, or using any Kit, you acknowledge that you
          have read, understood, and agree to be bound by these Terms. If you do not agree, do not
          use the service.
        </p>
        <p>
          We may update these Terms from time to time. Material changes will be announced by email
          to active customers at least 30 days before they take effect. Continued use after that
          notice period constitutes acceptance.
        </p>
      </Section>

      <Section id="license" title="3. License">
        <p>
          Upon purchase, CxOPack grants you a <strong>non-exclusive, non-transferable, single-seat</strong>{" "}
          license to use the Content for your own personal or professional work. This means:
        </p>
        <LegalList>
          <li>You may install, run, modify, and adapt the Content within your own projects.</li>
          <li>You may use output produced by the Content commercially, without restriction.</li>
          <li>
            You may not redistribute, publish, resell, or share the Content itself — whether in
            original form, modified form, or embedded in another product sold to third parties.
          </li>
          <li>
            You may not use the Content to train, fine-tune, or benchmark competing AI products
            without prior written consent.
          </li>
          <li>
            Multi-seat use (3+ team members) requires a multi-seat plan. Contact us for
            arrangements.
          </li>
        </LegalList>
        <p>
          All intellectual property rights in the Content remain with CxOPack. Your license is
          granted for as long as your plan is active; it is revoked on refund or on a subscription
          ending.
        </p>
      </Section>

      <Section id="subscriptions" title="4. Plans, Pricing, Billing">
        <p>
          CxOPack offers one-time purchases (for individual Kits) and recurring subscriptions (for
          the All-Access Pass and equivalent plans). Pricing is shown on the website at the time of
          purchase in Euros (EUR).
        </p>
        <p>
          <strong>Subscriptions renew automatically</strong> at the end of each billing period
          using the payment method on file. You will receive an email reminder approximately seven
          days before each renewal. You can cancel at any time from your account billing portal;
          access continues through the end of the current billing period.
        </p>
        <p>
          Price changes for existing subscribers will be communicated at least 30 days in advance.
          If a customer purchased under a price-locked promotion (e.g. Launch 100), that price is
          honoured for as long as the subscription remains continuously active.
        </p>
        <p>
          Taxes (VAT) are calculated automatically by our payment provider (Stripe) based on your
          billing address and are included where applicable.
        </p>
      </Section>

      <Section id="refunds" title="5. Refunds">
        <p>
          We offer a full refund within 14 days of purchase, no questions asked. Access is revoked
          at the time of refund. See the full{" "}
          <a
            href="/legal/refund"
            className="text-[var(--color-brand)] underline decoration-dotted underline-offset-4"
          >
            Refund Policy
          </a>
          .
        </p>
      </Section>

      <Section id="delivery" title="6. Delivery & Access">
        <p>
          Access is delivered electronically. Upon successful payment:
        </p>
        <LegalList>
          <li>
            You receive a confirmation email from <code>hello@cxopack.com</code> with onboarding
            instructions.
          </li>
          <li>
            We invite the GitHub username you provided at checkout to the private repository
            matching each Kit you purchased.
          </li>
          <li>
            You install the Content locally per the installation guide at{" "}
            <code>cxopack.com/docs/installation</code>.
          </li>
        </LegalList>
        <p>
          If you have not received access within one business day of purchase, contact{" "}
          <code>hello@cxopack.com</code> and we will resolve it manually.
        </p>
      </Section>

      <Section id="acceptable-use" title="7. Acceptable Use">
        <p>You agree not to:</p>
        <LegalList>
          <li>Use the Content for unlawful activity.</li>
          <li>
            Redistribute, resell, publish, or share Content with third parties (including posting
            to public repositories, forums, or file-sharing services).
          </li>
          <li>Circumvent, reverse-engineer, or attempt to bypass any access-control mechanism.</li>
          <li>
            Use automated scripts to mass-generate accounts, process unauthorized requests, or
            abuse the service.
          </li>
          <li>
            Impersonate CxOPack or represent yourself as affiliated with CxOPack beyond what your
            subscription permits.
          </li>
        </LegalList>
        <p>
          Material violation gives us the right to suspend or terminate your access, revoke your
          license, and refuse refunds for the affected period.
        </p>
      </Section>

      <Section id="ip" title="8. Intellectual Property">
        <p>
          All CxOPack branding, logos, documentation, and Content is the exclusive property of
          Abdeldjalil Sichaib / CxOPack. Output produced by a customer using the Kits — decisions,
          analyses, investor updates, content drafts — belongs to the customer.
        </p>
        <p>
          By using the Kits, you grant CxOPack a limited, non-exclusive licence to reference your
          company name and logo in customer lists, case studies, and marketing — unless you opt out
          by emailing <code>hello@cxopack.com</code>.
        </p>
      </Section>

      <Section id="warranty" title="9. Warranties and Disclaimers">
        <p>
          The Content is provided <strong>&quot;as is&quot;</strong>, without warranty of any kind — express
          or implied — including warranties of merchantability, fitness for a particular purpose,
          or non-infringement. Outputs generated by AI models using the Content may contain
          errors; you remain responsible for verifying any output before relying on it for
          business decisions.
        </p>
        <p>
          CxOPack does not warrant that the service will be uninterrupted, error-free, or that all
          defects will be corrected. Third-party services (Anthropic, OpenAI, GitHub, Stripe,
          Supabase, Resend, Vercel) operate under their own terms and SLAs.
        </p>
      </Section>

      <Section id="liability" title="10. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, CxOPack&apos;s total liability to you for
          any and all claims arising out of or related to these Terms is limited to the amount you
          paid to CxOPack in the twelve months preceding the claim.
        </p>
        <p>
          CxOPack is not liable for indirect, incidental, consequential, punitive, or exemplary
          damages — including lost profits, lost data, or business interruption — even if advised
          of the possibility of such damages.
        </p>
      </Section>

      <Section id="termination" title="11. Termination">
        <p>
          You may terminate your subscription at any time through the billing portal; your license
          ends at the close of your current billing period.
        </p>
        <p>
          We may terminate or suspend your access if you materially violate these Terms, or for
          legal or security reasons. In case of termination for convenience on our part, we will
          pro-rate a refund for any unused paid period.
        </p>
      </Section>

      <Section id="governing-law" title="12. Governing Law">
        <p>
          These Terms are governed by the laws of France. Any dispute arising from these Terms will
          be resolved exclusively by the competent courts of Paris, France — save for mandatory
          consumer-protection provisions that apply in the customer&apos;s country of residence.
        </p>
      </Section>

      <Section id="contact" title="13. Contact">
        <Contact />
      </Section>
    </article>
  );
}
