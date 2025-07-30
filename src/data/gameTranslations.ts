/**
 * Game Translation Data
 * 
 * This file contains all the text content for the Battle Royale Game landing page
 * in multiple languages. It supports English, Russian, French, and German.
 * 
 * Structure:
 * - Nested objects for logical grouping (hero, features, etc.)
 * - Type-safe keys for development
 * - Consistent naming conventions
 */

import { Language } from '../context/LanguageContext';

/**
 * Translation structure interface
 * Defines the shape of translation objects for type safety
 */
interface TranslationStructure {
  // Navigation and header
  nav: {
    main: string;
    about: string;
    gameFeatures: string;
    systemRequirements: string;
    quotes: string;
  };
  
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
    price: string;
    scrollHint: string;
  };
  
  // Game story section
  story: {
    title: string;
    subtitle: string;
    description: string;
    gameplay: {
      players: string;
      survivors: string;
      timeLimit: string;
      decision: string;
    };
  };
  
  // Game features section
  features: {
    title: string;
    subtitle: string;
    items: {
      survive: {
        title: string;
        description: string;
      };
      allies: {
        title: string;
        description: string;
      };
      audience: {
        title: string;
        description: string;
      };
    };
  };
  
  // System requirements section
  systemReq: {
    title: string;
    subtitle: string;
    specs: {
      os: string;
      processor: string;
      memory: string;
      storage: string;
      graphics: string;
    };
    values: {
      os: string;
      processor: string;
      memory: string;
      storage: string;
      graphics: string;
    };
  };
  
  // Press reviews section
  reviews: {
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
    reviewers: {
      evanLahti: {
        name: string;
        title: string;
        quote: string;
        date: string;
      };
      jadaGriffin: {
        name: string;
        title: string;
        quote: string;
        date: string;
      };
      aaronWilliams: {
        name: string;
        title: string;
        quote: string;
        date: string;
      };
    };
  };
  
  // Newsletter section
  newsletter: {
    title: string;
    subtitle: string;
    description: string;
    placeholder: string;
    ctaButton: string;
    privacy: string;
  };
  
  // Footer
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      conduct: string;
    };
  };
  
  // Common elements
  common: {
    loading: string;
    error: string;
    success: string;
    close: string;
    readMore: string;
  };
}

/**
 * English translations (default language)
 */
const en: TranslationStructure = {
  nav: {
    main: 'MAIN',
    about: 'ABOUT',
    gameFeatures: 'GAME FEATURES',
    systemRequirements: 'SYSTEM REQUIREMENTS',
    quotes: 'QUOTES'
  },
  
  hero: {
    title: 'SURVIVE AT ALL COSTS',
    subtitle: 'EXPERIENCE NEW SOCIAL BATTLE ROYALE GAME',
    ctaButton: 'Buy now on Steam',
    price: '$14.99',
    scrollHint: 'THE STORY'
  },
  
  story: {
    title: 'WHAT IS SOS?',
    subtitle: 'SOCIAL BATTLE ROYALE GAME',
    description: 'Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape?',
    gameplay: {
      players: 'you and 15 other contestants',
      survivors: 'three people can survive',
      timeLimit: '30 minutes',
      decision: 'Making the right decisions could be the difference between life and death.'
    }
  },
  
  features: {
    title: "WHAT'S SO SPECIAL?",
    subtitle: 'FEATURES',
    items: {
      survive: {
        title: 'SURVIVE AT ALL COSTS',
        description: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.'
      },
      allies: {
        title: 'CREATE ALLIES AND ENEMIES',
        description: 'Form strategic alliances or eliminate competition. Every relationship matters in this social survival experience.'
      },
      audience: {
        title: 'IMPRESS THE AUDIENCE',
        description: 'Your performance is being watched and judged. Make every decision count in this ultimate test of survival.'
      }
    }
  },
  
  systemReq: {
    title: 'CAN MY COMPUTER RUN THIS GAME?',
    subtitle: 'SYSTEM REQUIREMENTS',
    specs: {
      os: 'OS:',
      processor: 'PROCESSOR:',
      memory: 'MEMORY:',
      storage: 'STORAGE:',
      graphics: 'GRAPHICS:'
    },
    values: {
      os: 'Windows 7 64-bit only (No OSX support at this time)',
      processor: 'Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ',
      memory: '8 GB RAM',
      storage: '8 GB available space',
      graphics: 'NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 Shader Model 5'
    }
  },
  
  reviews: {
    title: 'WHAT PEOPLE THINK?',
    subtitle: 'PRESS QUOTES',
    description: 'Our goal is to create a product and service that you\'re satisfied with and use it every day. This is why we\'re constantly working on our services to make it better every day and really listen to what our users has to say.',
    ctaButton: 'Read more testimonials',
    reviewers: {
      evanLahti: {
        name: 'EVAN LAHTI',
        title: 'PC Gamer',
        quote: 'One of my gaming highlights of the year.',
        date: 'October 18, 2018'
      },
      jadaGriffin: {
        name: 'JADA GRIFFIN',
        title: 'Nerdreactor',
        quote: 'The next big thing in the world of streaming and survival games.',
        date: 'December 21, 2018'
      },
      aaronWilliams: {
        name: 'AARON WILLIAMS',
        title: 'Uproxx',
        quote: 'Snoop Dogg Playing The Wildly Entertaining \'SOS\' Is Ridiculous.',
        date: 'December 24, 2018'
      }
    }
  },
  
  newsletter: {
    title: 'WANT TO STAY IN TOUCH?',
    subtitle: 'NEWSLETTER SUBSCRIBE',
    description: 'In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don\'t spam.',
    placeholder: 'Your email address',
    ctaButton: 'Subscribe now',
    privacy: 'We don\'t spam and respect your privacy.'
  },
  
  footer: {
    copyright: '© 2018 Outpost Games, Inc. All Rights Reserved',
    links: {
      privacy: 'PRIVACY POLICY',
      terms: 'TERMS OF SERVICES',
      conduct: 'CODE OF CONDUCT'
    }
  },
  
  common: {
    loading: 'Loading...',
    error: 'Something went wrong',
    success: 'Success!',
    close: 'Close',
    readMore: 'Read more'
  }
};

