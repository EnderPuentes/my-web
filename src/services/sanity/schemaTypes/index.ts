import { type SchemaTypeDefinition } from 'sanity';
// Componentes
import { metaComponentType } from './components/metaType';
// Pages
import { homePageType } from './pages/homeType';
import { logbookPageType } from './pages/logbookType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Components
    metaComponentType,
    // Pages
    homePageType,
    logbookPageType,
  ],
};
