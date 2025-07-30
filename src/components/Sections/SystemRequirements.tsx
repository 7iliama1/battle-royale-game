/**
 * System Requirements Section Component
 * 
 * This section displays the technical specifications needed to run the game.
 * Features a specifications table with background 3D elements.
 * 
 * Features:
 * - System specifications table
 * - Background 3D artifact/relic imagery
 * - Clean tabular layout
 * - Technical information display
 */

import React from 'react';

/**
 * System Requirements Component
 * 
 * Renders the system requirements section with specifications table
 */
const SystemRequirements: React.FC = () => {
  
  // System requirements data
  const requirements = [
    {
      category: 'OS:',
      specification: 'Windows 7 64-bit only (No OSX support at this time)'
    },
    {
      category: 'PROCESSOR:',
      specification: 'Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ'
    },
    {
      category: 'MEMORY:',
      specification: '8 GB RAM'
    },
    {
      category: 'STORAGE:',
      specification: '8 GB available space'
    },
    {
      category: 'GRAPHICS:',
      specification: 'NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 Shader Model 5'
    }
  ];

  return (
    <section id="requirements" style={sectionStyles}>
      {/* Background 3D Elements */}
      <div style={backgroundElementsStyles}>
        <div style={artifactStyles}>
          🏺
        </div>
      </div>

      <div style={containerStyles}>
        
        {/* Section Header */}
        <div style={headerStyles}>
          <h2 style={titleStyles}>
            CAN MY COMPUTER RUN THIS GAME?
          </h2>
          <h3 style={subtitleStyles}>
            SYSTEM REQUIREMENTS
          </h3>
        </div>

        {/* Requirements Content */}
        <div style={contentStyles}>
          
          {/* Requirements Table */}
          <div style={tableContainerStyles}>
            <div style={tableStyles}>
              {requirements.map((req, index) => (
                <div key={index} style={tableRowStyles}>
                  
                  {/* Category Column */}
                  <div style={categoryColumnStyles}>
                    <span style={categoryTextStyles}>
                      {req.category}
                    </span>
                  </div>
                  
                  {/* Specification Column */}
                  <div style={specificationColumnStyles}>
                    <span style={specificationTextStyles}>
                      {req.specification}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div style={additionalInfoStyles}>
            <p style={noteStyles}>
              * Minimum requirements for optimal gaming experience
            </p>
            <p style={noteStyles}>
              * DirectX 11 compatible graphics card required
            </p>
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
  position: 'relative',
  overflow: 'hidden'
};

const backgroundElementsStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  pointerEvents: 'none',
  opacity: 0.1
};

const artifactStyles: React.CSSProperties = {
  position: 'absolute',
  right: '10%',
  top: '50%',
  transform: 'translateY(-50%) rotate(15deg)',
  fontSize: '12rem',
  color: '#FFB347',
  zIndex: 1
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 2rem',
  position: 'relative',
  zIndex: 2
};

const headerStyles: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '4rem'
};

const titleStyles: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginBottom: '1rem',
  fontFamily: 'Orbitron, monospace',
  lineHeight: '1.2'
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
  flexDirection: 'column',
  gap: '3rem'
};

const tableContainerStyles: React.CSSProperties = {
  backgroundColor: 'rgba(26, 26, 26, 0.8)',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid #333',
  backdropFilter: 'blur(10px)'
};

const tableStyles: React.CSSProperties = {
  width: '100%'
};

const tableRowStyles: React.CSSProperties = {
  display: 'flex',
  minHeight: '60px',
  alignItems: 'center',
  borderBottom: '1px solid #333',
  padding: '1rem 0'
};

const categoryColumnStyles: React.CSSProperties = {
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  paddingRight: '2rem'
};

const categoryTextStyles: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#FFB347',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const specificationColumnStyles: React.CSSProperties = {
  width: '70%',
  display: 'flex',
  alignItems: 'center'
};

const specificationTextStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: '#CCCCCC',
  lineHeight: '1.5'
};

const additionalInfoStyles: React.CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

const noteStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#999',
  fontStyle: 'italic',
  margin: 0
};

export default SystemRequirements;