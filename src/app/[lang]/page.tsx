import Hero from '@/components/sections/hero';
import { getHomePage } from '@/services/sanity/request';
import { cookies } from 'next/headers';

type Props = {
  params: {
    lang: 'en' | 'es';
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
                content={section.content
                  .replace('${city}', city)
                  .replace('${flag}', flag)}
              />
            );
        }
      })}

      {/* 
      <About t={t.pages.home.about} />
      <Contact t={t.pages.home.contact} /> */}
    </>
  );
}
