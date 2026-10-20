import { useLanguage } from '../i18n/LanguageContext';

export default function Ticker() {
  const { t } = useLanguage();
  // Each half is repeated so the loop stays seamless on very wide screens.
  const half = Array(3).fill(t.ticker).join(' ');

  return (
    <div className="overflow-hidden whitespace-nowrap bg-ink py-[11px] text-xs font-bold uppercase tracking-[0.22em] text-yellow">
      <div className="inline-block animate-ticker motion-reduce:animate-none">
        <span className="px-7">{half}</span>
        <span className="px-7" aria-hidden="true">
          {half}
        </span>
      </div>
    </div>
  );
}
