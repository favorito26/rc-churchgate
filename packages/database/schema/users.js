import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { timestamps } from "./common";

export const users = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),

    email: text("email").notNull().unique(),

    passwordHash: text("password_hash"),

    emailVerified: integer("email_verified", {
        mode: "boolean",
    })
        .notNull()
        .default(false),

    role: text("role")
        .notNull()
        .default("member"),

    status: text("status")
        .notNull()
        .default("active"),

    ...timestamps,
});