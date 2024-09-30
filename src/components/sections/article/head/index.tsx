type Props = {
  title: string;
  publishAt: string;
};

export function ArticleHead({ title, publishAt }: Props) {
  return (
    <section className="my-10">
      <div className="container">
        <h1 className="font-semibold text-lg sm:text-3xl leading-[150%] sm:leading-[170%] mb-5 sm:mb-10">
          {title}
        </h1>
        <span className="text-2xs">{publishAt}</span>
        <span className="border-b w-full block mt-5" />
      </div>
    </section>
  );
}
