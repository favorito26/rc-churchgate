import { Hono } from "hono";
import * as controller from "./auth.controller";
import { requireAuth } from "./auth.middleware";

const auth = new Hono();

auth.post("/register", controller.register);
auth.post("/login", controller.login);
auth.get("/me", requireAuth, controller.me);
router.post("/logout", requireAuth, controller.logout);
export default auth;