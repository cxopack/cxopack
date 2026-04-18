"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutInner />
    </Suspense>
  );
}

function CheckoutInner() {
  const params = useSearchParams();
  const plan = params.get("plan");
  const kit = params.get("kit");
  const period = params.get("period");

  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (data.user?.email) setEmail(data.user.email);
    })();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, kit, period, email, githubUsername }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container-tight max-w-md">
        <h1 className="headline-2">Complete your order</h1>
        <form onSubmit={submit} className="mt-8 space-y-5">
          <Field label="Email address" type="email" required value={email} onChange={setEmail} />
          <Field
            label="GitHub username"
            required
            value={githubUsername}
            onChange={setGithubUsername}
            hint="We'll send an invite to the private repos."
            placeholder="octocat"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "…" : "Continue to payment"}
          </button>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
  hint,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  hint?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-3 py-2 text-sm outline-none focus:border-[var(--color-brand)]"
      />
      {hint && <span className="mt-1 block text-xs text-[var(--color-fg-dim)]">{hint}</span>}
    </label>
  );
}
