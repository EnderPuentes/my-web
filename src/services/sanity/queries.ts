import { groq } from 'next-sanity';

export const getHomeQuery = groq`
    *[_type == "home" && language == $lang][0]{
        ...
    }
`;

export const getLogbookQuery = groq`
    *[_type == "logbook" && language == $lang][0]{
        ...
    }
`;
