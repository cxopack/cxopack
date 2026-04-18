import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { DocsSidebar } from "@/components/docs/sidebar";

export default async function DocsLayout({
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
      <div className="container-narrow flex gap-10 py-4">
        <DocsSidebar />
        <main className="min-w-0 flex-1 py-8">{children}</main>
      </div>
      <Footer />
    </>
  );
}
