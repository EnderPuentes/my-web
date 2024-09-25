import { z } from 'zod';

// Common

export const imageSchema = z.object({
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
});

export const fileSchema = z.object({
  _type: z.literal('file'),
  asset: z.object({
    _ref: z.string(),
    _type: z.literal('reference'),
  }),
});

export type FileSchema = z.infer<typeof fileSchema>;

const blockSchema = z.object({
  _key: z.string(),
  _type: z.string(),
  style: z.string(),
  level: z.number().optional(),
  listItem: z.string().optional(),
  children: z
    .object({
      _key: z.string(),
      _type: z.string(),
      marks: z.unknown().array(),
      text: z.string(),
    })
    .array(),
  markDefs: z.unknown().array(),
});

const blockImageSchema = z.object({
  _key: z.string(),
  _type: z.literal('image'),
  asset: z.object({
    _ref: z.string(),
    _type: z.literal('reference'),
  }),
  url: z.string(),
  alt: z.string(),
});

const blockFileSchema = z.object({
  _key: z.string(),
  _type: z.literal('file'),
  asset: z.object({
    _ref: z.string(),
    _type: z.literal('reference'),
  }),
  url: z.string(),
  alt: z.string(),
});

const blockYoutubeSchema = z.object({
  _key: z.string(),
  _type: z.literal('youtube'),
  title: z.string(),
  url: z.string(),
});

const blockCodeSchema = z.object({
  _key: z.string(),
  _type: z.string(),
  code: z.string(),
  filename: z.string(),
  language: z.string(),
});

export const multiContentSchema = z.object({
  _type: z.literal('multi-content'),
  darkMode: z.boolean().optional(),
  nroColumns: z.enum(['1', '2', '3']).optional(),
  content: z
    .union([
      blockSchema,
      blockImageSchema,
      blockFileSchema,
      blockYoutubeSchema,
      blockCodeSchema,
    ])
    .array(),
});

export type MultiContentSchema = z.infer<typeof multiContentSchema>;

// Components

export const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const metaSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.string().array().optional(),
});

export type MetaSchema = z.infer<typeof metaSchema>;

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
  sourceCode: linkSchema,
});

export type FooterSchema = z.infer<typeof footerSchema>;

export type LinkSchema = z.infer<typeof linkSchema>;

// Sections

export const heroSchema = z.object({
  _key: z.string(),
  _type: z.literal('hero'),
  intro: z.string(),
  commands: z.object({
    help: z.string(),
    notFound: z.string(),
  }),
});

export type HeroSchema = z.infer<typeof heroSchema>;

export const aboutSchema = z.object({
  _key: z.string(),
  _type: z.literal('about'),
  title: z.string(),
  content: z.string(),
  image: imageSchema,
});

export type AboutSchema = z.infer<typeof aboutSchema>;

export const featuredArticleItemSchema = z.object({
  _key: z.string(),
  _type: z.literal('reference'),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  updateAt: z.string(),
});

export type FeaturedArticlesItemSchema = z.infer<
  typeof featuredArticleItemSchema
>;

export const featuredArticlesSchema = z.object({
  _key: z.string(),
  _type: z.literal('featuredArticles'),
  title: z.string(),
  items: featuredArticleItemSchema.array(),
});

export type FeaturedArticlesSchema = z.infer<typeof featuredArticlesSchema>;

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

export const skillsCategorySchema = z.object({
  title: z.string().max(120),
  technologies: z.array(
    z.object({
      title: z.string().max(120),
    })
  ),
});

export type SkillsCategorySchema = z.infer<typeof skillsCategorySchema>;

export const skillsSchema = z.object({
  _key: z.string(),
  _type: z.literal('skills'),
  title: z.string().max(120),
  categories: z.array(skillsCategorySchema),
});

export type SkillsSchema = z.infer<typeof skillsSchema>;

const identitySchema = z.object({
  _key: z.string(),
  _type: z.literal('identity'),
  summary: fileSchema,
  image: imageSchema,
  name: z.string(),
  role: z.string(),
  location: z.string(),
  contact: z.object({
    email: linkSchema,
    website: linkSchema,
    linkedin: linkSchema,
    github: linkSchema,
    telegram: linkSchema,
  }),
});

export type IdentitySchema = z.infer<typeof identitySchema>;

const jobSchema = z.object({
  position: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  company: z.object({
    name: z.string(),
    description: z.string(),
    website: z.string().url().optional(),
  }),
  responsabilities: z.array(z.string()),
  technologies: z.string(),
});

export type JobSchema = z.infer<typeof jobSchema>;

export const expertiseSchema = z.object({
  _key: z.string(),
  _type: z.literal('expertise'),
  title: z.string(),
  labels: z.object({
    responsabilities: z.string(),
    technologies: z.string(),
  }),
  jobs: z.array(jobSchema),
});

export type ExpertiseSchema = z.infer<typeof expertiseSchema>;

const degreeSchema = z.object({
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  school: z.object({
    name: z.string(),
    website: z.string().url().optional(),
  }),
});

export type DegreeSchema = z.infer<typeof degreeSchema>;

export const educationSchema = z.object({
  _key: z.string(),
  _type: z.literal('education'),
  title: z.string(),
  degrees: z.array(degreeSchema),
});

export type EducationSchema = z.infer<typeof educationSchema>;

// Pages

export const homeSchema = z.object({
  meta: metaSchema,
  sections: z
    .union([heroSchema, aboutSchema, featuredArticlesSchema, contactSchema])
    .and(z.object({ _key: z.string() }))
    .array(),
});

export const logbookSchema = z.object({
  meta: metaSchema,
  sections: z
    .union([identitySchema, expertiseSchema, skillsSchema, educationSchema])
    .and(z.object({ _key: z.string() }))
    .array(),
});

export const notFoundSchema = z.object({
  meta: metaSchema,
  title: z.string(),
  description: z.string(),
  cta: z.string(),
});

export type NotFoundSchema = z.infer<typeof notFoundSchema>;

// Layout

export const layoutSchema = z.object({
  meta: metaSchema,
  header: headerSchema,
  footer: footerSchema,
});

export type LayoutSchema = z.infer<typeof layoutSchema>;
