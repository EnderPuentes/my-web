import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDateByLang } from '@/lib/utils';
import {
  FeaturedArticlesItemSchema,
  FeaturedArticlesSchema,
  LangSchema,
} from '@/services/sanity/parser';
import Link from 'next/link';
import { PiClockBold } from 'react-icons/pi';

type ItemProps = { data: FeaturedArticlesItemSchema; lang: LangSchema };

function FeaturedArticlesItem({ data, lang }: ItemProps) {
  return (
    <Link href={`/${lang}/blog/${data.slug}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{data.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-end justify-start w-full gap-2 sm:gap-5">
          <p className="text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300 w-full">
            {data.summary}
          </p>
          <div className="flex justify-between w-full">
            <span className="text-2xs flex items-center gap-2">
              <PiClockBold className="text-lg" />
              {data.estimatedReadingTime.value}
            </span>
            <span className="text-2xs">
              {formatDateByLang(data.createdAt, lang)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

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
            <FeaturedArticlesItem key={item._key} data={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
