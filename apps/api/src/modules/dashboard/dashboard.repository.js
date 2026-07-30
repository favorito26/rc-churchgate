import { count } from "drizzle-orm";
import { members, users } from "../../../../../packages/database/schema";
import { getDrizzle } from "../../db/drizzle";

export async function getDashboardStats(c) {
  const db = getDrizzle(c);

  const [{ totalMembers }] = await db
    .select({ totalMembers: count() })
    .from(members);

  const [{ totalAdmins }] = await db
    .select({ totalAdmins: count() })
    .from(users);
  const totalEvents = 0;

  return {
    totalMembers,
    totalEvents,
    totalAttendance: 0,
    totalAdmins,
  };
}