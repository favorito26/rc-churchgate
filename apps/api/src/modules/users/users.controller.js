import { listUsers } from "./users.service";
import { success } from "../../utils/response";

export async function index(c) {
    const result = await listUsers(c);

    return success(c, result.results);
}