import { drizzle } from "drizzle-orm/libsql"

export const db = drizzle(Bun.env.DATABASE_URL as string)
