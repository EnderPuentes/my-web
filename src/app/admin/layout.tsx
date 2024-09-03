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
          url: '/static/favicon.webp',
        },
      ],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
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
