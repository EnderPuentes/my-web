import { type SchemaTypeDefinition } from 'sanity';
// Componentes
import { metaComponentType } from './components/metaType';
// Sections
import { heroSectionType } from './sections/heroType';
// Pages
import { homePageType } from './pages/homeType';
import { logbookPageType } from './pages/logbookType';
// layouts
import { layoutType } from './layout';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Components
    metaComponentType,
    // Sections
    heroSectionType,
    // Pages
    homePageType,
    logbookPageType,
    // Layout
    layoutType,
  ],
};
