import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';

const SECTION_IDS = ['about', 'services', 'results', 'reviews', 'contact'];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b-3 border-ink bg-paper">
      <div className="wrap flex h-[78px] items-center justify-between gap-6">
        <a href="#home" onClick={close} className="shrink-0 whitespace-nowrap font-display text-xl font-black uppercase tracking-[0.02em]">
          Alex <span className="border-3 border-ink bg-yellow px-2 py-0.5">Forge</span>
        </a>

        <div className="flex items-center gap-3 lg:gap-4 xl:gap-6">
          {/* Desktop navigation — tighter gaps below xl leave room for the longer Finnish / Bulgarian labels */}
          <nav aria-label={t.nav.mainLabel} className="hidden items-center gap-4 lg:flex xl:gap-7">
            {SECTION_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="whitespace-nowrap px-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-yellow"
              >
                {t.nav.links[id]}
              </a>
            ))}
            <Button href="#contact" variant="white" className="whitespace-nowrap">
              {t.nav.cta}
            </Button>
          </nav>

          {/* Shown at every breakpoint, so mobile visitors can switch without opening the menu */}
          <LanguageSwitcher />

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid size-11 place-items-center border-3 border-ink bg-yellow shadow-[3px_3px_0_#000] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none lg:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span className={`h-[3px] bg-ink transition duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-[3px] bg-ink transition duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`h-[3px] bg-ink transition duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <nav
        id="mobile-menu"
        aria-label={t.nav.mobileLabel}
        className={`border-t-3 border-ink bg-paper lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="wrap py-3">
          {SECTION_IDS.map((id) => (
            <li key={id} className="border-b-3 border-ink last:border-b-0">
              <a
                href={`#${id}`}
                onClick={close}
                className="block px-2 py-4 font-display text-sm font-extrabold uppercase tracking-[0.14em] transition-colors hover:bg-yellow"
              >
                {t.nav.links[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="wrap pb-6">
          <Button href="#contact" onClick={close} block>
            {t.nav.mobileCta}
          </Button>
        </div>
      </nav>
    </header>
  );
}
