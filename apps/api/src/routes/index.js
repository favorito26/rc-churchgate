import { Hono } from "hono";
import health from "./health";
import users from "../modules/users";

const routes = new Hono();

routes.route("/health", health);
routes.route("/users", users);
export default routes;