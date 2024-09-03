import { PiIdentificationBadge } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const identitySectionType = defineType({
  name: 'identity',
  title: 'Identity',
  type: 'document',
  icon: PiIdentificationBadge,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'actions',
      title: 'Actions',
      type: 'object',
      fields: [
        defineField({
          name: 'share',
          title: 'Share',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
});
