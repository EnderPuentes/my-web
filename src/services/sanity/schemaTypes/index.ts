import { type SchemaTypeDefinition } from 'sanity';
// Componentes
import { footerComponentType } from './components/footerType';
import { headerComponentType } from './components/headerType';
import { metaComponentType } from './components/metaType';
// Sections
import { aboutSectionType } from './sections/aboutType';
import { contactSectionType } from './sections/contactType';
import { heroSectionType } from './sections/heroType';
import { skillsSectionType } from './sections/skillsType';
// Pages
import { homePageType } from './pages/homeType';
import { logbookPageType } from './pages/logbookType';
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
    heroSectionType,
    skillsSectionType,
    // Pages
    homePageType,
    logbookPageType,
    // Layout
    layoutType,
  ],
};
