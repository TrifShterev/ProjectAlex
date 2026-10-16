import SectionHeading from './SectionHeading';

// Placeholder photos (colors match the mock's striped placeholders).
// Replace `before` / `now` with real client photo URLs or imports.
const placeholder = (label) => `https://placehold.co/300x400/EFEFE7/8C8C82?text=${label}`;

const CLIENTS = [
  { name: 'Marko, 34', result: '−18 kg · 16 weeks', note: 'Strength training 4×/week + high-protein meal plan.' },
  { name: 'Elena, 28', result: '+6 kg lean · 20 weeks', note: 'Hypertrophy split + calorie-surplus nutrition plan.' },
  { name: 'David, 41', result: '−12 kg · 14 weeks', note: 'Home workouts + simple, family-friendly food plan.' },
  { name: 'Nina, 31', result: '−9 kg · 12 weeks', note: 'Return to training after pregnancy + meal prep system.' },
  { name: 'Tom, 25', result: '−22 kg · 24 weeks', note: 'Beginner-to-intermediate program + habit coaching.' },
  { name: 'Sara, 37', result: '−14 kg · 18 weeks', note: 'Strength + conditioning plan, gluten-free nutrition.' },
].map((client) => ({ ...client, before: placeholder('Before'), now: placeholder('Now') }));

function TransformationCard({ client }) {
  const firstName = client.name.split(',')[0];
  const photos = [
    { label: 'Before', src: client.before, tag: 'bg-white' },
    { label: 'Now', src: client.now, tag: 'bg-yellow' },
  ];

  return (
    <article className="group border-3 border-ink bg-white shadow-brutal transition duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-lg motion-reduce:transition-none">
      <div className="grid grid-cols-2 gap-[3px] border-b-3 border-ink bg-ink">
        {photos.map((photo) => (
          <div key={photo.label} className="relative aspect-[3/4] overflow-hidden bg-[#EFEFE7]">
            <img
              src={photo.src}
              alt={`${firstName} — ${photo.label.toLowerCase()}`}
              loading="lazy"
              width="300"
              height="400"
              className="size-full object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none"
            />
            <span
              className={`absolute top-2.5 left-2.5 border-2 border-ink px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.14em] ${photo.tag}`}
            >
              {photo.label}
            </span>
          </div>
        ))}
      </div>
      <div className="p-[22px]">
        <h3 className="text-[17px] font-black">{client.name}</h3>
        <span className="mt-2 inline-block bg-blue px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
          {client.result}
        </span>
        <p className="mt-3.5 text-sm text-[#444]">{client.note}</p>
      </div>
    </article>
  );
}

export default function Gallery() {
  return (
    <section id="results" className="border-b-3 border-ink bg-cream py-16 md:py-24">
      <div className="wrap">
        <SectionHeading kicker="Real Clients · Real Results" title="Before & Now">
          Every transformation below came from a plan written for one specific person. No templates.
        </SectionHeading>

        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client) => (
            <TransformationCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
