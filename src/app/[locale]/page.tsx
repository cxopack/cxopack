import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Multiplatform } from "@/components/multiplatform";
import { OhMyClaudePair } from "@/components/oh-my-claude-pair";
import { Kits } from "@/components/kits";
import { BoardSection } from "@/components/board-section";
import { FounderDemo } from "@/components/founder-demo";
import { WeekInLife } from "@/components/week-in-life";
import { Pricing } from "@/components/pricing";
import { WaitlistSection } from "@/components/waitlist";
import { HowItWorks } from "@/components/how";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const revalidate = 60;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Multiplatform />
        <OhMyClaudePair />
        <Kits />
        <BoardSection />
        <FounderDemo />
        <WeekInLife />
        <Pricing />
        <WaitlistSection />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
