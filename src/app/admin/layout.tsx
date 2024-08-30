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
          url: '/favicons/favicon.webp',
        },
      ],
    },
    icons: {
      icon: '/favicons/favicon.ico',
      shortcut: '/favicons/favicon.ico',
      apple: '/favicons/apple-touch-icon.png',
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
