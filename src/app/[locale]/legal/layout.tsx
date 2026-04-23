import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default async function LegalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main className="container-tight max-w-3xl py-16">{children}</main>
      <Footer />
    </>
  );
}
