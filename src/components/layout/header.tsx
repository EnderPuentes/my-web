'use client';

import Logo from '@/components/layout/logo';
import ThemeToggler from '@/components/layout/theme-toggler';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 border-b bg-background dark:bg-background to-gray-950 z-50 shadow-sm h-20 flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <Link href={'/'} className="flex justify-start items-start flex-col">
          <Logo />
        </Link>
        <div className="flex justify-between items-center gap-6">
          <div className="flex justify-between items-center gap-3">
            <Link
              aria-label="Bitácora"
              className="text-base"
              href="/logbook"
              title="Bitácora"
            >
              Bitácora
            </Link>
          </div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
