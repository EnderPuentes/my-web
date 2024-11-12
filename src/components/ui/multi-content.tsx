import { MultiContentSchema } from '@/services/sanity/parser';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { CodeBlock } from './code-block';

const Text: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-semibold text-md sm:text-2xl my-5 sm:my-10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold text-sm sm:text-xl my-3 sm:my-6">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300 mb-5">
        {children}
      </p>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold dark:text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-400 dark:text-white">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = value.blank ? '_blank' : undefined;
      return (
        <Link
          className="text-xs sm:text-base leading-6 sm:leading-7 text-blue-600 underline"
          href={value?.href}
          target={target}
        >
          {children}
        </Link>
      );
    },
  },

  list: {
    bullet: ({ value, children }) => {
      return (
        <ul className="list-disc list-inside text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300 pl-0 flex flex-col justify-start items-start gap-5 mb-5">
          {children}
        </ul>
      );
    },
    number: ({ value, children }) => (
      <ol className="list-decimal list-inside text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300 pl-0 flex flex-col justify-start items-start gap-5 mb-5">
        {children}
      </ol>
    ),
  },

  types: {
    image: ({ value }) => {
      const regex = /-(\d+)x(\d+)\./;
      const match = value.url.match(regex);
      const width = parseInt(match[1], 10);
      const height = parseInt(match[2], 10);

      return (
        <div className="py-5">
          <Image
            src={value.url}
            alt={value.alt}
            width={width}
            height={height}
            className="max-w-full mx-auto rounded-3xl"
          />
        </div>
      );
    },
    link: ({ value }) => {
      return (
        <Link className="text-brand-secondary" href={value.href}>
          {value.text}
        </Link>
      );
    },
    youtubeVideo: ({ value }) => {
      return (
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
          <iframe
            width="560"
            height="315"
            src={value.url.replace('youtu.be/', 'www.youtube.com/embed/')}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      );
    },
    code: ({ value }) => {
      return <CodeBlock code={value.code} language={value.language} />;
    },
  },
};

type Props = {
  data: MultiContentSchema;
};
export function MultiContent({ data }: Props) {
  return (
    <section className="mb-10">
      <div className="container">
        <PortableText value={data.content} components={Text} />
      </div>
    </section>
  );
}
