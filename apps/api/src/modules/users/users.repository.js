import { getDb } from "../../db/client";

export async function getUsers(c) {
    const db = getDb(c);

    return await db
        .prepare("SELECT id, email, created_at FROM users ORDER BY id")
        .all();
}