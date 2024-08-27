export type Locale = {
  pages: {
    home: {
      metadata: {
        title: string;
        description: string;
      };
      hero: {
        title: string;
      };
      about: {
        title: string;
        description: string;
      };
      contact: {
        title: string;
        description: string;
        inputs: {
          name: {
            label: string;
            placeholder: string;
            errors: {
              required: string;
            };
          };
          email: {
            label: string;
            placeholder: string;
            errors: {
              required: string;
              invalid?: string;
            };
          };
          message: {
            label: string;
            placeholder: string;
            errors: {
              required: string;
            };
          };
        };
        status: {
          success: {
            title: string;
            description: string;
          };
          error: {
            title: string;
            description: string;
          };
        };
        loading: {
          on: string;
          off: string;
        };
      };
    };
    logbook: {
      metadata: {
        title: string;
        description: string;
      };
      hero: {
        title: string;
      };
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
  layout: {
    header: {
      menu: {
        logbook: string;
      };
    };

    footer: {
      socialMedia: {
        title: string;
      };
    };
  };
};
