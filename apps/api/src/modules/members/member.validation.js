import { z } from "zod";

export const createMemberSchema = z.object({
    userId: z.number().int().positive(),
    firstName: z.string().min(2).max(100),
    lastName: z.string().min(2).max(100),

    // Optional fields
    phone: z.string().optional(),
    gender: z.string().optional(),
    dob: z.string().datetime().optional(),
    profession: z.string().optional(),
    bio: z.string().optional(),
    profilePhoto: z.string().optional(),
    joinedAt: z.string().datetime().optional(),
});
