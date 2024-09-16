import { IdentitySchema } from '@/services/sanity/parser';

type Props = { data: IdentitySchema };

export function IdentityPdf({ data }: Props) {
  return (
    <section className="bg-slate-100 bg-galaxy-gradient-light dark:bg-galaxy-gradient-dark -mt-20 pt-20">
      <div className="container">
        <div className="py-8 sm:py-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">{data.name}</h1>
          <h2 className="text-sm sm:text-lg mb-2 dark:text-gray-200">
            {data.role}
          </h2>
        </div>
      </div>
    </section>
  );
}
