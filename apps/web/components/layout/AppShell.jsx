"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useAuth } from "@/components/providers/AuthProvider";

export default function AppShell({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 border-r p-4">
                <h2 className="mb-6 text-xl font-bold">RC Churchgate</h2>

                <nav className="space-y-2">
                    <Link
                        href="/"
                        className="block rounded px-3 py-2 hover:bg-gray-100"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/members"
                        className="block rounded px-3 py-2 hover:bg-gray-100"
                    >
                        Members
                    </Link>

                    {user?.role === "admin" && (
                        <Link
                            href="/admin/events"
                            className="block rounded px-3 py-2 hover:bg-gray-100"
                        >
                            Events Manager
                        </Link>
                    )}
                </nav>

                {user && (
                    <div className="mb-6">
                        <p className="font-medium">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.role}</p>
                    </div>
                )}
            </aside>

            <div className="flex flex-1 flex-col">
                <Navbar />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}