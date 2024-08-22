import countries from '@/lib/countries';
import { NextRequest, NextResponse } from 'next/server';

// run only on homepage
export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const { nextUrl, geo } = req;

  const country = geo?.country || 'AR';
  const city = geo?.city || 'Buenos Aires';
  const flag = countries.find((x) => x.cca2 === country)?.flag ?? '🇦🇷';

  nextUrl.searchParams.set('country', country);
  nextUrl.searchParams.set('city', city);
  nextUrl.searchParams.set('flag', flag);

  return NextResponse.rewrite(nextUrl);
}
