import { createClient, SanityClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-29',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const getPreviewClient = (token: string) => {
  return client.withConfig({
    token,
    useCdn: false,
    ignoreBrowserTokenWarning: true,
    perspective: 'previewDrafts',
  });
};

export function getClient(
  preview?: boolean,
  cdn: boolean = false
): SanityClient {
  if (preview) return getPreviewClient(process.env.SANITY_API_READ_TOKEN ?? '');

  const useCdn = process.env.NODE_ENV === 'development' ? false : cdn;

  return client.withConfig({ useCdn });
}
