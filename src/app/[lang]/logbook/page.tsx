import Education from '@/components/sections/education';
import Expertise from '@/components/sections/expertise';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import { Locale } from '@/types/locales';
import { getLocale } from '@/utils/locales';
import { sharedMetadata } from '@/utils/shared-metadata';
import { Metadata } from 'next';

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
  const t: Locale = await getLocale(params.lang ?? 'en');

  return (
    <>
      <Hero text={t.pages.logbook.hero.title} />
      <Skills t={t.pages.logbook.skills} />
      <Expertise t={t.pages.logbook.expertise} />
      <Education t={t.pages.logbook.education} />
    </>
  );
}
