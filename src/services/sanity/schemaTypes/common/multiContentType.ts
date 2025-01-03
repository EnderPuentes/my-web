import { PiTextAlignLeft } from 'react-icons/pi';
import { defineType } from 'sanity';

export const multiContentType = defineType({
  type: 'object',
  name: 'multiContent',
  title: 'Contenido Multiple',
  icon: PiTextAlignLeft,
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            {
              title: 'p',
              value: 'normal',
            },
            {
              title: 'h2',
              value: 'h2',
            },
            {
              title: 'h3',
              value: 'h3',
            },
          ],
          lists: [
            { title: 'Bullets', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Blank',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'TypeScript', value: 'typescript' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'JSX', value: 'jsx' },
              { title: 'TSX', value: 'tsx' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'Python', value: 'python' },
              { title: 'Bash', value: 'bash' },
            ],
            withFilename: true,
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
        {
          type: 'youtubeVideo',
        },
      ],
    },
  ],
});
