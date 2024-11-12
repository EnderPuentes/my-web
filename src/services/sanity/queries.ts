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
                        summary,
                        'createdAt': _createdAt,
                        'slug': slug.current,
                        estimatedReadingTime{
                            ...
                        }
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

export const getBlogArticleQuery = groq`
    *[_type == "article" && language == $lang && slug.current == $slug][0]{
        ...,
        'createdAt': _createdAt
    }
`;

export const getBlogArticlesForSitemapQuery = groq`
    *[_type == "article"]{
        'lang': language,
        'slug': slug.current,
    }
`;

export const getBlogArticleTranslateSlugsQuery = groq`
    *[_type == "article" && language == $lang && slug.current == $slug][0]{
        "translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
            'slug': slug.current,
            'lang': language
        },
    }
`;

export const getNotFoundQuery = groq`
    *[_type == "notFound" && language == $lang][0]{
        ...
    }
`;
