import '@/app/globals.css';
import { LayoutSchema } from '@/services/sanity/parser';
import { getLayout } from '@/services/sanity/request';
import { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { lang: 'en' | 'es' };
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

export default async function LangLayoutPDF({
  children,
  params,
}: Readonly<Props>) {
  const data: LayoutSchema | null | undefined = await getLayout(
    params.lang ?? 'en'
  );

  return (
    <html lang={params.lang ?? 'en'}>
      <body className={`${jetBrainsMono.className} flex flex-col min-h-screen`}>
        <main className="h-screen">{children}</main>
      </body>
    </html>
  );
}
