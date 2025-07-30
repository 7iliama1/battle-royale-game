/**
 * Language Context Provider
 * 
 * This context manages the internationalization state for the entire application.
 * It provides language switching functionality and translation helpers.
 * 
 * Features:
 * - Multi-language support (EN, RUS, FRA, DEU)
 * - Persistent language selection via localStorage
 * - Translation helper function
 * - Type-safe language keys
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import translation data
import { translations, TranslationKey } from '../data/gameTranslations';

/**
 * Supported languages enum for type safety
 */
export enum Language {
  EN = 'en',
  RUS = 'rus', 
  FRA = 'fra',
  DEU = 'deu'
}

/**
 * Language context interface
 * Defines the shape of the context value
 */
interface LanguageContextType {
  /** Current selected language */
  currentLanguage: Language;
  
  /** Function to change the current language */
  setLanguage: (language: Language) => void;
  
  /** Translation helper function */
  t: (key: TranslationKey) => string;
  
  /** Available languages list */
  availableLanguages: Language[];
}

/**
 * Create the Language Context
 * Default value is undefined - context must be used within provider
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Props interface for LanguageProvider component
 */
interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Language Provider Component
 * 
 * Wraps the application and provides language functionality to all child components.
 * Automatically saves language preference to localStorage and restores it on app load.
 * 
 * @param children - Child components that will have access to language context
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // State to track current language, default to English
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.EN);
  
  // List of all available languages
  const availableLanguages = Object.values(Language);
  
  /**
   * Load saved language from localStorage on component mount
   * Falls back to English if no saved language or invalid language
   */
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('battle-royale-language');
      
      if (savedLanguage && Object.values(Language).includes(savedLanguage as Language)) {
        setCurrentLanguage(savedLanguage as Language);
      }
    } catch (error) {
      // localStorage might not be available (e.g., in SSR or private browsing)
      console.warn('Could not load language from localStorage:', error);
    }
  }, []);
  
  /**
   * Change language and persist to localStorage
   * 
   * @param language - New language to set
   */
  const setLanguage = (language: Language): void => {
    setCurrentLanguage(language);
    
    try {
      localStorage.setItem('battle-royale-language', language);
    } catch (error) {
      // localStorage might not be available
      console.warn('Could not save language to localStorage:', error);
    }
  };
  
  /**
   * Translation helper function
   * 
   * Retrieves translated text for the given key in the current language.
   * Falls back to English if translation is missing, then to the key itself.
   * 
   * @param key - Translation key (e.g., 'hero.title')
   * @returns Translated text
   */
  const t = (key: TranslationKey): string => {
    try {
      // Split the key into parts (e.g., 'hero.title' -> ['hero', 'title'])
      const keyParts = key.split('.');
      
      // Get translations for current language
      const currentTranslations = translations[currentLanguage];
      
      // Navigate through the nested translation object
      let translation: any = currentTranslations;
      for (const part of keyParts) {
        translation = translation?.[part];
      }
      
      // If translation found, return it
      if (typeof translation === 'string') {
        return translation;
      }
      
      // Fallback to English if current language translation is missing
      if (currentLanguage !== Language.EN) {
        const englishTranslations = translations[Language.EN];
        let englishTranslation: any = englishTranslations;
        
        for (const part of keyParts) {
          englishTranslation = englishTranslation?.[part];
        }
        
        if (typeof englishTranslation === 'string') {
          return englishTranslation;
        }
      }
      
      // Final fallback: return the key itself
      return key;
      
    } catch (error) {
      console.warn(`Translation error for key "${key}":`, error);
      return key;
    }
  };
  
  // Context value object
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

/**
 * Custom hook to use Language Context
 * 
 * Provides a convenient way to access language functionality in components.
 * Throws an error if used outside of LanguageProvider.
 * 
 * @returns Language context value
 * @throws Error if used outside LanguageProvider
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider. ' +
      'Make sure your component is wrapped with <LanguageProvider>.'
    );
  }
  
  return context;
};

// Export the context for advanced use cases
export { LanguageContext };