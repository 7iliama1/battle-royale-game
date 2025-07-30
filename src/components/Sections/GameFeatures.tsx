import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GameFeatures: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="game-features">
      <div className="container">
        <h2>{t('features.title')}</h2>
        <h3>{t('features.subtitle')}</h3>
        <div className="features-list">
          <div className="feature-item">
            <h4>{t('features.items.survive.title')}</h4>
            <p>{t('features.items.survive.description')}</p>
          </div>
          <div className="feature-item">
            <h4>{t('features.items.allies.title')}</h4>
            <p>{t('features.items.allies.description')}</p>
          </div>
          <div className="feature-item">
            <h4>{t('features.items.audience.title')}</h4>
            <p>{t('features.items.audience.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;