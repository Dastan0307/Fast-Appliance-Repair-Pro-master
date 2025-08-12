import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from './lib/jwt';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const url = request.nextUrl.clone();
  const path = url.pathname;

  if (!token) return NextResponse.next();

  const payload = verifyJWT(token);
  if (!payload) return NextResponse.next();

  const role = payload.role;

  if (path.startsWith('/admin') && role !== 'admin') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  if (path.startsWith('/tech') && role !== 'technician') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/tech/:path*'],
};
