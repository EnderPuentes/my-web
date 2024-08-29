import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Locale } from '@/types/locales';
import Image from 'next/image';
import Link from 'next/link';

type Props = { t: Locale['pages']['logbook']['education'] };

export default function Education({ t }: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5 ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-lg sm:text-xl mb-5">
              {t.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-10">
            {t.items.map((edu, i) => (
              <>
                <div
                  key={i}
                  className="flex justify-start items-start gap-5 sm:gap-7 border-b pb-10 last:pb-0 last:border-b-0"
                >
                  <div className="min-w-[40px] sm:min-w-[60px] min-h-[40px] sm:min-h-[60px] flex justify-center items-center border rounded-full bg-white">
                    <Image
                      src={edu.school.logo}
                      alt={edu.school.name}
                      quality={100}
                      width={40}
                      height={40}
                      className="rounded-full w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex flex-col justify-start items-start gap-1 mb-2">
                      <p className="text-lg font-bold">{edu.title}</p>
                      {edu.school.website ? (
                        <Link
                          aria-label={edu.school.name}
                          href={edu.school.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline text-xs"
                        >
                          <span>{edu.school.name}</span>
                        </Link>
                      ) : (
                        <p className="font-bold">{edu.school.name}</p>
                      )}

                      <span className="text-xs">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="text-xs">{edu.school.location}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
