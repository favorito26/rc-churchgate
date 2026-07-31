import * as repository from "./member.repository";

export async function getMembers(c) {
    return repository.findAllMembers(c);
}