const VARIANTS = {
  yellow: 'bg-yellow text-ink',
  white: 'bg-white text-ink',
  blue: 'bg-blue text-white',
};

/**
 * Brutalist button from the design mock: thick border, hard shadow,
 * and a "press down" hover. Renders an <a> when `href` is given, otherwise a <button>.
 */
export default function Button({ href, variant = 'yellow', block = false, className = '', children, ...props }) {
  const classes = [
    'inline-block cursor-pointer border-3 border-ink px-7 py-[15px] font-display text-xs font-extrabold uppercase tracking-[0.14em]',
    'shadow-brutal-sm transition duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#000]',
    'disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none',
    VARIANTS[variant],
    block ? 'w-full text-center' : '',
    className,
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
