import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

type Education = {
  title: string;
  school: {
    name: string;
    logo: string;
    description: string;
    location: string;
    website: string | undefined;
  };
  startDate: string;
  endDate: string;
};

const education: Education[] = [
  {
    title: 'Ingeniería de Sistemas',
    school: {
      name: 'Universidad de los Andes',
      logo: '/images/education/ula.webp',
      description:
        'Es una agencia de diseño de productos digitales que integra experiencia de usuario personalizada, diseño a medida y tecnología. Ofrecen soluciones adaptadas, desde aplicaciones móviles y web hasta branding, para ayudar a sus clientes, que van desde startups en etapa inicial hasta grandes corporaciones.',
      location: 'Mérida - Venezuela',
      website: 'http://www.ula.ve/',
    },
    startDate: 'Octubre 2013 / Marzo 2017',
    endDate: 'Junio 2024 / Actualidad',
  },
];

export default function Education({}: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5 ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-lg sm:text-xl mb-5">
              Academia
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-10">
            {education.map((edu, i) => (
              <>
                <div
                  key={i}
                  className="flex justify-start items-start gap-5 border-b pb-10 last:pb-0 last:border-b-0"
                >
                  <div className="min-w-[60px] min-h-[60px] flex justify-center items-center border rounded-full bg-white">
                    <Image
                      src={edu.school.logo}
                      alt={edu.school.name}
                      quality={100}
                      width={30}
                      height={30}
                      className="rounded-full"
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
