import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
  responsabilities: { description: string }[];
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
    responsabilities: [
      {
        description:
          'Liderazgo técnico de proyectos con equipos internos y externos.',
      },
      {
        description: 'Participación en descubrimientos técnicos.',
      },
      {
        description: 'Resolución de problemas de alto impacto.',
      },
      {
        description: 'Planificación y estimación de tiempos de desarrollo.',
      },
      {
        description:
          'Comunicación estratégica con el cliente para la organización de requerimientos, priorización de tareas y definición de plazos.',
      },

      {
        description:
          'Creación de entornos de trabajo (Develop, Maintenance, Staging, Preview) para el equipo de desarrollo utilizando aplicaciones de Dokku e integrándolas con CI/CD dentro del repositorio.',
      },
      {
        description:
          'Gestión de lanzamientos (Releases), correcciones urgentes (Hotfixes) y reversión de cambios (Rollbacks).',
      },
      {
        description:
          'Documentación para la contribución al proyecto, ejecución de procesos dentro del mismo (Releases, Hotfixes, Rollbacks, manejo de plugins, plan de trabajo) y manejo de nuevas secciones/servicios.',
      },
      {
        description:
          'Desarrollo de nuevas funcionalidades (features), mejoras (improvements) y resolución de errores (bugs).',
      },
    ],
    technologies:
      'Javascript, TypeScript, React.js, Next.js (Server Components), Node.js, Express, Rest API, GraphQL, MySQL, SOQL, Prisma, Docker, Dokku, Strapi, Sanity, Linux Server, Vercel, Salesforce, Styled Components, Tailwind CSS, Chakra UI, Shadcn UI, CSS, SCSS, Jest, Cypress, Cronjobs, Storybook, Electron.',
  },
  {
    title: 'Software Developer',
    company: {
      name: 'Libre Opción',
      logo: '/images/expertises/libreopcion.webp',
      description:
        'Es una plataforma de comercio electrónico (marketplace) respaldada por las principales marcas de tecnología y las mejores tiendas de Argentina, incluyendos más de 400 marcas de tecnología. ',
      location: 'Buenos Aires',
      website: 'https://libreopcion.com',
    },
    startDate: 'Junio 2019',
    endDate: 'Febrero 2022',
    responsabilities: [
      {
        description: 'Diseño e implementación de microservicios.',
      },
      {
        description:
          'Creación y mantenimiento de servicios para la importación y procesamiento de datos.',
      },
      {
        description:
          'Desarrollo y mantenimiento de aplicaciones web tipo ecommerce y CMS.',
      },
      {
        description:
          'Integración de servicios externos para gestiones administrativas, mediante webhooks, bots y librerías.',
      },
      {
        description:
          'Desarrollo y mantenimiento de aplicaciones y servicios para el manejo, análisis y procesamiento de datos.',
      },
      {
        description:
          'Configuración y preparación de instancias en Linux para aplicaciones y servicios.',
      },
      {
        description:
          'Identificación y solución de errores y fallos en aplicaciones y servicios.',
      },
    ],
    technologies:
      'Javascript, Vuej.js, Nuxt.js, PHP, Restler, Slim4, Laravel, SQL Server, MySql, MariaDB, Python, Apache, Linux Server, Shell, CSS, SCSS, Bootstrap.',
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
    responsabilities: [
      {
        description:
          'Mantenimiento de un sistema de gestión de contenido (CMS) personalizado.',
      },

      {
        description:
          'Configuración, adaptación e integración del CMS para satisfacer los requisitos específicos de cada cliente.',
      },

      {
        description:
          'Administración de cuentas de alojamiento web a través de WHM y cPanel.',
      },

      {
        description: 'Administración de cuentas de Google Workspace (G Suite).',
      },

      {
        description:
          'Gestión de proyectos y asignación de tareas utilizando metodologías ágiles como SCRUM.',
      },

      {
        description: 'Desarrollo de aplicaciones web y móviles (híbridas).',
      },
      {
        description:
          'Diseño y desarrollo de sitios web responsivos utilizando Bootstrap, jQuery, JavaScript, SCSS, Gulp y PHP.',
      },

      {
        description:
          'Creación de mailings responsivos compatibles con los principales gestores de correo.',
      },

      {
        description:
          'Implementación de estrategias de SEO para mejorar el posicionamiento en Internet.',
      },
    ],
    technologies:
      'PHP, CodeIgniter, MySQL, Apache, JavaScript, Vue.js, Nuxt.js, Node.js, Cordova, JQuery, Bootstrap, Email Marketing, WHM y cPanel. GSuite',
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
    responsabilities: [
      {
        description:
          'Desarrollo de sitios web responsivos utilizando HTML, Materialize, Bootstrap, jQuery y JavaScript.',
      },
      {
        description: 'Creación de mailings responsivos.',
      },
    ],
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
            <Accordion type="single" collapsible>
              {jobs.map((job, ji) => (
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
                              <span className="font-bold">
                                {job.company.name}
                              </span>
                            )}

                            <span className="text-xs">
                              {job.startDate} - {job.endDate}
                            </span>
                            <span className="text-xs">
                              {job.company.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-[40px] sm:pl-[60px]">
                      <div className="flex flex-col justify-start items-start gap-5 mb-2 pl-5 sm:pl-7">
                        <p className="leading-7 text-base dark:text-gray-300">
                          {job.company.description}
                        </p>
                        <p className="leading-7 text-base dark:text-gray-300">
                          <strong className="font-bold">
                            Responsabilidades:{' '}
                          </strong>{' '}
                        </p>
                        <ul className="list-disc flex flex-col justify-start items-start gap-5 pl-5">
                          {job.responsabilities.map((resposability, ri) => (
                            <li
                              className="leading-7 text-base"
                              key={`job-${ji}-resposability-${ri}`}
                            >
                              {resposability.description}{' '}
                            </li>
                          ))}
                        </ul>
                        <p className="leading-7 text-base dark:text-gray-300">
                          <strong className="font-bold">Tecnologías: </strong>{' '}
                        </p>
                        <p className="leading-7 text-base dark:text-gray-300">
                          {job.technologies}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </>
              ))}
            </Accordion>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
