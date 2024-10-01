'use client';

import { LangSchema } from '@/services/sanity/parser';
import { getBlogArticleSlugTranslate } from '@/services/sanity/request';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';

type Props = {
  lang: LangSchema;
};

export function LangToggler({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  async function setLang(newLang: LangSchema) {
    if (pathname.includes('/blog/')) {
      const slugTranslate = await getBlogArticleSlugTranslate(
        lang,
        newLang,
        pathname.replace(`/${lang}/blog/`, '')
      );
      if (slugTranslate) {
        router.push(`/${newLang}/blog/${slugTranslate}`);
      }
    } else {
      router.push(pathname.replace(`/${lang}`, `/${newLang}`));
    }
  }

  return (
    <div className="flex justify-between items-center gap-2">
      <Button
        variant="link"
        onClick={() => setLang('en')}
        className={`p-0 w-full ${
          lang == 'en' ? 'font-black' : 'font-light opacity-80'
        }`}
      >
        EN
      </Button>
      |
      <Button
        variant="link"
        onClick={() => setLang('es')}
        className={`p-0 w-full ${
          lang == 'es' ? 'font-black' : 'font-light opacity-80'
        }`}
      >
        ES
      </Button>
    </div>
  );
}
