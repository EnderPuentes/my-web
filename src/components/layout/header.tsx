'use client';

import Logo from '@/components/layout/logo';
import ThemeToggler from '@/components/layout/theme-toggler';
import Link from 'next/link';
import { useState } from 'react';
import { PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';

type Props = {};

export default function Header({}: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="sticky top-0 border-b bg-background z-50 shadow-sm h-20 flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <Link href={'/'} className="flex justify-start items-start flex-col">
          <Logo />
          <p className="text-xs">Ender Puentes</p>
        </Link>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="block md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {openMenu ? '✖️' : '☰'}
        </button>
        <nav className="fixed md:relative h-screen md:h-auto w-screen md:w-auto top-20 md:top-auto left-0 md:left-auto p-10 md:p-0 bg-white dark:bg-black">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <ul className="flex flex-col md:flex-row justify-between items-center gap-5">
              <li>
                <Link href="/">Sobre mí</Link>
              </li>
              <li>
                <Link href="/expertise">Experiencia</Link>
              </li>
              <li>
                <Link href="/studies">Estudios</Link>
              </li>
            </ul>
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
        </nav>
      </div>
    </header>
  );
}
