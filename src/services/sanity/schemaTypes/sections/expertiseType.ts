import { PiFolder } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const expertiseSectiontype = defineType({
  name: 'expertise',
  title: 'Expertise',
  type: 'object',
  icon: PiFolder,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'labels',
      title: 'Labels',
      type: 'object',
      fields: [
        defineField({
          name: 'responsabilities',
          title: 'Responsabilities',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'technologies',
          title: 'Technologies',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [
        defineField({
          name: 'job',
          title: 'Job',
          type: 'object',
          fields: [
            defineField({
              name: 'position',
              title: 'Position',
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
              name: 'company',
              title: 'Company',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'website',
                  title: 'Website',
                  type: 'url',
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
            }),
            defineField({
              name: 'responsabilities',
              title: 'Responsabilities',
              type: 'array',
              of: [
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'technologies',
              title: 'Technologies',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              position: 'position',
              company: 'company.name',
            },
            prepare({ position, company }) {
              return {
                title: position,
                subtitle: company,
              };
            },
          },
        }),
      ],
    }),
  ],
});
