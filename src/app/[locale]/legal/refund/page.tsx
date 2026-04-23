import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LegalHeader, Section, LegalList, Contact } from "@/components/legal/prose";

export const metadata: Metadata = {
  title: "Refund Policy — CxOPack",
  description: "14-day no-questions refund, cancellation rules, and how to request one.",
};

const LAST_UPDATED = "20 April 2026";

export default async function RefundPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article>
      <LegalHeader
        title="Refund Policy"
        lastUpdated={LAST_UPDATED}
        summary="If CxOPack isn't for you, you get your money back. Full refund within 14 days of purchase, no justification required. Detail below."
      />

      <Section id="summary" title="1. Quick summary">
        <LegalList>
          <li>
            <strong>14-day no-questions-asked refund</strong> from the date of purchase — for
            Solo Kits and the first subscription period of All-Access plans.
          </li>
          <li>
            <strong>Cancel anytime</strong> — your subscription stays active until the end of the
            current billing period; no prorated refund for unused days beyond the 14-day window.
          </li>
          <li>
            <strong>Launch-100 customers</strong> keep their locked price if they return within 90
            days of cancellation.
          </li>
          <li>
            Refunds are processed to the original payment method, typically within 5–10 business
            days.
          </li>
        </LegalList>
      </Section>

      <Section id="eligibility" title="2. What's eligible">
        <p>
          <strong>Within 14 days of the original charge</strong>, you are entitled to a full,
          no-questions-asked refund for:
        </p>
        <LegalList>
          <li>Any single Solo Kit purchase.</li>
          <li>The first billing period of an All-Access Pass or Launch-100 subscription.</li>
        </LegalList>
        <p>
          <strong>After 14 days</strong>, refunds are reviewed case by case. We typically honour
          refund requests when:
        </p>
        <LegalList>
          <li>A documented workflow is unavailable and cannot be restored within a reasonable time.</li>
          <li>A service failure on our side has materially prevented you from using the Kits.</li>
          <li>A billing error has occurred.</li>
        </LegalList>
        <p>
          We reserve the right to decline a refund where there is evidence of bad-faith use —
          including repeat subscribe-cancel cycles for the sole purpose of content access or
          redistribution of Content to third parties.
        </p>
      </Section>

      <Section id="how" title="3. How to request a refund">
        <p>
          Email <code>hello@cxopack.com</code> from the email address you used at purchase. Include:
        </p>
        <LegalList>
          <li>The email you purchased under.</li>
          <li>The date of purchase (approximate is fine).</li>
          <li>A line or two on why — not required for the 14-day window, but helpful for us to improve.</li>
        </LegalList>
        <p>
          You will receive a confirmation within one business day. Refund processing through our
          payment provider (Stripe) typically takes 5–10 business days to reach your card or bank
          statement.
        </p>
      </Section>

      <Section id="access" title="4. Access after a refund">
        <p>
          Upon refund, your collaboration access to the private kit repositories is revoked. You
          are expected to remove any copies of the Content from your local machine and any projects
          it was installed in. Your license is terminated at that point.
        </p>
        <p>
          Output you have already generated using the Kits (decisions, documents, drafts) remains
          yours. The license termination applies to the source Content, not to work product.
        </p>
      </Section>

      <Section id="cancellation" title="5. Subscription cancellation">
        <p>
          You can cancel your subscription at any time. Access continues through the end of the
          current billing period; there is no further charge.
        </p>
        <p>
          Cancellation is not the same as a refund — after the 14-day window, the current period is
          not refunded unless one of the conditions in §2 applies.
        </p>
        <p>
          To cancel, reply to any subscription email, or use the &quot;Manage subscription&quot; link in
          your renewal reminder, or email <code>hello@cxopack.com</code>.
        </p>
      </Section>

      <Section id="launch-100" title="6. Launch-100 price retention">
        <p>
          Subscribers who purchased at the Launch-100 locked price enjoy a special consideration:
          if you cancel and return within 90 days, we will honour your Launch-100 price again. After
          90 days the offer becomes unavailable — standard All-Access pricing applies on return.
        </p>
      </Section>

      <Section id="eu-consumer-rights" title="7. EU consumer rights">
        <p>
          If you are a consumer in the European Union, you have a 14-day right of withdrawal under
          European Directive 2011/83/EU on consumer rights. By purchasing, you expressly request
          and consent to the immediate provision of digital content — after which your right of
          withdrawal lapses once access is granted. Notwithstanding this, CxOPack voluntarily
          extends the full 14-day refund regardless of whether you have accessed the Content.
        </p>
      </Section>

      <Section id="contact" title="8. Contact">
        <Contact />
      </Section>
    </article>
  );
}
