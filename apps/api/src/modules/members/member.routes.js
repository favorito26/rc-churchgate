import { Hono } from "hono";
import * as controller from "./member.controller";
import { requireAuth } from "../auth/auth.middleware";

const router = new Hono();

router.get("/", requireAuth, controller.getMembers);
router.post("/", requireAuth, controller.createMember);
export default router;