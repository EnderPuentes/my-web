import Hero from '@/components/sections/hero';
import { getLogbookPage } from '@/services/sanity/request';
import { Locale } from '@/types/locales';
import { getLocale } from '@/utils/locales';
import { sharedMetadata } from '@/utils/shared-metadata';
import { Metadata } from 'next';

type Props = {
  params: {
    lang: 'en' | 'es';
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang ?? 'en';
  const t: Locale = await getLocale(lang);
  const metadata = t.pages.logbook.metadata;

  return {
    ...sharedMetadata,
    title: `${metadata.title} - ${sharedMetadata.title}`,
    description: metadata.description,
    openGraph: {
      ...sharedMetadata.openGraph,
      title: `${metadata.title} - ${sharedMetadata.title}`,
      description: metadata.description,
    },
    metadataBase: new URL(`${BASE_URL}/${lang}/logbook`),
  };
}

export default async function Logbook({ params }: Props) {
  const data = await getLogbookPage(params.lang);

  return (
    <>
      {data?.sections.map((section) => {
        switch (section._type) {
          case 'hero':
            return <Hero content={section.content} />;
        }
      })}

      {/* 
      <About t={t.pages.home.about} />
      <Contact t={t.pages.home.contact} /> */}
    </>
  );
}
