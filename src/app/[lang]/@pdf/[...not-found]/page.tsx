import { NotFoundMessage } from '@/components/sections/notFound/message';
import { shareMetadata } from '@/lib/metadata';
import { LangSchema } from '@/services/sanity/parser';
import { getNotFoundPage } from '@/services/sanity/request';
import { Metadata } from 'next';

type Props = {
  params: {
    lang: LangSchema;
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getNotFoundPage(params.lang);

  return {
    ...shareMetadata,
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      ...shareMetadata.openGraph,
      title: data?.meta.title,
      description: data?.meta.description,
      url: new URL(`${BASE_URL}/${params.lang}/404`),
    },
    metadataBase: new URL(`${BASE_URL}/${params.lang}/404`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export default async function NotFound({ params }: Props) {
  const data = await getNotFoundPage(params.lang);
  return <NotFoundMessage data={data} lang={params.lang} />;
}
