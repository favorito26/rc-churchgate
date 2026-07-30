import { getDrizzle } from "../../db/drizzle";
import { users } from "../../../../../packages/database/schema";

export async function getUsers(c) {
    const db = getDrizzle(c);

    return await db.select().from(users);
}