import { Education } from '@/components/sections/logbook/education';
import { Expertise } from '@/components/sections/logbook/expertise';
import { Identity } from '@/components/sections/logbook/identity';
import { Skills } from '@/components/sections/logbook/skills';
import { LangSchema } from '@/services/sanity/parser';
import { getLogbookPage } from '@/services/sanity/request';
import { Metadata } from 'next';

type Props = {
  params: {
    lang: LangSchema;
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

export const revalidate = 3600;

export default async function Logbook({ params }: Props) {
  const data = await getLogbookPage(params.lang);
  return (
    <>
      {data?.sections.map((section) => {
        switch (section._type) {
          case 'identity':
            return <Identity key={section._key} data={section} />;
          case 'expertise':
            return <Expertise key={section._key} data={section} />;
          case 'skills':
            return <Skills key={section._key} data={section} />;
          case 'education':
            return <Education key={section._key} data={section} />;
        }
      })}
    </>
  );
}
