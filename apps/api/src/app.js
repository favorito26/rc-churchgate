import { Hono } from "hono";
import routes from "./routes";

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

app.route("/api/v1", routes);

export default app;