/**
 * Russian translations
 */
const rus: TranslationStructure = {
  nav: {
    main: 'ГЛАВНАЯ',
    about: 'О ИГРЕ',
    gameFeatures: 'ОСОБЕННОСТИ',
    systemRequirements: 'СИСТЕМНЫЕ ТРЕБОВАНИЯ',
    quotes: 'ОТЗЫВЫ'
  },
  
  hero: {
    title: 'ВЫЖИВИ ЛЮБОЙ ЦЕНОЙ',
    subtitle: 'ИСПЫТАЙ НОВУЮ СОЦИАЛЬНУЮ КОРОЛЕВСКУЮ БИТВУ',
    ctaButton: 'Купить в Steam',
    price: '$14.99',
    scrollHint: 'ИСТОРИЯ'
  },
  
  story: {
    title: 'ЧТО ТАКОЕ SOS?',
    subtitle: 'СОЦИАЛЬНАЯ КОРОЛЕВСКАЯ БИТВА',
    description: 'Каждый раунд вы и 15 других участников соревнуетесь, чтобы сбежать с смертоносного острова, полного монстров. Хитрость в том, что выжить могут только три человека. Будете ли вы действовать в одиночку или заведете друзей, чтобы сбежать?',
    gameplay: {
      players: 'вы и 15 других участников',
      survivors: 'выжить могут три человека',
      timeLimit: '30 минут',
      decision: 'Правильные решения могут стать разницей между жизнью и смертью.'
    }
  },
  
  features: {
    title: 'ЧТО ОСОБЕННОГО?',
    subtitle: 'ОСОБЕННОСТИ',
    items: {
      survive: {
        title: 'ВЫЖИВИ ЛЮБОЙ ЦЕНОЙ',
        description: 'У вас есть 30 минут, чтобы найти реликвию, подать сигнал для эвакуации и занять одно из трех мест в спасательном вертолете.'
      },
      allies: {
        title: 'СОЗДАВАЙ СОЮЗНИКОВ И ВРАГОВ',
        description: 'Формируйте стратегические альянсы или устраняйте конкуренцию. Каждые отношения важны в этом социальном опыте выживания.'
      },
      audience: {
        title: 'ПРОИЗВЕДИ ВПЕЧАТЛЕНИЕ НА ЗРИТЕЛЕЙ',
        description: 'За вашим выступлением наблюдают и судят. Делайте каждое решение важным в этом окончательном тесте на выживание.'
      }
    }
  },
  
  systemReq: {
    title: 'ПОТЯНЕТ ЛИ МОЙ КОМПЬЮТЕР ЭТУ ИГРУ?',
    subtitle: 'СИСТЕМНЫЕ ТРЕБОВАНИЯ',
    specs: {
      os: 'ОС:',
      processor: 'ПРОЦЕССОР:',
      memory: 'ПАМЯТЬ:',
      storage: 'ХРАНИЛИЩЕ:',
      graphics: 'ГРАФИКА:'
    },
    values: {
      os: 'Windows 7 64-bit только (Поддержка OSX пока недоступна)',
      processor: 'Intel Core 2 Duo @ 2.4 ГГц или AMD Athlon X2 @ 2.8 ГГц',
      memory: '8 ГБ ОЗУ',
      storage: '8 ГБ свободного места',
      graphics: 'NVIDIA GeForce GTX 660 2ГБ или AMD Radeon HD 7850 2ГБ DirectX11 Shader Model 5'
    }
  },
  
  reviews: {
    title: 'ЧТО ДУМАЮТ ЛЮДИ?',
    subtitle: 'ОТЗЫВЫ ПРЕССЫ',
    description: 'Наша цель - создать продукт и сервис, которым вы будете довольны и будете пользоваться каждый день. Поэтому мы постоянно работаем над нашими сервисами, чтобы делать их лучше каждый день и действительно прислушиваемся к тому, что говорят наши пользователи.',
    ctaButton: 'Читать больше отзывов',
    reviewers: {
      evanLahti: {
        name: 'ЭВАН ЛАХТИ',
        title: 'PC Gamer',
        quote: 'Один из моих игровых хитов года.',
        date: '18 октября 2018'
      },
      jadaGriffin: {
        name: 'ДЖАДА ГРИФФИН',
        title: 'Nerdreactor',
        quote: 'Следующая большая вещь в мире стриминга и игр на выживание.',
        date: '21 декабря 2018'
      },
      aaronWilliams: {
        name: 'ААРОН УИЛЬЯМС',
        title: 'Uproxx',
        quote: 'Snoop Dogg играет в дико развлекательную "SOS" - это нелепо.',
        date: '24 декабря 2018'
      }
    }
  },
  
  newsletter: {
    title: 'ХОТИТЕ ОСТАВАТЬСЯ НА СВЯЗИ?',
    subtitle: 'ПОДПИСКА НА НОВОСТИ',
    description: 'Чтобы начать получать наши новости, все, что вам нужно сделать, это ввести свой email адрес. Обо всем остальном позаботимся мы. Мы будем отправлять вам emails с информацией об игре. Мы не спамим.',
    placeholder: 'Ваш email адрес',
    ctaButton: 'Подписаться',
    privacy: 'Мы не спамим и уважаем вашу конфиденциальность.'
  },
  
  footer: {
    copyright: '© 2018 Outpost Games, Inc. Все права защищены',
    links: {
      privacy: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
      terms: 'УСЛОВИЯ ОБСЛУЖИВАНИЯ',
      conduct: 'КОДЕКС ПОВЕДЕНИЯ'
    }
  },
  
  common: {
    loading: 'Загрузка...',
    error: 'Что-то пошло не так',
    success: 'Успех!',
    close: 'Закрыть',
    readMore: 'Читать далее'
  }
};

