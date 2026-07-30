export default function DashboardPage() {
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
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-sm text-gray-500">Events</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-sm text-gray-500">Attendance</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-sm text-gray-500">Admins</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}