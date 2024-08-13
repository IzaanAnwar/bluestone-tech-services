import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: "./bluestone.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
