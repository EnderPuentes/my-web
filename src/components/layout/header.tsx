import Logo from '@/components/layout/logo';
import ThemeToggler from '@/components/layout/theme-toggler';
import { HeaderSchema } from '@/services/sanity/parser';
import Link from 'next/link';
import LangToggler from './lang-toggler';

type Props = { data: HeaderSchema | null | undefined; lang: 'en' | 'es' };

export default function Header({ data, lang }: Props) {
  return (
    <header className="sticky top-0 bg-transparent backdrop-blur-lg z-50 shadow-sm h-20 flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <Link
          href={`/${lang}/`}
          className="flex justify-start items-start flex-col"
        >
          <Logo />
        </Link>
        <div className="flex justify-between items-center gap-6">
          {data?.navbar.items.map((it, i) => (
            <Link
              key={i}
              aria-label={it.title}
              className="text-base"
              href={`/${lang}${it.path}`}
              title={it.title}
            >
              {it.title}
            </Link>
          ))}
          <div className="flex items-center gap-1">
            <LangToggler lang={lang} />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}
