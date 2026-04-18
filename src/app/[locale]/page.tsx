import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Multiplatform } from "@/components/multiplatform";
import { Kits } from "@/components/kits";
import { BoardSection } from "@/components/board-section";
import { Pricing } from "@/components/pricing";
import { HowItWorks } from "@/components/how";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

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
        <Kits />
        <BoardSection />
        <Pricing />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
