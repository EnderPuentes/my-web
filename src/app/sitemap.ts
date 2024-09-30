import { getBlogArticlesForSitemap } from '@/services/sanity/request';
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://enderpuentes.com';

type Item = {
  url: string;
  lastModified: string;
  priority: number;
};

const items: Item[] = [
  {
    url: `${BASE_URL}/en`,
    lastModified: new Date().toISOString(),
    priority: 1,
  },
  {
    url: `${BASE_URL}/es`,
    lastModified: new Date().toISOString(),
    priority: 1,
  },
  {
    url: `${BASE_URL}/en/logbook`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/es/logbook`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogArticles = await getBlogArticlesForSitemap();

  blogArticles?.forEach((article) => {
    const url = `${BASE_URL}/${article.lang}/${article.slug}`;
    const urlExist = items.find((item) => item.url === url);

    if (urlExist) return;

    items.push({
      url,
      lastModified: new Date().toISOString(),
      priority: 0.7,
    });
  });

  return items;
}
