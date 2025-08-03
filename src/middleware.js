import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const currentCookie = request.cookies.get("token")
    console.log(currentCookie.value);

    const dummyUserData = {
        role: "user",
        email: "test@admin.com"
    }

    let isServicePage =  request.nextUrl.pathname.startsWith("/services");
    let isAdmin = dummyUserData.role == "admin"

    if(isServicePage && !isAdmin)
        return NextResponse.rewrite(new URL('/login', request.url))

  return NextResponse.next()
}