import { About } from '@/components/sections/home/about';
import { Contact } from '@/components/sections/home/contact';
import { FeaturedArticles } from '@/components/sections/home/featuredArticles';
import { Hero } from '@/components/sections/home/hero';
import { shareMetadata } from '@/lib/metadata';
import { LangSchema } from '@/services/sanity/parser';
import { getHomePage } from '@/services/sanity/request';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

type Props = {
  params: {
    lang: LangSchema;
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getHomePage(params.lang);

  return {
    ...shareMetadata,
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      ...shareMetadata.openGraph,
      title: data?.meta.title,
      description: data?.meta.description,
      url: new URL(`${BASE_URL}/${params.lang}`),
    },
    metadataBase: new URL(`${BASE_URL}/${params.lang}`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export const revalidate = 3600;

export default async function Home({ params }: Props) {
  const cookieStore = cookies();

  const city = cookieStore.get('city')?.value ?? 'Buenos Aires';
  const flag = cookieStore.get('flag')?.value ?? '🇦🇷';

  const data = await getHomePage(params.lang);

  return (
    <>
      {data?.sections.map((section) => {
        switch (section._type) {
          case 'hero':
            return (
              <Hero
                key={section._key}
                data={{
                  ...section,
                  intro: section.intro
                    .replace('${city}', city)
                    .replace('${flag}', flag),
                }}
                lang={params.lang}
              />
            );
          case 'about': {
            return <About key={section._key} data={section} />;
          }
          case 'featuredArticles': {
            return (
              <FeaturedArticles
                key={section._key}
                data={section}
                lang={params.lang}
              />
            );
          }
          case 'contact': {
            return <Contact key={section._key} data={section} />;
          }
        }
      })}
    </>
  );
}
