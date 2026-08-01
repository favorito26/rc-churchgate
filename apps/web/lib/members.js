import { api } from "./api";

export function getMembers() {
    return api("/members");
}

export function createMember(data) {
  return api("/members", {
    method: "POST",
    body: JSON.stringify(data),
  });
}