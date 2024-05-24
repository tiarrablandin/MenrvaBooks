import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const role = req.cookies.get('role')?.value;

  if (role !== "Admin" && req.nextUrl.pathname.startsWith('/admin')) {
    return Response.redirect(new URL('/login', req.url))
  } else if (!role && ['/userHome', '/userSettings'].includes(req.nextUrl.pathname)) {
    return Response.redirect(new URL('/login', req.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/userHome/:path*',
    '/userSettings/:path*',

    // checks every route, basically
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
