import '@/app/globals.css';
import { CursorGradient } from '@/components/layout/cursor';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/providers/theme';
import { Toaster } from '@/components/ui/toaster';
import { LangSchema, LayoutSchema } from '@/services/sanity/parser';
import { getLayout } from '@/services/sanity/request';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { lang: LangSchema };
};

export const viewport: Viewport = {
  themeColor: '#8A2BE2',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data: LayoutSchema | null | undefined = await getLayout(
    params.lang ?? 'en'
  );

  return {
    applicationName: 'Endev',
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      title: data?.meta.title,
      description: data?.meta.description,
      type: 'website',
      url: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''),
      siteName: 'Endev',
      images: [
        {
          url: '/static/favicon.webp',
        },
      ],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export default async function LangLayoutSite({
  children,
  params,
}: Readonly<Props>) {
  const data: LayoutSchema | null | undefined = await getLayout(
    params.lang ?? 'en'
  );

  return (
    <html lang={params.lang ?? 'en'}>
      <body className={`${jetBrainsMono.className} flex flex-col min-h-screen`}>
        <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header data={data?.header} lang={params.lang ?? 'en'} />
            <main className="flex-1">{children}</main>
            <Footer data={data?.footer} />
            <CursorGradient />
            <Toaster />
          </ThemeProvider>
        </ReCaptchaProvider>
        <GoogleAnalytics gaId={process.env.ANALYTICS_ID ?? ''} />
      </body>
    </html>
  );
}
