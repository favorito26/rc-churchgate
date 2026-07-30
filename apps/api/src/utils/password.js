import { hash, compare } from "bcryptjs";

export function hashPassword(password) {
    return hash(password, 12);
}

export function verifyPassword(password, hash) {
    return compare(password, hash);
}