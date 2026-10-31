import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

/**
 * Optional database connection.
 * The website itself does not need a database. The connection is created lazily,
 * only when DATABASE_URL is set and `getDb()` is called, so the site builds and runs
 * on any host (Vercel, Netlify, etc.) without one.
 */
const globalForDb = globalThis as typeof globalThis & {
  __gdPool?: Pool;
  __gdDb?: NodePgDatabase;
};

export function hasDatabase(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export function getDb(): NodePgDatabase {
  if (globalForDb.__gdDb) return globalForDb.__gdDb;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
  }

  const pool = globalForDb.__gdPool ?? new Pool({ connectionString: databaseUrl });
  globalForDb.__gdPool = pool;
  globalForDb.__gdDb = drizzle(pool);
  return globalForDb.__gdDb;
}
