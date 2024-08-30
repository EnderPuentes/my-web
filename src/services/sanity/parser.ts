import { z } from 'zod';

// Common

export const imageSchema = z
  .union([
    z.string(),

    z.object({
      _type: z.literal('image'),
      asset: z.object({
        _ref: z.string(),
        _type: z.literal('reference'),
      }),
      crop: z
        .object({
          _type: z.literal('sanity.imageCrop'),
          top: z.number(),
          bottom: z.number(),
          left: z.number(),
          right: z.number(),
        })
        .optional(),
      hotspot: z
        .object({
          _type: z.literal('sanity.imageHotspot'),
          x: z.number(),
          y: z.number(),
          height: z.number(),
          width: z.number(),
        })
        .optional(),
    }),

    z.object({
      _type: z.literal('reference'),
      _ref: z.string(),
    }),
  ])
  .optional();

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

export type HeroSchema = z.infer<typeof heroSchema>;

export const aboutSchema = z.object({
  _key: z.string(),
  _type: z.literal('about'),
  title: z.string(),
  content: z.string(),
});

export type AboutSchema = z.infer<typeof aboutSchema>;

export const contactSchema = z.object({
  _key: z.string(),
  _type: z.literal('contact'),
  title: z.string().max(120),
  description: z.string().max(360),
  inputs: z.object({
    name: z.object({
      label: z.string(),
      placeholder: z.string(),
      errors: z.object({
        required: z.string(),
      }),
    }),
    email: z.object({
      label: z.string(),
      placeholder: z.string(),
      errors: z.object({
        required: z.string(),
        invalid: z.string(),
      }),
    }),
    message: z.object({
      label: z.string(),
      placeholder: z.string(),
      errors: z.object({
        required: z.string(),
      }),
    }),
  }),
  status: z.object({
    success: z.object({
      title: z.string(),
      description: z.string(),
    }),
    error: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  loading: z.object({
    on: z.string(),
    off: z.string(),
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export const skillsSchema = z.object({
  _key: z.string(),
  _type: z.literal('skills'),
  title: z.string().max(120),
  categories: z.array(
    z.object({
      title: z.string().max(120),
      technologies: z.array(
        z.object({
          title: z.string().max(120),
        })
      ),
    })
  ),
});

export type SkillsSchema = z.infer<typeof skillsSchema>;

// Pages

export const homeSchema = z.object({
  meta: metaSchema,
  sections: z
    .union([heroSchema, aboutSchema, contactSchema])
    .and(z.object({ _key: z.string() }))
    .array(),
});

export const logbookSchema = z.object({
  meta: metaSchema,
  sections: z
    .union([heroSchema, skillsSchema])
    .and(z.object({ _key: z.string() }))
    .array(),
});

// Layout

export const layoutSchema = z.object({
  meta: metaSchema,
  header: headerSchema,
  footer: footerSchema,
});

export type LayoutSchema = z.infer<typeof layoutSchema>;