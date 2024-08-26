import Logo from '@/components/layout/logo';
import ThemeToggler from '@/components/layout/theme-toggler';
import { Locale } from '@/types/locales';
import Link from 'next/link';
import LangToggler from './lang-toggler';

type Props = {
  t: Locale['layout']['header'];
  lang: string;
};

export default function Header({ t, lang }: Props) {
  return (
    <header className="sticky top-0 border-b bg-background dark:bg-background to-gray-950 z-50 shadow-sm h-20 flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <Link href={'/'} className="flex justify-start items-start flex-col">
          <Logo />
        </Link>
        <div className="flex justify-between items-center gap-6">
          <Link
            aria-label={t.menu.logbook}
            className="text-base"
            href="/logbook"
            title={t.menu.logbook}
          >
            {t.menu.logbook}
          </Link>
          <div className="flex items-center gap-1">
            <LangToggler lang={lang} />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}
