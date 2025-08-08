import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const currentCookie = request.cookies.get("token");
    // console.log(currentCookie?.value);

    const dummyUserData = {
        role: "admin",
        email: "test@admin.com"
    };

    const isServicePage = request.nextUrl.pathname.startsWith("/services");
    const isAdminSpecificRoute = request.nextUrl.pathname.startsWith("/dashboard")
    const isAdmin = dummyUserData.role === "admin";

    if (isAdminSpecificRoute && isServicePage && !isAdmin) {
        const callbackURL = encodeURIComponent(req.nextUrl.pathname)
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackURL}`, request.url));
    }

    return NextResponse.next();
}
