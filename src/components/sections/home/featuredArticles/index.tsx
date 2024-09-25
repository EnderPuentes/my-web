import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDateByLang } from '@/lib/utils';
import {
  FeaturedArticlesItemSchema,
  FeaturedArticlesSchema,
} from '@/services/sanity/parser';
import Link from 'next/link';

type ItemProps = { data: FeaturedArticlesItemSchema; lang: 'en' | 'es' };

function FeaturedArticlesItem({ data, lang }: ItemProps) {
  return (
    <Link href={`/${lang}/blog/${data.slug}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{data.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-end justify-start w-full gap-3">
          <p className="text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300 w-full">
            {data.summary}
          </p>
          <span className="text-2xs">
            {formatDateByLang(data.updateAt, lang)}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

type Props = { data: FeaturedArticlesSchema; lang: 'en' | 'es' };

export function FeaturedArticles({ data, lang }: Props) {
  return (
    <section className="mb-20">
      <div className="container flex flex-col justify-start items-start gap-5">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <div className="flex flex-col justify-start items-start gap-5">
          {data.items.map((item) => (
            <FeaturedArticlesItem key={item._key} data={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
