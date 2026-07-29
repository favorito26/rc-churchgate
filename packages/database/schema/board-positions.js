import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const boardPositions = sqliteTable("board_positions", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    shortName: text("short_name"),
    displayOrder: integer("display_order").notNull().default(0),
    isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
});