export type Locale = {
  pages: {
    logbook: {
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
