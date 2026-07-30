import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { timestamps } from "./common";

export const sessions = sqliteTable("sessions", {
    id: integer("id").primaryKey({ autoIncrement: true }),

    userId: integer("user_id")
        .notNull()
        .references(() => users.id),

    token: text("token").notNull().unique(),

    expiresAt: integer("expires_at", {
        mode: "timestamp",
    }).notNull(),

    lastUsedAt: integer("last_used_at", {
        mode: "timestamp",
    }),

    ipAddress: text("ip_address"),

    userAgent: text("user_agent"),

    ...timestamps,
});