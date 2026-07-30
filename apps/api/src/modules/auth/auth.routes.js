import { Hono } from "hono";
import * as controller from "./auth.controller";
import { requireAuth } from "./auth.middleware";
import { router } from "better-auth/api";

const auth = new Hono();

auth.post("/register", controller.register);
auth.post("/login", controller.login);
auth.get("/me", requireAuth, controller.me);
auth.post("/logout", requireAuth, controller.logout);
export default auth;