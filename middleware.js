import { NextResponse, NextRequest } from 'next/server';
import jwtDecode from 'jwt-decode';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let response = NextResponse.next()
  const hasToken = request.cookies.has('token');
  const hasLogin = request.cookies.has('LoggedIn');
  const token = request.cookies.get('token')?.value;
  const login = request.cookies.get('LoggedIn')?.value

  console.log('req url: ' + request.url);
  console.log('next url: ' + request.nextUrl);
  console.log('login: ' + login);

  //Check if logged in

  if (hasToken) {
    const user = jwtDecode(token);
    if (user) {
      console.log('decoded cookie: ' + JSON.stringify(user));
      response.cookies.set('firstName', user.firstName)
      response.cookies.set('role', user.role)
      if (hasLogin && login === 'true') {
        response.cookies.set('LoggedIn', 'true')
      } else if (login === 'create') {
        response.cookies.set('LoggedIn', 'create')
      }
    }
    return response
  }

  if (hasLogin && login == 'false') {
    console.log('logout detected');
    response.cookies.delete('token')
    response.cookies.delete('firstName')
    response.cookies.delete('role')
  }

  response.cookies.delete('LoggedIn')
  return response
}

//See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/account', '/menu', '/backoffice/:path'],
}