import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

// Quote and program text for each reviewer comes from t.testimonials.items, in the same order.
const REVIEWERS = ['Marko P.', 'Elena K.', 'David S.'];

export default function Testimonials() {
  const { t } = useLanguage();
  const reviews = REVIEWERS.map((name, i) => ({ name, ...t.testimonials.items[i] }));

  return (
    <section id="reviews" className="border-b-3 border-ink bg-blue py-16 md:py-24">
      <div className="wrap">
        <SectionHeading kicker={t.testimonials.kicker} title={t.testimonials.title} light>
          {t.testimonials.intro}
        </SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <figure
              key={review.name}
              className={`flex flex-col border-3 border-ink bg-white p-7 shadow-brutal ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="grid size-12 place-items-center border-3 border-ink bg-yellow pt-4 font-display text-5xl font-black leading-none"
                >
                  “
                </span>
                <span className="text-lg tracking-[0.1em]" role="img" aria-label={t.testimonials.ratingLabel}>
                  ★★★★★
                </span>
              </div>
              <blockquote className="mt-6 flex-1 text-[15px] text-[#222]">
                <p>{review.quote}</p>
              </blockquote>
              <figcaption className="mt-6 border-t-3 border-ink pt-4">
                <p className="font-display font-black uppercase">{review.name}</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue">{review.program}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
