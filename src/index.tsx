/**
 * Application Entry Point
 * 
 * This file is the main entry point for the React application.
 * It renders the App component and sets up the development environment.
 * 
 * Features:
 * - React 18 createRoot API for better performance
 * - StrictMode for development warnings
 * - Global styles import
 * - Service worker registration (optional)
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

// Global styles import
import './index.css';

// Main App component
import App from './ App';

/**
 * Get the root element from the DOM
 * This element is defined in public/index.html
 */
const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Root element not found. Make sure there is an element with id="root" in your HTML.'
  );
}

/**
 * Create React 18 root for better performance and future features
 * Using the new createRoot API instead of deprecated ReactDOM.render
 */
const root = createRoot(container);

/**
 * Render the application
 * 
 * StrictMode helps identify potential problems in the application:
 * - Detecting unsafe lifecycles
 * - Warning about legacy string ref API usage
 * - Warning about deprecated findDOMNode usage
 * - Detecting unexpected side effects
 * - Detecting legacy context API
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);