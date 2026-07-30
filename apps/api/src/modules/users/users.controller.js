import { listUsers } from "./users.service";
import { success } from "../../utils/response";

export async function index(c) {
  const users = await listUsers(c);

  return success(c, users);
}