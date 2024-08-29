import { PiMailbox } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const contactSectionType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  icon: PiMailbox,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(120).required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(360).required(),
    }),
    defineField({
      name: 'inputs',
      title: 'Inputs',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'errors',
              title: 'Errors',
              type: 'object',
              fields: [
                defineField({
                  name: 'required',
                  title: 'Required',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'errors',
              title: 'Errors',
              type: 'object',
              fields: [
                defineField({
                  name: 'required',
                  title: 'Required',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'invalid',
                  title: 'Invalid',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'message',
          title: 'Message',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'errors',
              title: 'Errors',
              type: 'object',
              fields: [
                defineField({
                  name: 'required',
                  title: 'Required',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'object',
      fields: [
        defineField({
          name: 'success',
          title: 'Success',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'error',
          title: 'Error',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'loading',
      title: 'Loading',
      type: 'object',
      fields: [
        defineField({
          name: 'on',
          title: 'On',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'off',
          title: 'Off',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: title,
        subtitle: description,
      };
    },
  },
});
