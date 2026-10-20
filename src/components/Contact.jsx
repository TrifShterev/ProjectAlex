import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Button from './Button';
import SectionHeading from './SectionHeading';

// Submissions are delivered by Web3Forms (free, no account needed):
// enter your email at https://web3forms.com, then paste the access key it emails you here.
// While empty, the form only shows the thank-you message (nothing is sent).
const WEB3FORMS_ACCESS_KEY = '54f46f44-d384-464a-b008-edb7c68c26e5';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// The form stores a goal key, so the choice survives a language switch; labels come from t.contact.goals.
const GOALS = ['loseFat', 'buildMuscle', 'recomposition', 'generalHealth'];
const INITIAL_FORM = { name: '', email: '', phone: '', goal: GOALS[0], message: '' };

// Channel names come from t.contact.channels.
const CONTACTS = [
  { icon: '✉', channel: 'email', value: 'alex@alexforge.com', href: 'mailto:alex@alexforge.com' },
  { icon: '☎', channel: 'phone', value: '+1 555 000 000', href: 'tel:+15550000000' },
  { icon: '◍', channel: 'whatsapp', value: '+1 555 000 000', href: 'https://wa.me/15550000000', external: true },
  { icon: '◎', channel: 'instagram', value: '@alexforge.fit', href: 'https://instagram.com/', external: true },
];

const labelClass = 'mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em]';
const inputClass =
  'w-full border-3 border-ink bg-paper px-[15px] py-[13px] text-[15px] text-ink outline-none transition-colors placeholder:text-[#8C8C82] focus:bg-yellow';
const cardClass = 'border-3 border-ink bg-white p-6 shadow-brutal sm:p-[30px]';
const cardTitleClass =
  'mb-[22px] inline-block bg-ink px-3 py-[5px] text-xs font-black tracking-[0.18em] text-yellow';

export default function Contact() {
  const { lang, t } = useLanguage();
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
    // The subject stays in English for Alex's inbox; the language tag shows which version the visitor used.
    const language = lang.toUpperCase();
    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', `New consultation request from ${form.name} (${language})`);
    payload.append('from_name', 'Alex Forge website');
    const fields = { ...form, goal: t.contact.goals[form.goal], language };
    Object.entries(fields).forEach(([key, value]) => payload.append(key, value));

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
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title}>
          {t.contact.intro}
        </SectionHeading>

        <div className="grid items-start gap-9 lg:grid-cols-[1.1fr_0.9fr]">
          {status === 'sent' ? (
            <div role="status" className="border-3 border-ink bg-yellow p-6 shadow-brutal sm:p-9">
              <p className="font-display text-[clamp(28px,4vw,40px)] font-black uppercase leading-none">
                {t.contact.sentTitle}
              </p>
              <p className="mt-4 max-w-[46ch]">{t.contact.sentThanks(form.name.split(' ')[0])}</p>
              <Button variant="white" onClick={reset} className="mt-8">
                {t.contact.sendAnother}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-3 border-ink bg-white p-6 shadow-brutal sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-[18px]">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {t.contact.labels.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t.contact.placeholders.name}
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t.contact.labels.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t.contact.placeholders.email}
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    {t.contact.labels.phone}
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
                    {t.contact.labels.goal}
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
                        <option key={goal} value={goal}>
                          {t.contact.goals[goal]}
                        </option>
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
                  {t.contact.labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t.contact.placeholders.message}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[116px] resize-y`}
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-5 border-3 border-ink bg-[#ffd6d6] px-4 py-3 text-sm font-bold">
                  {t.contact.error}
                </p>
              )}

              <Button type="submit" block className="mt-6" disabled={status === 'sending'}>
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </Button>
              <p className="mt-[18px] text-center text-[12.5px] font-medium">
                {t.contact.emailDirect}{' '}
                <a href="mailto:alex@alexforge.com" className="border-b-2 border-ink bg-yellow font-bold">
                  alex@alexforge.com
                </a>
              </p>
            </form>
          )}

          <div className="space-y-[26px]">
            <div className={cardClass}>
              <h3 className={cardTitleClass}>{t.contact.contactsTitle}</h3>
              {CONTACTS.map((contact) => (
                <a
                  key={contact.channel}
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
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em]">
                      {t.contact.channels[contact.channel]}
                    </span>
                    <span className="block text-[15px] font-bold break-words">{contact.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className={cardClass}>
              <h3 className={cardTitleClass}>{t.contact.availabilityTitle}</h3>
              <ul className="text-[15px] font-medium leading-loose">
                {t.contact.hours.map((row, i) => (
                  <li key={i}>
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
