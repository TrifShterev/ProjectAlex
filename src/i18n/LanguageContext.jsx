import { createContext, useContext, useEffect, useState } from 'react';
import en from './en';
import fi from './fi';
import bg from './bg';

const DICTIONARIES = { en, fi, bg };
const STORAGE_KEY = 'lang';

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fi', label: 'Suomi' },
  { code: 'bg', label: 'Български' },
];

const isSupported = (code) => Object.hasOwn(DICTIONARIES, code);

// Saved choice first, then the browser's preferred languages, then English.
function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isSupported(saved)) return saved;
  } catch {
    // Storage can be blocked (private mode, disabled site data) — fall back to detection.
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  return preferred.map((tag) => tag?.slice(0, 2).toLowerCase()).find(isSupported) ?? 'en';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);
  const t = DICTIONARIES[lang];

  // Only an explicit choice is saved, so first-time visitors keep following their browser language.
  const setLang = (code) => {
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Not persisted — the choice still applies for this visit.
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  return <LanguageContext value={{ lang, setLang, t }}>{children}</LanguageContext>;
}

/** Current language code, a setter, and `t` — the dictionary for that language. */
export function useLanguage() {
  return useContext(LanguageContext);
}
