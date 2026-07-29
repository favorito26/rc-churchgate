import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const rotaryYears = sqliteTable("rotary_years", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    theme: text("theme").notNull(),
    startDate: integer("start_date", { mode: "timestamp" }).notNull(),
    endDate: integer("end_date", { mode: "timestamp" }).notNull(),
    isCurrent: integer("is_current", { mode: "boolean" }).notNull().default(false),
    ...timestamps,
});