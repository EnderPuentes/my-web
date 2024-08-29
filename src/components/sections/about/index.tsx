import { Locale } from '@/types/locales';

type Props = { t: Locale['pages']['home']['about'] };

export default async function About({ t }: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5 px-5">
        <h2 className="font-semibold text-lg sm:text-xl">{t.title}</h2>
        <div className="w-full grid gap-4">
          <p className="text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
}
