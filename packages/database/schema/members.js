import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { timestamps } from "./common";

export const members = sqliteTable("members", {
    id: integer("id").primaryKey({ autoIncrement: true }),

    userId: integer("user_id")
        .notNull()
        .unique()
        .references(() => users.id),

    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),

    phone: text("phone"),
    gender: text("gender"),

    dob: integer("dob", {
        mode: "timestamp",
    }),

    profession: text("profession"),

    bio: text("bio"),

    profilePhoto: text("profile_photo"),

    joinedAt: integer("joined_at", {
        mode: "timestamp",
    }),

    ...timestamps,
});