import { defineField, defineType } from 'sanity';

export const linkComponentType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => Rule.max(160).required(),
    }),
    defineField({
      name: 'href',
      type: 'url',
      title: 'Href',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https', 'mailto'],
        })
          .custom((url) => {
            if (url?.startsWith('mailto:')) {
              return true;
            }
            return true;
          })
          .required(),
    }),
  ],
});
