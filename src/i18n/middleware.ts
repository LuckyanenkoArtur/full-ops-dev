// TODO: Reread and refactoring
// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./config";

function detectLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");

  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((l) => l.split(";")[0].trim())
    .find((l) => locales.includes(l as any));

  return (preferred as any) ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get("locale")?.value;

  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return NextResponse.next();
  }

  const detected = detectLocale(request);

  const response = NextResponse.next();
  response.cookies.set("locale", detected);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
