import { relations } from "drizzle-orm";
import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const queries = mysqlTable("queries", {
  id: varchar("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  username: varchar("username", { length: 255 }).notNull(),
  query: text("query").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  status: varchar("status", {
    length: 10,
    enum: ["unseen", "seen", "replied"],
  })
    .notNull()
    .default("unseen"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const sentEmails = mysqlTable("sent_emails", {
  id: varchar("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  to: varchar("to", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const jobListings = mysqlTable("job_listings", {
  id: varchar("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  jobType: varchar("job_type", {
    length: 26,
    enum: ["full-time", "part-time", "internship", "contract"],
  })
    .notNull()
    .default("full-time"),
  contact: varchar("contact", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// relations

export const queryRelation = relations(queries, ({ many }) => ({
  replies: many(sentEmails),
}));

export const sentEmailRelation = relations(sentEmails, ({ one }) => ({
  query: one(queries, {
    fields: [sentEmails.to],
    references: [queries.email],
  }),
}));
