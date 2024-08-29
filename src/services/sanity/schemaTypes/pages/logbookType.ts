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
});
