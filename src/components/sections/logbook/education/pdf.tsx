import { DegreeSchema, EducationSchema } from '@/services/sanity/parser';
import Link from 'next/link';

type DegreeProps = {
  degree: DegreeSchema;
};

function DegreePdf({ degree }: DegreeProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-1 mb-2 border-b pb-2 w-full">
      {degree.school.website ? (
        <Link
          aria-label={degree.school.name}
          href={degree.school.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-semibold underline"
        >
          <span>{degree.school.name}</span>
        </Link>
      ) : (
        <p className="text-md font-semibold">{degree.school.name}</p>
      )}
      <p className="text-xs font-light">
        <span className="font-semibold">{degree.title}</span>,{' '}
        {degree.startDate} - {degree.endDate}
      </p>
    </div>
  );
}

type Props = { data: EducationSchema };

export function EducationPdf({ data }: Props) {
  return (
    <div className="mt-10">
      <div className="container flex flex-col justify-start items-start gap-2 ">
        <h2 className="font-semibold text-xl mb-5">{data.title}</h2>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          {data.degrees.map((degree, iDegree) => (
            <DegreePdf key={iDegree} degree={degree} />
          ))}
        </div>
      </div>
    </div>
  );
}
