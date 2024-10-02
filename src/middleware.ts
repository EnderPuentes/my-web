import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

export async function middleware(req: NextRequest) {
  const { nextUrl, geo } = req;

  const country = geo?.country || 'AR';
  const city = geo?.city || 'Buenos Aires';

  const { pathname } = nextUrl;
  const res = NextResponse.next();

  res.headers.set('x-city', city);
  res.headers.set('x-country', country);
  res.headers.set('x-lang', pathname.split('/')[1]);

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return res;
  }

  nextUrl.pathname = `/${defaultLocale}${pathname}`;
  const redirectRes = NextResponse.redirect(nextUrl);

  redirectRes.headers.set('x-city', city);
  redirectRes.headers.set('x-country', country);
  redirectRes.headers.set('x-lang', defaultLocale);

  return redirectRes;
}

export const config = {
  matcher: ['/((?!_next|admin|static|sitemap.xml|robots.txt|favicon.ico).*)'],
};
