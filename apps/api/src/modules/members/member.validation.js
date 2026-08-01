import { z } from "zod";

export const createMemberSchema = z.object({
    userId: z.number().int().positive().optional(),
    email: z.email().optional(),
    password: z.union([z.string().min(8), z.literal("")]).optional(),
    role: z.enum(["member", "admin"]).optional(),
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
}).refine((data) => {
    if (data.userId) return true;
    return Boolean(data.email && data.password && data.password.length >= 8);
}, {
    message: "Provide either an existing userId or a valid email and password with at least 8 characters.",
    path: ["password"],
});
