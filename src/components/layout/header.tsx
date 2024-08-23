'use client';

import Logo from '@/components/layout/logo';
import ThemeToggler from '@/components/layout/theme-toggler';
import Link from 'next/link';
import { PiBook, PiGithubLogoBold, PiLinkedinLogoBold } from 'react-icons/pi';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 border-b bg-background dark:bg-gradient-to-t from-background to-gray-950 z-50 shadow-sm h-20 flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <Link href={'/'} className="flex justify-start items-start flex-col">
          <Logo />
        </Link>
        <div className="flex justify-between items-center gap-6">
          <div className="flex justify-between items-center gap-3">
            <Link
              aria-label="Bitácora"
              className="text-2xl"
              target="_blank"
              href="/logbook"
              title="Bitácora"
            >
              <PiBook />
            </Link>
            <Link
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="text-2xl"
              target="_blank"
              href="https://www.linkedin.com/in/enderpuentes/"
              title="Linkedin"
            >
              <PiLinkedinLogoBold />
            </Link>
            <Link
              rel="noopener noreferrer"
              aria-label="Github"
              className="text-2xl"
              target="_blank"
              href="https://github.com/EnderPuentes"
              title="Github"
            >
              <PiGithubLogoBold />
            </Link>
          </div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
