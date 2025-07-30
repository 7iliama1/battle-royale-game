import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const PressReviews: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="press-reviews">
      <div className="container">
        <h2>{t('reviews.title')}</h2>
        <h3>{t('reviews.subtitle')}</h3>
        <p>{t('reviews.description')}</p>
        <div className="reviews-list">
          <div className="review-item">
            <h4>{t('reviews.reviewers.evanLahti.name')}</h4>
            <p>{t('reviews.reviewers.evanLahti.title')}</p>
            <blockquote>{t('reviews.reviewers.evanLahti.quote')}</blockquote>
            <small>{t('reviews.reviewers.evanLahti.date')}</small>
          </div>
          <div className="review-item">
            <h4>{t('reviews.reviewers.jadaGriffin.name')}</h4>
            <p>{t('reviews.reviewers.jadaGriffin.title')}</p>
            <blockquote>{t('reviews.reviewers.jadaGriffin.quote')}</blockquote>
            <small>{t('reviews.reviewers.jadaGriffin.date')}</small>
          </div>
          <div className="review-item">
            <h4>{t('reviews.reviewers.aaronWilliams.name')}</h4>
            <p>{t('reviews.reviewers.aaronWilliams.title')}</p>
            <blockquote>{t('reviews.reviewers.aaronWilliams.quote')}</blockquote>
            <small>{t('reviews.reviewers.aaronWilliams.date')}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressReviews;