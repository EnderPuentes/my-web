import { IdentitySchema } from '@/services/sanity/parser';

type Props = { data: IdentitySchema };

export default function Identity({ data }: Props) {
  return (
    <div className="bg-slate-100 dark:bg-galaxy-gradient">
      <div className="container">
        <div className="py-16">
          <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
          <h2 className="text-lg mb-2 dark:text-gray-200">{data.role}</h2>
        </div>
      </div>
    </div>
  );
}
