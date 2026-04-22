import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
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
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-600' : 'text-gray-200'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} color={isScrolled ? '#0B1F3A' : '#FFFFFF'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 border-t border-gray-100 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block px-6 py-3 text-slate-700 font-bold uppercase text-sm border-b border-gray-50 hover:bg-gray-50 hover:text-brand-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-6 mt-4">
            <a href="#contact" className="btn btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>Get a Quote</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
