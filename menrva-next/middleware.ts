import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const role = req.cookies.get('role')?.value;

  if (role !== "Admin" && req.nextUrl.pathname.startsWith('/admin')) {
    return Response.redirect(new URL('/login', req.url));
  } else if (!role && req.nextUrl.pathname.startsWith('/user')) {
    return Response.redirect(new URL('/login', req.url));
  } else if (role && req.nextUrl.pathname.startsWith('/login') && req.nextUrl.pathname.startsWith('/register')) {
    return Response.redirect(new URL('/userHome', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/userHome/:path*',
    '/userSettings/:path*',
    '/login',
    '/register',

    // checks every route, basically
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
