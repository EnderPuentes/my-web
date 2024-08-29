import { z } from 'zod';

// Components

export const metaSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.string().array().optional(),
  noIndex: z.boolean().default(false),
  noFollow: z.boolean().default(false),
});

// Sections

export const heroSchema = z.object({
  _key: z.string(),
  _type: z.literal('hero'),
  content: z.string(),
});

export const aboutSchema = z.object({
  _key: z.string(),
  _type: z.literal('about'),
  title: z.string(),
});

// Pages

export const homeSchema = z.object({
  meta: metaSchema,
  sections: z.array(heroSchema),
  // sections: z
  //   .union([heroSchema, aboutSchema])
  //   .and(z.object({ _key: z.string() }))
  //   .array(),
  // sections: z.array(
  //   heroSchema.and(z.object({ _key: z.string() })) // Solo permite `heroSchema`
  // ),
});

export const logbookSchema = z.object({
  meta: metaSchema,
  sections: z.array(heroSchema),
  // sections: z
  //   .union([heroSchema, aboutSchema])
  //   .and(z.object({ _key: z.string() }))
  //   .array(),
  // sections: z.array(
  //   heroSchema.and(z.object({ _key: z.string() })) // Solo permite `heroSchema`
  // ),
});
