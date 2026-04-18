import { pgTable, text, timestamp, integer, uuid, jsonb, boolean, pgEnum } from "drizzle-orm/pg-core";

export const planEnum = pgEnum("plan", [
  "kit",
  "full-pack",
  "founding-100",
  "club-monthly",
  "club-yearly",
  "all-access",
  "launch-100",
]);

export const kitSlugEnum = pgEnum("kit_slug", ["ceo", "cto", "cfo", "sales", "cmo"]);

export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "paid",
  "refunded",
  "failed",
]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  email: text("email").notNull().unique(),
  fullName: text("full_name"),
  githubUsername: text("github_username"),
  locale: text("locale").default("en"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  email: text("email").notNull(),
  plan: planEnum("plan").notNull(),
  kitSlug: kitSlugEnum("kit_slug"),
  amountCents: integer("amount_cents").notNull(),
  currency: text("currency").notNull().default("EUR"),
  status: orderStatusEnum("status").notNull().default("pending"),
  stripeSessionId: text("stripe_session_id").unique(),
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  githubInviteSent: boolean("github_invite_sent").default(false).notNull(),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  paidAt: timestamp("paid_at", { withTimezone: true }),
});

export const entitlements = pgTable("entitlements", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  kitSlug: kitSlugEnum("kit_slug").notNull(),
  source: planEnum("source").notNull(),
  active: boolean("active").default(true).notNull(),
  grantedAt: timestamp("granted_at", { withTimezone: true }).defaultNow().notNull(),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
});

export const foundingCounter = pgTable("founding_counter", {
  id: integer("id").primaryKey().default(1),
  sold: integer("sold").default(0).notNull(),
  limit: integer("limit").default(100).notNull(),
});

export const autopilotWaitlist = pgTable("autopilot_waitlist", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  source: text("source").default("landing"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type Order = typeof orders.$inferSelect;
export type Entitlement = typeof entitlements.$inferSelect;
export type WaitlistEntry = typeof autopilotWaitlist.$inferSelect;
