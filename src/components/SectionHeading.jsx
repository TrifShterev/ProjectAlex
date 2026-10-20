/** Kicker label + big uppercase title + optional intro (the mock's .sec-head). */
export default function SectionHeading({ kicker, title, children, light = false, className = 'mb-12 md:mb-14' }) {
  return (
    <div className={className}>
      <span className="mb-4.5 inline-block bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-yellow">
        {kicker}
      </span>
      <h2 className={`text-[clamp(34px,5vw,58px)] font-black leading-none ${light ? 'text-white' : ''}`}>{title}</h2>
      {children && <p className={`mt-4 max-w-[56ch] ${light ? 'text-white' : 'text-[#333]'}`}>{children}</p>}
    </div>
  );
}
