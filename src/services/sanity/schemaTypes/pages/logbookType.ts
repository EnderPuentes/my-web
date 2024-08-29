import { defineField, defineType } from 'sanity';

export const logbookPageType = defineType({
  name: 'logbook',
  title: 'Logbook',
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
        title: title || 'Logbook',
        subtitle: '/[lang]/logbook',
      };
    },
  },
});
