import { NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';

// Detect common Clerk env vars — adjust names if your project uses different keys
const hasClerkEnv = Boolean(
  process.env.CLERK_SECRET_KEY ||
  process.env.CLERK_API_KEY ||
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_CLERK_FRONTEND_API
);

// Use Clerk middleware when configured; otherwise use a noop to avoid crashes on Vercel
export default hasClerkEnv ? clerkMiddleware() : function middleware() {
  return NextResponse.next();
};

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
