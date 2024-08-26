import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import { Locale } from '@/types/locales';
import { getLocale } from '@/utils/locales';
import { sharedMetadata } from '@/utils/shared-metadata';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

type Props = {
  params: {
    lang: string;
  };
};

export const metadata: Metadata = {
  ...sharedMetadata,
  title: `${sharedMetadata.title}`,
};

export default async function Home({ params }: Props) {
  const cookieStore = cookies();

  const city = cookieStore.get('city')?.value ?? 'Buenos Aires';
  const flag = cookieStore.get('flag')?.value ?? '🇦🇷';

  const t: Locale = await getLocale(params.lang ?? 'en');

  return (
    <>
      <Hero
        text={t.pages.home.hero.title
          .replace('${city}', city)
          .replace('${flag}', flag)}
      />
      <About t={t.pages.home.about} />
    </>
  );
}
