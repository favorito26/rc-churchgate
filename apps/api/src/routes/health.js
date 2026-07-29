import { Hono } from "hono";
import { getDb } from "../db/client";

const health = new Hono();

health.get("/", async (c) => {
    const db = getDb(c);

    const result = await db
        .prepare("SELECT 1 as connected")
        .first();

    return c.json({
        success: true,
        message: "API is healthy",
        database: result,
    });
});

export default health;