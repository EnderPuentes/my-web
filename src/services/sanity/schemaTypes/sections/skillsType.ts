import { PiComputerTower, PiToolbox } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const skillsSectionType = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'object',
  icon: PiToolbox,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(120).required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineField({
          name: 'category',
          title: 'Category',
          type: 'object',
          icon: PiToolbox,
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.max(120).required(),
            }),
            defineField({
              name: 'technologies',
              title: 'Tecnhologies',
              type: 'array',
              of: [
                defineField({
                  name: 'tecnology',
                  title: 'Tecnology',
                  type: 'object',
                  icon: PiComputerTower,
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (Rule) => Rule.max(120).required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      categories: 'categories',
    },
    prepare({ title, categories }) {
      return {
        title: title,
        subtitle: categories
          .map((category: { title: string }) => category.title)
          .join(', '),
      };
    },
  },
});
