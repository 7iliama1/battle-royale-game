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

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Header Component
 * 
 * Renders the main navigation header with logo, navigation links,
 * and language selection
 */
const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo Section */}
          <div className="header-logo">
            <img src="/logo.png" alt="SOS Game Logo" className="logo-image" />
          </div>

          {/* Navigation Menu */}
          <nav className="header-nav">
            <a href="#main" className="nav-link">
              {t('nav.main')}
            </a>
            <a href="#about" className="nav-link">
              {t('nav.about')}
            </a>
            <a href="#features" className="nav-link">
              {t('nav.gameFeatures')}
            </a>
            <a href="#requirements" className="nav-link">
              {t('nav.systemRequirements')}
            </a>
            <a href="#quotes" className="nav-link">
              {t('nav.quotes')}
            </a>
          </nav>

          {/* Language Toggle - placeholder for now */}
          <div className="header-language">
            <span>EN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;