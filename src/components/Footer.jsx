import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity">
              <img src="/logo.svg" alt="Saris Logo" className="w-12 h-12 object-contain rounded-xl shadow-lg border border-white/10" />
              <span className="text-4xl font-heading font-black tracking-tighter text-white">
                SARIS<span className="text-brand-gold">.</span>
              </span>
            </Link>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-black font-heading mb-6 text-brand-gold tracking-wide">{t('footer.links')}</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-brand-gold hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all font-medium text-sm">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-brand-gold hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all font-medium text-sm">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-gold hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all font-medium text-sm">{t('nav.services')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-gold hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all font-medium text-sm">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black font-heading mb-6 text-brand-gold tracking-wide">{t('footer.services')}</h4>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm font-medium">{t('services.s1Title')}</li>
              <li className="text-gray-300 text-sm font-medium">{t('services.s2Title')}</li>
              <li className="text-gray-300 text-sm font-medium">{t('services.s3Title')}</li>
              <li className="text-gray-300 text-sm font-medium">{t('projects.p3Title')}</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Saris Contracting. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 space-x-6 rtl:space-x-reverse">
            <a href="#" className="hover:text-brand-gold transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-brand-gold transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
