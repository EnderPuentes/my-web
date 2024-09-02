import { Locale } from '@/types/locales';

const en: Locale = {
  pages: {
    logbook: {
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
};

export default en;
