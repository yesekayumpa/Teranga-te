import React, { createContext, useContext, useState, useCallback } from 'react';
import { Lang, translations, Translations } from '../i18n/translations';

interface I18nContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('fr');

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle  = useCallback(() => setLangState((prev) => (prev === 'fr' ? 'en' : 'fr')), []);

  const value: I18nContextValue = {
    lang,
    t: translations[lang] as unknown as Translations,
    toggle,
    setLang,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

/** Hook — throws if used outside <I18nProvider> */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
