import { api } from "./api";

export function login(data) {
    return api("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
}

export function me() {
    return api("/auth/me");
}

export function logout() {
    return api("/auth/logout", {
        method: "POST",
    });
}