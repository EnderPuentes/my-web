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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang ?? 'en';
  const t: Locale = await getLocale(lang);
  const metadata = t.pages.logbook.metadata;

  return {
    ...sharedMetadata,
    description: t.pages.home.metadata.description,
    openGraph: {
      ...sharedMetadata.openGraph,
      description: metadata.description,
    },
    metadataBase: new URL(`${BASE_URL}/${lang}`),
  };
}

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
