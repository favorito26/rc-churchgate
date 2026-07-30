import { Hono } from "hono";

import health from "./health";
import users from "../modules/users";
import auth from "../modules/auth";

const routes = new Hono();

routes.route("/health", health);
routes.route("/users", users);
routes.route("/auth", auth);

export default routes;