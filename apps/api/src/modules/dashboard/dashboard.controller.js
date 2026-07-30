import * as dashboardService from "./dashboard.service";

export async function getStats(c) {
  const stats = await dashboardService.getDashboardStats(c);

  return c.json({
    success: true,
    data: stats,
  });
}