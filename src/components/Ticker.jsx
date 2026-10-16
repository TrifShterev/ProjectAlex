const PHRASE = 'Train hard ★ Eat smart ★ See results ★ Personalised plans ★ No crash diets ★';
// Each half is repeated so the loop stays seamless on very wide screens.
const HALF = Array(3).fill(PHRASE).join(' ');

export default function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-ink py-[11px] text-xs font-bold uppercase tracking-[0.22em] text-yellow">
      <div className="inline-block animate-ticker motion-reduce:animate-none">
        <span className="px-7">{HALF}</span>
        <span className="px-7" aria-hidden="true">
          {HALF}
        </span>
      </div>
    </div>
  );
}
