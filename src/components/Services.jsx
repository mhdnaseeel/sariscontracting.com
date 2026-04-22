import React from 'react';
import { motion } from 'framer-motion';
import { Users, Truck, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Users className="w-12 h-12 text-brand-gold" />,
      title: t('services.s1Title'),
      desc: t('services.s1Desc'),
      list: [
        t('services.s1L1'),
        t('services.s1L2'),
        t('services.s1L3'),
        t('services.s1L4')
      ]
    },
    {
      icon: <Truck className="w-12 h-12 text-brand-gold" />,
      title: t('services.s2Title'),
      desc: t('services.s2Desc'),
      list: [
        t('services.s2L1'),
        t('services.s2L2'),
        t('services.s2L3'),
        t('services.s2L4')
      ]
    },
    {
      icon: <ShieldAlert className="w-12 h-12 text-brand-gold" />,
      title: t('services.s3Title'),
      desc: t('services.s3Desc'),
      list: [
        t('services.s3L1'),
        t('services.s3L2'),
        t('services.s3L3'),
        t('services.s3L4')
      ]
    }
  ];

  return (
    <section id="services" className="section bg-[#F5F5F5] border-b border-gray-200">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="text-slate-600 text-lg mt-8 leading-relaxed">
            {t('services.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              {/* Top Accent Border */}
              <div className="h-1.5 w-0 bg-brand-gold group-hover:w-full transition-all duration-500 ease-in-out"></div>
              
              <div className="p-10 flex-grow flex flex-col">
                <div className="w-20 h-20 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black font-heading text-brand-navy mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 min-h-[90px] leading-relaxed">{service.desc}</p>
                
                <ul className="space-y-4 mt-auto pt-8 border-t border-gray-100">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700 font-medium">
                      <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-1.5 shrink-0 shadow-sm rtl:mr-0 rtl:ml-3"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
