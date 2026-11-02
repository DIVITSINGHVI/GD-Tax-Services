// The site is currently English-only. To add another language later, extend this type
// (e.g. "en" | "kn"), add the matching strings to each entry, and re-add a language toggle.
export type Lang = "en";
export type L = Record<Lang, string>;

export type IconName =
  | "calculator"
  | "briefcase"
  | "users"
  | "passport"
  | "shield"
  | "file";

export type Service = {
  slug: string;
  icon: IconName;
  title: L;
  short: L;
  description: L;
  items: L[];
};

/* -------------------------------------------------------------------------- */
/*  UI strings                                                                */
/* -------------------------------------------------------------------------- */

export const ui = {
  nav: {
    home: { en: "Home" },
    services: { en: "Our Services" },
    about: { en: "About Us" },
    contact: { en: "Contact" },
  },
  tagline: {
    en: "Tax · Registration · Documentation",
  },
  call: { en: "Call" },
  callNow: { en: "Call now" },
  whatsapp: { en: "WhatsApp" },
  whatsappUs: { en: "Chat on WhatsApp" },
  enquireWhatsApp: { en: "Enquire on WhatsApp" },
  learnMore: { en: "View details" },
  allServices: { en: "View all services" },
  directions: { en: "Open in Google Maps" },
  phone: { en: "Phone" },
  address: { en: "Address" },
  email: { en: "Email" },
  hours: { en: "Working hours" },
  toBeUpdated: { en: "To be updated" },
  menu: { en: "Menu" },
  closeMenu: { en: "Close menu" },
  language: { en: "Language" },
  quickLinks: { en: "Quick links" },
  contactUs: { en: "Contact us" },
  servingAreas: {
    en: "Serving Chikkanayakanahalli Taluk and Tumakuru District",
  },
  rights: { en: "All rights reserved." },
};

/** Pre-filled WhatsApp message openers. */
export const waMessages = {
  generic: {
    en: "Hello GD TAX SERVICES, I would like to know more about your services.",
  },
  service: {
    en: "Hello GD TAX SERVICES, I would like to enquire about: ",
  },
};

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

