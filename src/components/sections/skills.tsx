import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Locale } from '@/types/locales';

type Props = { t: Locale['pages']['logbook']['skills'] };

export default function Skills({ t }: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-lg sm:text-xl">
              {t.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {t.items.map((skill, i) => (
              <>
                <div
                  key={i}
                  className="flex flex-col justify-start items-start gap-1"
                >
                  <div className="flex flex-col justify-start items-start gap-1 mb-2">
                    <p className="font-bold text-xs sm:text-base">
                      {skill.title}
                    </p>
                    <p className="dark:text-gray-300 text-xs sm:text-base leading-5 sm:leading-7">
                      {skill.technologies}
                    </p>
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
