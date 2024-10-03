import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./services/auth";
import { TUser } from "./types/user.interface";

// This function can be marked `async` if using `await` inside
const Auth_Routes = ["/login", "/signup"];
const Role_Based_Routes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};
type Role = keyof typeof Role_Based_Routes;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = { role: null };

  if (!user) {
    if (Auth_Routes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }
  if (user?.role && Role_Based_Routes[user.role as Role]) {
    const routes = Role_Based_Routes[user.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/user",
    "/user/:path*",
    "/admin",
    "/admin/:path*",
  ],
};
