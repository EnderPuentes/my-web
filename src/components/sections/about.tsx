type Props = { title: string; description: string };

export default async function About({ title, description }: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <h2 className="font-semibold text-lg sm:text-xl">{title}</h2>
        <div className="w-full grid gap-4">
          <p className="text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
