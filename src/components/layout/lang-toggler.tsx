'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';

type Props = {
  lang: string;
};

export default function LangToggler({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function toggleLang() {
    const newLang = lang === 'en' ? 'es' : 'en';
    router.replace(pathname.replace(`/${lang}`, `/${newLang}`));
  }

  return (
    <div className="flex justify-between items-center gap-2">
      <Button
        variant="link"
        onClick={toggleLang}
        className={`p-0 w-full ${
          lang == 'en' ? 'font-black' : 'font-light opacity-80'
        }`}
      >
        EN
      </Button>
      |
      <Button
        variant="link"
        onClick={toggleLang}
        className={`p-0 w-full ${
          lang == 'es' ? 'font-black' : 'font-light opacity-80'
        }`}
      >
        ES
      </Button>
    </div>
  );
}
