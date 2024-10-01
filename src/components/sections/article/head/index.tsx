import { CopyUrlButton } from "@/components/ui/action-button";

type Props = {
  title: string;
  publishAt: string;
  estimatedReadingTime: {
    label: string;
    value: string;
  };
};

export function ArticleHead({ title, publishAt, estimatedReadingTime }: Props) {
  return (
    <section className="my-10">
      <div className="container">
        <h1 className="font-semibold text-lg sm:text-3xl leading-[150%] sm:leading-[170%] mb-5">
          {title}
        </h1>
        <div className="flex justify-start items-center gap-4">
          <span className="text-2xs">{publishAt}</span>
          <span className="h-5 border-l" />
          <span className="text-2xs">
            {`${estimatedReadingTime.label}: ${estimatedReadingTime.value}`}
          </span>
          <span className="h-5 border-l" />
          <CopyUrlButton className="sm:text-xl"/>
        </div>
        <span className="border-b w-full block mt-5" />
      </div>
    </section>
  );
}
