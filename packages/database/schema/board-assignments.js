import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { members } from "./members";
import { boardPositions } from "./board-positions";
import { rotaryYears } from "./rotary-years";

export const boardAssignments = sqliteTable("board_assignments", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    memberId: integer("member_id").notNull().references(() => members.id),
    positionId: integer("position_id").notNull().references(() => boardPositions.id),
    rotaryYearId: integer("rotary_year_id").notNull().references(() => boardPositions.id),
    message: text("message"),
    displayOrder: integer("display_order").notNull().default(0),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
})