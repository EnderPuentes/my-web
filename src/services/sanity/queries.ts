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
                        'updateAt': _updatedAt,
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
        'updateAt': _updatedAt
    }
`;

export const getBlogArticlesForSitemapQuery = groq`
    *[_type == "article"]{
        'lang': language,
        'slug': slug.current,
    }
`;

export const getNotFoundQuery = groq`
    *[_type == "notFound" && language == $lang][0]{
        ...
    }
`;
