import { getCookie } from "hono/cookie";
import { findSessionByToken } from "./session.repository";
import { findUserById } from "./auth.repository";


export async function requireAuth(c, next) {
    const token = getCookie(c, "session");

    if (!token) {
        return c.json(
            {
                success: false,
                message: "Unauthorized",
            },
            401
        );
    }

    const session = await findSessionByToken(c, token);

    if (!session) {
        return c.json(
            {
                success: false,
                message: "Invalid session",
            },
            401
        );
    }

    const user = await findUserById(c, session.userId);

    if (!user) {
        return c.json(
            {
                success: false,
                message: "User not found",
            },
            401
        );
    }

    c.set("session", session);
    c.set("user", user);

    await next();
}