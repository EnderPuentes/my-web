import { PiIdentificationBadge } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const identitySectionType = defineType({
  name: 'identity',
  title: 'Identity',
  type: 'document',
  icon: PiIdentificationBadge,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
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
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'website',
          title: 'Website',
          type: 'link',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'link',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'linkedin',
          title: 'Linkedin',
          type: 'link',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'github',
          title: 'Github',
          type: 'link',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'telegram',
          title: 'Telegram',
          type: 'link',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
});
