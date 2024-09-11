import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ExpertiseSchema, JobSchema } from '@/services/sanity/parser';
import Link from 'next/link';

type JobResumeProps = {
  job: JobSchema;
};

function JobResume({ job }: JobResumeProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-1 mb-2">
      {job.company.website ? (
        <Link
          aria-label={job.company.name}
          href={job.company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base sm:text-lg"
        >
          {job.company.name}
        </Link>
      ) : (
        <span className="text-base sm:text-lg">{job.company.name}</span>
      )}
      <p className="text-xs sm:text-base font-light dark:text-gray-300">
        {job.position}, {job.startDate} - {job.endDate}
      </p>
    </div>
  );
}

type JobDetailProps = {
  job: JobSchema;
  labels: ExpertiseSchema['labels'];
};

function JobDetail({ job, labels }: JobDetailProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-5 mb-2 border-t pt-5">
      <p className="dark:text-gray-300 text-xs sm:text-base leading-5 sm:leading-7">
        {job.company.description}
      </p>
      <p className="text-xs sm:text-base leading-5 sm:leading-7">
        <strong className="text-md">{labels.responsabilities}: </strong>{' '}
      </p>
      <ul className="list-disc flex flex-col justify-start items-start gap-5 pl-5 sm:pl-7">
        {job.responsabilities.map((resposability, index: number) => (
          <li
            className="dark:text-gray-300 text-xs sm:text-base leading-5 sm:leading-7"
            key={`resposability-${index}`}
          >
            {resposability}
          </li>
        ))}
      </ul>
      <p className="text-xs sm:text-base leading-5 sm:leading-7">
        <strong className="text-md">{labels.technologies}: </strong>{' '}
      </p>
      <p className="dark:text-gray-300 text-xs sm:text-base leading-5 sm:leading-7">
        {job.technologies}
      </p>
    </div>
  );
}

type Props = {
  data: ExpertiseSchema;
};

export default function Expertise({ data }: Props) {
  return (
    <section className="mt-10 sm:mt-20">
      <div className="container flex flex-col justify-start items-start gap-5 ">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <Accordion type="multiple" className="w-full">
          {data.jobs.map((job, ji) => (
            <>
              <AccordionItem value={`job-${ji}`} key={`job-${ji}`}>
                <AccordionTrigger className="hover:no-underline">
                  <JobResume job={job} />
                </AccordionTrigger>
                <AccordionContent>
                  <JobDetail job={job} labels={data.labels} />
                </AccordionContent>
              </AccordionItem>
            </>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
