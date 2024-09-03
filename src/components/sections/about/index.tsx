import { AboutSchema } from '@/services/sanity/parser';

type Props = { data: AboutSchema };

export default async function About({ data }: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5 px-5 mt-16 sm:mt-28">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <div className="w-full grid gap-4">
          <p
            className="text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </div>
      </div>
    </section>
  );
}
