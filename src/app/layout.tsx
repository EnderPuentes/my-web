import '@/app/globals.css';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ThemeProvider from '@/components/providers/theme';
import { Toaster } from '@/components/ui/toaster';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${jetBrainsMono.className} flex flex-col min-h-screen dark:bg-gradient-to-t from-background via-gray-950 to-background`}
      >
        <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </ReCaptchaProvider>
        <GoogleAnalytics gaId={process.env.ANALYTICS_ID ?? ''} />
      </body>
    </html>
  );
}
