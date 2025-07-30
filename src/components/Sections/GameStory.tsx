import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GameStory: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="game-story">
      <div className="container">
        <h2>{t('story.title')}</h2>
        <h3>{t('story.subtitle')}</h3>
        <p>{t('story.description')}</p>
      </div>
    </section>
  );
};

export default GameStory;