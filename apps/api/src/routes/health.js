import { Hono } from "hono";
import { getDb } from "../db/client";
import { success } from "../utils/response";
const health = new Hono();

health.get("/", async (c) => {
    const db = getDb(c);

    const result = await db
        .prepare("SELECT 1 AS connected")
        .first();

    return success(c, result, "API is healthy");
});

export default health;