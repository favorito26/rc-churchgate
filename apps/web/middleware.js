import { NextResponse } from "next/server";

export function middleware(request) {
    const session = request.cookies.get("session")?.value;

    const { pathname } = request.nextUrl;

    if (!session && pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (session && pathname === "/login") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|favicon.ico).*)"],
};