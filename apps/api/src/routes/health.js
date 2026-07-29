import { Hono } from "hono";

const health = new Hono();

health.get("/", (c) => {
    return c.json({
        success: true,
        message: "API is healthy",
    });
});

export default health;