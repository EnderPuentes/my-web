import { PiLink } from 'react-icons/pi';
import { defineType } from 'sanity';

export const headerComponentType = defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    {
      name: 'navbar',
      title: 'Navbar',
      type: 'object',
      fields: [
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'link',
              icon: PiLink,
              title: 'Link',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'path',
                  title: 'Path',
                  validation: (Rule) =>
                    Rule.required().uri({ allowRelative: true }),
                  type: 'url',
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  path: 'path',
                },
                prepare: ({ title, path }) => ({
                  title,
                  subtitle: path,
                }),
              },
            },
          ],
        },
      ],
    },
  ],
});
