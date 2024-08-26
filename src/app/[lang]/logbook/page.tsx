import Education from '@/components/sections/education';
import Expertise from '@/components/sections/expertise';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import { Locale } from '@/types/locales';
import { getLocale } from '@/utils/locales';
import { sharedMetadata } from '@/utils/shared-metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...sharedMetadata,
  title: `Mi bitácora - ${sharedMetadata.title}`,
  metadataBase: new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/logbook` ?? '/logbook'
  ),
};

type Props = {
  params: {
    lang: string;
  };
};

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
