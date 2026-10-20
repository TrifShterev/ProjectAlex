import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

// Placeholder photos (colors match the mock's striped placeholders).
// Replace `before` / `now` with real client photo URLs or imports.
const placeholder = (label) => `https://placehold.co/300x400/EFEFE7/8C8C82?text=${label}`;

// Result and note text for each client comes from t.gallery.clients, in the same order.
const CLIENTS = ['Marko, 34', 'Elena, 28', 'David, 41', 'Nina, 31', 'Tom, 25', 'Sara, 37'].map((name) => ({
  name,
  before: placeholder('Before'),
  now: placeholder('Now'),
}));

function TransformationCard({ client }) {
  const { t } = useLanguage();
  const firstName = client.name.split(',')[0];
  const photos = [
    { id: 'before', label: t.gallery.before, src: client.before, tag: 'bg-white' },
    { id: 'now', label: t.gallery.now, src: client.now, tag: 'bg-yellow' },
  ];

  return (
    <article className="group border-3 border-ink bg-white shadow-brutal transition duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-lg motion-reduce:transition-none">
      <div className="grid grid-cols-2 gap-[3px] border-b-3 border-ink bg-ink">
        {photos.map((photo) => (
          <div key={photo.id} className="relative aspect-[3/4] overflow-hidden bg-[#EFEFE7]">
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
  const { t } = useLanguage();

  return (
    <section id="results" className="border-b-3 border-ink bg-cream py-16 md:py-24">
      <div className="wrap">
        <SectionHeading kicker={t.gallery.kicker} title={t.gallery.title}>
          {t.gallery.intro}
        </SectionHeading>

        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client, i) => (
            <TransformationCard key={client.name} client={{ ...client, ...t.gallery.clients[i] }} />
          ))}
        </div>
      </div>
    </section>
  );
}
