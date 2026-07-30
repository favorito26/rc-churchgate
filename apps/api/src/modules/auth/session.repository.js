import { eq } from "drizzle-orm";
import { getDrizzle } from "../../db/drizzle";
import { sessions } from "@rc/database/schema";

export async function createSession(c, data) {
    try {
        const db = getDrizzle(c);

        const [session] = await db
            .insert(sessions)
            .values(data)
            .returning({
                id: sessions.id,
                token: sessions.token,
            });

        return session;
    } catch (err) {
        console.error("SESSION INSERT ERROR");
        console.error(err);
        throw err;
    }
}

export async function findSessionByToken(c, token) {
    const db = getDrizzle(c);

    const result = await db
        .select()
        .from(sessions)
        .where(eq(sessions.token, token));

    return result[0] ?? null;
}

export async function deleteSession(c, token) {
    const db = getDrizzle(c);

    await db
        .delete(sessions)
        .where(eq(sessions.token, token));
}

export async function deleteSession(c, token) {
    const db = getDrizzle(c);

    await db
        .delete(sessions)
        .where(eq(sessions.token, token));
}