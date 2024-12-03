import { ArticleItem } from '@/components/ui/article';
import { FeaturedArticlesSchema, LangSchema } from '@/services/sanity/parser';

type Props = { data: FeaturedArticlesSchema; lang: LangSchema };

export function FeaturedArticles({ data, lang }: Props) {
  return (
    <section className="mb-10 sm:mb-20">
      <div className="container flex flex-col justify-start items-start gap-5">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <div className="flex flex-col justify-start items-start gap-5">
          {data.items.map((item) => (
            <ArticleItem key={item._key} data={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
