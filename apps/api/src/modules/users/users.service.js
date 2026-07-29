import { getUsers } from "./users.repository";

export async function listUsers(c) {
    return await getUsers(c);
}