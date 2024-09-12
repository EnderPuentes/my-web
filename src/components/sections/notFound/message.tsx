import { NotFoundSchema } from '@/services/sanity/parser';
import Link from 'next/link';

type Props = {
  data: NotFoundSchema | null | undefined;
};

export function NotFoundMessage({ data }: Props) {
  return (
    <div className="text">
      <h2 className="text-xl font-bold mb-5">{data?.title}</h2>
      <p className="text-xs sm:text-base">{data?.description}</p>

      <Link
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 max-w-80 mx-auto mt-5 sm:mt-10 text-xs sm:text-sm dark:bg-slate-800 dark:text-white"
        href={`/`}
      >
        {data?.cta}
      </Link>
    </div>
  );
}
