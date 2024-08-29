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
