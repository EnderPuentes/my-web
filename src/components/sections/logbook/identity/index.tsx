import { IdentitySchema } from '@/services/sanity/parser';
import Link from 'next/link';
import { PiDownloadSimple } from 'react-icons/pi';

type Props = { data: IdentitySchema; lang: 'en' | 'es' };

export function Identity({ data, lang }: Props) {
  return (
    <section className="bg-slate-100 bg-galaxy-gradient-light dark:bg-galaxy-gradient-dark -mt-20 pt-20">
      <div className="container">
        <div className="py-8 sm:py-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">{data.name}</h1>
          <h2 className="text-sm sm:text-lg mb-2 dark:text-gray-200">
            {data.role}
          </h2>
        </div>
        <Link
          download
          title="Download Logbook"
          href={`/${lang}/logbook/download?pdf=true&lang=${lang}`}
          className="text-4xl"
        >
          <PiDownloadSimple />
        </Link>
      </div>
    </section>
  );
}
