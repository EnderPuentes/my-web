import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'home',
  title: 'Home',
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineField({
          name: 'hero',
          title: 'Hero',
          type: 'hero',
        }),
        defineField({
          name: 'about',
          title: 'About',
          type: 'about',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'meta.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Home',
        subtitle: '/[lang]/',
      };
    },
  },
});
