import Expertise from '@/components/sections/expertise';
import Skills from '@/components/sections/skills';
import { getLogbookPage } from '@/services/sanity/request';
import { Metadata } from 'next';

type Props = {
  params: {
    lang: 'en' | 'es';
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getLogbookPage(params.lang);

  return {
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      title: data?.meta.title,
      description: data?.meta.description,
    },
    metadataBase: new URL(`${BASE_URL}/${params.lang}/logbook`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export default async function Logbook({ params }: Props) {
  const data = await getLogbookPage(params.lang);

  return (
    <>
      {data?.sections.map((section) => {
        switch (section._type) {
          case 'skills':
            return <Skills key={section._key} data={section} />;
        }
      })}
      <Expertise />
    </>
  );
}
