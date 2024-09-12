import { getNotFoundPage } from '@/services/sanity/request';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: {
    lang: 'en' | 'es';
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getNotFoundPage(params.lang);

  return {
    title: data?.meta.title,
    description: data?.meta.description,
    openGraph: {
      title: data?.meta.title,
      description: data?.meta.description,
    },
    metadataBase: new URL(`${BASE_URL}/${params.lang}/logbook`),
    keywords: data?.meta.keywords?.join(', ') || '',
  };
}

export default async function NotFound({ params }: Props) {
  const data = await getNotFoundPage(params.lang);
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center -mt-20 bg-galaxy-gradient-light dark:bg-galaxy-gradient-dark">
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
      <div className="absolute top-0 left-0 w-full h-screen mix-blend-overlay"></div>
    </section>
  );
}
