import { Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';

export const metadata = {
  title: 'Endev - Admin',
};

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#8A2BE2',
};

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
