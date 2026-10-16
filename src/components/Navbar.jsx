import { useState } from 'react';
import Button from './Button';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#results', label: 'Results' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b-3 border-ink bg-paper">
      <div className="wrap flex h-[78px] items-center justify-between">
        <a href="#home" onClick={close} className="font-display text-xl font-black uppercase tracking-[0.02em]">
          Alex <span className="border-3 border-ink bg-yellow px-2 py-0.5">Forge</span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-yellow"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="white">
            Book Free Call
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid size-11 place-items-center border-3 border-ink bg-yellow shadow-[3px_3px_0_#000] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none lg:hidden"
        >
          <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
            <span className={`h-[3px] bg-ink transition duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-[3px] bg-ink transition duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[3px] bg-ink transition duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile navigation panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`border-t-3 border-ink bg-paper lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="wrap py-3">
          {LINKS.map((link) => (
            <li key={link.href} className="border-b-3 border-ink last:border-b-0">
              <a
                href={link.href}
                onClick={close}
                className="block px-2 py-4 font-display text-sm font-extrabold uppercase tracking-[0.14em] transition-colors hover:bg-yellow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="wrap pb-6">
          <Button href="#contact" onClick={close} block>
            Book a Free Consultation
          </Button>
        </div>
      </nav>
    </header>
  );
}
