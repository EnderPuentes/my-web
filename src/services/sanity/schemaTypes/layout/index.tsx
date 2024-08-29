import { defineField, defineType } from 'sanity';

export const layoutType = defineType({
  name: 'layout',
  title: 'Layout',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Metadata',
    },
  ],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'meta',
      title: 'Metadata Global',
      type: 'meta',
      group: 'meta',
    }),
  ],

  preview: {
    prepare: () => ({
      title: 'Layout',
    }),
  },
});
