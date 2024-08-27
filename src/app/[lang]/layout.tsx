import '@/app/globals.css';
import Contact from '@/components/layout/contact';
import { Locale } from '@/types/locales';
import { getLocale } from '@/utils/locales';
import { Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#8A2BE2',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const t: Locale = await getLocale(params.lang ?? 'en');

  return (
    <>
      {children}
      <Contact t={t.layout.contact} />
    </>
  );
}
