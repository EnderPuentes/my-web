import { PiYoutubeLogo } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const youtubeVideoType = defineType({
  name: 'youtubeVideo',
  type: 'object',
  title: 'YouTube Video Embed',
  icon: PiYoutubeLogo,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Url',
    }),
  ],
  preview: {
    select: { title: 'title', url: 'url' },
  },
});
