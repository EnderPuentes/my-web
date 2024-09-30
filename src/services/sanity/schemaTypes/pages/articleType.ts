import { defineField, defineType } from 'sanity';

export const articlePageType = defineType({
  name: 'article',
  title: 'article',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'meta',
      title: 'Metadata',
      type: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 255,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'multiContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estimatedReadingTime',
      title: 'Estimated Reading Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'meta.title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title: title || 'Article',
        subtitle: `/[lang]/blog/${slug.current}`,
      };
    },
  },
});
