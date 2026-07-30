import { me } from "./auth";

export async function getCurrentUser() {
    try {
        const response = await me();
        return response.data;
    } catch {
        return null;
    }
}