import { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: 'Ender Puentes',
  applicationName: 'Ender Puentes',
  description: 'Software Developer',
  openGraph: {
    type: 'website',
    url: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''),
    title: 'Ender Puentes - Software Developer',
    description: '',
    siteName: 'Ender Puentes',
    images: [
      {
        url: new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/favicons/favicon.webp` ??
            '/favicons/favicon.webp'
        ),
      },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''),
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
  themeColor: '#8A2BE2',
};
