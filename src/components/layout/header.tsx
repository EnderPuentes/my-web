'use client';

import Logo from '@/components/layout/logo';
import ThemeToggler from '@/components/layout/theme-toggler';
import Link from 'next/link';
import { PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 border-b bg-background z-50 shadow-sm h-20 flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <Link href={'/'} className="flex justify-start items-start flex-col">
          <Logo />
          {/* <p className="text-xs">Ender Puentes</p> */}
        </Link>
        <div className="flex justify-between items-center gap-8">
          <div className="flex justify-between items-center gap-3">
            <Link
              aria-label="Linkedin"
              className="text-2xl"
              target="_blank"
              href="https://www.linkedin.com/in/enderpuents-dev/"
            >
              <PiLinkedinLogo />
            </Link>
            <Link
              aria-label="Github"
              className="text-2xl"
              target="_blank"
              href="https://github.com/EnderPuentes"
            >
              <PiGithubLogo />
            </Link>
          </div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
