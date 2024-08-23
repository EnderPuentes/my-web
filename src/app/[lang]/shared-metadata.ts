import { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: 'Ender Puentes',
  applicationName: 'Ender Puentes',
  description: 'Software Developer',
  openGraph: {
    type: 'website',
    url: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''),
    title: 'Ender Puentes',
    description: 'Software Developer',
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
};