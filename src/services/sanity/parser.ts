import { z } from 'zod';

// Components

export const metaSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.string().array().optional(),
});

export const headerSchema = z.object({
  navbar: z.object({
    items: z
      .object({
        title: z.string(),
        path: z.string(),
      })
      .array(),
  }),
});

export type HeaderSchema = z.infer<typeof headerSchema>;

export const footerSchema = z.object({
  socialMedia: z.object({
    title: z.string(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    telegram: z.string().optional(),
    x: z.string().optional(),
  }),
  copyright: z.string(),
});

export type FooterSchema = z.infer<typeof footerSchema>;

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

// Layout

export const layoutSchema = z.object({
  meta: metaSchema,
  header: headerSchema,
  footer: footerSchema,
});

export type LayoutSchema = z.infer<typeof layoutSchema>;
