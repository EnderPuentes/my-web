import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';
import { FileSchema } from '../parser';
import { getClient } from './client';

const client = getClient(false, true);

type SanityFileSource = FileSchema;

export const urlFor = (source: SanityFileSource) => {
  const parts = parseAssetId(source.asset._ref);

  return buildFileUrl(parts, {
    projectId: client.config().projectId,
    dataset: client.config().dataset,
  });
};
