/**
 * Press Reviews Section Component
 * 
 * This section displays reviews and quotes from gaming press and influencers.
 * Features reviewer cards with avatars, quotes, and publication information.
 * 
 * Features:
 * - Press review cards
 * - Reviewer avatars and information
 * - Quote highlights
 * - Social media links
 * - Call-to-action for more testimonials
 */

import React from 'react';

/**
 * Press Reviews Component
 * 
 * Renders the press reviews section with reviewer cards
 */
const PressReviews: React.FC = () => {
  
  // Press reviews data
  const reviews = [
    {
      id: 'evan-lahti',
      name: 'EVAN LAHTI',
      title: 'PC Gamer',
      quote: 'One of my gaming highlights of the year.',
      date: 'October 18, 2018',
      avatar: '👨‍💻', // Placeholder - replace with actual image
      socialIcon: '🐦'
    },
    {
      id: 'jada-griffin',
      name: 'JADA GRIFFIN',
      title: 'Nerdreactor',
      quote: 'The next big thing in the world of streaming and survival games.',
      date: 'December 21, 2018',
      avatar: '👩‍💻', // Placeholder - replace with actual image
      socialIcon: '🐦'
    },
    {
      id: 'aaron-williams',
      name: 'AARON WILLIAMS',
      title: 'Uproxx',
      quote: 'Snoop Dogg Playing The Wildly Entertaining \'SOS\' Is Ridiculous.',
      date: 'December 24, 2018',
      avatar: '👨‍🎤', // Placeholder - replace with actual image
      socialIcon: '🐦'
    }
  ];

  return (
    <section id="quotes" style={sectionStyles}>
      <div style={containerStyles}>
        
        {/* Section Header */}
        <div style={headerStyles}>
          <h2 style={titleStyles}>
            WHAT PEOPLE THINK?
          </h2>
          <h3 style={subtitleStyles}>
            PRESS QUOTES
          </h3>
          
          {/* Description */}
          <p style={descriptionStyles}>
            Our goal is to create a product and service that you're satisfied with and use it every day. 
            This is why we're constantly working on our services to make it better every day and really 
            listen to what our users has to say.
          </p>
          
          {/* CTA Button */}
          <button style={ctaButtonStyles}>
            Read more testimonials
          </button>
        </div>

        {/* Reviews Grid */}
        <div style={reviewsGridStyles}>
          {reviews.map((review) => (
            <div key={review.id} style={reviewCardStyles}>
              
              {/* Card Header */}
              <div style={cardHeaderStyles}>
                
                {/* Avatar */}
                <div style={avatarStyles}>
                  <span style={avatarPlaceholderStyles}>
                    {review.avatar}
                  </span>
                </div>
                
                {/* Reviewer Info */}
                <div style={reviewerInfoStyles}>
                  <h4 style={reviewerNameStyles}>
                    {review.name}
                  </h4>
                  <p style={reviewerTitleStyles}>
                    {review.title}
                  </p>
                </div>
                
                {/* Social Icon */}
                <div style={socialIconStyles}>
                  <span style={socialIconPlaceholderStyles}>
                    {review.socialIcon}
                  </span>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote style={quoteStyles}>
                "{review.quote}"
              </blockquote>
              
              {/* Date */}
              <div style={dateStyles}>
                {review.date}
              </div>
            </div>
          ))}
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
  marginBottom: '4rem',
  maxWidth: '800px',
  margin: '0 auto 4rem auto'
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
  paddingBottom: '0.5rem',
  marginBottom: '2rem'
};

const descriptionStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#CCCCCC',
  marginBottom: '2rem',
  maxWidth: '600px',
  margin: '0 auto 2rem auto'
};

const ctaButtonStyles: React.CSSProperties = {
  backgroundColor: '#FFB347',
  color: '#000000',
  border: 'none',
  padding: '0.8rem 2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  letterSpacing: '1px',
  marginBottom: '2rem'
};

const reviewsGridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
  marginTop: '3rem'
};

const reviewCardStyles: React.CSSProperties = {
  backgroundColor: '#2A2A2A',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid #333',
  transition: 'all 0.3s ease',
  position: 'relative'
};

const cardHeaderStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1.5rem'
};

const avatarStyles: React.CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#FF6B35',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const avatarPlaceholderStyles: React.CSSProperties = {
  fontSize: '1.5rem'
};

const reviewerInfoStyles: React.CSSProperties = {
  flex: 1
};

const reviewerNameStyles: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#FFB347',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  margin: 0,
  marginBottom: '0.25rem'
};

const reviewerTitleStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#CCCCCC',
  margin: 0
};

const socialIconStyles: React.CSSProperties = {
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'all 0.3s ease'
};

const socialIconPlaceholderStyles: React.CSSProperties = {
  fontSize: '1.2rem',
  opacity: 0.7
};

const quoteStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#FFFFFF',
  fontStyle: 'italic',
  margin: '0 0 1.5rem 0',
  borderLeft: '3px solid #FF6B35',
  paddingLeft: '1rem'
};

const dateStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#999',
  textAlign: 'right'
};

export default PressReviews;