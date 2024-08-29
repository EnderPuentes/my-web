import { PiTerminal } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const heroSectionType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: PiTerminal,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.max(360).required(),
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      return {
        title: 'Hero',
        subtitle: content,
      };
    },
  },
});
