import { ArticleHead } from '@/components/sections/article/head';
import { MultiContent } from '@/components/ui/multi-content';
import { formatDateByLang } from '@/lib/utils';
import { LangSchema } from '@/services/sanity/parser';
import { getBlogArticlePage } from '@/services/sanity/request';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    lang: LangSchema;
    slug: string;
  };
};

export default async function BlogArticle({ params }: Props) {
  const data = await getBlogArticlePage(params.lang, params.slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <ArticleHead
        title={data.title}
        publishAt={formatDateByLang(data.updateAt, params.lang)}
      />
      <MultiContent data={data.content} />
    </>
  );
}
