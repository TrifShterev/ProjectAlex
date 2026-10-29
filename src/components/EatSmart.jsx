import { useEffect, useRef } from 'react';
import alexCooking from '../assets/alex-cooking.jpg';
import eatSmartEn from '../assets/eat-smart-en.mp4';
import eatSmartFi from '../assets/eat-smart-fi.mp4';
import { useLanguage } from '../i18n/LanguageContext';
import Button from './Button';
import SectionHeading from './SectionHeading';

// Only languages listed here show the video — add `bg` once the Bulgarian cut exists.
const VIDEOS = { en: eatSmartEn, fi: eatSmartFi };

/** Muted looping video that plays only while at least half of it is on screen. */
function AutoplayVideo({ src, label }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const video = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // play() rejects when the browser blocks autoplay — the controls still let visitors start it.
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      width="1344"
      height="768"
      className="block aspect-7/4 w-full bg-ink"
    />
  );
}

export default function EatSmart() {
  const { lang, t } = useLanguage();
  const video = VIDEOS[lang];

  return (
    <section id="eat-smart" className="border-b-3 border-ink bg-yellow py-16 md:py-24">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="relative">
            <div className="overflow-hidden border-3 border-ink shadow-brutal">
              <img
                src={alexCooking}
                alt={t.eatSmart.imageAlt}
                loading="lazy"
                width="1600"
                height="904"
                className="aspect-4/3 w-full object-cover object-[65%_center]"
              />
            </div>
            <figcaption className="absolute top-4 left-4 bg-ink px-4 py-2 font-display text-sm font-black uppercase tracking-[0.12em] text-yellow">
              {t.eatSmart.caption}
            </figcaption>
          </figure>

          <div>
            <SectionHeading kicker={t.eatSmart.kicker} title={t.eatSmart.title} className="mb-7" />

            <p className="text-[#333]">{t.eatSmart.text}</p>
            <p className="mt-4 text-sm text-[#333]">
              Learn more from the{' '}
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-ink bg-white font-bold"
              >
                World Health Organization healthy diet guidance
              </a>{' '}
              and{' '}
              <a
                href="https://examine.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-ink bg-white font-bold"
              >
                evidence-based nutrition research at Examine
              </a>
              .
            </p>

            <ul className="mt-6 space-y-3">
              {t.eatSmart.points.map((point, i) => (
                <li key={i} className="flex gap-3 font-medium">
                  <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 bg-ink" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contact" variant="blue">
                {t.eatSmart.cta}
              </Button>
            </div>
          </div>
        </div>

        {video && (
          <figure className="mx-auto mt-12 max-w-3xl overflow-hidden border-3 border-ink shadow-brutal md:mt-16">
            <AutoplayVideo src={video} label={t.eatSmart.videoLabel} />
          </figure>
        )}
      </div>
    </section>
  );
}
