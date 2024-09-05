import { getClient } from './lib/client';
// Parsers
import {
  homeSchema,
  layoutSchema,
  logbookSchema,
  notFoundSchema,
} from './parser';
// Queries
import {
  getHomeQuery,
  getLayoutQuery,
  getLogbookQuery,
  getNotFoundQuery,
} from './queries';

export async function getLayout(lang: 'en' | 'es', preview?: boolean) {
  const client = getClient(preview, true);
  return await layoutSchema
    .nullish()
    .promise()
    .parse(client.fetch(getLayoutQuery, { lang }));
}

export async function getHomePage(lang: 'en' | 'es', preview?: boolean) {
  const client = getClient(preview, true);
  return await homeSchema
    .nullish()
    .promise()
    .parse(client.fetch(getHomeQuery, { lang }));
}

export async function getLogbookPage(lang: 'en' | 'es', preview?: boolean) {
  const client = getClient(preview, true);
  return await logbookSchema
    .nullish()
    .promise()
    .parse(client.fetch(getLogbookQuery, { lang }));
}

export async function getNotFoundPage(lang: 'en' | 'es', preview?: boolean) {
  const client = getClient(preview, true);
  return await notFoundSchema
    .nullish()
    .promise()
    .parse(client.fetch(getNotFoundQuery, { lang }));
}
