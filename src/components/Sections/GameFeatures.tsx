/**
 * Game Features Section Component
 * 
 * This section showcases the key features of the SOS game.
 * Features a character image on the left and feature list on the right.
 * 
 * Features:
 * - Character showcase
 * - Feature list with icons and descriptions
 * - Responsive two-column layout
 * - Interactive elements
 */

import React from 'react';

/**
 * Game Features Component
 * 
 * Renders the "WHAT'S SO SPECIAL?" section with character and features
 */
const GameFeatures: React.FC = () => {
  
  // Feature data
  const features = [
    {
      id: 'survive',
      icon: '⚡',
      title: 'SURVIVE AT ALL COSTS',
      description: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.'
    },
    {
      id: 'allies',
      icon: '🤝',
      title: 'CREATE ALLIES AND ENEMIES',
      description: 'Form strategic alliances or eliminate competition. Every relationship matters in this social survival experience.'
    },
    {
      id: 'audience',
      icon: '👥',
      title: 'IMPRESS THE AUDIENCE',
      description: 'Your performance is being watched and judged. Make every decision count in this ultimate test of survival.'
    }
  ];

  return (
    <section id="features" style={sectionStyles}>
      <div style={containerStyles}>
        
        {/* Section Header */}
        <div style={headerStyles}>
          <h2 style={titleStyles}>
            WHAT'S SO SPECIAL?
          </h2>
          <h3 style={subtitleStyles}>
            FEATURES
          </h3>
        </div>

        {/* Main Content - Two Column Layout */}
        <div style={contentStyles}>
          
          {/* Left Column - Character Image */}
          <div style={characterColumnStyles}>
            <div style={characterContainerStyles}>
              {/* Character placeholder - replace with actual character image */}
              <div style={characterPlaceholderStyles}>
                👤
              </div>
              <div style={characterNameStyles}>
                Game Character
              </div>
            </div>
          </div>

          {/* Right Column - Features List */}
          <div style={featuresColumnStyles}>
            <div style={featuresListStyles}>
              {features.map((feature, index) => (
                <div key={feature.id} style={featureItemStyles}>
                  
                  {/* Feature Icon */}
                  <div style={featureIconStyles}>
                    <span style={iconStyles}>{feature.icon}</span>
                  </div>
                  
                  {/* Feature Content */}
                  <div style={featureContentStyles}>
                    <h4 style={featureTitleStyles}>
                      {feature.title}
                    </h4>
                    <p style={featureDescriptionStyles}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Connector Line (except for last item) */}
                  {index < features.length - 1 && (
                    <div style={connectorLineStyles} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyles: React.CSSProperties = {
  backgroundColor: '#1A1A1A',
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

const characterColumnStyles: React.CSSProperties = {
  flex: '1',
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'center'
};

const characterContainerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem'
};

const characterPlaceholderStyles: React.CSSProperties = {
  width: '300px',
  height: '400px',
  backgroundColor: '#2A2A2A',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '4rem',
  color: '#666',
  border: '2px solid #333',
  background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)'
};

const characterNameStyles: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#FFB347',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const featuresColumnStyles: React.CSSProperties = {
  flex: '1',
  minWidth: '300px'
};

const featuresListStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0'
};

const featureItemStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.5rem',
  padding: '2rem 0',
  position: 'relative'
};

const featureIconStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: '#FF6B35',
  borderRadius: '50%',
  flexShrink: 0,
  position: 'relative',
  zIndex: 2
};

const iconStyles: React.CSSProperties = {
  fontSize: '1.5rem'
};

const featureContentStyles: React.CSSProperties = {
  flex: '1'
};

const featureTitleStyles: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#FFB347',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '0.5rem',
  margin: 0
};

const featureDescriptionStyles: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#CCCCCC',
  margin: 0
};

const connectorLineStyles: React.CSSProperties = {
  position: 'absolute',
  left: '24px',
  top: '50px',
  bottom: '-50px',
  width: '2px',
  backgroundColor: '#333',
  zIndex: 1
};

export default GameFeatures;