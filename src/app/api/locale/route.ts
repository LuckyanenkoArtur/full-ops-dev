import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { locale } = await req.json();

  const response = NextResponse.json({ ok: true });

  response.cookies.set("locale", locale, {
    path: "/",
    httpOnly: false,
  });

  return response;
}
