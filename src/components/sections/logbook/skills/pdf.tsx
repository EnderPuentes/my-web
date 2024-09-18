import { Badge } from '@/components/ui/badge';
import { SkillsCategorySchema, SkillsSchema } from '@/services/sanity/parser';

type SkillCategoryProps = {
  data: SkillsCategorySchema;
};

function SkillCategory({ data }: SkillCategoryProps) {
  return (
    <div>
      <p className="font-bold text-md">{data.title}</p>
      <div className="flex flex-wrap justify-start items-center gap-2 my-5">
        {data.technologies.map((technology, iTechnology) => (
          <Badge
            key={`tecnology-${iTechnology}`}
            className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full !text-3xs font-normal"
          >
            {technology.title}
          </Badge>
        ))}
      </div>
    </div>
  );
}

type Props = { data: SkillsSchema };

export function SkillsPdf({ data }: Props) {
  return (
    <div className="mt-10">
      <div className="container flex flex-col justify-start items-start gap-2">
        <h2 className="font-semibold text-xl mb-5">{data.title}</h2>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          {data.categories.map((category, iCategory) => (
            <SkillCategory key={`category-${iCategory}`} data={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
