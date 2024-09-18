import { NotFoundMessage } from '@/components/sections/notFound/message';
import { getNotFoundPage } from '@/services/sanity/request';
import { Metadata } from 'next';

type Props = {
  params: {
    lang: 'en' | 'es';
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getNotFoundPage(params.lang);

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

export const revalidate = 86400;

export default async function NotFound({ params }: Props) {
  const data = await getNotFoundPage(params.lang);
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center bg-galaxy-gradient-light dark:bg-galaxy-gradient-dark">
      <NotFoundMessage data={data} />
    </section>
  );
}
