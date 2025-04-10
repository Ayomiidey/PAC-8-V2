import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request: any) {
  const session = await auth();

  const protectedPaths = [
    "/shipping-address",
    "/payment-method",
    "/place-order",
    "/profile",
    /\/user\/(.*)/,
    /\/order\/(.*)/, // regex: matches  /order/anything
    /\/admin\/(.*)/,
  ];

  const isProtectedRoute = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );
  // If the route is protected and there's no session, redirect to sign-in
  if (isProtectedRoute && !session) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(signInUrl);
  }
  // Check if the sessionCartId cookie exists
  const sessionCartId = request.cookies.get("sessionCartId")?.value;

  if (!sessionCartId) {
    const newSessionCartId = crypto.randomUUID();

    // Create a response to set the cookie
    const response = NextResponse.next();
    response.cookies.set({
      name: "sessionCartId",
      value: newSessionCartId,
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
      httpOnly: true, // makes cookie inaccessible to client-side JS
    });

    return response; // Return response with the new cookie
  }

  // If cookie exists, proceed without modification
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Apply to all routes except API, static files, etc.
};
