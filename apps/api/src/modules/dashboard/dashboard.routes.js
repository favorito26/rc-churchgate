import { Hono } from "hono";
import * as controller from "./dashboard.controller";
import { requireAuth } from "../auth/auth.middleware";

const router = new Hono();

router.get("/stats", requireAuth, controller.getStats);

export default router;