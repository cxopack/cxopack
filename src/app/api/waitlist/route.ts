import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  email: z.string().email(),
  source: z.string().max(64).optional().default("landing"),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const { email, source } = parsed.data;

  // Best-effort DB persistence (may fail if Supabase paused / connection unavailable).
  let dbStored = false;
  try {
    const [{ db, schema: dbSchema }, { sql }] = await Promise.all([
      import("@/db"),
      import("drizzle-orm"),
    ]);
    await db
      .insert(dbSchema.autopilotWaitlist)
      .values({ email, source })
      .onConflictDoNothing();
    dbStored = true;
  } catch (err) {
    // Swallow — we still email below; DB will heal on next deploy / when Supabase resumes.
    console.error("waitlist db write failed:", err instanceof Error ? err.message : err);
  }

  // Notify founder + autoreply confirm to subscriber via Resend.
  let emailed = false;
  try {
    const { Resend } = await import("resend");
    const key = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL ?? "hello@veroom.io";
    const adminEmail = process.env.WAITLIST_ADMIN_EMAIL ?? "asichaib@veroom.io";

    if (key) {
      const resend = new Resend(key);
      await Promise.all([
        // Notify founder
        resend.emails.send({
          from,
          to: adminEmail,
          subject: `[CxOPack] waitlist signup: ${email}`,
          html: `<p>New <b>Autopilot</b> waitlist signup:</p>
<ul>
  <li>Email: <b>${email}</b></li>
  <li>Source: ${source}</li>
  <li>DB stored: ${dbStored ? "yes" : "no (DB unreachable)"}</li>
  <li>At: ${new Date().toISOString()}</li>
</ul>`,
        }),
        // Autoreply
        resend.emails.send({
          from,
          to: email,
          subject: "You're on the CxOPack Autopilot waitlist",
          html: `<p>Thanks — you're on the list for <b>Autopilot</b>, the agent-operated company tier of CxOPack (targeting Q4 2026).</p>
<p>You'll get an early-access invite before public launch and a Launch-100 founders' price ahead of public pricing.</p>
<p>While you wait, you can already get the Solo Kit (€49 lifetime) or All-Access Pass (€149/yr) at <a href="https://cxopack.com">cxopack.com</a> — they're the foundation Autopilot is built on.</p>
<p>— Djalil, CxOPack</p>`,
        }),
      ]);
      emailed = true;
    }
  } catch (err) {
    console.error("waitlist email failed:", err instanceof Error ? err.message : err);
  }

  if (!dbStored && !emailed) {
    return NextResponse.json(
      { error: "Could not record signup. Please email hello@cxopack.com." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
