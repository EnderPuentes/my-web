'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/services/sanity/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from '@/services/sanity/schemaTypes';
import { structure } from '@/services/sanity/structure';

export default defineConfig({
  basePath: '/admin',
  name: 'endev-website',
  title: 'Endev',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({
      defaultApiVersion:
        process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-29',
    }),
  ],
});
