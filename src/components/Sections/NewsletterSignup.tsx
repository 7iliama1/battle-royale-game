/**
 * Newsletter Signup Section Component
 * 
 * This section allows users to subscribe to game updates and news.
 * Features a subscription form with email input and a 3D artifact showcase.
 * 
 * Features:
 * - Email subscription form
 * - Form validation
 * - 3D artifact/skull display
 * - Privacy notice
 * - Responsive layout
 */

import React, { useState } from 'react';

/**
 * Newsletter Signup Component
 * 
 * Renders the newsletter subscription section with form and 3D elements
 */
const NewsletterSignup: React.FC = () => {
  // State for form handling
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  /**
   * Handle email input change
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section style={sectionStyles}>
      {/* Background 3D Artifact */}
      <div style={backgroundArtifactStyles}>
        <div style={artifactStyles}>
          💀
        </div>
      </div>

      <div style={containerStyles}>
        
        {/* Main Content - Two Column Layout */}
        <div style={contentStyles}>
          
          {/* Right Column - Newsletter Form */}
          <div style={formColumnStyles}>
            
            {/* Section Header */}
            <div style={headerStyles}>
              <h2 style={titleStyles}>
                WANT TO STAY IN TOUCH?
              </h2>
              <h3 style={subtitleStyles}>
                NEWSLETTER SUBSCRIBE
              </h3>
            </div>

            {/* Description */}
            <p style={descriptionStyles}>
              In order to start receiving our news, all you have to do is enter your email address. 
              Everything else will be taken care of by us. We will send you emails containing 
              information about game. We don't spam.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} style={formStyles}>
              <div style={inputGroupStyles}>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  style={emailInputStyles}
                  disabled={isSubmitting || isSubmitted}
                  required
                />
                <button
                  type="submit"
                  style={{
                    ...subscribeButtonStyles,
                    backgroundColor: isSubmitted ? '#00FF88' : '#FFB347',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe now'}
                </button>
              </div>
            </form>

            {/* Privacy Notice */}
            <p style={privacyStyles}>
              We don't spam and respect your privacy. You can unsubscribe at any time.
            </p>
          </div>

          {/* Left Column - 3D Artifact Display */}
          <div style={artifactColumnStyles}>
            <div style={artifactContainerStyles}>
              <div style={artifactDisplayStyles}>
                {/* Main Artifact */}
                <div style={mainArtifactStyles}>
                  🏺
                </div>
                
                {/* Crystal/Gem accents */}
                <div style={crystalStyles}>
                  💎
                </div>
                
                {/* Glowing effect */}
                <div style={glowEffectStyles} />
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
  position: 'relative',
  overflow: 'hidden'
};

const backgroundArtifactStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  opacity: 0.05
};

const artifactStyles: React.CSSProperties = {
  position: 'absolute',
  left: '-5%',
  top: '20%',
  fontSize: '20rem',
  color: '#FFB347',
  transform: 'rotate(-15deg)',
  zIndex: 1
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  position: 'relative',
  zIndex: 2
};

const contentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '4rem',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const formColumnStyles: React.CSSProperties = {
  flex: '1',
  minWidth: '400px',
  order: 2
};

const artifactColumnStyles: React.CSSProperties = {
  flex: '1',
  minWidth: '300px',
  order: 1,
  display: 'flex',
  justifyContent: 'center'
};

const headerStyles: React.CSSProperties = {
  marginBottom: '2rem'
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

const descriptionStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#CCCCCC',
  marginBottom: '2rem'
};

const formStyles: React.CSSProperties = {
  marginBottom: '1rem'
};

const inputGroupStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap'
};

const emailInputStyles: React.CSSProperties = {
  flex: '1',
  minWidth: '250px',
  padding: '1rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#1A1A1A',
  border: '2px solid #333',
  borderRadius: '8px',
  color: '#FFFFFF',
  outline: 'none',
  transition: 'all 0.3s ease'
};

const subscribeButtonStyles: React.CSSProperties = {
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  letterSpacing: '1px',
  color: '#000000',
  minWidth: '160px'
};

const privacyStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#999',
  fontStyle: 'italic'
};

const artifactContainerStyles: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const artifactDisplayStyles: React.CSSProperties = {
  position: 'relative',
  width: '300px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const mainArtifactStyles: React.CSSProperties = {
  fontSize: '8rem',
  color: '#FFB347',
  position: 'relative',
  zIndex: 3,
  filter: 'drop-shadow(0 0 20px rgba(255, 179, 71, 0.5))'
};

const crystalStyles: React.CSSProperties = {
  position: 'absolute',
  top: '10%',
  right: '10%',
  fontSize: '2rem',
  color: '#FF6B35',
  zIndex: 2,
  animation: 'float 3s ease-in-out infinite'
};

const glowEffectStyles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '200px',
  height: '200px',
  background: 'radial-gradient(circle, rgba(255, 179, 71, 0.2) 0%, transparent 70%)',
  borderRadius: '50%',
  zIndex: 1
};

export default NewsletterSignup;