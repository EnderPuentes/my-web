import { PiPerson } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const aboutSectionType = defineType({
  name: 'about',
  title: 'About',
  type: 'object',
  icon: PiPerson,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(120).required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.max(2000).required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare({ title, content }) {
      return {
        title: title,
        subtitle: content,
      };
    },
  },
});
