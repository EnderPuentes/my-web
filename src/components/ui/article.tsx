import { formatDateByLang } from '@/lib/utils';
import {
  ArticleItemSchema,
  FeaturedArticleItemSchema,
  LangSchema,
} from '@/services/sanity/parser';
import Link from 'next/link';
import { PiClockBold } from 'react-icons/pi';
import { Card, CardContent, CardHeader, CardTitle } from './card';

type ItemProps = {
  data: ArticleItemSchema | FeaturedArticleItemSchema;
  lang: LangSchema;
};

export function ArticleItem({ data, lang }: ItemProps) {
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
          <div className="flex justify-between w-full mt-4 sm:mt-0">
            <span className="text-xs flex items-center gap-2">
              <PiClockBold className="text-lg" />
              {data.estimatedReadingTime.value}
            </span>
            <span className="text-xs">
              {formatDateByLang(data.createdAt, lang)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
