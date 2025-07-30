import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="hero">
      <div className="container">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <button className="cta-button">{t('hero.ctaButton')} | {t('hero.price')}</button>
      </div>
    </section>
  );
};

export default Hero;