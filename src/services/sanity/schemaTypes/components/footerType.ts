import { defineType } from 'sanity';

export const footerComponentType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'github',
          title: 'Github',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'Linkedin',
          type: 'url',
        },
        {
          name: 'telegram',
          title: 'Telegram',
          type: 'url',
        },
        {
          name: 'x',
          title: 'X',
          type: 'url',
        },
      ],
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sourceCode',
      title: 'Source code',
      type: 'link',
      validation: (Rule) => Rule.required(),
    },
  ],
});
