/**
 * Footer Component
 * 
 * The footer section with copyright, links, and social media.
 * Contains legal information and additional navigation.
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        
        {/* Footer Content */}
        <div style={footerContentStyles}>
          
          {/* Logo */}
          <div style={logoStyles}>
            SOS
          </div>
          
          {/* Navigation Links */}
          <div style={linksStyles}>
            <a href="#main" style={linkStyles}>MAIN</a>
            <a href="#about" style={linkStyles}>ABOUT</a>
            <a href="#features" style={linkStyles}>GAME FEATURES</a>
            <a href="#requirements" style={linkStyles}>SYSTEM REQUIREMENTS</a>
            <a href="#quotes" style={linkStyles}>QUOTES</a>
          </div>
          
          {/* Social Media */}
          <div style={socialStyles}>
            <span style={socialIconStyles}>📘</span>
            <span style={socialIconStyles}>🐦</span>
            <span style={socialIconStyles}>🎮</span>
            <span style={socialIconStyles}>💬</span>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div style={bottomBarStyles}>
          <div style={copyrightStyles}>
            © 2025 Outpost Games, Inc. All Rights Reserved
          </div>
          
          <div style={legalLinksStyles}>
            <a href="#privacy" style={legalLinkStyles}>PRIVACY POLICY</a>
            <span style={separatorStyles}>|</span>
            <a href="#terms" style={legalLinkStyles}>TERMS OF SERVICES</a>
            <span style={separatorStyles}>|</span>
            <a href="#conduct" style={legalLinkStyles}>CODE OF CONDUCT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Styles
const footerStyles: React.CSSProperties = {
  backgroundColor: '#1A1A1A',
  color: '#FFFFFF',
  padding: '3rem 0 1rem 0',
  borderTop: '1px solid #333'
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
};

const footerContentStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  flexWrap: 'wrap',
  gap: '2rem'
};

const logoStyles: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#FF6B35',
  fontFamily: 'Orbitron, monospace'
};

const linksStyles: React.CSSProperties = {
  display: 'flex',
  gap: '2rem',
  flexWrap: 'wrap'
};

const linkStyles: React.CSSProperties = {
  color: '#CCCCCC',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transition: 'color 0.3s ease'
};

const socialStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem'
};

const socialIconStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  cursor: 'pointer',
  opacity: 0.7,
  transition: 'opacity 0.3s ease'
};

const bottomBarStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '2rem',
  borderTop: '1px solid #333',
  flexWrap: 'wrap',
  gap: '1rem'
};

const copyrightStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#999'
};

const legalLinksStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap'
};

const legalLinkStyles: React.CSSProperties = {
  color: '#999',
  textDecoration: 'none',
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transition: 'color 0.3s ease'
};

const separatorStyles: React.CSSProperties = {
  color: '#666'
};

export default Footer;