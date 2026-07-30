"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { useAuth } from "@/components/providers/AuthProvider";

export default function Navbar() {
    const router = useRouter();
    const { user, setUser } = useAuth();

    async function handleLogout() {
        try {
            await logout();
            setUser(null);
            router.replace("/login");
            router.refresh();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <header className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-lg font-semibold">RC Churchgate</h1>

            <div className="flex items-center gap-4">
                {user && (
                    <div className="text-right">
                        <p className="font-medium">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.role}</p>
                    </div>
                )}

                <button
                    onClick={handleLogout}
                    className="rounded border px-3 py-2 hover:bg-gray-100"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}