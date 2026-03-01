import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "sqlite",
  out: "./src/db/migrations",
  schema: "./src/db/schema/**",
  casing: "snake_case",
  dbCredentials: {
    url: Bun.env.DATABASE_URL as string
  }
})
