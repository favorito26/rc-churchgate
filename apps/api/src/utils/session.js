import { randomBytes } from "crypto";

export function generateSessionToken() {
    return randomBytes(32).toString("hex");
}

export function getSessionExpiry(days = 30) {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + days);
    return expiresAt;
}