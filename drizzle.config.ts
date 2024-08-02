import type { Config } from "drizzle-kit";
import { config } from "dotenv";
config();

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("Enviroment variables missing");
}

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: url,
  },
} satisfies Config;
