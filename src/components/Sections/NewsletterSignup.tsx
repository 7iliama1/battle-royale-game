import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const NewsletterSignup: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="newsletter-signup">
      <div className="container">
        <h2>{t('newsletter.title')}</h2>
        <h3>{t('newsletter.subtitle')}</h3>
        <p>{t('newsletter.description')}</p>
        <div className="newsletter-form">
          <input 
            type="email" 
            placeholder={t('newsletter.placeholder')}
            className="email-input"
          />
          <button className="subscribe-button">
            {t('newsletter.ctaButton')}
          </button>
        </div>
        <small>{t('newsletter.privacy')}</small>
      </div>
    </section>
  );
};

export default NewsletterSignup;