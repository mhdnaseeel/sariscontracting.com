import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('stats.manpower'), value: 95, color: "bg-brand-gold" },
    { label: t('stats.equipment'), value: 88, color: "bg-brand-gold" },
    { label: t('stats.safety'), value: 100, color: "bg-brand-gold" },
    { label: t('stats.efficiency'), value: 92, color: "bg-brand-gold" }
  ];

  return (
    <div className="mt-20">
      <h4 className="text-xl font-bold font-heading text-brand-navy mb-10 text-center uppercase tracking-widest">{t('stats.title')}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-navy/70">{stat.label}</span>
              <span className="text-lg font-black font-heading text-brand-navy">{stat.value}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${stat.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                className={`h-full ${stat.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
