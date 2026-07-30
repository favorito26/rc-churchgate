import { drizzle } from "drizzle-orm/d1";
import * as schema from "../../../../packages/database/schema";

export function getDrizzle(c) {
    return drizzle(c.env.DB, { schema });
}