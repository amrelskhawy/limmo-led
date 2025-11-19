export interface Translations {
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    add: string;
    search: string;
    close: string;
    confirm: string;
    yes: string;
    no: string;
    back: string;
    next: string;
    submit: string;
    viewMore: string;
    readMore: string;
    previous: string;
    morePages: string;
    previousSlide: string;
    nextSlide: string;
    translationDemo: string;
    currentLanguage: string;
    direction: string;
    english: string;
    arabic: string;
    more: string;
  };

  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    services: string;
    portfolio: string;
    blog: string;
    login: string;
    logout: string;
  };

  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    learnMore: string;
    getStarted: string;
    exploreProducts: string;
    ourServices: string;
    whyChooseUs: string;
    testimonials: string;
    latestNews: string;
    benefits: {
      energyEfficient: { title: string; description: string };
      costSavings: { title: string; description: string };
      longLasting: { title: string; description: string };
      ecoFriendly: { title: string; description: string };
    };
    applications: {
      title: string;
      office: { title: string; description: string };
      industrial: { title: string; description: string };
      retail: { title: string; description: string };
    };
    stats: {
      yearsExperience: string;
      projectsCompleted: string;
      happyClients: string;
      energySaved: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  about: {
    title: string;
    mission: string;
    vision: string;
    values: string;
    ourTeam: string;
    ourStory: string;
    experience: string;
    clients: string;
    description: string;
    missionText: string;
    visionText: string;
    valuesTitle: string;
    innovation: { title: string; description: string };
    customerFirst: { title: string; description: string };
    quality: { title: string; description: string };
    sustainability: { title: string; description: string };
    milestones: {
      title: string;
      founded: { title: string; description: string };
      firstProject: { title: string; description: string };
      certification: { title: string; description: string };
      expansion: { title: string; description: string };
      innovation: { title: string; description: string };
    };
    storyHeading: string;
    story: string;
    story2: string;
    story3: string;
    story4: string;
    organizations: string;
    installations: string;
    support: string;
    energySavings: string;
    valuesHeading: string;
    valuesDescription: string;
    journeyHeading: string;
    journeyDescription: string;
    missionHeading: string;
    missionDescription: string;
    missionQuote: string;
    missionAuthor: string;
  };

  products: {
    title: string;
    allProducts: string;
    category: string;
    price: string;
    description: string;
    specifications: string;
    reviews: string;
    addToCart: string;
    buyNow: string;
    outOfStock: string;
    features: string;
    warranty: string;
    inStock: string;
    backToProducts: string;
    relatedProducts: string;
    keyFeatures: string;
    requestQuote: string;
    contactSales: string;
    viewDetails: string;
    productNotFound: string;
    specLabels: {
      wattage: string;
      lumens: string;
      colorTemperature: string;
      lifespan: string;
    };
  };

  contact: {
    title: string;
    getInTouch: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    send: string;
    address: string;
    workingHours: string;
    followUs: string;
    messageSent: string;
    messageError: string;
    contactInfo: string;
    location: string;
    callUs: string;
    emailUs: string;
  };

  footer: {
    company: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    newsletter: string;
    enterEmail: string;
    subscribe: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
    description: string;
    companyName: string;
    productCategories: string;
    categories: {
      office: string;
      industrial: string;
      outdoor: string;
      retail: string;
    };
    addressLine: string;
  };

  quality: {
    heading: string;
    description: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
  };

  sidebar?: {
    title?: string;
    description?: string;
    toggle?: string;
  };
}

export type Language = "en" | "ar";

export const languages = {
  en: { name: "English", flag: "🇺🇸", dir: "ltr" },
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
};
