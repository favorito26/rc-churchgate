import { members } from "../../../../../packages/database/schema";
import { getDrizzle } from "../../db/drizzle";

export async function findAllMembers(c) {
    const db = getDrizzle(c);

    return db
        .select({
            id: members.id,
            fullName: members.fullName,
            email: members.email,
            role: members.role,
        })
        .from(members)
        .orderBy(members.fullName);
}