import { EducationSchema } from '@/services/sanity/parser';
import Link from 'next/link';

type Props = { data: EducationSchema };

export default function Education({ data }: Props) {
  return (
    <section className="mt-10 sm:mt-20">
      <div className="container flex flex-col justify-start items-start gap-5 ">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <div className="flex flex-col gap-0 justify-start items-start w-full">
          {data.degrees.map((degree) => (
            <>
              <div className="flex flex-col justify-start items-start gap-1 mb-2 border-b py-5 w-full !m-0">
                {degree.school.website ? (
                  <Link
                    aria-label={degree.school.name}
                    href={degree.school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg"
                  >
                    <span>{degree.school.name}</span>
                  </Link>
                ) : (
                  <p className="text-base sm:text-lg">{degree.school.name}</p>
                )}
                <p className="text-xs sm:text-base font-light dark:text-gray-300">
                  {degree.title}, {degree.startDate} - {degree.endDate}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
