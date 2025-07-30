/**
 * Hero Section Component
 * 
 * The main hero section of the Battle Royale Game landing page.
 * Features the main title, subtitle, and call-to-action button.
 * 
 * Features:
 * - Full-screen hero section
 * - Animated title and subtitle
 * - Steam purchase button
 * - Background styling
 */

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Hero Component
 * 
 * Renders the main hero section with game title and CTA
 */
const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="main" style={heroStyles}>
      <div style={containerStyles}>
        <div style={heroContentStyles}>
          
          {/* Main Title */}
          <h1 style={titleStyles}>
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p style={subtitleStyles}>
            {t('hero.subtitle')}
          </p>
          
          {/* Call to Action Button */}
          <button style={ctaButtonStyles}>
            {t('hero.ctaButton')} | {t('hero.price')}
          </button>
          
          {/* Character Lineup Placeholder */}
          <div style={charactersStyles}>
            <div style={characterPlaceholderStyles}>👥</div>
            <p style={characterTextStyles}>16 Players, 3 Survivors</p>
          </div>
          
          {/* Scroll Hint */}
          <div style={scrollHintStyles}>
            <p>{t('hero.scrollHint')}</p>
            <div style={scrollArrowStyles}>▼</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

// Styles
const heroStyles: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2A1A0A 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  paddingTop: '80px', // Account for fixed header
  color: '#FFFFFF'
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  width: '100%',
  textAlign: 'center'
};

const heroContentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
};

const titleStyles: React.CSSProperties = {
  fontSize: '4rem',
  fontWeight: 'bold',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginBottom: '1rem',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  fontFamily: 'Orbitron, monospace'
};

const subtitleStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#FFB347',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '2rem'
};

const ctaButtonStyles: React.CSSProperties = {
  backgroundColor: '#FF6B35',
  color: '#FFFFFF',
  border: 'none',
  padding: '1rem 3rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
  letterSpacing: '1px'
};

const charactersStyles: React.CSSProperties = {
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem'
};

const characterPlaceholderStyles: React.CSSProperties = {
  fontSize: '4rem',
  opacity: 0.7
};

const characterTextStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: '#CCCCCC',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const scrollHintStyles: React.CSSProperties = {
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#CCCCCC',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const scrollArrowStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  animation: 'bounce 2s infinite'
};

export default Hero;