import { HeaderSchema, LangSchema } from '@/services/sanity/parser';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { LangToggler } from './lang-toggler';
import { Logo } from './logo';
import { ThemeToggler } from './theme-toggler';

interface MenuProps {
  icon: ReactNode;
  navbar: HeaderSchema['navbar'];
  lang: LangSchema;
}

export function Menu({ icon, navbar, lang }: MenuProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger> {icon}</SheetTrigger>
        <SheetContent className="p-0 flex flex-col">
          <div className="p-5 border-b ">
            <Logo />
          </div>
          <div className="flex flex-col justify-between items-start flex-1">
            <nav className="flex flex-col justify-between items-start gap-5 w-full py-10 px-5">
              {navbar?.items.map((it, i) => (
                <Link
                  key={i}
                  aria-label={it.title}
                  className="block w-full pb-5 text-lg hover:underline"
                  href={`/${lang}${it.path}`}
                  title={it.title}
                >
                  {it.title}
                </Link>
              ))}
            </nav>
            <div className="flex justify-between items-center w-full p-5 border-t">
              <LangToggler lang={lang} />
              <ThemeToggler />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
