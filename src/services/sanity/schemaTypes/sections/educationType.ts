import { PiBook } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const educationSectiontype = defineType({
  name: 'education',
  title: 'Education',
  type: 'object',
  icon: PiBook,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'degrees',
      title: 'Degrees',
      type: 'array',
      of: [
        defineField({
          name: 'degree',
          title: 'Degree',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'startDate',
              title: 'Start Date',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'school',
              title: 'School',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'website',
                  title: 'Website',
                  type: 'url',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              school: 'school.name',
            },
            prepare({ title, school }) {
              return {
                title: title,
                subtitle: school,
              };
            },
          },
        }),
      ],
    }),
  ],
});
