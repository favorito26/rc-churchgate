import { loginSchema, registerSchema } from "./auth.validation";
import * as authService from "./auth.service";
import { success, error } from "../../utils/response";
import { getCookie, setCookie } from "hono/cookie";

export async function register(c) {
    try {
        const body = await c.req.json();

        const data = registerSchema.parse(body);

        const result = await authService.register(c, data);

        return success(c, result, "User registered successfully", 201);
    } catch (err) {
        return error(c, err.message, 400);
    }
}

export async function login(c) {
    try {
        const body = await c.req.json();
        const data = loginSchema.parse(body);
        const { user, session } = await authService.login(c, data);

        setCookie(c, "session", session.token, {
            httpOnly: true,
            secure: false, // Change to true in production
            sameSite: "Lax",
            path: "/",
            expires: session.expiresAt,
        });

        return success(
            c,
            {
                id: user.id,
                email: user.email,
                role: user.role,
                status: user.status,
            },
            "Login successful"
        );
    } catch (err) {
        console.error(err);

        return c.json(
            {
                success: false,
                name: err.name,
                message: err.message,
                cause: err.cause,
                stack: err.stack,
            },
            500
        );
    }
}

export async function me(c) {
    const user = c.get("user");

    return success(
        c,
        {
            id: user.id,
            email: user.email,
            role: user.role,
            status: user.status,
        },
        "Current user"
    );
}

export async function logout(c) {
    const token = getCookie(c, "session");

    if (token) {
        await authService.logout(c, token);
    }

    deleteCookie(c, "session");

    return c.json({
        success: true,
        message: "Logged out successfully",
    });
}