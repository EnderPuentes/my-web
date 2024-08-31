import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import { getHomePage } from '@/services/sanity/request';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

type Props = {
  params: {
    lang: 'en' | 'es';
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getHomePage(params.lang);

  return {
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      title: data?.meta.title,
      description: data?.meta.description,
    },
    metadataBase: new URL(`${BASE_URL}/${params.lang}`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

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
                  content: section.content
                    .replace('${city}', city)
                    .replace('${flag}', flag),
                }}
                lang={params.lang}
              />
            );
          case 'about': {
            return <About key={section._key} data={section} />;
          }
          case 'contact': {
            return <Contact key={section._key} data={section} />;
          }
        }
      })}
    </>
  );
}
