import { NextResponse } from 'next/server';

export function middleware(req) {
  const whereIamGoing = req.nextUrl.clone().pathname;
  const isCookieExisted = req.cookies.has('token');
  if (
    isCookieExisted &&
    (whereIamGoing === '/profile' || whereIamGoing === '/orders')
  ) {
    return NextResponse.next();
  } else if (
    !isCookieExisted &&
    (whereIamGoing === '/profile' || whereIamGoing === '/orders')
  ) {
    const signInURL = new URL('/sign-in', req.url);
    return NextResponse.redirect(signInURL);
  } else if (
    !isCookieExisted &&
    (whereIamGoing === '/' || whereIamGoing === '/sign-in')
  ) {
    return NextResponse.next();
  } else {
    const menuURL = new URL('/menu', req.url);
    return NextResponse.redirect(menuURL);
  }
}

export const config = {
  matcher: ['/profile', '/orders', '/', '/sign-in'],
};
