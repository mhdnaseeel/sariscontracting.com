import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FloatingCard = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ perspective: 1000 }}
      className="hidden lg:flex justify-end items-start relative z-20 -mt-12"
    >
      <motion.div
        animate={{
          rotateY: [0, 10, 0, -10, 0],
          rotateX: [0, 5, 0, -5, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[320px] h-[420px] bg-gradient-to-br from-brand-gold/20 to-brand-navy/80 backdrop-blur-xl rounded-3xl border border-brand-gold/30 p-8 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 blur-3xl rounded-full -mr-16 -mt-16 rtl:right-auto rtl:left-0 rtl:-ml-16" />
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-gold/20">
              <span className="text-brand-navy font-black text-xl">S</span>
            </div>
            <h4 className="text-2xl font-heading font-black text-white mb-2 leading-tight">{t('card.title')}</h4>
            <p className="text-gray-400 text-sm">{t('card.desc')}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-1 bg-brand-gold rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{t('card.est')}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-brand-gold/50 transition-colors">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">{t('card.statusLabel')}</p>
              <p className="text-white font-bold">{t('card.statusVal')}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;
