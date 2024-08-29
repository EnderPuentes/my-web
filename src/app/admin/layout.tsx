import { Viewport } from 'next';

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
