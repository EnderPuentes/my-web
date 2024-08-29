import { PiBook, PiHouse } from 'react-icons/pi';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Home')
        .icon(PiHouse)
        .child(S.document().schemaType('home').documentId('home')),
      S.listItem()
        .title('Logbook')
        .icon(PiBook)
        .child(S.document().schemaType('logbook').documentId('logbook')),
    ]);
