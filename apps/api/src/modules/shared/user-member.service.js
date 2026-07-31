import { hashPassword } from "../../utils/password";
import {
    findUserByEmail,
    createUser,
} from "../users/users.repository";
import { createMember } from "../members/member.repository";
import { ApiError } from "../../utils/errors";

export async function createUserWithMember(c, data) {
    const existingUser = await findUserByEmail(c, data.email);

    if (existingUser) {
        throw new ApiError("Email already registered");
    }

    const passwordHash = await hashPassword(data.password);
    const now = new Date();

    const user = await createUser(c, {
        email: data.email,
        passwordHash,
        role: data.role ?? "member",
        status: data.status ?? "active",
        createdAt: now,
        updatedAt: now,
    });

    const member = await createMember(c, {
        userId: user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        gender: data.gender,
        dob: data.dob,
        profession: data.profession,
        bio: data.bio,
        profilePhoto: data.profilePhoto,
        joinedAt: data.joinedAt,
        createdAt: now,
        updatedAt: now,
    });

    return { user, member };
}