import { eq } from "drizzle-orm";
import { getDrizzle } from "../../db/drizzle";
import { users, members } from "../../../../../packages/database/schema";




export async function findUserById(c, id) {
    const db = getDrizzle(c);

    const result = await db
        .select()
        .from(users)
        .where(eq(users.id, id));

    return result[0] ?? null;
}



