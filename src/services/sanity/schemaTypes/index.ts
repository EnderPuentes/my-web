import { type SchemaTypeDefinition } from 'sanity';
// Common
import { multiContentType } from './common/multiContentType';
import { youtubeVideoType } from './common/youtubeVideoType';
// Componentes
import { footerComponentType } from './components/footerType';
import { headerComponentType } from './components/headerType';
import { linkComponentType } from './components/linkType';
import { metaComponentType } from './components/metaType';
// Sections
import { aboutSectionType } from './sections/aboutType';
import { contactSectionType } from './sections/contactType';
import { educationSectiontype } from './sections/educationType';
import { expertiseSectiontype } from './sections/expertiseType';
import { featuredArticlesSectionType } from './sections/featuredArticlesType';
import { heroSectionType } from './sections/heroType';
import { identitySectionType } from './sections/identityType';
import { skillsSectionType } from './sections/skillsType';
// Pages
import { articlePageType } from './pages/articleType';
import { blogPageType } from './pages/blogType';
import { homePageType } from './pages/homeType';
import { logbookPageType } from './pages/logbookType';
import { notFoundPageType } from './pages/notFoundType';
// layouts
import { layoutType } from './layout';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Common
    multiContentType,
    youtubeVideoType,
    // Components
    footerComponentType,
    headerComponentType,
    linkComponentType,
    metaComponentType,
    // Sections
    aboutSectionType,
    contactSectionType,
    educationSectiontype,
    expertiseSectiontype,
    featuredArticlesSectionType,
    heroSectionType,
    identitySectionType,
    skillsSectionType,
    // Pages
    articlePageType,
    blogPageType,
    homePageType,
    logbookPageType,
    notFoundPageType,
    // Layout
    layoutType,
  ],
};
