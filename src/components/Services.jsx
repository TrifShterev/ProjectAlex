import { useLanguage } from '../i18n/LanguageContext';
import Button from './Button';
import SectionHeading from './SectionHeading';

const DumbbellIcon = () => (
  <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
    <path d="M6 6v12M2.5 9v6M18 6v12M21.5 9v6M6 12h12" />
  </svg>
);

const ForkKnifeIcon = () => (
  <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
    <path d="M7 3v18M4 3v5a3 3 0 0 0 6 0V3M18 21V3c-2.5 1-4 4-4 8h4" />
  </svg>
);

// Text for each card comes from t.services.items, in the same order.
const SERVICES = [
  { number: '01', icon: <DumbbellIcon />, header: 'bg-yellow text-ink', button: 'yellow' },
  { number: '02', icon: <ForkKnifeIcon />, header: 'bg-blue text-white', button: 'blue' },
];

export default function Services() {
  const { t } = useLanguage();
  const services = SERVICES.map((service, i) => ({ ...service, ...t.services.items[i] }));

  return (
    <section id="services" className="border-b-3 border-ink py-16 md:py-24">
      <div className="wrap">
        <SectionHeading kicker={t.services.kicker} title={t.services.title}>
          {t.services.intro}
        </SectionHeading>

        {/* Cards share header/body rows via subgrid so both headers match in height */}
        <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-y-0 lg:gap-x-10">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid grid-rows-[auto_1fr] border-3 border-ink bg-white shadow-brutal transition duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-lg motion-reduce:transition-none md:row-span-2 md:grid-rows-subgrid"
            >
              <header className={`flex items-center gap-4 border-b-3 border-ink p-6 ${service.header}`}>
                <span className="grid size-14 shrink-0 place-items-center border-3 border-ink bg-white text-ink">
                  {service.icon}
                </span>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                    {t.services.label} {service.number}
                  </span>
                  <h3 className="text-[clamp(20px,2.4vw,26px)] font-black leading-tight">{service.title}</h3>
                </div>
              </header>

              <div className="flex flex-col p-6 md:p-8">
                <p className="text-[#333]">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-3 font-medium">
                      <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 bg-ink" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button href="#contact" variant={service.button}>
                    {service.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
