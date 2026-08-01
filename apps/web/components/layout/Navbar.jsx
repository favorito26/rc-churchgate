"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { useAuth } from "@/components/providers/AuthProvider";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const { user, setUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Events", href: "/events" },
        { label: "Contact", href: "/contact" },
        { label: "Join Us", href: "/join" },
    ];

    async function handleLogout() {
        try {
            await logout();
            setUser(null);
            setMenuOpen(false);
            router.replace("/login");
            router.refresh();
        } catch (err) {
            console.error(err);
        }
    }

    function handleNavClick() {
        setMenuOpen(false);
    }

    return (
        <header className="w-full px-4 pt-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[28px] border border-teal-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-5">
                <div className="flex items-center justify-between gap-3">
                    <Link href="/" className="flex items-center gap-3" onClick={handleNavClick}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                            RC
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-700 sm:text-xs">
                                Rotaract Club
                            </p>
                            <p className="text-sm font-medium text-slate-700">Churchgate</p>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className={isActive ? "text-teal-700" : "transition hover:text-teal-700"}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        {user?.role === "admin" && (
                            <Link href="/admin/events" onClick={handleNavClick} className="font-semibold text-teal-700 transition hover:text-teal-800">
                                Manage Events
                            </Link>
                        )}
                    </nav>

                    <div className="hidden items-center gap-3 md:flex">
                        {!user && pathname !== "/login" && (
                            <Link
                                href="/login"
                                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
                            >
                                Login
                            </Link>
                        )}

                        {user && user.role === "admin" && (
                            <Link
                                href="/admin/events"
                                className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
                            >
                                Admin Events
                            </Link>
                        )}

                        {user ? (
                            <button
                                onClick={handleLogout}
                                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
                            >
                                Logout
                            </button>
                        ) : (
                            <a
                                href="https://forms.gle/LyA6qQr2sYh4rtDD6"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
                            >
                                Become a Member
                            </a>
                        )}
                    </div>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-teal-700 md:hidden"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                            {menuOpen ? (
                                <>
                                    <path d="M6 6l12 12M18 6L6 18" />
                                </>
                            ) : (
                                <>
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="mt-4 space-y-3 border-t border-slate-100 pt-4 md:hidden">
                        <nav className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className={isActive ? "rounded-xl bg-teal-50 px-3 py-2 text-teal-700" : "rounded-xl px-3 py-2 transition hover:bg-slate-50 hover:text-teal-700"}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}

                            {user?.role === "admin" && (
                                <Link href="/admin/events" onClick={handleNavClick} className="rounded-xl bg-teal-50 px-3 py-2 font-semibold text-teal-700">
                                    Manage Events
                                </Link>
                            )}
                        </nav>

                        <div className="flex flex-col gap-2">
                            {!user && pathname !== "/login" && (
                                <Link
                                    href="/login"
                                    onClick={handleNavClick}
                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-700"
                                >
                                    Login
                                </Link>
                            )}

                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                                >
                                    Logout
                                </button>
                            ) : (
                                <a
                                    href="https://forms.gle/LyA6qQr2sYh4rtDD6"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-teal-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-teal-600/20"
                                >
                                    Become a Member
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}