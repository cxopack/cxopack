import "server-only";

export type Launch100Count = {
  sold: number;
  limit: number;
  remaining: number;
};

const FALLBACK: Launch100Count = { sold: 0, limit: 100, remaining: 100 };

export async function getLaunch100Count(): Promise<Launch100Count> {
  if (!process.env.DATABASE_URL) return FALLBACK;
  try {
    const [{ db, schema }, { eq }] = await Promise.all([
      import("@/db"),
      import("drizzle-orm"),
    ]);
    const rows = await db
      .select()
      .from(schema.foundingCounter)
      .where(eq(schema.foundingCounter.id, 1))
      .limit(1);
    if (rows.length === 0) return FALLBACK;
    const sold = rows[0].sold ?? 0;
    const limit = rows[0].limit ?? 100;
    return { sold, limit, remaining: Math.max(0, limit - sold) };
  } catch {
    return FALLBACK;
  }
}