/**
 * French translations
 */
const fra: TranslationStructure = {
  nav: {
    main: 'ACCUEIL',
    about: 'À PROPOS',
    gameFeatures: 'CARACTÉRISTIQUES',
    systemRequirements: 'CONFIGURATION REQUISE',
    quotes: 'AVIS'
  },
  
  hero: {
    title: 'SURVIVRE À TOUT PRIX',
    subtitle: 'DÉCOUVREZ LE NOUVEAU JEU SOCIAL BATTLE ROYALE',
    ctaButton: 'Acheter sur Steam',
    price: '$14.99',
    scrollHint: 'L\'HISTOIRE'
  },
  
  story: {
    title: 'QU\'EST-CE QUE SOS?',
    subtitle: 'JEU SOCIAL BATTLE ROYALE',
    description: 'À chaque manche, vous et 15 autres concurrents vous battez pour échapper à une île mortelle remplie de monstres. Le piège : trois personnes peuvent survivre. Allez-vous jouer en solo ou vous lier d\'amitié avec d\'autres pour vous échapper?',
    gameplay: {
      players: 'vous et 15 autres concurrents',
      survivors: 'trois personnes peuvent survivre',
      timeLimit: '30 minutes',
      decision: 'Prendre les bonnes décisions pourrait faire la différence entre la vie et la mort.'
    }
  },
  
  features: {
    title: 'QU\'EST-CE QUI EST SI SPÉCIAL?',
    subtitle: 'CARACTÉRISTIQUES',
    items: {
      survive: {
        title: 'SURVIVRE À TOUT PRIX',
        description: 'Vous avez 30 minutes pour trouver une relique, signaler pour l\'extraction et prendre l\'une des trois places dans l\'hélicoptère de sauvetage.'
      },
      allies: {
        title: 'CRÉER DES ALLIÉS ET DES ENNEMIS',
        description: 'Formez des alliances stratégiques ou éliminez la concurrence. Chaque relation compte dans cette expérience de survie sociale.'
      },
      audience: {
        title: 'IMPRESSIONNER LE PUBLIC',
        description: 'Votre performance est observée et jugée. Faites que chaque décision compte dans ce test ultime de survie.'
      }
    }
  },
  
  systemReq: {
    title: 'MON ORDINATEUR PEUT-IL FAIRE TOURNER CE JEU?',
    subtitle: 'CONFIGURATION REQUISE',
    specs: {
      os: 'OS:',
      processor: 'PROCESSEUR:',
      memory: 'MÉMOIRE:',
      storage: 'STOCKAGE:',
      graphics: 'GRAPHIQUES:'
    },
    values: {
      os: 'Windows 7 64-bit uniquement (Pas de support OSX pour le moment)',
      processor: 'Intel Core 2 Duo @ 2.4 GHZ ou AMD Athlon X2 @ 2.8 GHZ',
      memory: '8 Go RAM',
      storage: '8 Go d\'espace disponible',
      graphics: 'NVIDIA GeForce GTX 660 2Go ou AMD Radeon HD 7850 2Go DirectX11 Shader Model 5'
    }
  },
  
  reviews: {
    title: 'QUE PENSENT LES GENS?',
    subtitle: 'CITATIONS DE PRESSE',
    description: 'Notre objectif est de créer un produit et un service dont vous êtes satisfait et que vous utilisez tous les jours. C\'est pourquoi nous travaillons constamment sur nos services pour les améliorer chaque jour et écoutons vraiment ce que nos utilisateurs ont à dire.',
    ctaButton: 'Lire plus de témoignages',
    reviewers: {
      evanLahti: {
        name: 'EVAN LAHTI',
        title: 'PC Gamer',
        quote: 'L\'un de mes moments forts gaming de l\'année.',
        date: '18 octobre 2018'
      },
      jadaGriffin: {
        name: 'JADA GRIFFIN',
        title: 'Nerdreactor',
        quote: 'La prochaine grande chose dans le monde du streaming et des jeux de survie.',
        date: '21 décembre 2018'
      },
      aaronWilliams: {
        name: 'AARON WILLIAMS',
        title: 'Uproxx',
        quote: 'Snoop Dogg jouant au très divertissant "SOS" est ridicule.',
        date: '24 décembre 2018'
      }
    }
  },
  
  newsletter: {
    title: 'VOUS VOULEZ RESTER EN CONTACT?',
    subtitle: 'INSCRIPTION À LA NEWSLETTER',
    description: 'Pour commencer à recevoir nos nouvelles, tout ce que vous avez à faire est de saisir votre adresse email. Nous nous occuperons du reste. Nous vous enverrons des emails contenant des informations sur le jeu. Nous ne spammons pas.',
    placeholder: 'Votre adresse email',
    ctaButton: 'S\'abonner maintenant',
    privacy: 'Nous ne spammons pas et respectons votre vie privée.'
  },
  
  footer: {
    copyright: '© 2018 Outpost Games, Inc. Tous droits réservés',
    links: {
      privacy: 'POLITIQUE DE CONFIDENTIALITÉ',
      terms: 'CONDITIONS D\'UTILISATION',
      conduct: 'CODE DE CONDUITE'
    }
  },
  
  common: {
    loading: 'Chargement...',
    error: 'Quelque chose s\'est mal passé',
    success: 'Succès!',
    close: 'Fermer',
    readMore: 'Lire la suite'
  }
};

