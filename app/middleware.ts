// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react/server';

// Public routes
const PUBLIC_ROUTES = ['/', '/about', '/contact', '/sign-in', '/sign-up'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  if (PUBLIC_ROUTES.includes(pathname)) {
    // Allow public routes to proceed without authentication
    return NextResponse.next();
  }

  // For all other routes, check authentication
  const token = req.cookies.get('idToken'); // Adjust this based on how you manage tokens

  if (!token) {
    // If not authenticated, redirect to sign-in page
    return NextResponse.redirect('/sign-in');
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: ['/((?!_next|static|favicon.ico|.*\\..*).*)'],
};
