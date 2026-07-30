import * as repository from "./dashboard.repository";

export async function getDashboardStats(c) {
  return repository.getDashboardStats(c);
}