import { Hono } from "hono";
import { index } from "./users.controller";

const users = new Hono();

users.get("/", index);

export default users;