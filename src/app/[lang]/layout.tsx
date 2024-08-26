import '@/app/globals.css';
import Contact from '@/components/layout/contact';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ThemeProvider from '@/components/providers/theme';
import { Toaster } from '@/components/ui/toaster';
import { Locale } from '@/types/locales';
import { getLocale } from '@/utils/locales';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const t: Locale = await getLocale(params.lang ?? 'en');

  return (
    <html lang={params.lang ?? 'en'}>
      <body className={`${jetBrainsMono.className} flex flex-col min-h-screen`}>
        <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header t={t.layout.header} />
            <main className="flex-1">
              {children}
              <Contact t={t.layout.contact} />
            </main>
            <Footer t={t.layout.footer} />
            <Toaster />
          </ThemeProvider>
        </ReCaptchaProvider>
        <GoogleAnalytics gaId={process.env.ANALYTICS_ID ?? ''} />
      </body>
    </html>
  );
}
