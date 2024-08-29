import { getClient } from './lib/client';
// Parsers
import { homeSchema, logbookSchema } from './parser';
// Queries
import { getHomeQuery, getLogbookQuery } from './queries';

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
