import { members } from "../../../../../packages/database/schema";
import { getDrizzle } from "../../db/drizzle";

export async function findAllMembers(c) {
  const db = getDrizzle(c);

  return db
    .select({
      id: members.id,
      firstName: members.firstName,
      lastName: members.lastName,
      phone: members.phone,
      profession: members.profession,
      joinedAt: members.joinedAt,
    })
    .from(members)
    .orderBy(members.firstName, members.lastName);
}

export async function createMember(c, data) {
  const db = getDrizzle(c);

  const result = await db.insert(members).values(data).returning();

  return result[0];
}
