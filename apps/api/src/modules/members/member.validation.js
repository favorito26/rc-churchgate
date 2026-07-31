import { z } from "zod";

export const createMemberSchema = z.object({
    fullName: z.string().min(2).max(100),
    email: z.string().email(),
    role: z.enum(["admin", "member"]),
});