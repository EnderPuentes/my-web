import { ArticleItem } from '@/components/ui/article';
import { shareMetadata } from '@/lib/metadata';
import { LangSchema } from '@/services/sanity/parser';
import { getBlogArticles, getBlogPage } from '@/services/sanity/request';
import { Metadata } from 'next';

type Props = {
  params: {
    lang: LangSchema;
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlogPage(params.lang);

  return {
    ...shareMetadata,
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      ...shareMetadata.openGraph,
      title: data?.meta.title,
      description: data?.meta.description,
      url: new URL(`${BASE_URL}/${params.lang}/logbook`),
    },
    metadataBase: new URL(`${BASE_URL}/${params.lang}/logbook`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export const revalidate = 3600;

export default async function Logbook({ params }: Props) {
  const data = await getBlogPage(params.lang);
  const articles = await getBlogArticles(params.lang);
  return (
    <>
      <section className="py-5 sm:py-10">
        <div className="container">
          <h1 className="mb-5 w-full text-center py-5 sm:py-10">
            <span className="font-semibold text-lg sm:text-2xl leading-[150%] sm:leading-[170%]">
              {`"${data?.title}" `}
            </span>
            <span className="text-xs sm:text-base leading-[150%] sm:leading-[170%] dark:text-gray-300">
              {data?.description}
            </span>
          </h1>
          <span className="border-b w-full block mt-5" />
        </div>
      </section>
      <section className="py-5 sm:py-10">
        <div className="container">
          {articles?.map((article) => (
            <ArticleItem key={article.slug} lang={params.lang} data={article} />
          ))}
        </div>
      </section>
    </>
  );
}
