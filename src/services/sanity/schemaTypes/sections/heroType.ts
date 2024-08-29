import { defineField, defineType } from 'sanity';

export const heroSectionType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Meta Title',
      validation: (Rule) => Rule.max(160),
    }),
  ],
});
