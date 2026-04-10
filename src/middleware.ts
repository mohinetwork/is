import { authMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const protectedPrefixes = ["/anmixai/profile", "/anmixai/settings", "/anmixai/billing"];
const isProtectedRoute = (req: NextRequest) =>
  protectedPrefixes.some((route) => req.nextUrl.pathname.startsWith(route));

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const clerkSecretKey = process.env.CLERK_SECRET_KEY ?? "";

const isClerkConfigured =
  clerkPubKey.length > 0 &&
  !clerkPubKey.includes("YOUR_KEY") &&
  clerkSecretKey.length > 0 &&
  !clerkSecretKey.includes("YOUR_KEY");

export default isClerkConfigured
  ? authMiddleware({
      publicRoutes: ["/(.*)"],
      afterAuth(auth, req) {
        if (isProtectedRoute(req) && !auth.userId) {
          const signInUrl = new URL("/anmixai/sign-in", req.url);
          return NextResponse.redirect(signInUrl);
        }
      },
    })
  : (_req: NextRequest) => NextResponse.next();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
