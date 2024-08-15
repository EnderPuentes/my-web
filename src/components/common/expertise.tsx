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

type Job = {
  title: string;
  company: {
    name: string;
    logo: string;
    description: string;
    location: string;
    website: string | undefined;
  };
  startDate: string;
  endDate: string;
  technologies: string;
};

const jobs: Job[] = [
  {
    title: 'Software Developer',
    company: {
      name: 'Aerolab',
      logo: '/images/expertises/aerolab.webp',
      description:
        'Es una agencia de diseño de productos digitales que integra experiencia de usuario personalizada, diseño a medida y tecnología. Ofrecen soluciones adaptadas, desde aplicaciones móviles y web hasta branding, para ayudar a sus clientes, que van desde startups en etapa inicial hasta grandes corporaciones.',
      location: 'Buenos Aires',
      website: 'https://aerolab.co',
    },
    startDate: 'Febrero 2022',
    endDate: 'Actualidad',
    technologies:
      'Javascript, TypeScript, React.js, Next.js (Server Components), Node.js, Express, Rest API, GraphQL, MySQL, SOQL, Prisma, Docker, Dokku, Strapi, Sanity, Linux Server, Vercel, Salesforce, Styled Components, Tailwind UI, Chakra UI, Shadcn UI, Sass, Jest, Cypress, Cronjobs, Storybook, Electron.',
  },
  {
    title: 'Software Developer',
    company: {
      name: 'Libre Opción',
      logo: '/images/expertises/libreopcion.webp',
      description:
        'Es una plataforma de comercio electrónico (marketplace) respaldada por las principales marcas de tecnología y las mejores tiendas de Argentina, así como por un distribuidor con más de 20 años de experiencia en el mercado. Esta vidriera virtual, formada por pequeñas y medianas empresas argentinas, incluye más de 400 marcas de tecnología. ',
      location: 'Buenos Aires',
      website: 'https://libreopcion.com',
    },
    startDate: 'Junio 2019',
    endDate: 'Febrero 2022',
    technologies:
      'Javascript, Vuej.js, Nuxt.js, PHP, Restler, Slim4, Laravel, SQL Server, MySql, MariaDB, Python, Apache, Linux Server, Shell, Sass, BootStrap.',
  },
  {
    title: 'FullStack Developer',
    company: {
      name: 'Synapsis CI',
      logo: '/images/expertises/synapsis.webp',
      description:
        'Es una agencia dedicada a potenciar la presencia digital de las empresas. Especializada en el diseño de sitios web institucionales, branding y email marketing, proporcionando soluciones que capturan y transmiten la identidad y los valores de cada marca de manera profesional y atractiva.',
      location: 'Buenos Aires',
      website: 'https://synapsis.com.ar',
    },
    startDate: 'Noviembre 2017',
    endDate: 'Junio 2019',
    technologies:
      'PHP, CodeIgniter, MySQL, Apache, JavaScript, Vue.js, Nuxt.js, Node.js, JQuery, BootStrap, Email Marketing',
  },
  {
    title: 'Frontend Developer',
    company: {
      name: 'CoffeeCode',
      logo: '/images/expertises/coffeecode.webp',
      description:
        'Fue una startup enfocada en diseño y desarrollo de soluciones tecnológicas innovadoras para pequeñas empresas. Su enfoque abarcaba desde la creación de branding y email marketing hasta la gestión integral de contenido, ofreciendo servicios personalizados para ayudar a las empresas a destacar en el mercado.',
      location: 'Mérida',
      website: undefined,
    },
    startDate: 'Mayo 2016',
    endDate: 'Mayo 2017',
    technologies:
      'Wordpress, HTML, Materialize, Bootstrap, jQuery y JavaScript.',
  },
];

export default function Expertise({}: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5 ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-xl mb-5">
              Experiencia profesional
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-10">
            {jobs.map((job, i) => (
              <>
                <div
                  key={i}
                  className="flex justify-start items-start gap-5 border-b pb-10 last:pb-0 last:border-b-0"
                >
                  <div className="min-w-[60px] min-h-[60px] flex justify-center items-center border rounded-full">
                    <Image
                      src={job.company.logo}
                      alt={job.company.name}
                      quality={100}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex flex-col justify-start items-start gap-1 mb-2">
                      <h6 className="text-lg font-bold">{job.title}</h6>
                      {job.company.website ? (
                        <Link
                          aria-label={job.company.name}
                          href={job.company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline  "
                        >
                          <span>{job.company.name}</span>
                        </Link>
                      ) : (
                        <h6 className="font-bold">{job.company.name}</h6>
                      )}

                      <span className="text-xs">
                        {job.startDate} - {job.endDate}
                      </span>
                      <span className="text-xs">{job.company.location}</span>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-5 mb-2">
                      <p className="leading-7 text-base">
                        {job.company.description}
                      </p>
                      <p className="leading-7 text-base">
                        <strong className="font-bold">Tecnologías: </strong>{' '}
                        {job.technologies}
                      </p>
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
