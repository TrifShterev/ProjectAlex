import { useState } from 'react';
import Button from './Button';
import SectionHeading from './SectionHeading';

// Submissions are delivered by Web3Forms (free, no account needed):
// enter your email at https://web3forms.com, then paste the access key it emails you here.
// While empty, the form only shows the thank-you message (nothing is sent).
const WEB3FORMS_ACCESS_KEY = '54f46f44-d384-464a-b008-edb7c68c26e5';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const GOALS = ['Lose fat', 'Build muscle', 'Recomposition', 'General health'];
const INITIAL_FORM = { name: '', email: '', phone: '', goal: GOALS[0], message: '' };

const CONTACTS = [
  { icon: '✉', label: 'Email', value: 'alex@alexforge.com', href: 'mailto:alex@alexforge.com' },
  { icon: '☎', label: 'Phone', value: '+1 555 000 000', href: 'tel:+15550000000' },
  { icon: '◍', label: 'WhatsApp', value: '+1 555 000 000', href: 'https://wa.me/15550000000', external: true },
  { icon: '◎', label: 'Instagram', value: '@alexforge.fit', href: 'https://instagram.com/', external: true },
];

const HOURS = [
  { days: 'Mon – Fri', time: '08:00 – 20:00' },
  { days: 'Saturday', time: '09:00 – 14:00' },
  { days: 'Sunday', time: 'Closed' },
];

const labelClass = 'mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em]';
const inputClass =
  'w-full border-3 border-ink bg-paper px-[15px] py-[13px] text-[15px] text-ink outline-none transition-colors placeholder:text-[#8C8C82] focus:bg-yellow';
const cardClass = 'border-3 border-ink bg-white p-6 shadow-brutal sm:p-[30px]';
const cardTitleClass =
  'mb-[22px] inline-block bg-ink px-3 py-[5px] text-xs font-black tracking-[0.18em] text-yellow';

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    // Sent as FormData (not JSON) so the browser makes a simple request with no CORS preflight —
    // Web3Forms rejects JSON preflights from the browser.
    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', `New consultation request from ${form.name}`);
    payload.append('from_name', 'Alex Forge website');
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setForm(INITIAL_FORM);
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="wrap">
        <SectionHeading kicker="Let's Start" title="Book your free consultation">
          Fill in the form and I'll get back to you within 24 hours with your first assessment.
        </SectionHeading>

        <div className="grid items-start gap-9 lg:grid-cols-[1.1fr_0.9fr]">
          {status === 'sent' ? (
            <div role="status" className="border-3 border-ink bg-yellow p-6 shadow-brutal sm:p-9">
              <p className="font-display text-[clamp(28px,4vw,40px)] font-black uppercase leading-none">Message sent!</p>
              <p className="mt-4 max-w-[46ch]">
                Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — I'll get back to you within 24 hours with
                your first assessment.
              </p>
              <Button variant="white" onClick={reset} className="mt-8">
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-3 border-ink bg-white p-6 shadow-brutal sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-[18px]">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Smith"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 555 000 000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="goal" className={labelClass}>
                    Your goal
                  </label>
                  <div className="relative">
                    <select
                      id="goal"
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none pr-10`}
                    >
                      {GOALS.map((goal) => (
                        <option key={goal}>{goal}</option>
                      ))}
                    </select>
                    <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-sm">
                      ▼
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className={labelClass}>
                  Tell me about yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Age, current training, eating habits, what you want to achieve..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[116px] resize-y`}
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-5 border-3 border-ink bg-[#ffd6d6] px-4 py-3 text-sm font-bold">
                  Something went wrong — please try again or email me directly.
                </p>
              )}

              <Button type="submit" block className="mt-6" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </Button>
              <p className="mt-[18px] text-center text-[12.5px] font-medium">
                Or email me directly at{' '}
                <a href="mailto:alex@alexforge.com" className="border-b-2 border-ink bg-yellow font-bold">
                  alex@alexforge.com
                </a>
              </p>
            </form>
          )}

          <div className="space-y-[26px]">
            <div className={cardClass}>
              <h3 className={cardTitleClass}>Personal Contacts</h3>
              {CONTACTS.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  {...(contact.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center gap-4 border-b-3 border-ink py-3.5 transition-all last:border-b-0 last:pb-0 hover:bg-yellow hover:pl-2.5"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-[42px] shrink-0 place-items-center border-3 border-ink bg-yellow text-base transition-colors group-hover:bg-white"
                  >
                    {contact.icon}
                  </span>
                  <span>
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em]">{contact.label}</span>
                    <span className="block text-[15px] font-bold break-words">{contact.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className={cardClass}>
              <h3 className={cardTitleClass}>Availability</h3>
              <ul className="text-[15px] font-medium leading-loose">
                {HOURS.map((row) => (
                  <li key={row.days}>
                    <b className="bg-yellow px-1.5 font-extrabold">{row.days}</b> · {row.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
