import { Hono } from "hono";
import * as controller from "./auth.controller";

const auth = new Hono();

auth.post("/register", controller.register);
auth.post("/login", controller.login);
export default auth;