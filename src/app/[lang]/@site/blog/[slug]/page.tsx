import { ArticleHead } from '@/components/sections/article/head';
import { MultiContent } from '@/components/ui/multi-content';
import { shareMetadata } from '@/lib/metadata';
import { formatDateByLang } from '@/lib/utils';
import { LangSchema } from '@/services/sanity/parser';
import { getBlogArticlePage } from '@/services/sanity/request';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    lang: LangSchema;
    slug: string;
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlogArticlePage(params.lang, params.slug);

  return {
    ...shareMetadata,
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      ...shareMetadata.openGraph,
      title: data?.meta.title,
      description: data?.meta.description,
      url: new URL(`${BASE_URL}/${params.lang}/blog/${params.slug}`),
    },
    metadataBase: new URL(`${BASE_URL}/${params.lang}/blog/${params.slug}`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export const revalidate = 3600;

export default async function BlogArticle({ params }: Props) {
  const data = await getBlogArticlePage(params.lang, params.slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <ArticleHead
        title={data.title}
        publishAt={formatDateByLang(data.createdAt, params.lang)}
        estimatedReadingTime={data.estimatedReadingTime}
      />
      <MultiContent data={data.content} />
    </>
  );
}
