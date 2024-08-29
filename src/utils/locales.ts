import 'server-only';

const locales: { en: Function; es: Function } = {
  en: () => import('@/locales/en').then((module) => module.default),
  es: () => import('@/locales/es').then((module) => module.default),
};

export const getLocale = async (locale: 'en' | 'es') => {
  console.log(locale, locales[locale]);
  if (locales[locale] === undefined) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return locales[locale]();
};
