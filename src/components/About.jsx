import alexBack from '../assets/alex-back.jpg';
import SectionHeading from './SectionHeading';

const PRINCIPLES = [
  {
    title: 'Consistency beats intensity',
    text: "Repeatable sessions, week after week, outperform heroic efforts you can't sustain.",
  },
  {
    title: 'Food is fuel, not punishment',
    text: 'No crash diets. Real meals you enjoy, built around your goal and your schedule.',
  },
  {
    title: 'Progress you can measure',
    text: 'Tracked lifts, check-ins and photos — every adjustment is based on your data.',
  },
];

export default function About() {
  return (
    <section id="about" className="border-b-3 border-ink bg-cream py-16 md:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <figure className="relative">
          <div className="overflow-hidden border-3 border-ink shadow-brutal">
            <img
              src={alexBack}
              alt="Alex from behind, showing a defined, muscular back and neck tattoo"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[40%_center] lg:aspect-[4/5]"
            />
          </div>
          <figcaption className="absolute top-4 left-4 bg-ink px-4 py-2 font-display text-sm font-black uppercase tracking-[0.12em] text-yellow">
            Discipline = Results
          </figcaption>
        </figure>

        <div>
          <SectionHeading kicker="About Me · Training Philosophy" title="Discipline builds results" className="mb-7" />

          <div className="space-y-4 text-[#333]">
            <p>
              I'm Alex — and I believe the gym teaches you far more than how to lift. Every early alarm, every
              extra rep and every meal prepped on a Sunday night is a vote for the person you're becoming.
            </p>
            <p>
              I've spent years learning what actually works, in the gym and in the kitchen, and I turned it into
              coaching that fits real life: busy jobs, families and all. No shortcuts, no gimmicks — just a clear
              plan, honest accountability and results you can see in the mirror.
            </p>
          </div>

          <ol className="mt-8 border-3 border-ink bg-white shadow-brutal">
            {PRINCIPLES.map((principle, i) => (
              <li
                key={principle.title}
                className="group flex gap-4 border-b-3 border-ink p-5 transition-colors last:border-b-0 hover:bg-yellow"
              >
                <span className="grid size-[42px] shrink-0 place-items-center border-3 border-ink bg-yellow font-display font-black transition-colors group-hover:bg-white">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-base font-black">{principle.title}</h3>
                  <p className="mt-1 text-sm text-[#444]">{principle.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
