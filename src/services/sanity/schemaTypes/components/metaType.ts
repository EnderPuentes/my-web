import { defineField, defineType } from 'sanity';

export const metaComponentType = defineType({
  name: 'meta',
  title: 'Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Meta Title',
      validation: (Rule) => Rule.max(160).required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Meta Description',
      rows: 3,
      validation: (Rule) => Rule.max(160).required(),
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{ type: 'string' }],
    }),
  ],
});
