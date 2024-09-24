import { FeaturedArticlesSchema } from '@/services/sanity/parser';
import Link from 'next/link';

type Props = { data: FeaturedArticlesSchema; lang: 'en' | 'es' };

export async function FeaturedArticles({ data, lang }: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <div className="">
          {data.items.map((item) => (
            <Link key={item._key} href={`/${lang}/blog/${item.slug}`}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
