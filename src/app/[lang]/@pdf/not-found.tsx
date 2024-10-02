import { NotFoundMessage } from '@/components/sections/notFound/message';
import { shareMetadata } from '@/lib/metadata';
import { LangSchema } from '@/services/sanity/parser';
import { getNotFoundPage } from '@/services/sanity/request';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export const revalidate = 86400;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();

  const lang: LangSchema = (headersList.get('x-lang') as LangSchema) ?? 'en';
  const data = await getNotFoundPage(lang);

  return {
    ...shareMetadata,
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      ...shareMetadata.openGraph,
      title: data?.meta.title,
      description: data?.meta.description,
      url: new URL(`${BASE_URL}/${lang}/404`),
    },
    metadataBase: new URL(`${BASE_URL}/${lang}/404`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export default async function NotFound() {
  const headersList = headers();

  const lang: LangSchema = (headersList.get('x-lang') as LangSchema) ?? 'en';
  const data = await getNotFoundPage(lang);

  return (
    <NotFoundMessage data={data} lang={lang as LangSchema} className="-mt-20" />
  );
}