export const services: Service[] = [
  {
    slug: "tax-compliance",
    icon: "calculator",
    title: { en: "Tax & Compliance" },
    short: {
      en: "Income tax returns, GST and tax paperwork handled clearly and on time.",
    },
    description: {
      en: "Stay on the right side of tax rules without the stress. We help individuals, salaried people and small businesses file returns, register for GST and keep their tax records in order.",
    },
    items: [
      { en: "GST registration and return filing" },
      { en: "Income Tax Return (ITR) filing" },
      { en: "PAN application and corrections" },
      { en: "TDS-related filings" },
      { en: "Help understanding tax notices" },
      { en: "Basic accounts and bookkeeping support" },
    ],
  },
  {
    slug: "business-registration",
    icon: "briefcase",
    title: { en: "Business & Registration" },
    short: {
      en: "Udyam, GST, licences and registrations to set up your business properly.",
    },
    description: {
      en: "Starting or running a shop or small enterprise? We guide you through the registrations and licences you need, so your business is set up properly from day one.",
    },
    items: [
      { en: "Udyam (MSME) registration" },
      { en: "GST registration for businesses" },
      { en: "Shop & establishment / trade licence" },
      { en: "FSSAI food licence and registration" },
      {
        en: "Partnership firm, LLP and company registration guidance",
      },
    ],
  },
  {
    slug: "pf-employee-services",
    icon: "users",
    title: { en: "PF & Employee Services" },
    short: {
      en: "UAN, PF withdrawals, transfers and employer registrations made simpler.",
    },
    description: {
      en: "Whether you are an employee managing your own PF account or an employer handling staff compliance, we make PF and related services simpler to deal with.",
    },
    items: [
      { en: "UAN activation and KYC updates" },
      { en: "PF withdrawal and claim assistance" },
      { en: "PF balance check and transfer" },
      { en: "Employer PF and ESI registration" },
      {
        en: "Monthly PF / ESI return support for employers",
      },
    ],
  },
  {
    slug: "passport-documentation",
    icon: "passport",
    title: { en: "Passport & Documentation" },
    short: {
      en: "Passport applications, renewals and important ID document support.",
    },
    description: {
      en: "From filling in the application correctly to preparing the right documents, we help you through each step of getting or renewing your passport and other key ID documents.",
    },
    items: [
      { en: "New passport application" },
      { en: "Passport renewal and re-issue" },
      { en: "Appointment booking assistance" },
      {
        en: "Aadhaar, PAN and Voter ID update support",
      },
      { en: "Document checklist and form filling" },
    ],
  },
  {
    slug: "insurance",
    icon: "shield",
    title: { en: "Insurance" },
    short: {
      en: "Life, health, vehicle and business insurance guidance, renewals and claims help.",
    },
    description: {
      en: "Protect your family, vehicle and livelihood. We help you understand your options, choose a suitable policy and stay on top of renewals and claims paperwork.",
    },
    items: [
      { en: "Life and term insurance guidance" },
      { en: "Health insurance for families" },
      { en: "Vehicle insurance purchase and renewal" },
      { en: "Shop and business insurance" },
      { en: "Help with policy documents and claims" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Home page                                                                 */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: {
    en: "Chikkanayakanahalli · Tumakuru",
  },
  title: {
    en: "GST Registration & Income Tax Return Filing, Made Simple",
  },
  text: {
    en: "Trusted local help with GST registration, ITR filing and essential business, PF, passport and insurance services in Chikkanayakanahalli and Tumakuru.",
  },
  points: [
    { en: "Local service for Tumakuru District" },
    { en: "Clear, step-by-step guidance" },
    { en: "Quick help on WhatsApp" },
  ] as L[],
  visitLabel: { en: "Visit our office" },
  visitPlace: {
    en: "Chikkanayakanahalli Taluk, Tumakuru",
  },
};

export const intro = {
  eyebrow: { en: "Welcome" },
  title: {
    en: "A dependable local partner for your paperwork",
  },
  text: {
    en: "Government forms, online portals and filing deadlines can be confusing. GD TAX SERVICES, based in Chikkanayakanahalli Taluk, Tumakuru, helps you get them done correctly — explaining each step clearly so you always know where things stand.",
  },
  values: [
    {
      title: { en: "Clear guidance" },
      text: {
        en: "We tell you exactly which documents are needed before you start.",
      },
    },
    {
      title: { en: "Local & accessible" },
      text: {
        en: "Visit our office, call, or message on WhatsApp — whichever suits you.",
      },
    },
    {
      title: { en: "Plain and simple" },
      text: {
        en: "We explain every step in plain, simple language.",
      },
    },
  ],
};

export const servicesSection = {
  eyebrow: { en: "What we do" },
  title: { en: "Our services" },
  text: {
    en: "Five service areas, one local office. Choose a category to see how we can help.",
  },
  notSure: { en: "Not sure which service you need?" },
  notSureText: {
    en: "Tell us what you are trying to get done and we will point you in the right direction.",
  },
};

export const popular = {
  eyebrow: { en: "Popular requests" },
  title: { en: "Most-requested services" },
  text: {
    en: "Common things people ask us for. Tap any item to message us on WhatsApp with the details already filled in.",
  },
  items: [
    {
      icon: "calculator",
      title: { en: "Income Tax Return (ITR) filing" },
      sub: { en: "Tax & Compliance" },
    },
    {
      icon: "file",
      title: { en: "GST registration & returns" },
      sub: { en: "Tax & Compliance" },
    },
    {
      icon: "briefcase",
      title: { en: "Udyam (MSME) registration" },
      sub: { en: "Business & Registration" },
    },
    {
      icon: "users",
      title: { en: "PF withdrawal & UAN services" },
      sub: { en: "PF & Employee Services" },
    },
    {
      icon: "passport",
      title: { en: "Passport application & renewal" },
      sub: { en: "Passport & Documentation" },
    },
    {
      icon: "shield",
      title: { en: "Insurance renewal & guidance" },
      sub: { en: "Insurance" },
    },
  ] as { icon: IconName; title: L; sub: L }[],
};

export const how = {
  eyebrow: { en: "Simple process" },
  title: { en: "How it works" },
  steps: [
    {
      title: { en: "Get in touch" },
      text: {
        en: "Call, message on WhatsApp or visit our office and tell us what you need.",
      },
    },
    {
      title: { en: "Share your documents" },
      text: {
        en: "We give you a simple checklist. Send clear photos or bring the originals.",
      },
    },
    {
      title: { en: "We prepare & submit" },
      text: {
        en: "We fill in the forms, check the details and complete the process online or with the concerned office.",
      },
    },
    {
      title: { en: "Stay informed" },
      text: {
        en: "You receive acknowledgements and clear next steps until the work is done.",
      },
    },
  ],
};

export const faqs = {
  eyebrow: { en: "Good to know" },
  title: { en: "Frequently asked questions" },
  items: [
    {
      q: { en: "Which services does GD TAX SERVICES offer?" },
      a: {
        en: "We help with tax & compliance, business registration, PF & employee services, passport & documentation, and insurance. See the Services page for details, or call us if you are unsure which category your work falls under.",
      },
    },
    {
      q: { en: "Do I have to visit the office?" },
      a: {
        en: "Not always. You can start with a call or WhatsApp message and share photos of your documents. Some processes, such as biometrics or in-person verification, may need you to attend in person — we will let you know in advance.",
      },
    },
    {
      q: { en: "Which documents will I need?" },
      a: {
        en: "It depends on the service. Tell us what you need and we will send a simple checklist, so you only bring what is required.",
      },
    },
    {
      q: { en: "What are your fees?" },
      a: {
        en: "Fees depend on the type and complexity of the work, plus any government charges. Please call or message us and we will explain the cost clearly before you proceed.",
      },
    },
    {
      q: { en: "Which areas do you serve?" },
      a: {
        en: "We serve Chikkanayakanahalli Taluk and the surrounding areas across Tumakuru District.",
      },
    },
    {
      q: { en: "How long does the work take?" },
      a: {
        en: "Timelines vary by service and by government portal or office processing. We will give you an honest estimate when you contact us.",
      },
    },
  ],
};

export const location = {
  eyebrow: { en: "Find us" },
  title: { en: "Visit us in Tumakuru" },
  text: {
    en: "Our office serves Chikkanayakanahalli Taluk and Tumakuru District. Call ahead and we will be happy to guide you.",
  },
};

export const cta = {
  title: { en: "Ready to get started?" },
  text: {
    en: "Call or message us today and tell us what you need. We will guide you through the next steps.",
  },
};

/* -------------------------------------------------------------------------- */
/*  Services page                                                             */
/* -------------------------------------------------------------------------- */

export const servicesPage = {
  title: { en: "Our Services" },
  text: {
    en: "Tax, registration, PF, passport and insurance support from your local office serving Chikkanayakanahalli Taluk and Tumakuru.",
  },
  helpWith: { en: "Examples of how we can help" },
  note: {
    en: "These are examples of the help we offer. Please call or message us to confirm your specific requirement.",
  },
};

/* -------------------------------------------------------------------------- */
/*  About page                                                                */
/* -------------------------------------------------------------------------- */

export const aboutPage = {
  title: { en: "About GD TAX SERVICES" },
  text: {
    en: "A local tax, registration and documentation service for Chikkanayakanahalli Taluk and Tumakuru District.",
  },
  heading: { en: "Paperwork made clear, close to home" },
  p1: {
    en: "GD TAX SERVICES is a local tax, registration and documentation service based in Chikkanayakanahalli Taluk, Tumakuru, Karnataka 572214. We help individuals, families and small businesses complete important paperwork without confusion or unnecessary trips.",
  },
  p2: {
    en: "From filing returns and registering a business to PF, passport and insurance work, our aim is simple: explain things clearly, tell you exactly what is needed, and help you get it done properly.",
  },
  principlesTitle: { en: "How we work" },
  principles: [
    {
      title: { en: "Clarity first" },
      text: {
        en: "Plain-language explanations with a clear document checklist.",
      },
    },
    {
      title: { en: "Honest communication" },
      text: {
        en: "Costs and timelines explained upfront, before you decide to proceed.",
      },
    },
    {
      title: { en: "Convenient & local" },
      text: {
        en: "A nearby office, plus quick support by phone and WhatsApp.",
      },
    },
  ],
  whoTitle: { en: "Who we help" },
  who: [
    { en: "Individuals and families" },
    { en: "Shop owners and small businesses" },
    { en: "Employees and employers" },
    { en: "Anyone needing passport or ID document help" },
  ] as L[],
};

/* -------------------------------------------------------------------------- */
/*  Contact page                                                              */
/* -------------------------------------------------------------------------- */

export const contactPage = {
  title: { en: "Contact Us" },
  text: {
    en: "Call, message us on WhatsApp or visit our office. We will be happy to help.",
  },
  detailsTitle: { en: "Get in touch" },
  tapToCall: { en: "Tap to call" },
  tapToChat: { en: "Tap to chat — replies on WhatsApp" },
};

/* -------------------------------------------------------------------------- */
/*  SEO                                                                       */
/* -------------------------------------------------------------------------- */

export const seo = {
  home: {
    title: "GD TAX SERVICES – Tax, GST, PF, Passport & Insurance in Chikkanayakanahalli, Tumakuru",
    description:
      "GD TAX SERVICES in Chikkanayakanahalli Taluk, Tumakuru: income tax & GST filing, business registration, PF & UAN services, passport help and insurance. Call 7975171155.",
  },
  services: {
    title: "Services – Tax, Business Registration, PF, Passport & Insurance",
    description:
      "Tax & compliance, business registration, PF, passport, documentation and insurance help in Chikkanayakanahalli Taluk and Tumakuru District.",
  },
  about: {
    title: "About GD TAX SERVICES – Tax & Documentation Help in Chikkanayakanahalli",
    description:
      "Learn about GD TAX SERVICES, a local tax, registration and documentation service in Chikkanayakanahalli Taluk, Tumakuru.",
  },
  contact: {
    title: "Contact GD TAX SERVICES – Chikkanayakanahalli, Tumakuru",
    description:
      "Call 7975171155 or WhatsApp GD TAX SERVICES. Visit us in Chikkanayakanahalli Taluk, Tumakuru, Karnataka 572214.",
  },
};
