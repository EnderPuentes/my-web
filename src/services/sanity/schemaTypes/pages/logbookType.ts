import { defineField, defineType } from 'sanity';

export const logbookPageType = defineType({
  name: 'logbook',
  title: 'Logbook',
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
        title: title || 'Logbook',
        subtitle: '/[lang]/logbook',
      };
    },
  },
});
