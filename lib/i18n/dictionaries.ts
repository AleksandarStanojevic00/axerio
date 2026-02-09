import { Dictionary, Language } from "./types";

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      work: "Work",
      process: "Process",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      bookCall: "Book a Call",
    },
    hero: {
      badge: "Design-forward web development agency",
      title: "Web experiences that turn attention into revenue.",
      subtitle:
        "We help ambitious brands launch premium websites and web apps that look exceptional, load fast, and convert consistently.",
      primaryCta: "Book a Call",
      secondaryCta: "See Work",
      stats: [
        { label: "Projects delivered", value: "120+" },
        { label: "Average client rating", value: "4.9/5" },
        { label: "Avg. launch time", value: "5 weeks" },
      ],
    },
    socialProof: {
      title: "Trusted by fast-moving teams across Europe and North America",
      logos: ["NovaPay", "Greenvault", "Urbanly", "Altura Labs", "Monobit"],
      metrics: [
        { label: "Leads generated for clients", value: "+210%" },
        { label: "Average Core Web Vitals score", value: "95+" },
        { label: "Retention after 12 months", value: "92%" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Everything you need to ship with confidence.",
      description:
        "From strategy to launch, we build digital products that balance aesthetics, performance, and business outcomes.",
      items: [
        {
          title: "High-Converting Websites",
          description: "Marketing websites crafted to improve trust, clarity, and conversion at every scroll.",
        },
        {
          title: "E-commerce Development",
          description: "Fast, scalable storefronts optimized for AOV growth and frictionless checkout flows.",
        },
        {
          title: "Technical SEO",
          description: "SEO architecture, on-page optimization, and performance tuning that drive organic growth.",
        },
        {
          title: "UI/UX Design Systems",
          description: "Reusable design systems that keep your brand consistent across every touchpoint.",
        },
        {
          title: "Maintenance & Support",
          description: "Proactive updates, monitoring, and improvements so your product stays secure and fast.",
        },
        {
          title: "Custom Web Apps",
          description: "Tailored platforms and internal tools built for your exact workflow and business logic.",
        },
      ],
    },
    work: {
      eyebrow: "Featured Work",
      title: "Selected projects with measurable impact.",
      description: "A snapshot of what happens when strategy, design, and engineering align.",
      cases: [
        {
          name: "Finpulse",
          industry: "Fintech SaaS",
          outcome: "Increased demo bookings by 64% in the first quarter.",
          tags: ["Next.js", "Framer Motion", "Analytics"],
        },
        {
          name: "Orion Commerce",
          industry: "DTC E-commerce",
          outcome: "Raised checkout conversion by 37% after full UX rebuild.",
          tags: ["Shopify Headless", "A/B Testing", "SEO"],
        },
        {
          name: "Medgrid",
          industry: "HealthTech",
          outcome: "Cut page load times from 4.2s to 1.1s on key landing pages.",
          tags: ["Performance", "Accessibility", "Design System"],
        },
        {
          name: "Vanta Homes",
          industry: "Real Estate",
          outcome: "Generated 3.1x more qualified leads in 8 weeks.",
          tags: ["CRM Integrations", "Lead Funnels", "CRO"],
        },
      ],
    },
    process: {
      eyebrow: "Our Process",
      title: "A clear system from first call to launch day.",
      description: "We keep communication tight, milestones transparent, and execution focused.",
      steps: [
        {
          title: "Discover",
          description: "We map your goals, market, and conversion bottlenecks to define the right scope.",
        },
        {
          title: "Design",
          description: "We craft wireframes and polished UI that align with your brand and customer journey.",
        },
        {
          title: "Build",
          description: "We develop a fast, scalable product with clean code and robust QA checkpoints.",
        },
        {
          title: "Launch",
          description: "We deploy, measure, and iterate using real user behavior and business metrics.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say after shipping with Axerio.",
      description: "Short feedback from founders and marketing leaders we partnered with.",
      items: [
        {
          quote:
            "Axerio transformed our web presence. The new site feels premium and our inbound leads doubled within two months.",
          name: "Maya Carter",
          role: "Head of Growth, Finpulse",
        },
        {
          quote:
            "Their process was incredibly smooth. We got a clear roadmap, strong design direction, and reliable development.",
          name: "Nikola Petrovic",
          role: "Co-Founder, Orion Commerce",
        },
        {
          quote:
            "The team balances design and performance better than any agency we worked with before. Highly recommended.",
          name: "Lena Hoffman",
          role: "Marketing Director, Medgrid",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Flexible packages built around your growth stage.",
      description: "Transparent scope, predictable timelines, and no hidden surprises.",
      tiers: [
        {
          name: "Starter",
          price: "€2,500+",
          description: "Perfect for early-stage teams launching their first serious website.",
          features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "2 weeks support"],
          cta: "Start Starter",
          featured: false,
        },
        {
          name: "Growth",
          price: "€6,000+",
          description: "For brands that need stronger conversion and polished digital positioning.",
          features: ["Up to 12 pages", "Advanced animations", "SEO + analytics", "6 weeks support"],
          cta: "Choose Growth",
          featured: true,
        },
        {
          name: "Pro",
          price: "€12,000+",
          description: "Custom implementation for complex products and performance-first teams.",
          features: ["Custom app features", "Design system", "Integrations", "Priority support"],
          cta: "Talk to Us",
          featured: false,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions before we start.",
      description: "If you need a custom setup, we tailor everything to your goals.",
      items: [
        {
          question: "How long does a typical project take?",
          answer: "Most projects launch in 4 to 8 weeks, depending on complexity and feedback cycles.",
        },
        {
          question: "Do you only work with Serbian companies?",
          answer: "No. We work remotely with clients across Europe and North America.",
        },
        {
          question: "Can you redesign an existing website?",
          answer: "Yes. We can refresh design, improve performance, and optimize conversion without starting from zero.",
        },
        {
          question: "Do you provide copywriting and content help?",
          answer: "Yes. We support messaging structure, microcopy, and content direction for high-converting pages.",
        },
        {
          question: "Will my team be able to edit content after launch?",
          answer: "Absolutely. We build editable sections and provide a clean handoff with documentation.",
        },
        {
          question: "Do you offer long-term support?",
          answer: "Yes, we provide maintenance retainers for updates, security patches, and iterative improvements.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about your project.",
      description: "Share your goals and we will come back with a practical next step within one business day.",
      fields: {
        name: "Name",
        email: "Email",
        company: "Company",
        budget: "Budget",
        message: "Message",
      },
      placeholders: {
        name: "Your full name",
        email: "you@company.com",
        company: "Company or brand name",
        message: "What are you building and what outcome do you want?",
      },
      budgetOptions: ["€2k - €5k", "€5k - €10k", "€10k - €20k", "€20k+"],
      submit: "Send Inquiry",
      submitting: "Sending...",
      success: "Message sent. We will contact you shortly.",
      fallback: "Prefer email? Reach us directly at",
      fallbackLink: "hello@axerio.agency",
      validation: {
        required: "Please fill out all required fields.",
        email: "Please enter a valid email address.",
        messageMin: "Message should be at least 20 characters.",
      },
    },
    schedule: {
      title: "Need a faster start?",
      description: "Book a 30-minute strategy call and get a clear execution plan.",
      button: "Schedule a Call",
      modalTitle: "Schedule your strategy call",
      modalDescription: "Use our Calendly to pick a slot that fits your schedule.",
      modalCta: "Open Calendly",
      modalClose: "Close",
    },
    footer: {
      brand: "Axerio",
      statement: "Premium web development agency for ambitious companies.",
      rights: "All rights reserved.",
      links: {
        privacy: "Privacy",
        terms: "Terms",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        dribbble: "Dribbble",
      },
    },
    languageLabel: "Language",
    themeLabel: "Theme",
  },
  sr: {
    nav: {
      home: "Početna",
      services: "Usluge",
      work: "Radovi",
      process: "Proces",
      pricing: "Cene",
      faq: "Pitanja",
      contact: "Kontakt",
      bookCall: "Zakaži poziv",
    },
    hero: {
      badge: "Agencija za web razvoj i premium dizajn",
      title: "Web iskustva koja pažnju pretvaraju u prodaju.",
      subtitle:
        "Pomažemo ambicioznim brendovima da lansiraju premium sajtove i web aplikacije koje izgledaju odlično, rade brzo i konvertuju stabilno.",
      primaryCta: "Zakaži poziv",
      secondaryCta: "Pogledaj radove",
      stats: [
        { label: "Isporučenih projekata", value: "120+" },
        { label: "Prosečna ocena klijenata", value: "4.9/5" },
        { label: "Prosečno vreme lansiranja", value: "5 nedelja" },
      ],
    },
    socialProof: {
      title: "Partner timovima koji brzo rastu širom Evrope i Severne Amerike",
      logos: ["NovaPay", "Greenvault", "Urbanly", "Altura Labs", "Monobit"],
      metrics: [
        { label: "Više leadova za klijente", value: "+210%" },
        { label: "Prosečan Core Web Vitals skor", value: "95+" },
        { label: "Zadržavanje posle 12 meseci", value: "92%" },
      ],
    },
    services: {
      eyebrow: "Usluge",
      title: "Sve što vam treba za sigurno lansiranje.",
      description:
        "Od strategije do objave, gradimo digitalne proizvode koji spajaju estetiku, performanse i poslovne rezultate.",
      items: [
        {
          title: "Sajtovi koji konvertuju",
          description: "Marketing sajtovi koji podižu poverenje, jasnoću i konverziju u svakom skrolu.",
        },
        {
          title: "E-commerce razvoj",
          description: "Brze i skalabilne prodavnice optimizovane za veću prosečnu korpu i lak checkout.",
        },
        {
          title: "Tehnički SEO",
          description: "SEO arhitektura, on-page optimizacija i tuning performansi za organski rast.",
        },
        {
          title: "UI/UX dizajn sistemi",
          description: "Sistemi komponenti koji čuvaju konzistentan vizuelni identitet kroz sve kanale.",
        },
        {
          title: "Održavanje i podrška",
          description: "Proaktivna unapređenja i monitoring da vaš proizvod ostane siguran i brz.",
        },
        {
          title: "Custom web aplikacije",
          description: "Platforme i interni alati prilagođeni tačno vašem procesu i poslovnoj logici.",
        },
      ],
    },
    work: {
      eyebrow: "Izdvojeni radovi",
      title: "Odabrani projekti sa merljivim rezultatima.",
      description: "Kada se strategija, dizajn i inženjering usklade, rezultat je rast.",
      cases: [
        {
          name: "Finpulse",
          industry: "Fintech SaaS",
          outcome: "Povećanje zakazanih demo sastanaka za 64% u prvom kvartalu.",
          tags: ["Next.js", "Framer Motion", "Analitika"],
        },
        {
          name: "Orion Commerce",
          industry: "DTC E-commerce",
          outcome: "Rast checkout konverzije za 37% nakon potpune UX rekonstrukcije.",
          tags: ["Shopify Headless", "A/B testiranje", "SEO"],
        },
        {
          name: "Medgrid",
          industry: "HealthTech",
          outcome: "Smanjeno učitavanje ključnih stranica sa 4.2s na 1.1s.",
          tags: ["Performanse", "Pristupačnost", "Dizajn sistem"],
        },
        {
          name: "Vanta Homes",
          industry: "Nekretnine",
          outcome: "3.1x više kvalifikovanih leadova za 8 nedelja.",
          tags: ["CRM integracije", "Lead funnel", "CRO"],
        },
      ],
    },
    process: {
      eyebrow: "Naš proces",
      title: "Jasan sistem od prvog poziva do lansiranja.",
      description: "Komunikacija je jasna, rokovi transparentni, a realizacija fokusirana.",
      steps: [
        {
          title: "Analiza",
          description: "Mapiramo ciljeve, tržište i tačke gubitka konverzije da definišemo pravi opseg.",
        },
        {
          title: "Dizajn",
          description: "Pravimo wireframe i finalni UI koji prati vaš brend i putanju korisnika.",
        },
        {
          title: "Razvoj",
          description: "Razvijamo brz i skalabilan proizvod sa čistim kodom i preciznim QA koracima.",
        },
        {
          title: "Lansiranje",
          description: "Objavljujemo, merimo i iteriramo na osnovu ponašanja korisnika i KPI metrika.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Utisci klijenata",
      title: "Šta klijenti kažu posle saradnje sa Axerio timom.",
      description: "Kratki komentari osnivača i marketinških lidera sa kojima smo radili.",
      items: [
        {
          quote:
            "Axerio je potpuno promenio naš online nastup. Novi sajt izgleda premium i broj upita se udvostručio.",
          name: "Maja Karter",
          role: "Head of Growth, Finpulse",
        },
        {
          quote:
            "Proces je bio izuzetno organizovan. Dobili smo jasan roadmap, odličan dizajn i stabilan razvoj.",
          name: "Nikola Petrović",
          role: "Suosnivač, Orion Commerce",
        },
        {
          quote:
            "Retko koja agencija jednako dobro balansira dizajn i performanse. Topla preporuka.",
          name: "Lena Hofman",
          role: "Marketing direktor, Medgrid",
        },
      ],
    },
    pricing: {
      eyebrow: "Cene",
      title: "Fleksibilni paketi prema fazi vašeg rasta.",
      description: "Transparentan opseg, jasni rokovi i bez skrivenih troškova.",
      tiers: [
        {
          name: "Starter",
          price: "€2.500+",
          description: "Idealno za timove koji lansiraju prvi ozbiljan sajt.",
          features: ["Do 5 stranica", "Responsive dizajn", "Osnovni SEO", "2 nedelje podrške"],
          cta: "Pokreni Starter",
          featured: false,
        },
        {
          name: "Growth",
          price: "€6.000+",
          description: "Za brendove kojima treba jača konverzija i premium digitalni nastup.",
          features: ["Do 12 stranica", "Napredne animacije", "SEO + analitika", "6 nedelja podrške"],
          cta: "Izaberi Growth",
          featured: true,
        },
        {
          name: "Pro",
          price: "€12.000+",
          description: "Custom realizacija za složene proizvode i timove fokusirane na performanse.",
          features: ["Custom funkcionalnosti", "Dizajn sistem", "Integracije", "Priority podrška"],
          cta: "Pričajmo",
          featured: false,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Najčešća pitanja pre početka saradnje.",
      description: "Ako vam treba specifično rešenje, prilagođavamo sve vašim ciljevima.",
      items: [
        {
          question: "Koliko traje tipičan projekat?",
          answer: "Većina projekata se lansira za 4 do 8 nedelja, u zavisnosti od obima i feedback ciklusa.",
        },
        {
          question: "Da li radite samo sa firmama iz Srbije?",
          answer: "Ne. Radimo remote sa klijentima širom Evrope i Severne Amerike.",
        },
        {
          question: "Možete li redizajnirati postojeći sajt?",
          answer: "Da. Možemo osvežiti dizajn, ubrzati performanse i povećati konverziju bez kreiranja od nule.",
        },
        {
          question: "Da li pomažete oko copywriting-a?",
          answer: "Da. Pomažemo u strukturi poruka, microcopy-ju i sadržajnom pravcu za stranice koje prodaju.",
        },
        {
          question: "Da li naš tim može da menja sadržaj nakon lansiranja?",
          answer: "Apsolutno. Pravimo editabilne sekcije i predajemo urednu dokumentaciju.",
        },
        {
          question: "Da li nudite dugoročnu podršku?",
          answer: "Da, imamo retainer modele za održavanje, bezbednosne nadogradnje i kontinuirana poboljšanja.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Recite nam šta želite da izgradite.",
      description: "Pošaljite nam osnovne informacije i dobićete konkretan sledeći korak u roku od jednog dana.",
      fields: {
        name: "Ime i prezime",
        email: "Email",
        company: "Kompanija",
        budget: "Budžet",
        message: "Poruka",
      },
      placeholders: {
        name: "Vaše ime i prezime",
        email: "vi@kompanija.com",
        company: "Naziv kompanije ili brenda",
        message: "Šta gradite i koji rezultat želite?",
      },
      budgetOptions: ["€2k - €5k", "€5k - €10k", "€10k - €20k", "€20k+"],
      submit: "Pošalji upit",
      submitting: "Slanje...",
      success: "Poruka je uspešno poslata. Javljamo se uskoro.",
      fallback: "Više volite email? Pišite nam direktno na",
      fallbackLink: "hello@axerio.agency",
      validation: {
        required: "Popunite sva obavezna polja.",
        email: "Unesite ispravnu email adresu.",
        messageMin: "Poruka treba da ima najmanje 20 karaktera.",
      },
    },
    schedule: {
      title: "Treba vam brži početak?",
      description: "Zakažite 30-minutni strateški poziv i dobijte jasan plan realizacije.",
      button: "Zakaži poziv",
      modalTitle: "Zakažite strateški poziv",
      modalDescription: "Otvorite naš Calendly i izaberite termin koji vam odgovara.",
      modalCta: "Otvori Calendly",
      modalClose: "Zatvori",
    },
    footer: {
      brand: "Axerio",
      statement: "Premium web development agencija za ambiciozne kompanije.",
      rights: "Sva prava zadržana.",
      links: {
        privacy: "Privatnost",
        terms: "Uslovi",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        dribbble: "Dribbble",
      },
    },
    languageLabel: "Jezik",
    themeLabel: "Tema",
  },
};
