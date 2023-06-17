import { NextResponse, NextRequest } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let cookie = request.cookies.get('token')?.value;
    console.log(cookie); // => 'token'
    if (!request.cookies.has('token')){
        return NextResponse.redirect(new URL('/menu'));
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/account/:path',
};