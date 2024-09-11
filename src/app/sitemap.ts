import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://enderpuentes.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/es`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/en/logbook`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/es/logbook`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
