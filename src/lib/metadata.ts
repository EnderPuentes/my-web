import { Metadata } from 'next';

export const shareMetadata: Metadata = {
  applicationName: 'Endev',
  openGraph: {
    type: 'website',
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
};
