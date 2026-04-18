import { setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/footer";
import { DocsHeader } from "@/components/docs/docs-header";
import { DocsSidebar } from "@/components/docs/sidebar";
import { DocsToc } from "@/components/docs/toc";

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
      <DocsHeader />
      <div className="container-narrow flex gap-8 py-4">
        <DocsSidebar />
        <main className="min-w-0 flex-1 py-8">{children}</main>
        <DocsToc />
      </div>
      <Footer />
    </>
  );
}
