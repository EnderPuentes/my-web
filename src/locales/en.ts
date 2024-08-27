import { Locale } from '@/types/locales';

const en: Locale = {
  pages: {
    home: {
      metadata: {
        title: '',
        description:
          'I am a proactive and passionate developer with 8 years of professional experience in the field of software development. I have worked with various programming languages, primarily focusing on web application development.',
      },
      hero: {
        title:
          'Connecting with ${city} ${flag}...\n\nHello, I’m Ender 👾\nWelcome to my station 🧑🏻‍🚀\n\nExplore my journey and join me in the quest for new challenges 🚀',
      },
      about: {
        title: 'About me',
        description:
          'I am a proactive and passionate developer with 8 years of professional experience in the field of software development. I have worked with various programming languages, primarily focusing on web application development. My experience includes creating robust and scalable technical solutions, addressing challenges in a creative and efficient manner.\n\nI have developed a strong passion for digital products and strive to ensure that every feature I develop not only meets but exceeds expectations. I am known for my ability to collaborate in multidisciplinary teams and work under pressure, demonstrating empathy and a firm commitment to project goals.',
      },
    },
    logbook: {
      metadata: {
        title: 'My Logbook',
        description:
          'I am Ender Puentes, a software developer at Aerolab, specializing in Next.js and TypeScript. I primarily work with technologies like Docker, Prisma, and Tailwind CSS, building scalable and efficient web solutions."',
      },
      hero: {
        title:
          'Fetching current logbook...\n\nName: Ender Puentes 👾\nPosition: Software Developer 💻\nOperations Center: Aerolab 🛰️\nLocation: Buenos Aires 🇦🇷',
      },
      skills: {
        title: 'Technical Arsenal',
        items: [
          {
            title: 'Programming Languages',
            technologies: 'Javascript, Typescript, PHP.',
          },
          {
            title: 'Web Development',
            technologies:
              'Next.js, Nuxt.js, Sanity, Strapi, Laravel, Docker, Styled Components, Tailwind CSS, Chakra UI, Shadcn UI, StoryBook.',
          },
          {
            title: 'Cloud Services',
            technologies:
              'Vercel, Google Cloud, Dokku, CI (Gitlab, Github), S3, EC2 (AWS), Lambda Functions.',
          },
          {
            title: 'Database Management',
            technologies: 'MSSQL, MySql, MariaDB, GraphQL, Prisma.',
          },
          {
            title: 'DevOps',
            technologies: 'Apache, Nginx, CronJobs.',
          },
          {
            title: 'Project Management',
            technologies:
              'Sprint Organization and Management, Documentation, Task Estimation, Release Planning, Backlog Updating.',
          },
        ],
      },
      expertise: {
        title: 'Flight History',
        responsabilities: 'Responsabilities',
        technologies: 'Technologies',
        jobs: [
          {
            title: 'Software Developer',
            company: {
              name: 'Aerolab',
              logo: '/images/expertises/aerolab.webp',
              description:
                'Aerolab is a digital product design agency that integrates personalized user experience, custom design, and technology. They offer tailored solutions, from mobile and web applications to branding, to help their clients ranging from early-stage startups to large corporations.',
              location: 'Buenos Aires',
              website: 'https://aerolab.co',
            },
            startDate: 'February 2022',
            endDate: 'Present',
            responsabilities: [
              {
                description:
                  'Technical leadership of projects with internal and external teams.',
              },
              {
                description: 'Participation in technical discoveries.',
              },
              {
                description: 'High-impact problem resolution.',
              },
              {
                description: 'Planning and estimation of development times.',
              },
              {
                description:
                  'Strategic communication with the client for requirement organization, task prioritization, and deadline definition.',
              },
              {
                description:
                  'Creation of work environments (Development, Maintenance, Staging, Preview) for the development team using Dokku applications and integrating them with CI/CD within the repository.',
              },
              {
                description:
                  'Management of releases, urgent fixes, and rollback of changes.',
              },
              {
                description:
                  'Documentation for project contribution, process execution (Releases, Hotfixes, Rollbacks, plugin management, work plan), and management of new sections/services.',
              },
              {
                description:
                  'Development of new features, improvements, and bug fixes.',
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
                'Libre Opción is an e-commerce platform (marketplace) backed by leading technology brands and top stores in Argentina, including over 400 technology brands.',
              location: 'Buenos Aires',
              website: 'https://libreopcion.com',
            },
            startDate: 'June 2019',
            endDate: 'February 2022',
            responsabilities: [
              {
                description: 'Design and implementation of microservices.',
              },
              {
                description:
                  'Creation and maintenance of services for data import and processing.',
              },
              {
                description:
                  'Development and maintenance of e-commerce and CMS web applications.',
              },
              {
                description:
                  'Integration of external services for administrative management, through webhooks, bots, and libraries.',
              },
              {
                description:
                  'Development and maintenance of applications and services for data management, analysis, and processing.',
              },
              {
                description:
                  'Configuration and preparation of Linux instances for applications and services.',
              },
              {
                description:
                  'Identification and resolution of errors and failures in applications and services.',
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
                "Synapsis CI is an agency dedicated to enhancing companies' digital presence. Specialized in institutional website design, branding, and email marketing, providing solutions that capture and convey the identity and values of each brand in a professional and attractive manner.",
              location: 'Buenos Aires',
              website: 'https://synapsis.com.ar',
            },
            startDate: 'November 2017',
            endDate: 'June 2019',
            responsabilities: [
              {
                description:
                  'Maintenance of a customized content management system (CMS).',
              },
              {
                description:
                  'Configuration, adaptation, and integration of the CMS to meet specific client requirements.',
              },
              {
                description:
                  'Management of web hosting accounts through WHM and cPanel.',
              },
              {
                description:
                  'Management of Google Workspace (G Suite) accounts.',
              },
              {
                description:
                  'Project management and task assignment using agile methodologies like SCRUM.',
              },
              {
                description:
                  'Development of web and mobile (hybrid) applications.',
              },
              {
                description:
                  'Design and development of responsive websites using Bootstrap, jQuery, JavaScript, SCSS, Gulp, and PHP.',
              },
              {
                description:
                  'Creation of responsive emails compatible with major email clients.',
              },
              {
                description:
                  'Implementation of SEO strategies to improve online positioning.',
              },
            ],
            technologies:
              'PHP, CodeIgniter, MySQL, Apache, JavaScript, Nuxt.js, Node.js, JQuery, Bootstrap, Email Marketing, WHM and cPanel, GSuite.',
          },
          {
            title: 'Frontend Developer',
            company: {
              name: 'CoffeeCode',
              logo: '/images/expertises/coffeecode.webp',
              description:
                'CoffeeCode was a startup focused on designing and developing innovative technological solutions for small businesses. Their focus ranged from branding and email marketing to comprehensive content management, offering personalized services to help businesses stand out in the market.',
              location: 'Mérida',
              website: undefined,
            },
            startDate: 'May 2016',
            endDate: 'May 2017',
            responsabilities: [
              {
                description:
                  'Development of responsive websites using HTML, Materialize, Bootstrap, jQuery, and JavaScript.',
              },
              {
                description: 'Creation of responsive emails.',
              },
            ],
            technologies: 'WordPress, HTML, Bootstrap, jQuery, and JavaScript.',
          },
        ],
      },
      education: {
        title: 'Academia',
        items: [
          {
            title: 'Systems Engineering',
            school: {
              name: 'Universidad de los Andes',
              logo: '/images/education/ula.webp',
              description:
                'It is a digital product design agency that integrates personalized user experience, custom design, and technology. They offer tailored solutions, from mobile and web applications to branding, to help their clients ranging from early-stage startups to large corporations.',
              location: 'Mérida - Venezuela',
              website: 'http://www.ula.ve/',
            },
            startDate: 'October 2013 / March 2017',
            endDate: 'June 2024 / Present',
          },
        ],
      },
    },
    notFound: {
      metadata: {
        title: 'Signal Lost',
        description: "We couldn't locate the requested resource",
      },
      title: 'Signal Lost',
      description: "We couldn't locate the requested resource",
      back: 'Return to the station',
    },
  },
  layout: {
    header: {
      menu: {
        logbook: 'Logbook',
      },
    },
    contact: {
      title: 'Write to me!',
      description:
        'If you have a mission proposal or simply want to reach out from your space station, I’ll be happy to receive your message. Let’s connect and talk soon!',
      button: 'Hi!',
      inputs: {
        name: {
          label: 'Name',
          placeholder: 'Enter your name here',
          errors: {
            required: 'Please enter your name so I can address you correctly.',
          },
        },
        email: {
          label: 'Email',
          placeholder: 'Enter your email here',
          errors: {
            required: 'I need your email to be able to contact you.',
            invalid:
              'Please tell me how I can assist you by filling out the message field.',
          },
        },
        message: {
          label: 'Message',
          placeholder: 'How can I help you?',
          errors: {
            required:
              'Please tell me how I can assist you by filling out the message field.',
          },
        },
      },
      status: {
        success: {
          title: 'Success!',
          description:
            'Your message has been sent successfully. I will get back to you as soon as possible.',
        },
        error: {
          title: 'Success!',
          description:
            "We couldn't send your message. Please try again later or contact us at hello@enderpuentes.com.",
        },
      },
      loading: {
        on: 'Sending...',
        off: 'Send Message',
      },
    },
    footer: {
      socialMedia: {
        title: 'Follow me!',
      },
    },
  },
};

export default en;
