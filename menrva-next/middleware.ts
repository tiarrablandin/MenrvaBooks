import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const role = req.cookies.get('role')?.value;
  const tag = req.cookies.get('tag')?.value;
  const pathname = req.nextUrl.pathname;

  if (role !== "Admin" && pathname.startsWith('/admin')) {
    return Response.redirect(new URL('/login', req.url));
  } else if (!role && pathname.startsWith('/user')) {
    return Response.redirect(new URL('/login', req.url));
  } else if (role && (pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register'))) {
    return Response.redirect(new URL('/userHome/' + tag, req.url));
  }

  const headers = new Headers(req.headers);
  headers.set('x-url', req.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: headers
    }
  });
}

export const config = {
  matcher: [
    // '/admin/:path*',
    // '/userHome/:path*',
    // '/userSettings/:path*',
    // '/login',
    // '/register',

    // checks every route, basically
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
