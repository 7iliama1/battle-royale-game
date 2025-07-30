/**
 * Header Component
 * 
 * The main navigation header for the Battle Royale Game landing page.
 * Features a sticky navigation bar with language switching and smooth scrolling.
 * 
 * Features:
 * - Responsive navigation menu
 * - Language toggle dropdown
 * - Smooth scrolling to sections
 * - Mobile hamburger menu (to be implemented)
 * - Dark gaming theme design
 */

import React, { useState } from 'react';
import { useLanguage, Language } from '../../context/LanguageContext';

/**
 * Header Component
 * 
 * Renders the main navigation header with logo, navigation links,
 * and language selection
 */
const Header: React.FC = () => {
  const { t, currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  /**
   * Handle smooth scrolling to sections
   */
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Toggle language dropdown
   */
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  /**
   * Handle language selection
   */
  const handleLanguageSelect = (language: Language) => {
    setLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <div style={headerContentStyles}>
          
          {/* Logo Section */}
          <div style={logoStyles}>
            <div style={logoImageStyles}>
              SOS
            </div>
          </div>

          {/* Navigation Menu */}
          <nav style={navStyles}>
            <button 
              style={navLinkStyles}
              onClick={() => handleNavClick('main')}
            >
              {t('nav.main')}
            </button>
            <button 
              style={navLinkStyles}
              onClick={() => handleNavClick('about')}
            >
              {t('nav.about')}
            </button>
            <button 
              style={navLinkStyles}
              onClick={() => handleNavClick('features')}
            >
              {t('nav.gameFeatures')}
            </button>
            <button 
              style={navLinkStyles}
              onClick={() => handleNavClick('requirements')}
            >
              {t('nav.systemRequirements')}
            </button>
            <button 
              style={navLinkStyles}
              onClick={() => handleNavClick('quotes')}
            >
              {t('nav.quotes')}
            </button>
          </nav>

          {/* Language Toggle */}
          <div style={languageContainerStyles}>
            <button 
              style={languageButtonStyles}
              onClick={toggleLanguageDropdown}
            >
              {currentLanguage.toUpperCase()} ▼
            </button>
            
            {isLanguageDropdownOpen && (
              <div style={languageDropdownStyles}>
                {availableLanguages.map((language) => (
                  <button
                    key={language}
                    style={{
                      ...languageDropdownItemStyles,
                      backgroundColor: language === currentLanguage ? '#FF6B35' : 'transparent'
                    }}
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
};

// Inline styles for now (we'll move to CSS modules later)
const headerStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(10, 10, 10, 0.95)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  padding: '1rem 0',
  borderBottom: '1px solid rgba(255, 107, 53, 0.2)'
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  width: '100%'
};

const headerContentStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const logoStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'
};

const logoImageStyles: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#FF6B35',
  fontFamily: 'Orbitron, monospace'
};

const navStyles: React.CSSProperties = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center'
};

const navLinkStyles: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#FFFFFF',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const languageContainerStyles: React.CSSProperties = {
  position: 'relative'
};

const languageButtonStyles: React.CSSProperties = {
  background: 'none',
  border: '1px solid #FF6B35',
  color: '#FF6B35',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'all 0.3s ease'
};

const languageDropdownStyles: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  right: 0,
  backgroundColor: '#1A1A1A',
  border: '1px solid #FF6B35',
  borderRadius: '4px',
  marginTop: '0.5rem',
  minWidth: '80px',
  zIndex: 1001
};

const languageDropdownItemStyles: React.CSSProperties = {
  width: '100%',
  background: 'none',
  border: 'none',
  color: '#FFFFFF',
  fontSize: '0.9rem',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  transition: 'all 0.3s ease',
  textAlign: 'left'
};

export default Header;