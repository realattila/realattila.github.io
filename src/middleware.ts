import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { APP_KEYS, APP_KEYS_VALUES } from "./utils/keys";

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|favicon.png|sw.js|robots.txt).*)"],
};

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const validThemes = Object.values(APP_KEYS_VALUES.COOKIES.THEME);
  const reqTheme = req.cookies.get(APP_KEYS.COOKIES.THEME)?.value;
  if (!reqTheme || !validThemes.includes((reqTheme || "") as any)) {
    response.cookies.set(APP_KEYS.COOKIES.THEME, APP_KEYS_VALUES.COOKIES.THEME.LIGHT);
  }

  return response;
}
