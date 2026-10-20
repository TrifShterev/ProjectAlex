import { useEffect, useRef, useState } from 'react';
import { LANGUAGES, useLanguage } from '../i18n/LanguageContext';

/** Header dropdown for switching the page language (disclosure pattern: a button that shows a list of buttons). */
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  // While open, close on a click outside the switcher or on Escape.
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e) => {
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const choose = (code) => {
    setLang(code);
    setOpen(false);
    buttonRef.current.focus();
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-controls="language-menu"
        className="flex h-11 items-center gap-2 border-3 border-ink bg-white px-3 font-display text-xs font-extrabold uppercase tracking-[0.14em] shadow-[3px_3px_0_#000] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <span className="sr-only">{t.nav.language}: </span>
        {lang}
        <span aria-hidden="true" className={`text-[9px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <ul
        id="language-menu"
        className={`absolute top-full right-0 z-50 mt-2 min-w-48 border-3 border-ink bg-white shadow-brutal ${open ? 'block' : 'hidden'}`}
      >
        {LANGUAGES.map((language) => {
          const active = language.code === lang;
          return (
            <li key={language.code} className="border-b-3 border-ink last:border-b-0">
              <button
                type="button"
                lang={language.code}
                onClick={() => choose(language.code)}
                aria-current={active ? 'true' : undefined}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-bold transition-colors hover:bg-yellow ${active ? 'bg-yellow' : ''}`}
              >
                <span className="w-6 font-display text-xs font-black uppercase tracking-[0.14em]">{language.code}</span>
                <span className="flex-1">{language.label}</span>
                {active && <span aria-hidden="true">✓</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
