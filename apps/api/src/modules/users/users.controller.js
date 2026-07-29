import { listUsers } from "./users.service";

export async function index(c) {
    const result = await listUsers(c);

    return c.json({
        success: true,
        data: result.results,
    });
}