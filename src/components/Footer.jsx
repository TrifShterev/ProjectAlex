const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#results', label: 'Results' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

// Replace with the real profile URLs.
const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'TikTok', href: 'https://tiktok.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
  { label: 'Facebook', href: 'https://facebook.com/' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-yellow">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <a href="#home" className="font-display text-xl font-black uppercase tracking-[0.02em]">
            Alex <span className="border-3 border-yellow bg-yellow px-2 py-0.5 text-ink">Forge</span>
          </a>
          <p className="mt-4 max-w-[36ch] text-sm text-white">
            Personal training and healthy nutrition coaching — in the gym and online.
          </p>
          <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:bg-yellow hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Follow the journey</p>
          <ul className="flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Alex Forge on ${social.label} (opens in a new tab)`}
                  className="inline-block border-2 border-yellow px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-yellow hover:text-ink"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-yellow/30 py-6 text-center text-xs font-bold uppercase tracking-[0.16em]">
        © {new Date().getFullYear()} Alex Forge — Train Hard · Eat Smart · See Results
      </div>
    </footer>
  );
}
