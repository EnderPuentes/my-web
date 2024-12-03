import { z } from 'zod';
import { getClient } from './lib/client';
// Parsers
import {
  articlesSchema,
  blogArticleSchema,
  blogArticleUrlSchema,
  blogSchema,
  homeSchema,
  LangSchema,
  layoutSchema,
  logbookSchema,
  notFoundSchema,
} from './parser';
// Queries
import {
  getBlogArticleQuery,
  getBlogArticlesForSitemapQuery,
  getBlogArticlesQuery,
  getBlogArticleTranslateSlugsQuery,
  getBlogQuery,
  getHomeQuery,
  getLayoutQuery,
  getLogbookQuery,
  getNotFoundQuery,
} from './queries';

export async function getLayout(lang: LangSchema, preview?: boolean) {
  const client = getClient(preview, true);
  return await layoutSchema
    .nullish()
    .promise()
    .parse(client.fetch(getLayoutQuery, { lang }));
}

export async function getHomePage(lang: LangSchema, preview?: boolean) {
  const client = getClient(preview, true);
  return await homeSchema
    .nullish()
    .promise()
    .parse(client.fetch(getHomeQuery, { lang }));
}

export async function getLogbookPage(lang: LangSchema, preview?: boolean) {
  const client = getClient(preview, true);
  return await logbookSchema
    .nullish()
    .promise()
    .parse(client.fetch(getLogbookQuery, { lang }));
}

export async function getBlogPage(lang: LangSchema, preview?: boolean) {
  const client = getClient(preview, true);
  return await blogSchema
    .nullish()
    .promise()
    .parse(client.fetch(getBlogQuery, { lang }));
}

export async function getBlogArticles(lang: LangSchema, preview?: boolean) {
  const client = getClient(preview, true);
  return await articlesSchema
    .nullish()
    .promise()
    .parse(client.fetch(getBlogArticlesQuery, { lang }));
}

export async function getBlogArticlePage(
  lang: LangSchema,
  slug: string,
  preview?: boolean
) {
  const client = getClient(preview, true);
  return await blogArticleSchema
    .nullish()
    .promise()
    .parse(client.fetch(getBlogArticleQuery, { lang, slug }));
}

export async function getBlogArticlesForSitemap(preview?: boolean) {
  const client = getClient(preview, true);
  return await blogArticleUrlSchema
    .array()
    .nullish()
    .promise()
    .parse(client.fetch(getBlogArticlesForSitemapQuery));
}

export async function getBlogArticleSlugTranslate(
  lang: LangSchema,
  newLang: LangSchema,
  slug: string,
  preview?: boolean
) {
  const client = getClient(preview, true);

  const response = await z
    .object({
      translations: blogArticleUrlSchema.array(),
    })
    .nullish()
    .promise()
    .parse(client.fetch(getBlogArticleTranslateSlugsQuery, { lang, slug }));

  return response?.translations?.find(
    (translation) => translation.lang == newLang
  )?.slug;
}

export async function getNotFoundPage(lang: LangSchema, preview?: boolean) {
  const client = getClient(preview, true);
  return await notFoundSchema
    .nullish()
    .promise()
    .parse(client.fetch(getNotFoundQuery, { lang }));
}
