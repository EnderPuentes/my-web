import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import en from '@/locales/en';
import { Locale } from '@/types/locales';
import Image from 'next/image';
import Link from 'next/link';

export default function Expertise() {
  const locale: Locale = en;
  const t = locale.pages.logbook.expertise;
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5 ">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">{t.title}</h2>
        <Accordion type="multiple" className="w-full">
          {t.jobs.map((job, ji) => (
            <>
              <AccordionItem value={`job-${ji}`} key={`job-${ji}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex justify-start items-start gap-5 sm:gap-7">
                    <div className="min-w-[40px] sm:min-w-[60px] min-h-[40px] sm:min-h-[60px] flex justify-center items-center border rounded-full bg-white">
                      <Image
                        src={job.company.logo}
                        alt={job.company.name}
                        quality={100}
                        width={40}
                        height={40}
                        className="rounded-full w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <div className="flex flex-col justify-start items-start gap-1 mb-2">
                        <p className="text-lg font-bold">{job.title}</p>
                        {job.company.website ? (
                          <Link
                            aria-label={job.company.name}
                            href={job.company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline  "
                          >
                            {job.company.name}
                          </Link>
                        ) : (
                          <span className="font-bold">{job.company.name}</span>
                        )}

                        <span className="text-xs">
                          {job.startDate} - {job.endDate}
                        </span>
                        <span className="text-xs">{job.company.location}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[40px] sm:pl-[60px]">
                  <div className="flex flex-col justify-start items-start gap-5 mb-2 pl-5 sm:pl-7">
                    <p className="dark:text-gray-300 text-xs sm:text-base leading-5 sm:leading-7">
                      {job.company.description}
                    </p>
                    <p className="text-xs sm:text-base leading-5 sm:leading-7">
                      <strong className="font-bold">
                        {t.responsabilities}:{' '}
                      </strong>{' '}
                    </p>
                    <ul className="list-disc flex flex-col justify-start items-start gap-5 pl-3 sm:pl-5">
                      {job.responsabilities.map((resposability, ri) => (
                        <li
                          className="dark:text-gray-300 text-xs sm:text-base leading-5 sm:leading-7"
                          key={`job-${ji}-resposability-${ri}`}
                        >
                          {resposability.description}{' '}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs sm:text-base leading-5 sm:leading-7">
                      <strong className="font-bold">{t.technologies}: </strong>{' '}
                    </p>
                    <p className="dark:text-gray-300 text-xs sm:text-base leading-5 sm:leading-7">
                      {job.technologies}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
