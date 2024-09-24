import { PiFileText } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const featuredArticlesSectionType = defineType({
  name: 'featuredArticles',
  title: 'Featured Articles',
  type: 'object',
  icon: PiFileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(120).required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'article' } }], // Referencia a tipo 'article'
      options: {
        layout: 'list',
      },
      validation: (Rule) =>
        Rule.max(5).error('You can select up to 5 articles only.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      const total = items ? items.length : 0;
      return {
        title,
        subtitle:
          total > 0 ? `Featured Articles: ${total}` : 'No Featured Articles',
      };
    },
  },
});
