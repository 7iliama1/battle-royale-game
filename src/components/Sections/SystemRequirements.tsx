import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SystemRequirements: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="system-requirements">
      <div className="container">
        <h2>{t('systemReq.title')}</h2>
        <h3>{t('systemReq.subtitle')}</h3>
        <div className="requirements-list">
          <div className="requirement-item">
            <strong>{t('systemReq.specs.os')}</strong> {t('systemReq.values.os')}
          </div>
          <div className="requirement-item">
            <strong>{t('systemReq.specs.processor')}</strong> {t('systemReq.values.processor')}
          </div>
          <div className="requirement-item">
            <strong>{t('systemReq.specs.memory')}</strong> {t('systemReq.values.memory')}
          </div>
          <div className="requirement-item">
            <strong>{t('systemReq.specs.storage')}</strong> {t('systemReq.values.storage')}
          </div>
          <div className="requirement-item">
            <strong>{t('systemReq.specs.graphics')}</strong> {t('systemReq.values.graphics')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;