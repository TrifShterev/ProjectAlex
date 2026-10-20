import alexFront from '../assets/alex-front.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import Button from './Button';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="border-b-3 border-ink pt-12 pb-16 md:pt-[72px] md:pb-[90px]">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <span className="mb-[26px] inline-block border-3 border-ink bg-white px-4 py-[7px] text-[11px] font-bold uppercase tracking-[0.18em] shadow-[4px_4px_0_#000]">
            {t.hero.badge}
          </span>

          <h1 className="text-[clamp(42px,6vw,76px)] font-black leading-[0.94]">
            {t.hero.titleStart}{' '}
            <mark className="mt-2 inline-block -rotate-[1.2deg] border-3 border-ink bg-yellow px-2.5 text-ink">
              {t.hero.titleHighlight}
            </mark>
          </h1>

          <p className="mt-7 max-w-[50ch] text-[17px] text-[#333]">{t.hero.intro}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact">{t.hero.primaryCta}</Button>
            <Button href="#services" variant="white">
              {t.hero.secondaryCta}
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            {t.hero.highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span aria-hidden="true" className="grid size-5 place-items-center border-2 border-ink bg-yellow text-[11px]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo sits on top on small screens (as in the mock), on the right from lg up */}
        <div className="relative order-first lg:order-none">
          <div className="overflow-hidden border-3 border-ink shadow-brutal">
            <img
              src={alexFront}
              alt={t.hero.imageAlt}
              width="632"
              height="720"
              className="aspect-[4/3] w-full object-cover object-[center_20%] lg:aspect-[4/5] lg:object-top"
            />
          </div>
          <a
            href="#contact"
            className="absolute -bottom-5 -left-3 -rotate-3 border-3 border-ink bg-yellow px-4 py-2 font-display text-xs font-black uppercase tracking-[0.14em] shadow-brutal-sm transition hover:rotate-0 sm:-left-5"
          >
            {t.hero.consultBadge}
          </a>
        </div>
      </div>
    </section>
  );
}
