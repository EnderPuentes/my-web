import { defineField, defineType } from 'sanity';

export const notFoundPageType = defineType({
  name: 'notFound',
  title: 'Not Found',
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
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'meta.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Not found',
        subtitle: '/[lang]/not-found',
      };
    },
  },
});
