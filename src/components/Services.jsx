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

const SERVICES = [
  {
    number: '01',
    title: '1-on-1 Gym Training',
    icon: <DumbbellIcon />,
    header: 'bg-yellow text-ink',
    button: 'yellow',
    cta: 'Book a Session',
    description:
      "Personal sessions built around your body, your goal and your level — whether you're stepping into a gym for the first time or chasing a new PR.",
    points: [
      'Full assessment & goal-setting session',
      'Progressive program updated every 4 weeks',
      'Technique coaching on every lift',
      'Weekly check-ins and progress tracking',
    ],
  },
  {
    number: '02',
    title: 'Custom Healthy Meal Plans',
    icon: <ForkKnifeIcon />,
    header: 'bg-blue text-white',
    button: 'blue',
    cta: 'Get My Meal Plan',
    description:
      'Real food, real portions, no crash diets. A nutrition plan that fits your taste, your budget and your schedule — and fuels your training.',
    points: [
      'Calorie & macro targets set for your goal',
      'Weekly meal plans with simple recipes',
      'Shopping lists and meal-prep guides',
      'Adjustments as your body changes',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b-3 border-ink py-16 md:py-24">
      <div className="wrap">
        <SectionHeading kicker="What I Offer" title="Train hard. Eat smart.">
          Two coaching programs that work on their own — and work even better together.
        </SectionHeading>

        {/* Cards share header/body rows via subgrid so both headers match in height */}
        <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-y-0 lg:gap-x-10">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="grid grid-rows-[auto_1fr] border-3 border-ink bg-white shadow-brutal transition duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-lg motion-reduce:transition-none md:row-span-2 md:grid-rows-subgrid"
            >
              <header className={`flex items-center gap-4 border-b-3 border-ink p-6 ${service.header}`}>
                <span className="grid size-14 shrink-0 place-items-center border-3 border-ink bg-white text-ink">
                  {service.icon}
                </span>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em]">Service {service.number}</span>
                  <h3 className="text-[clamp(20px,2.4vw,26px)] font-black leading-tight">{service.title}</h3>
                </div>
              </header>

              <div className="flex flex-col p-6 md:p-8">
                <p className="text-[#333]">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3 font-medium">
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
