import { ExpertiseSchema, JobSchema } from '@/services/sanity/parser';
import Link from 'next/link';

type JobProps = {
  job: JobSchema;
  labels: ExpertiseSchema['labels'];
};

function JobPdf({ job, labels }: JobProps) {
  return (
    <div className="border-b pb-2">
      <div className="flex flex-col justify-start items-start gap-1 mb-2 w-full">
        {job.company.website ? (
          <Link
            aria-label={job.company.name}
            href={job.company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-semibold underline"
          >
            {job.company.name}
          </Link>
        ) : (
          <span className="text-md font-semibold">{job.company.name}</span>
        )}
        <p className="text-xs font-light">
          <span className="font-semibold">{job.position}</span>, {job.startDate}{' '}
          - {job.endDate}
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-2 mb-2">
        <p className="text-xs leading-5">
          <strong className="text-md">{labels.responsabilities}: </strong>{' '}
        </p>
        <ul className="list-disc flex flex-col justify-start items-start gap-1 pl-5">
          {job.responsabilities.map((resposability, index: number) => (
            <li className="text-xs leading-5" key={`resposability-${index}`}>
              {resposability}
            </li>
          ))}
        </ul>
        <p className="text-xs leading-5">
          <strong className="text-md">{labels.technologies}: </strong>{' '}
        </p>
        <p className="text-xs leading-5">{job.technologies}</p>
      </div>
    </div>
  );
}

type Props = {
  data: ExpertiseSchema;
};

export function ExpertisePdf({ data }: Props) {
  return (
    <div className="mt-10 flex flex-col justify-start items-start gap-2 ">
      <h2 className="font-semibold text-xl mb-5">{data.title}</h2>
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        {data.jobs.map((job, ji) => (
          <JobPdf key={`job-${ji}`} job={job} labels={data.labels} />
        ))}
      </div>
    </div>
  );
}
