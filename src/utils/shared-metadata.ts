import { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: 'Ender Puentes - Software Developer',
  applicationName: 'Endev',
  description: 'Software Developer',
  openGraph: {
    title: 'Ender Puentes - Software Developer',
    description: '',
    type: 'website',
    url: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''),
    siteName: 'Endev',
    images: [
      {
        url: '/favicons/favicon.webp',
      },
    ],
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''),
};
