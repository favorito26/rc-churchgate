"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await login({ email, password });
            router.push("/");
            router.refresh();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm space-y-4 rounded-lg border p-6"
            >
                <h1 className="text-2xl font-bold">Login</h1>

                {error && (
                    <p className="text-sm text-red-600">{error}</p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded border p-2"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded border p-2"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-black p-2 text-white disabled:opacity-50"
                >
                    {loading ? "Signing in..." : "Login"}
                </button>
            </form>
    );
}