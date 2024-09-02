import { Locale } from '@/types/locales';

const es: Locale = {
  pages: {
    logbook: {
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
