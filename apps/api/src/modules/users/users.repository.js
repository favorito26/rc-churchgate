import { eq } from "drizzle-orm";
import { getDrizzle } from "../../db/drizzle";
import { users } from "../../../../../packages/database/schema";

export async function getUsers(c) {
    const db = getDrizzle(c);

    return await db.select().from(users);
}

export async function createUser(c, data) {
    const db = getDrizzle(c);

    const result = await db
        .insert(users)
        .values(data)
        .returning();

    return result[0];
}

export async function findUserByEmail(c, email) {
    const db = getDrizzle(c);

    const result = await db
        .select()
        .from(users)
        .where(eq(users.email, email));

    return result[0] ?? null;
}
