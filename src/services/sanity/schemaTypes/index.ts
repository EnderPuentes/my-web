import { type SchemaTypeDefinition } from 'sanity';
// Componentes
import { footerComponentType } from './components/footerType';
import { headerComponentType } from './components/headerType';
import { metaComponentType } from './components/metaType';
// Sections
import { aboutSectionType } from './sections/aboutType';
import { contactSectionType } from './sections/contactType';
import { educationSectiontype } from './sections/educationType';
import { expertiseSectiontype } from './sections/expertiseType';
import { heroSectionType } from './sections/heroType';
import { identitySectionType } from './sections/identityType';
import { skillsSectionType } from './sections/skillsType';
// Pages
import { homePageType } from './pages/homeType';
import { logbookPageType } from './pages/logbookType';
import { notFoundPageType } from './pages/notFoundType';
// layouts
import { layoutType } from './layout';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Components
    headerComponentType,
    footerComponentType,
    metaComponentType,
    // Sections
    aboutSectionType,
    contactSectionType,
    educationSectiontype,
    expertiseSectiontype,
    heroSectionType,
    identitySectionType,
    skillsSectionType,
    // Pages
    homePageType,
    logbookPageType,
    notFoundPageType,
    // Layout
    layoutType,
  ],
};
