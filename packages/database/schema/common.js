import { integer } from "drizzle-orm/sqlite-core";

export const timestamps = {
    ...timestamps,
    updatedAt: integer("updated_at", { mode: "timestamp" }),
};
export const softDelete = {
    deletedAt: integer("deleted_at", { mode: "timestamp" }),
};