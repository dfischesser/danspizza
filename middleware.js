import { NextResponse, NextRequest } from 'next/server';
import jwtDecode from 'jwt-decode';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let response = NextResponse.next()
  const hasServerToken = request.cookies.has('serverToken')
  const hasLogout = request.cookies.has('logout')
  const serverToken = request.cookies.get('serverToken')

  console.log('req url: ' + request.url)
  console.log('next url: ' + request.nextUrl)
  console.log('logout: ' + hasLogout);
  console.log('token: ' + JSON.stringify(serverToken));
  console.log('pathname: ' + request.nextUrl.pathname)

  if (hasServerToken) {
    const user = jwtDecode(serverToken.value);
    console.log('decoded cookie: ' + JSON.stringify(user))
    console.log('role: ' + user.role)
    response.cookies.set('role', user.role)
    response.cookies.set({name: 'token', value: serverToken.value, httpOnly: true, secure: true})

    console.log('startswith: ' + request.nextUrl.pathname.startsWith('/backoffice'))
    if (user.role !== 'Employee' && request.nextUrl.pathname.startsWith('/backoffice')) {
      console.log('Incorrect role detected. sending user to home page')
      return NextResponse.redirect(new URL('/', request.url))
    }

    if (user.firstName) {
      response.cookies.set('firstName', user.firstName)
    }
    
    if (hasLogout) {
      if (!request.nextUrl.pathname.startsWith('/menu') && !request.nextUrl.pathname === '/') {
        console.log('Logout token detected. sending user to home page')
        return NextResponse.redirect(new URL('/', request.url))
      }

      response.cookies.delete('logout')
      response.cookies.delete('serverToken')
      response.cookies.delete('firstName')
      response.cookies.delete('role')
    }

    return response

  } else {
    console.log('no token pathname: ' + request.nextUrl.pathname)

    if (request.nextUrl.pathname.startsWith('/account')) {
      console.log('No token detected (account). sending user to home page')
      return NextResponse.redirect(new URL('/', request.url))
    }
    if (!request.nextUrl.pathname.startsWith('/menu') && !request.nextUrl.pathname === '/') {
      console.log('No token detected. sending user to home page')
      return NextResponse.redirect(new URL('/', request.url))
    }

    response.cookies.delete('logout')
    response.cookies.delete('serverToken')
    response.cookies.delete('firstName')
    response.cookies.delete('role')
    return response
  }
} 

//See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/account', '/menu', '/backoffice/:path*'],
}

//---
//   if (hasLogin) {
//     if (login == 'true') {
//       if (hasToken) {
//         const user = jwtDecode(token);
//         console.log('decoded cookie: ' + JSON.stringify(user))
//         response.cookies.set('firstName', user.firstName)
//         response.cookies.set('role', user.role)
//         console.log('url: ' + response.url)
//         console.log('role: ' + user.role)
//         console.log('startswith: ' + request.nextUrl.pathname.startsWith('/backoffice'))
//         if (user.role !== 'Employee' && request.nextUrl.pathname.startsWith('/backoffice')) {
//           console.log('Incorrect role detected. sending user to home page: ' + request.nextUrl.basePath)
//           return NextResponse.redirect(new URL('/', request.url))
//         }
//         return response
//       } else {
//         //const user = jwtDecode(token);
//         //console.log('decoded cookie: ' + JSON.stringify(user))
//         response.cookies.delete('LoggedIn')
//         response.cookies.delete('token')
//         response.cookies.delete('firstName')
//         response.cookies.delete('role')
//         return response
//       }
//     } else if (login == 'create') {
//       if (hasToken) {
//         const user = jwtDecode(token);
//         console.log('decoded cookie: ' + JSON.stringify(user))
//         response.cookies.set('role', user.role)
//         console.log('url: ' + response.url)
//         return response
//       } else {
//         response.cookies.delete('LoggedIn')
//         response.cookies.delete('token')
//         response.cookies.delete('firstName')
//         response.cookies.delete('role')
//         return response
//       }
//     } else {
//       response.cookies.delete('LoggedIn')
//       response.cookies.delete('token')
//       response.cookies.delete('firstName')
//       response.cookies.delete('role')
//       if (request.nextUrl.pathname.startsWith('/account')) {
//         return NextResponse.redirect(new URL('/', request.url))
//       }
//       return response
//     }
//   }