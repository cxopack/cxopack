import { setRequestLocale } from "next-intl/server";
import { CheckCircle2 } from "lucide-react";

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[var(--color-brand)]" />
        <h1 className="mt-6 headline-2">Thank you — you&apos;re all set.</h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--color-fg-muted)]">
          We just emailed you the GitHub invite and install guide. Check your inbox in 30 seconds.
        </p>
      </div>
    </main>
  );
}
