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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang ?? 'en';
  const t: Locale = await getLocale(lang);

  return {
    ...sharedMetadata,
    title: `${t.pages.logbook.metadata.title} - ${sharedMetadata.title}`,
    description: t.pages.logbook.metadata.description,
    metadataBase: new URL(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/logbook` ??
        `/${lang}/logbook`
    ),
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
