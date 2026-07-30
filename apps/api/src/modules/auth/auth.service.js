import { hashPassword, verifyPassword } from "../../utils/password";
import { findUserByEmail, createUser, createMember, } from "./auth.repository";
import { ConflictError, UnauthorizedError } from "../../utils/errors";

export async function register(c, data) {

    const existingUser = await findUserByEmail(c, data.email);

    if (existingUser) {
        throw new ConflictError("Email already registered");
    }

    const passwordHash = await hashPassword(data.password);
    const now = new Date();

    const user = await createUser(c, {
        email: data.email,
        passwordHash,
        role: "member",
        status: "active",
        createdAt: now,
        updatedAt: now,
    });

    // Create member profile
    const member = await createMember(c, {
        userId: user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        createdAt: now,
        updatedAt: now,
    });

    return { user, member, };
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

    return user;
}