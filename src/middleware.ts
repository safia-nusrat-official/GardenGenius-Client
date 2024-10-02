import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
const Auth_Routes = ["/login", "/signup"];
const Role_Based_Routes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};
type Role = keyof typeof Role_Based_Routes;

export async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/user",
    "/user/:path*",
    "/admin",
    "/admin/:path*",
    "/login",
    "/signup",
  ],
};
