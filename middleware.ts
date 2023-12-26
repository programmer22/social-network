import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export default authMiddleware({
  afterAuth: (auth, req) => {
    // Check if the user is authenticated
    if (auth.userId) {
      // Logic for authenticated users
      // Redirect to a specific route if needed
      if (req.url === '/') {
        return NextResponse.redirect(new URL('/createprofile', req.url));
      }
    } else {
      // Logic for unauthenticated users
      // Redirect to sign-in page if trying to access a protected route
      if (!auth.isPublicRoute) {
        return NextResponse.redirect(new URL('/sign-in', req.url));
      }
    }
  },
  // Define public routes
  publicRoutes: ['/createprofile', '/sign-in', '/sign-up'],
});

