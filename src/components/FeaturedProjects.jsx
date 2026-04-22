import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FeaturedProjects = () => {
  const { t } = useLanguage();

  const projects = [
    { title: t('projects.p1Title'), category: t('projects.p1Cat'), image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" },
    { title: t('projects.p2Title'), category: t('projects.p2Cat'), image: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?auto=format&fit=crop&q=80&w=800" },
    { title: t('projects.p3Title'), category: t('projects.p3Cat'), image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="text-slate-600 mt-4">{t('projects.desc')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] bg-brand-navy"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />
              
              {/* Gradient Sweep Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90" />
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent skew-x-12 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 rtl:translate-x-[100%] rtl:group-hover:-translate-x-[100%]" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform rtl:left-auto rtl:right-0">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-heading font-black text-white">{project.title}</h3>
                <div className="w-0 group-hover:w-16 h-1 bg-brand-gold mt-4 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
