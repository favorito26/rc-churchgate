import { loginSchema, registerSchema } from "./auth.validation";
import * as authService from "./auth.service";
import { success, error } from "../../utils/response";


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
        const user = await authService.login(c, data);
        return success(c, {
            id: user.id,
            email: user.email,
            role: user.role,
            status: user.status,
        }, "login successful")
    } catch (err) {
        return error(c, err.message, err.status || 400)
    }
}