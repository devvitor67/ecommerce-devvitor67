import { randomUUIDv7 } from "bun"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: text()
    .notNull()
    .unique()
    .primaryKey()
    .$defaultFn(() => randomUUIDv7()),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  created_at: text()
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
  updated_at: text()
    .notNull()
    .$onUpdate(() => new Date().toISOString())
})
