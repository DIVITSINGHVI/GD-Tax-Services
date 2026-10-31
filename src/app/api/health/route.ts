import { sql } from "drizzle-orm";
import { getDb, hasDatabase } from "@/db";

export const dynamic = "force-dynamic";

/** Health check. Pings the database only if one is configured; otherwise the site is healthy on its own. */
export async function GET() {
  if (!hasDatabase()) {
    return Response.json({ ok: true, database: "not configured" });
  }
  try {
    await getDb().execute(sql`select 1`);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
