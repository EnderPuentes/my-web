import { getBlogArticlesForSitemap } from '@/services/sanity/request';
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://enderpuentes.com';

type Page = {
  url: string;
  lastModified: string;
  priority: number;
};

const lang = ['en', 'es'];
const pages = ['', 'logbook', 'blog'];

function getStaticPages(): Page[] {
  const items: Page[] = [];

  pages.forEach((page) => {
    lang.forEach((lang) => {
      const url = `${BASE_URL}/${lang}/${page}`;
      const urlExist = items.find((item) => item.url === url);

      if (urlExist) return;

      items.push({
        url,
        lastModified: new Date().toISOString(),
        priority: page === '' ? 1 : 0.9,
      });
    });
  });

  return items;
}

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = getStaticPages();

  const blogArticles = await getBlogArticlesForSitemap();

  blogArticles?.forEach((article) => {
    const url = `${BASE_URL}/${article.lang}/${article.slug}`;
    const urlExist = pages.find((item) => item.url === url);

    if (urlExist) return;

    pages.push({
      url,
      lastModified: new Date().toISOString(),
      priority: 0.7,
    });
  });

  return pages;
}
