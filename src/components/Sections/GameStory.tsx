/**
 * Game Story Section Component
 * 
 * This section describes what SOS game is about.
 * Features description text and screenshot slider as shown in the design.
 * 
 * Features:
 * - Game description and story
 * - Screenshot carousel/slider
 * - Responsive layout
 * - Dark theme with orange accents
 */

import React, { useState } from 'react';

/**
 * Game Story Component
 * 
 * Renders the "WHAT IS SOS?" section with game description and screenshots
 */
const GameStory: React.FC = () => {
  // State for screenshot slider
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Mock screenshot data (we'll replace with real images later)
  const screenshots = [
    { id: 1, alt: 'Game Screenshot 1' },
    { id: 2, alt: 'Game Screenshot 2' },
    { id: 3, alt: 'Game Screenshot 3' },
    { id: 4, alt: 'Game Screenshot 4' },
    { id: 5, alt: 'Game Screenshot 5' }
  ];

  /**
   * Handle slide navigation
   */
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="about" style={sectionStyles}>
      <div style={containerStyles}>
        
        {/* Section Header */}
        <div style={headerStyles}>
          <h2 style={titleStyles}>
            WHAT IS SOS?
          </h2>
          <h3 style={subtitleStyles}>
            SOCIAL BATTLE ROYALE GAME
          </h3>
        </div>

        {/* Main Content - Two Column Layout */}
        <div style={contentStyles}>
          
          {/* Left Column - Text Content */}
          <div style={textColumnStyles}>
            <p style={descriptionStyles}>
              Each round, <strong style={highlightStyles}>you and 15 other contestants</strong> compete 
              to escape a deadly island filled with monsters. The trick is: <strong style={highlightStyles}>three 
              people can survive</strong>. Will you run solo or form friendships with others to escape?
            </p>
            
            <p style={gameplayTextStyles}>
              Making the right decisions could be the difference between <strong style={highlightStyles}>life and death</strong>.
            </p>
          </div>

          {/* Right Column - Screenshot Slider */}
          <div style={sliderColumnStyles}>
            <div style={sliderContainerStyles}>
              
              {/* Screenshot Display */}
              <div style={screenshotStyles}>
                {/* Placeholder for screenshot - replace with actual image */}
                <div style={screenshotPlaceholderStyles}>
                  🎮 Screenshot {currentSlide + 1}
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  style={arrowLeftStyles}
                  onClick={prevSlide}
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>
                <button 
                  style={arrowRightStyles}
                  onClick={nextSlide}
                  aria-label="Next screenshot"
                >
                  ›
                </button>
              </div>

              {/* Dot Indicators */}
              <div style={dotsContainerStyles}>
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    style={{
                      ...dotStyles,
                      backgroundColor: index === currentSlide ? '#FF6B35' : 'rgba(255, 255, 255, 0.3)'
                    }}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyles: React.CSSProperties = {
  backgroundColor: '#0A0A0A',
  color: '#FFFFFF',
  padding: '6rem 0',
  position: 'relative'
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
};

const headerStyles: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '4rem'
};

const titleStyles: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginBottom: '1rem',
  fontFamily: 'Orbitron, monospace'
};

const subtitleStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#FFB347',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  borderBottom: '2px solid #FFB347',
  display: 'inline-block',
  paddingBottom: '0.5rem'
};

const contentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '4rem',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const textColumnStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  flex: '1',
  minWidth: '300px'
};

const descriptionStyles: React.CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
  color: '#CCCCCC',
  margin: 0
};

const gameplayTextStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#CCCCCC',
  margin: 0
};

const highlightStyles: React.CSSProperties = {
  color: '#FF6B35',
  fontWeight: 'bold'
};

const sliderColumnStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flex: '1',
  minWidth: '300px'
};

const sliderContainerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '500px'
};

const screenshotStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '300px',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: '#1A1A1A',
  border: '2px solid #333',
  marginBottom: '1.5rem'
};

const screenshotPlaceholderStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  color: '#666',
  backgroundColor: '#1A1A1A'
};

const arrowLeftStyles: React.CSSProperties = {
  position: 'absolute',
  left: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255, 107, 53, 0.8)',
  border: 'none',
  color: '#FFFFFF',
  fontSize: '2rem',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  zIndex: 2
};

const arrowRightStyles: React.CSSProperties = {
  ...arrowLeftStyles,
  left: 'auto',
  right: '1rem'
};

const dotsContainerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem'
};

const dotStyles: React.CSSProperties = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

export default GameStory;