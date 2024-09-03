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
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineField({
          name: 'identity',
          title: 'Identity',
          type: 'identity',
        }),
        defineField({
          name: 'expertise',
          title: 'Expertise',
          type: 'expertise',
        }),
        defineField({
          name: 'skills',
          title: 'Skills',
          type: 'skills',
        }),
        defineField({
          name: 'education',
          title: 'Education',
          type: 'education',
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
        title: title || 'Logbook',
        subtitle: '/[lang]/logbook',
      };
    },
  },
});
