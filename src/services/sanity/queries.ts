import { groq } from 'next-sanity';

export const getLayoutQuery = groq`
    *[_type == "layout" && language == $lang][0]{
        ...
    }
`;

export const getHomeQuery = groq`
    *[_type == "home" && language == $lang][0]{
        ...,
        sections[]{
            ...,
            _type == 'featuredArticles' => {
                ...,
                title,
                items[]{
                    ...,
                    ...@-> {
                        title,
                        'slug': slug.current
                    }
                }
            }
        }
    }
`;

export const getLogbookQuery = groq`
    *[_type == "logbook" && language == $lang][0]{
        ...
    }
`;

export const getNotFoundQuery = groq`
    *[_type == "notFound" && language == $lang][0]{
        ...
    }
`;
