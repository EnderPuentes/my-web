import { PiTerminal } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const heroSectionType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: PiTerminal,
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      validation: (Rule) => Rule.max(360).required(),
    }),
    defineField({
      name: 'commands',
      title: 'commands',
      type: 'object',
      fields: [
        defineField({
          name: 'help',
          title: 'Help',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'notFound',
          title: 'Not Found',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      intro: 'intro',
    },
    prepare({ intro }) {
      return {
        title: 'Hero',
        subtitle: intro,
      };
    },
  },
});