/**
 * German translations
 */
const deu: TranslationStructure = {
  nav: {
    main: 'HAUPTSEITE',
    about: 'ÜBER UNS',
    gameFeatures: 'SPIELFEATURES',
    systemRequirements: 'SYSTEMANFORDERUNGEN',
    quotes: 'BEWERTUNGEN'
  },
  
  hero: {
    title: 'UM JEDEN PREIS ÜBERLEBEN',
    subtitle: 'ERLEBE DAS NEUE SOZIALE BATTLE ROYALE SPIEL',
    ctaButton: 'Jetzt auf Steam kaufen',
    price: '$14.99',
    scrollHint: 'DIE GESCHICHTE'
  },
  
  story: {
    title: 'WAS IST SOS?',
    subtitle: 'SOZIALES BATTLE ROYALE SPIEL',
    description: 'Jede Runde kämpfen Sie und 15 andere Teilnehmer darum, von einer tödlichen Insel voller Monster zu entkommen. Der Haken: drei Personen können überleben. Werden Sie alleine spielen oder Freundschaften mit anderen schließen, um zu entkommen?',
    gameplay: {
      players: 'Sie und 15 andere Teilnehmer',
      survivors: 'drei Personen können überleben',
      timeLimit: '30 Minuten',
      decision: 'Die richtigen Entscheidungen zu treffen könnte den Unterschied zwischen Leben und Tod ausmachen.'
    }
  },
  
  features: {
    title: 'WAS IST SO BESONDERS?',
    subtitle: 'FEATURES',
    items: {
      survive: {
        title: 'UM JEDEN PREIS ÜBERLEBEN',
        description: 'Sie haben 30 Minuten Zeit, um ein Relikt zu finden, ein Extraktionssignal zu senden und einen der drei Plätze im Rettungshubschrauber zu ergattern.'
      },
      allies: {
        title: 'VERBÜNDETE UND FEINDE SCHAFFEN',
        description: 'Bilden Sie strategische Allianzen oder eliminieren Sie die Konkurrenz. Jede Beziehung zählt in dieser sozialen Überlebenserfahrung.'
      },
      audience: {
        title: 'DAS PUBLIKUM BEEINDRUCKEN',
        description: 'Ihre Leistung wird beobachtet und bewertet. Lassen Sie jede Entscheidung in diesem ultimativen Überlebenstest zählen.'
      }
    }
  },
  
  systemReq: {
    title: 'KANN MEIN COMPUTER DIESES SPIEL AUSFÜHREN?',
    subtitle: 'SYSTEMANFORDERUNGEN',
    specs: {
      os: 'BETRIEBSSYSTEM:',
      processor: 'PROZESSOR:',
      memory: 'ARBEITSSPEICHER:',
      storage: 'SPEICHERPLATZ:',
      graphics: 'GRAFIK:'
    },
    values: {
      os: 'Windows 7 64-bit nur (Keine OSX-Unterstützung zu diesem Zeitpunkt)',
      processor: 'Intel Core 2 Duo @ 2.4 GHZ oder AMD Athlon X2 @ 2.8 GHZ',
      memory: '8 GB RAM',
      storage: '8 GB verfügbarer Speicherplatz',
      graphics: 'NVIDIA GeForce GTX 660 2GB oder AMD Radeon HD 7850 2GB DirectX11 Shader Model 5'
    }
  },
  
  reviews: {
    title: 'WAS DENKEN DIE LEUTE?',
    subtitle: 'PRESSEZITATE',
    description: 'Unser Ziel ist es, ein Produkt und einen Service zu schaffen, mit dem Sie zufrieden sind und den Sie jeden Tag nutzen. Deshalb arbeiten wir ständig an unseren Services, um sie jeden Tag besser zu machen und hören wirklich auf das, was unsere Nutzer zu sagen haben.',
    ctaButton: 'Mehr Testimonials lesen',
    reviewers: {
      evanLahti: {
        name: 'EVAN LAHTI',
        title: 'PC Gamer',
        quote: 'Eines meiner Gaming-Highlights des Jahres.',
        date: '18. Oktober 2018'
      },
      jadaGriffin: {
        name: 'JADA GRIFFIN',
        title: 'Nerdreactor',
        quote: 'Das nächste große Ding in der Welt des Streamings und der Survival-Spiele.',
        date: '21. Dezember 2018'
      },
      aaronWilliams: {
        name: 'AARON WILLIAMS',
        title: 'Uproxx',
        quote: 'Snoop Dogg spielt das wahnsinnig unterhaltsame "SOS" ist lächerlich.',
        date: '24. Dezember 2018'
      }
    }
  },
  
  newsletter: {
    title: 'MÖCHTEN SIE IN KONTAKT BLEIBEN?',
    subtitle: 'NEWSLETTER ABONNIEREN',
    description: 'Um unsere Nachrichten zu erhalten, müssen Sie nur Ihre E-Mail-Adresse eingeben. Um alles andere kümmern wir uns. Wir senden Ihnen E-Mails mit Informationen über das Spiel. Wir spammen nicht.',
    placeholder: 'Ihre E-Mail-Adresse',
    ctaButton: 'Jetzt abonnieren',
    privacy: 'Wir spammen nicht und respektieren Ihre Privatsphäre.'
  },
  
  footer: {
    copyright: '© 2018 Outpost Games, Inc. Alle Rechte vorbehalten',
    links: {
      privacy: 'DATENSCHUTZERKLÄRUNG',
      terms: 'NUTZUNGSBEDINGUNGEN',
      conduct: 'VERHALTENSKODEX'
    }
  },
  
  common: {
    loading: 'Laden...',
    error: 'Etwas ist schiefgelaufen',
    success: 'Erfolg!',
    close: 'Schließen',
    readMore: 'Weiterlesen'
  }
};

