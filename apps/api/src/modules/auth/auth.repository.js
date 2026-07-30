import { eq } from "drizzle-orm";
import { getDrizzle } from "../../db/drizzle";
import { users, members } from "../../../../../packages/database/schema";


export async function findUserByEmail(c, email) {
    const db = getDrizzle(c);

    const result = await db
        .select()
        .from(users)
        .where(eq(users.email, email));

    return result[0] ?? null;
}

export async function findUserById(c, id) {
    const db = getDrizzle(c);

    const result = await db
        .select()
        .from(users)
        .where(eq(users.id, id));

    return result[0] ?? null;
}

export async function createUser(c, data) {
    const db = getDrizzle(c);

    const result = await db
        .insert(users)
        .values(data)
        .returning();

    return result[0];
}

export async function createMember(c, data) {
    const db = getDrizzle(c);

    const result = await db
        .insert(members)
        .values(data)
        .returning();

    return result[0];
}