import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
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
