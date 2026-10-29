// English copy (default language). fi.js and bg.js mirror this shape exactly.
export default {
  meta: {
    title: 'Personalized Fitness & Nutrition Plans | Alex Forge',
    description:
      'Get personalized fitness and nutrition plans from Alex Forge, an online fitness coach for strength, fat loss, and sustainable results. Book your free consult today.',
  },

  nav: {
    links: { about: 'About', services: 'Services', results: 'Results', reviews: 'Reviews', contact: 'Contact' },
    cta: 'Book Free Call',
    mobileCta: 'Book a Free Consultation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainLabel: 'Main',
    mobileLabel: 'Mobile',
    language: 'Change language',
  },

  ticker: 'Train hard ★ Eat smart ★ See results ★ Personalised plans ★ No crash diets ★',

  hero: {
    badge: 'Personal Trainer · Nutrition Coach',
    titleStart: 'Personalized Fitness & Nutrition Plans for',
    titleHighlight: 'Real Results.',
    intro:
      'Get personalized fitness and nutrition plans from an online fitness coach, built around your schedule, goals, training experience, and the foods you enjoy.',
    primaryCta: 'Book a Free Consultation',
    secondaryCta: 'Start Your Transformation',
    highlights: ['1-on-1 gym training', 'Custom meal plans', 'Weekly check-ins'],
    imageAlt: 'Alex Forge online fitness coach curling a dumbbell in the gym',
    consultBadge: 'Free 30-min consult →',
  },

  eatSmart: {
    kicker: 'In My Kitchen · Eat Smart',
    title: 'Healthy Meal Plans That Fit Real Life',
    text: "The food in my plans is the food I cook at home: whole ingredients, simple recipes and real portions. Eating healthy doesn't have to be complicated — or boring.",
    points: ['Whole, simple ingredients', 'Recipes you can prep ahead', 'Portions built around your goal'],
    cta: 'Get My Meal Plan',
    imageAlt: 'Alex in the kitchen mixing a fresh salad with chickpeas, avocado and vegetables',
    caption: 'Eat Smart',
    videoLabel: 'Eat Smart — video from Alex',
  },

  about: {
    imageAlt: 'Alex from behind, showing a defined, muscular back and neck tattoo',
    caption: 'Discipline = Results',
    kicker: 'About Me · Training Philosophy',
    title: 'Discipline builds results',
    paragraphs: [
      "I'm Alex — and I believe the gym teaches you far more than how to lift. Every early alarm, every extra rep and every meal prepped on a Sunday night is a vote for the person you're becoming.",
      "I've spent years learning what actually works, in the gym and in the kitchen, and I turned it into coaching that fits real life: busy jobs, families and all. No shortcuts, no gimmicks — just a clear plan, honest accountability and results you can see in the mirror.",
    ],
    principles: [
      {
        title: 'Consistency beats intensity',
        text: "Repeatable sessions, week after week, outperform heroic efforts you can't sustain.",
      },
      {
        title: 'Food is fuel, not punishment',
        text: 'No crash diets. Real meals you enjoy, built around your goal and your schedule.',
      },
      {
        title: 'Progress you can measure',
        text: 'Tracked lifts, check-ins and photos — every adjustment is based on your data.',
      },
    ],
  },

  services: {
    kicker: 'What I Offer',
    title: 'Personalized Fitness & Nutrition Coaching',
    intro: 'Two coaching programs that work on their own — and work even better together.',
    label: 'Service',
    items: [
      {
        title: '1-on-1 Gym Training',
        cta: 'Book a Session',
        description:
          "Personal sessions built around your body, your goal and your level — whether you're stepping into a gym for the first time or chasing a new PR.",
        points: [
          'Full assessment & goal-setting session',
          'Progressive program updated every 4 weeks',
          'Technique coaching on every lift',
          'Weekly check-ins and progress tracking',
        ],
      },
      {
        title: 'Custom Healthy Meal Plans',
        cta: 'Get My Meal Plan',
        description:
          'Real food, real portions, no crash diets. A nutrition plan that fits your taste, your budget and your schedule — and fuels your training.',
        points: [
          'Calorie & macro targets set for your goal',
          'Weekly meal plans with simple recipes',
          'Shopping lists and meal-prep guides',
          'Adjustments as your body changes',
        ],
      },
    ],
  },

  gallery: {
    kicker: 'Real Clients · Real Results',
    title: 'Before & After Fitness Results',
    intro: 'See before and after fitness results from personalized plans written for one specific person. No templates.',
    before: 'Before',
    now: 'Now',
    clients: [
      { result: '−18 kg · 16 weeks', note: 'Strength training 4×/week + high-protein meal plan.' },
      { result: '−9 kg · 20 weeks', note: 'Strength training 3×/week + balanced calorie-deficit meal plan.' },
      { result: '−12 kg · 14 weeks', note: 'Home workouts + simple, family-friendly food plan.' },
    ],
  },

  testimonials: {
    kicker: 'Client Reviews',
    title: 'What clients say',
    intro: "Don't take my word for it — here's what people who put in the work have to say.",
    ratingLabel: 'Rated 5 out of 5',
    items: [
      {
        quote:
          "I'd tried every program online and always quit after a month. Alex gave me a plan that fit my shifts — 16 weeks later I'm down 18 kg and still going.",
        program: 'Gym Training + Meal Plan',
      },
      {
        quote:
          'The meal plans changed everything. No starving, no boring chicken-and-rice — just food I actually like, portioned for my goal. My energy is through the roof.',
        program: 'Custom Meal Plan',
      },
      {
        quote:
          'Alex is strict in the best way. Every session has a purpose, every check-in keeps me honest. I finally understand how to train — not just what to do.',
        program: '1-on-1 Gym Training',
      },
    ],
  },

  contact: {
    kicker: "Let's Start",
    title: 'Get Your Personalized Plan',
    intro:
      "Tell Alex Forge about your goal and get a free consultation for a personalized fitness and nutrition plan. I'll reply within 24 hours.",
    sentTitle: 'Message sent!',
    sentThanks: (name) =>
      `Thanks${name ? `, ${name}` : ''} — I'll get back to you within 24 hours with your first assessment.`,
    sendAnother: 'Send another message',
    labels: {
      name: 'Your name',
      email: 'Email',
      phone: 'Phone (optional)',
      goal: 'Your goal',
      message: 'Tell me about yourself',
    },
    placeholders: {
      name: 'John Smith',
      email: 'john@email.com',
      message: 'Age, current training, eating habits, what you want to achieve...',
    },
    goals: {
      loseFat: 'Lose fat',
      buildMuscle: 'Build muscle',
      recomposition: 'Recomposition',
      generalHealth: 'General health',
    },
    error: 'Something went wrong — please try again or email me directly.',
    send: 'Send Message',
    sending: 'Sending…',
    emailDirect: 'Or email me directly at',
    contactsTitle: 'Personal Contacts',
    channels: { email: 'Email', phone: 'Phone', whatsapp: 'WhatsApp', instagram: 'Instagram' },
    availabilityTitle: 'Availability',
    hours: [
      { days: 'Mon – Fri', time: '08:00 – 20:00' },
      { days: 'Saturday', time: '09:00 – 14:00' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },

  footer: {
    tagline: 'Personal training and healthy nutrition coaching — in the gym and online.',
    navLabel: 'Footer',
    follow: 'Follow the journey',
    socialAria: (network) => `Alex Forge on ${network} (opens in a new tab)`,
    motto: 'Train Hard · Eat Smart · See Results',
  },
};
