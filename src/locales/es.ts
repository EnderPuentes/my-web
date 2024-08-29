import { Locale } from '@/types/locales';

const es: Locale = {
  pages: {
    logbook: {
      skills: {
        title: 'Arsenal Técnico',
        items: [
          {
            title: 'Lenguajes de Programación',
            technologies: 'Javascript, Typescript, PHP.',
          },
          {
            title: 'Desarrollo Web',
            technologies:
              'Next.js, Nuxt.js, Sanity, Strapi, Laravel, Docker, Styled Components, Tailwind CSS, Chakra UI, Shadcn UI, StoryBook.',
          },
          {
            title: 'Servicios en la nube',
            technologies:
              'Vercel, Google Cloud, Dokku, CI (Gitlab, Github), S3, EC2 (AWS), Funciones Lambda.',
          },
          {
            title: 'Administración de Base de Datos',
            technologies: 'MSSQL, MySql, MariaDB, GraphQL, Prisma.',
          },
          {
            title: 'DevOps',
            technologies: 'Apache, Nginx, CronJobs.',
          },
          {
            title: 'Gestión de proyecto',
            technologies:
              'Organización y gestión de Sprints, Documentación, Estimación de Tareas, Planificación de Releases, Actualización del Backlog.',
          },
        ],
      },
      expertise: {
        title: 'Historial de vuelo',
        responsabilities: 'Responsabilidades',
        technologies: 'Tecnologías',
        jobs: [
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
                description:
                  'Planificación y estimación de tiempos de desarrollo.',
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
              'Javascript, TypeScript, Next.js, Node.js, GraphQL, MySQL, SOQL, Prisma, Docker, Dokku, Strapi, Sanity, Linux Server, Vercel, Styled Components, Tailwind UI, Chakra UI, Shadcn UI, Jest, Cypress, Cronjobs, Storybook, Electron.',
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
              'Javascript, Nuxt.js, PHP, Slim4, Laravel, MSSQL, MySql, MariaDB, Apache, Linux Server, Bootstrap.',
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
                description:
                  'Administración de cuentas de Google Workspace (G Suite).',
              },

              {
                description:
                  'Gestión de proyectos y asignación de tareas utilizando metodologías ágiles como SCRUM.',
              },

              {
                description:
                  'Desarrollo de aplicaciones web y móviles (híbridas).',
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
              'PHP, CodeIgniter, MySQL, Apache, JavaScript, Nuxt.js, Node.js, JQuery, Bootstrap, Email Marketing, WHM y cPanel. GSuite',
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
            technologies: 'Wordpress, HTML, Bootstrap, jQuery y JavaScript.',
          },
        ],
      },
      education: {
        title: 'Académia',
        items: [
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
        ],
      },
    },
    notFound: {
      metadata: {
        title: 'Señal Perdida',
        description: 'No pudimos localizar el recurso solicitado',
      },
      title: 'Señal Perdida',
      description: 'No pudimos localizar el recurso solicitado',
      back: 'Regresar a la estación',
    },
  },
};

export default es;
