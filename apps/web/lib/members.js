import { api } from "./api";

export function getMembers() {
    return api("/members");
}