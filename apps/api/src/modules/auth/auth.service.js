import { hashPassword, verifyPassword } from "../../utils/password";
import { createMember } from "../members/member.repository";
import {
    findUserByEmail,
    createUser,
} from "../users/users.repository";
import { ConflictError, UnauthorizedError } from "../../utils/errors";
import { generateSessionToken, getSessionExpiry } from "../../utils/session";
import { createSession, deleteSession } from "./session.repository";
import { createUserWithMember } from "../shared/user-member.service";
import { toUserResponse } from "../members/member.dto";

export async function register(c, data) {
    return createUserWithMember(c, data);
}

export async function login(c, data) {
    const user = await findUserByEmail(c, data.email);

    if (!user) {
        throw new UnauthorizedError("Invalid email or password");
    }

    const valid = await verifyPassword(
        data.password,
        user.passwordHash
    );

    if (!valid) {
        throw new UnauthorizedError("Invalid email or password");
    }

    const token = generateSessionToken();
    const expiresAt = getSessionExpiry();
    const now = new Date();
    const session = await createSession(c, {
        userId: user.id,
        token,
        expiresAt,
        lastUsedAt: now,
        createdAt: now,
        updatedAt: now,
    })

    return {
        user: toUserResponse(user), session
    }
}

export async function logout(c, token) {
    await deleteSession(c, token);
}