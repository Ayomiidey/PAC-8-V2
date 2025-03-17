import { NextResponse } from "next/server";

export async function middleware(request: any) {
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
