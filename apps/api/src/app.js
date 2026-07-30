import { Hono } from "hono";
import routes from "./routes";
import { env } from "./config/env";
import { createAuth } from "./auth/auth";

const app = new Hono();

app.use("*", async (c, next) => {
    c.set("env", env(c));
    await next();
});

app.get("/", (c) => {
    return c.json({
        success: true,
        name: "RC Churchgate API",
        version: "1.0.0",
    });
});

// Better Auth handler
app.all("/api/auth/*", async (c) => {
    const auth = createAuth(c);
    return auth.handler(c.req.raw);
});

app.route("/api/v1", routes);

export default app;