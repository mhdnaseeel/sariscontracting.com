import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load preferred language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('saris_lang');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Update localStorage and document direction when language changes
  useEffect(() => {
    localStorage.setItem('saris_lang', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
