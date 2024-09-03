import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#8A2BE2',
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    applicationName: 'Endev',
    openGraph: {
      images: [
        {
          url: '/static/favicons/favicon.webp',
        },
      ],
    },
    icons: {
      icon: '/static/favicons/favicon.ico',
      shortcut: '/static/favicons/favicon.ico',
      apple: '/static/favicons/apple-touch-icon.png',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
