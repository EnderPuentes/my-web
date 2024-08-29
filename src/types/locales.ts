export type Locale = {
  pages: {
    logbook: {
      skills: {
        title: string;
        items: {
          title: string;
          technologies: string;
        }[];
      };
      expertise: {
        title: string;
        responsabilities: string;
        technologies: string;
        jobs: {
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
        }[];
      };
      education: {
        title: string;
        items: {
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
        }[];
      };
    };
    notFound: {
      metadata: {
        title: string;
        description: string;
      };
      title: string;
      description: string;
      back: string;
    };
  };
};
