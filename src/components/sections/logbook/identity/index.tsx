import {
  CopyUrlButton,
  DownloadUrlButton,
} from "@/components/ui/action-button";
import { urlFor } from "@/services/sanity/lib/file";
import { IdentitySchema } from "@/services/sanity/parser";

type Props = { data: IdentitySchema };

export function Identity({ data }: Props) {
  // TODO: redesign this section
  return null;
  return (
    <section className="bg-slate-100 bg-galaxy-gradient-light dark:bg-galaxy-gradient-dark -mt-20 pt-20">
      <div className="container">
        <div className="py-8 sm:py-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">{data.name}</h1>
          <h2 className="text-sm sm:text-lg mb-2 dark:text-gray-200">
            {data.role}
          </h2>
          <div className="flex justify-start items-center gap-3">
            <CopyUrlButton />
            <DownloadUrlButton url={urlFor(data.summary)} />
          </div>
        </div>
      </div>
    </section>
  );
}
