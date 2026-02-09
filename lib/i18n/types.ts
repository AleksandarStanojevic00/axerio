export type Language = "en" | "sr";

export type Dictionary = {
  nav: {
    home: string;
    services: string;
    work: string;
    process: string;
    pricing: string;
    faq: string;
    contact: string;
    bookCall: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  socialProof: {
    title: string;
    logos: string[];
    metrics: Array<{
      label: string;
      value: string;
    }>;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    cases: Array<{
      name: string;
      industry: string;
      outcome: string;
      tags: string[];
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
    }>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    tiers: Array<{
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
      featured: boolean;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    fields: {
      name: string;
      email: string;
      company: string;
      budget: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    budgetOptions: string[];
    submit: string;
    submitting: string;
    success: string;
    fallback: string;
    fallbackLink: string;
    validation: {
      required: string;
      email: string;
      messageMin: string;
    };
  };
  schedule: {
    title: string;
    description: string;
    button: string;
    modalTitle: string;
    modalDescription: string;
    modalCta: string;
    modalClose: string;
  };
  footer: {
    brand: string;
    statement: string;
    rights: string;
    links: {
      privacy: string;
      terms: string;
      linkedin: string;
      instagram: string;
      dribbble: string;
    };
  };
  languageLabel: string;
  themeLabel: string;
};
