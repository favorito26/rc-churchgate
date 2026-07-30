import { api } from "./api";

export function getDashboardStats() {
    return api("/dashboard/stats");
}