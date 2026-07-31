import { Hono } from "hono";

import health from "./health";
import users from "../modules/users";
import auth from "../modules/auth";
import dashboardRoutes from "../modules/dashboard/dashboard.routes";
import memberRoutes from "../modules/members/member.routes"
const routes = new Hono();

routes.route("/health", health);
routes.route("/users", users);
routes.route("/auth", auth);
routes.route("/dashboard", dashboardRoutes);
routes.route("/members", memberRoutes);
export default routes;