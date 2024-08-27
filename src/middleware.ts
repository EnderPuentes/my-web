loimport countries from '@/utils/countries';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

export async function middleware(req: NextRequest) {
  const { nextUrl, geo } = req;

  const country = geo?.country || 'AR';
  const city = geo?.city || 'Buenos Aires';
  const flag = countries.find((x) => x.cca2 === country)?.flag ?? '🇦🇷';

  const res = NextResponse.next();
  res.cookies.set('city', city, { httpOnly: true, path: '/', secure: true });
  res.cookies.set('flag', flag, { httpOnly: true, path: '/', secure: true });

  const { pathname } = nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return res;
  }

  nextUrl.pathname = `/${defaultLocale}${pathname}`;
  const redirectRes = NextResponse.redirect(nextUrl);

  redirectRes.cookies.set('city', city, {
    httpOnly: true,
    path: '/',
    secure: true,
  });
  redirectRes.cookies.set('flag', flag, {
    httpOnly: true,
    path: '/',
    secure: true,
  });

  return redirectRes;
}


export const config = {
  matcher: ['/((?!_next|api|images|favicons).*)'],
};