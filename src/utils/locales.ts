import 'server-only';

const locales: { [keyof: string]: Function } = {
  en: () => import('@/locales/en').then((module) => module.default),
  es: () => import('@/locales/es').then((module) => module.default),
};

export const getLocale = async (locale: string) => locales[locale]();
