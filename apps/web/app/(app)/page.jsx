"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/lib/dashboard";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await getDashboardStats();
        setStats(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    loadStats();
  }, []);

  if (!stats) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome to the RC Churchgate Admin Portal.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border p-6">
          <h2 className="text-sm text-gray-500">Members</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalMembers}</p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-sm text-gray-500">Events</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalEvents}</p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-sm text-gray-500">Attendance</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalAttendance}</p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-sm text-gray-500">Admins</h2>
          <p className="mt-2 text-3xl font-bold">{stats.totalAdmins}</p>
        </div>
      </div>
    </div>
  );
}