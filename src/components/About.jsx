import alexBack from '../assets/alex-back.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b-3 border-ink bg-cream py-16 md:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <figure className="relative">
          <div className="overflow-hidden border-3 border-ink shadow-brutal">
            <img
              src={alexBack}
              alt={t.about.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[40%_center] lg:aspect-[4/5]"
            />
          </div>
          <figcaption className="absolute top-4 left-4 bg-ink px-4 py-2 font-display text-sm font-black uppercase tracking-[0.12em] text-yellow">
            {t.about.caption}
          </figcaption>
        </figure>

        <div>
          <SectionHeading kicker={t.about.kicker} title={t.about.title} className="mb-7" />

          <div className="space-y-4 text-[#333]">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <ol className="mt-8 border-3 border-ink bg-white shadow-brutal">
            {t.about.principles.map((principle, i) => (
              <li
                key={i}
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
