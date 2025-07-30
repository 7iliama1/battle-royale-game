/**
 * Main Application Component
 * 
 * This is the root component of the Battle Royale Game landing page.
 * It orchestrates all major sections and provides global context.
 * 
 * Features:
 * - Language context provider for internationalization
 * - Smooth scrolling navigation
 * - Progressive loading of sections
 * - SEO optimization with React Helmet
 */

import React from 'react';
import './App.css';

// Context Providers
import { LanguageProvider } from './context/LanguageContext';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Main Sections
import Hero from './components/Sections/Hero';
import GameStory from './components/Sections/GameStory';
import GameFeatures from './components/Sections/GameFeatures';
import GameScreenshots from './components/Sections/GameScreenshots';
import SystemRequirements from './components/Sections/SystemRequirements';
import PressReviews from './components/Sections/PressReviews';
import NewsletterSignup from './components/Sections/NewsletterSignup';

// Common Components
import ScrollToTop from './components/Common/ScrollToTop';

/**
 * App Component
 * 
 * Main application wrapper that combines all sections
 * and provides global state management
 */
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App">
        {/* 
          Header with navigation and language toggle
          Sticky positioned for easy access to navigation
        */}
        <Header />
        
        {/* 
          Main content area with all landing page sections
          Each section is semantically structured for SEO
        */}
        <main className="main-content">
          {/* Hero section with game trailer and main CTA */}
          <Hero />
          
          {/* Game story and description */}
          <GameStory />
          
          {/* Key features and gameplay mechanics */}
          <GameFeatures />
          
          {/* Screenshot gallery with interactive slider */}
          <GameScreenshots />
          
          {/* Technical specifications */}
          <SystemRequirements />
          
          {/* Press reviews and testimonials */}
          <PressReviews />
          
          {/* Newsletter subscription form */}
          <NewsletterSignup />
        </main>
        
        {/* 
          Footer with links and additional information
          Contains social media links and legal information
        */}
        <Footer />
        
        {/* 
          Scroll to top button - appears when user scrolls down
          Provides smooth scrolling back to top
        */}
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;