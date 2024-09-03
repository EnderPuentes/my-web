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
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
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
      title: 'Metadata',
      type: 'meta',
      group: 'meta',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'header',
      group: 'header',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      group: 'footer',
    }),
  ],

  preview: {
    prepare: () => ({
      title: 'Layout',
    }),
  },
});
