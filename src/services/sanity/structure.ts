import {
  PiBook,
  PiDatabase,
  PiFileText,
  PiHouse,
  PiLayout,
} from 'react-icons/pi';
import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Admin') // Cambia el título si lo deseas
    .items([
      S.listItem()
        .title('Layout')
        .icon(PiLayout)
        .child(
          S.documentWithInitialValueTemplate('layout', {
            _id: 'layout',
            _type: 'layout',
          })
        ),
      S.listItem()
        .title('Pages')
        .icon(PiDatabase)
        .child(
          S.list()
            .title('Pages') // Puedes cambiar el título para que se muestre como Pages
            .items([
              S.listItem()
                .title('Home')
                .icon(PiHouse)
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('Logbook')
                .icon(PiBook)
                .child(
                  S.document().schemaType('logbook').documentId('logbook')
                ),
              S.listItem()
                .title('Blog')
                .icon(PiBook)
                .child(S.document().schemaType('blog').documentId('blog')),
              S.listItem()
                .title('NotFound')
                .icon(PiBook)
                .child(
                  S.document().schemaType('notFound').documentId('notFound')
                ),
            ])
        ),
      S.listItem()
        .title('Articles')
        .icon(PiFileText)
        .child(S.documentTypeList('article').title('Articles')),
    ]);