/**
 * Main translations object
 * Maps language codes to their respective translation objects
 */
export const translations: Record<Language, TranslationStructure> = {
  [Language.EN]: en,
  [Language.RUS]: rus,
  [Language.FRA]: fra,
  [Language.DEU]: deu
};

/**
 * Type for translation keys
 * Automatically generated from the translation structure for type safety
 */
export type TranslationKey = 
  | `nav.${keyof TranslationStructure['nav']}`
  | `hero.${keyof TranslationStructure['hero']}`
  | `story.${keyof TranslationStructure['story']}`
  | `story.gameplay.${keyof TranslationStructure['story']['gameplay']}`
  | `features.${keyof TranslationStructure['features']}`
  | `features.items.survive.${keyof TranslationStructure['features']['items']['survive']}`
  | `features.items.allies.${keyof TranslationStructure['features']['items']['allies']}`
  | `features.items.audience.${keyof TranslationStructure['features']['items']['audience']}`
  | `systemReq.${keyof TranslationStructure['systemReq']}`
  | `systemReq.specs.${keyof TranslationStructure['systemReq']['specs']}`
  | `systemReq.values.${keyof TranslationStructure['systemReq']['values']}`
  | `reviews.${keyof TranslationStructure['reviews']}`
  | `reviews.reviewers.evanLahti.${keyof TranslationStructure['reviews']['reviewers']['evanLahti']}`
  | `reviews.reviewers.jadaGriffin.${keyof TranslationStructure['reviews']['reviewers']['jadaGriffin']}`
  | `reviews.reviewers.aaronWilliams.${keyof TranslationStructure['reviews']['reviewers']['aaronWilliams']}`
  | `newsletter.${keyof TranslationStructure['newsletter']}`
  | `footer.${keyof TranslationStructure['footer']}`
  | `footer.links.${keyof TranslationStructure['footer']['links']}`
  | `common.${keyof TranslationStructure['common']}`;

/**
 * Helper function to get available languages
 * @returns Array of available language codes
 */
export const getAvailableLanguages = (): Language[] => {
  return Object.values(Language);
};

/**
 * Helper function to get language display names
 * @returns Object mapping language codes to display names
 */
export const getLanguageDisplayNames = (): Record<Language, string> => {
  return {
    [Language.EN]: 'English',
    [Language.RUS]: 'Русский',
    [Language.FRA]: 'Français',
    [Language.DEU]: 'Deutsch'
  };
};