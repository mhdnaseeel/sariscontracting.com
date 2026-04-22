import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <motion.img 
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            src="/logo.svg" 
            alt="Saris Logo" 
            className="w-10 h-10 object-contain shadow-sm rounded-lg" 
          />
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl font-heading font-black tracking-tighter ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
          >
            SARIS<span className="text-brand-gold">.</span>
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className={`text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-600' : 'text-gray-200'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-white/20 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-600' : 'text-gray-200'}`}
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <a href="#contact" className="btn btn-primary">{t('nav.quote')}</a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center text-sm font-bold hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-600' : 'text-gray-200'}`}
          >
            <Globe className="w-5 h-5" />
          </button>
          <button 
            className="text-brand-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} color={isScrolled ? '#0B1F3A' : '#FFFFFF'} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 border-t border-gray-100 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="block px-6 py-3 text-slate-700 font-bold uppercase text-sm border-b border-gray-50 hover:bg-gray-50 hover:text-brand-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-6 mt-4 flex flex-col gap-4">
            <button 
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 border-2 border-brand-navy text-brand-navy font-bold uppercase text-sm rounded-md hover:bg-brand-navy hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            </button>
            <a href="#contact" className="btn btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>{t('nav.quote')}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
