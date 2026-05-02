import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // Protect dashboard routes (except login) and data API routes
  const isDashboardRoute = path.startsWith('/dashboard') && !path.startsWith('/dashboard/login');
  const isDataApiRoute = path.startsWith('/api/data');

  if (isDashboardRoute || isDataApiRoute) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      if (isDataApiRoute) {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/dashboard/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      if (isDataApiRoute) {
        return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/dashboard/login', request.url));
    }
  }

  // If user is logged in, prevent accessing login page
  if (path.startsWith('/dashboard/login')) {
    const token = request.cookies.get('admin_token')?.value;
    if (token) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch (error) {
        // Token is invalid, let them see login
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/data/:path*'],
};
