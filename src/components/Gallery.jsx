import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

// Client photos live in public/gallery/<id>-before.jpg and <id>-now.jpg (full-body shots).
// Faces are fogged with a CSS blur plus a soft mist over the head area; the body stays readable.
// Result and note text for each client comes from t.gallery.clients, in the same order.
const CLIENTS = [
  { id: 'marko', name: 'Marko, 34' },
  { id: 'elena', name: 'Elena, 28' },
  { id: 'david', name: 'David, 41' },
];

function TransformationCard({ client }) {
  const { t } = useLanguage();
  const firstName = client.name.split(',')[0];
  const photos = [
    { id: 'before', label: t.gallery.before, tag: 'bg-white' },
    { id: 'now', label: t.gallery.now, tag: 'bg-yellow' },
  ];

  return (
    <article className="group border-3 border-ink bg-white shadow-brutal transition duration-200 hover:-translate-x-0.75 hover:-translate-y-0.75 hover:shadow-brutal-lg motion-reduce:transition-none">
      <div className="grid grid-cols-2 gap-0.75 border-b-3 border-ink bg-ink">
        {photos.map((photo) => (
          <div key={photo.id} className="relative aspect-3/4 overflow-hidden bg-[#EFEFE7]">
            <img
              src={`/gallery/${client.id}-${photo.id}.jpg`}
              alt={`${firstName} — ${photo.label.toLowerCase()}`}
              loading="lazy"
              width="300"
              height="400"
              className="size-full object-cover blur-[3px] transition duration-300 group-hover:scale-105 motion-reduce:transition-none"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-[radial-gradient(ellipse_at_50%_45%,rgba(239,239,231,0.95),rgba(239,239,231,0.6)_55%,transparent_75%)] backdrop-blur-xl" />
            <span
              className={`absolute top-2.5 left-2.5 border-2 border-ink px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.14em] ${photo.tag}`}
            >
              {photo.label}
            </span>
          </div>
        ))}
      </div>
      <div className="p-5.5">
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

        <div className="grid gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client, i) => (
            <TransformationCard key={client.name} client={{ ...client, ...t.gallery.clients[i] }} />
          ))}
        </div>
      </div>
    </section>
  );
}
