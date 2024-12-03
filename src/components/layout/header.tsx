import { Logo } from '@/components/layout/logo';
import { HeaderSchema, LangSchema } from '@/services/sanity/parser';
import Link from 'next/link';
import { PiListBold } from 'react-icons/pi';
import { Menu } from './menu';

type Props = { data: HeaderSchema | null | undefined; lang: LangSchema };

export function Header({ data, lang }: Props) {
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
          {data && data.navbar ? (
            <Menu
              icon={<PiListBold className="text-3xl" />}
              navbar={data.navbar}
              lang={lang}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}
