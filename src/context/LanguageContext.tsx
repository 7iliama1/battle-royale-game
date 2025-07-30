/**
 * Simple Language Context
 * 
 * Simplified version without external dependencies for testing
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Simple language type
export type Language = 'en' | 'rus' | 'fra' | 'deu';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  availableLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translations object
const simpleTranslations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.main': 'MAIN',
    'nav.about': 'ABOUT',
    'nav.gameFeatures': 'GAME FEATURES', 
    'nav.systemRequirements': 'SYSTEM REQUIREMENTS',
    'nav.quotes': 'QUOTES',
    
    // Hero section
    'hero.title': 'SURVIVE AT ALL COSTS',
    'hero.subtitle': 'EXPERIENCE NEW SOCIAL BATTLE ROYALE GAME',
    'hero.ctaButton': 'Buy now on Steam',
    'hero.price': '$14.99',
    'hero.scrollHint': 'THE STORY'
  },
  rus: {
    // Navigation
    'nav.main': 'ГЛАВНАЯ',
    'nav.about': 'О ИГРЕ',
    'nav.gameFeatures': 'ОСОБЕННОСТИ',
    'nav.systemRequirements': 'СИСТЕМНЫЕ ТРЕБОВАНИЯ', 
    'nav.quotes': 'ОТЗЫВЫ',
    
    // Hero section
    'hero.title': 'ВЫЖИВИ ЛЮБОЙ ЦЕНОЙ',
    'hero.subtitle': 'ИСПЫТАЙ НОВУЮ СОЦИАЛЬНУЮ КОРОЛЕВСКУЮ БИТВУ',
    'hero.ctaButton': 'Купить в Steam',
    'hero.price': '$14.99',
    'hero.scrollHint': 'ИСТОРИЯ'
  },
  fra: {
    // Navigation
    'nav.main': 'ACCUEIL',
    'nav.about': 'À PROPOS',
    'nav.gameFeatures': 'CARACTÉRISTIQUES',
    'nav.systemRequirements': 'CONFIGURATION REQUISE',
    'nav.quotes': 'AVIS',
    
    // Hero section
    'hero.title': 'SURVIVRE À TOUT PRIX',
    'hero.subtitle': 'DÉCOUVREZ LE NOUVEAU JEU SOCIAL BATTLE ROYALE',
    'hero.ctaButton': 'Acheter sur Steam',
    'hero.price': '$14.99',
    'hero.scrollHint': 'L\'HISTOIRE'
  },
  deu: {
    // Navigation
    'nav.main': 'HAUPTSEITE',
    'nav.about': 'ÜBER UNS',
    'nav.gameFeatures': 'SPIELFEATURES',
    'nav.systemRequirements': 'SYSTEMANFORDERUNGEN',
    'nav.quotes': 'BEWERTUNGEN',
    
    // Hero section
    'hero.title': 'UM JEDEN PREIS ÜBERLEBEN',
    'hero.subtitle': 'ERLEBE DAS NEUE SOZIALE BATTLE ROYALE SPIEL',
    'hero.ctaButton': 'Jetzt auf Steam kaufen',
    'hero.price': '$14.99',
    'hero.scrollHint': 'DIE GESCHICHTE'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const availableLanguages: Language[] = ['en', 'rus', 'fra', 'deu'];

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    const translation = simpleTranslations[currentLanguage]?.[key];
    return translation || key;
  };

  const contextValue: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

