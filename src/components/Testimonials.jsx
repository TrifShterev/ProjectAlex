import SectionHeading from './SectionHeading';

const REVIEWS = [
  {
    quote:
      "I'd tried every program online and always quit after a month. Alex gave me a plan that fit my shifts — 16 weeks later I'm down 18 kg and still going.",
    name: 'Marko P.',
    program: 'Gym Training + Meal Plan',
  },
  {
    quote:
      "The meal plans changed everything. No starving, no boring chicken-and-rice — just food I actually like, portioned for my goal. My energy is through the roof.",
    name: 'Elena K.',
    program: 'Custom Meal Plan',
  },
  {
    quote:
      'Alex is strict in the best way. Every session has a purpose, every check-in keeps me honest. I finally understand how to train — not just what to do.',
    name: 'David S.',
    program: '1-on-1 Gym Training',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="border-b-3 border-ink bg-blue py-16 md:py-24">
      <div className="wrap">
        <SectionHeading kicker="Client Reviews" title="What clients say" light>
          Don't take my word for it — here's what people who put in the work have to say.
        </SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
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
                <span className="text-lg tracking-[0.1em]" role="img" aria-label="Rated 5 out of 5">
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
