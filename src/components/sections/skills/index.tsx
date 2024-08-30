import { Badge } from '@/components/ui/badge';
import { SkillsSchema } from '@/services/sanity/parser';

type Props = { data: SkillsSchema };

export default function Skills({ data }: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <div>
          {data.categories.map((category, iCategory) => (
            <div key={`category-${iCategory}`}>
              <p className="font-bold text-xs sm:text-base my:5">
                {category.title}
              </p>
              <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-3  my-5">
                {category.technologies.map((technology, iTechnology) => (
                  <Badge
                    key={`category-${iCategory}-tecnology-${iTechnology}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white hover:bg-gray-300 rounded-full text-xs sm:text-sm font-medium transform transition-all hover:scale-105"
                  >
                    {technology.title}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
