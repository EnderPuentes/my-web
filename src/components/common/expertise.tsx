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

type Company = {
  logo: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  website: string | undefined;
  skills: string;
};

const data: Company[] = [
  {
    logo: '/images/expertises/aerolab.webp',
    title: 'Aerolab',
    description:
      'Es una agencia de diseño de productos digitales que integra experiencia de usuario personalizada, diseño a medida y tecnología. Ofrecen soluciones adaptadas, desde aplicaciones móviles y web hasta branding, para ayudar a sus clientes, que van desde startups en etapa inicial hasta grandes corporaciones.',
    location: 'Buenos Aires',
    startDate: 'Febrero 2022',
    endDate: 'Actualidad',
    website: 'https://aerolab.co',
    skills: '',
  },
  {
    logo: '/images/expertises/libreopcion.webp',
    title: 'Libre Opción',
    description:
      'Es una plataforma de comercio electrónico (marketplace) respaldada por las principales marcas de tecnología y las mejores tiendas de Argentina, así como por un distribuidor con más de 20 años de experiencia en el mercado. Esta vidriera virtual, formada por pequeñas y medianas empresas argentinas, incluye más de 400 marcas de tecnología. ',
    location: 'Buenos Aires',
    startDate: 'Junio 2019',
    endDate: 'Febrero 2022',
    website: 'https://libreopcion.com',
    skills: '',
  },
  {
    logo: '/images/expertises/synapsis.webp',
    title: 'Synapsis CI',
    description:
      'Es una agencia dedicada a potenciar la presencia digital de las empresas. Especializada en el diseño de sitios web institucionales, branding y email marketing, proporcionando soluciones que capturan y transmiten la identidad y los valores de cada marca de manera profesional y atractiva.',
    location: 'Buenos Aires',
    startDate: 'Noviembre 2017',
    endDate: 'Junio 2019',
    website: 'https://synapsis.com.ar',
    skills: '',
  },
  {
    logo: '/images/expertises/coffeecode.webp',
    title: 'CoffeeCode',
    description:
      'Fue una startup enfocada en diseño y desarrollo de soluciones tecnológicas innovadoras para pequeñas empresas. Su enfoque abarcaba desde la creación de branding y email marketing hasta la gestión integral de contenido, ofreciendo servicios personalizados para ayudar a las empresas a destacar en el mercado.',
    location: 'Mérida',
    startDate: 'Mayo 2016',
    endDate: 'Mayo 2017',
    website: undefined,
    skills: '',
  },
];

export default function Expertise({}: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5 ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-xl">
              Mi experiencia profesional
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-10">
            {data.map((it, i) => (
              <>
                <div key={i} className="flex justify-start items-start gap-5">
                  <div className="min-w-[60px] min-h-[60px] flex justify-center items-center border rounded-full">
                    <Image
                      src={it.logo}
                      alt={it.title}
                      quality={100}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1 w-auto">
                    {it.website ? (
                      <Link
                        aria-label={it.title}
                        href={it.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                      >
                        <h6>{it.title}</h6>
                      </Link>
                    ) : (
                      <h6 className="font-bold">{it.title}</h6>
                    )}

                    <span className="text-xs">
                      {it.startDate} - {it.endDate}
                    </span>
                    <span className="text-xs">{it.location}</span>
                    <p>{it.description}</p>
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
