import { EducationPdf } from '@/components/sections/logbook/education/pdf';
import { ExpertisePdf } from '@/components/sections/logbook/expertise/pdf';
import { IdentityPdf } from '@/components/sections/logbook/identity/pdf';
import { SkillsPdf } from '@/components/sections/logbook/skills/pdf';
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

export default async function LogbookPDF({ params }: Props) {
  const data = await getLogbookPage(params.lang);

  const identity = data?.sections.find(
    (section) => section._type === 'identity'
  );

  const skills = data?.sections.find((section) => section._type === 'skills');

  const expertise = data?.sections.find(
    (section) => section._type === 'expertise'
  );

  const education = data?.sections.find(
    (section) => section._type === 'education'
  );

  return (
    <>
      {identity && <IdentityPdf data={identity} />}
      <div className="container flex justify-center items-start gap-5">
        <div className="w-[260px]">
          {skills && <SkillsPdf data={skills} />}
          {education && <EducationPdf data={education} />}
        </div>
        <div className="flex-1">
          {expertise && <ExpertisePdf data={expertise} />}
        </div>
      </div>
    </>
  );
}
