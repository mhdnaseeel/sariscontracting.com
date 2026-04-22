import React from 'react';
import { motion } from 'framer-motion';
import { Target, Gem, ShieldCheck } from 'lucide-react';
import Stats from './Stats';

const About = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-brand-gold" />,
      title: "Our Mission",
      desc: "Providing optimum service and premium products to our clients with efficient and conducive effort, aiming to bring about healthy relationships."
    },
    {
      icon: <Gem className="w-12 h-12 text-brand-gold" />,
      title: "Our Values",
      desc: "We strongly believe that core values are the base of every company and their performance on the job, impacting every notable work we output."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-brand-gold" />,
      title: "Quality Policy",
      desc: "Providing services that help achieve the best distinctive performance standards in accordance with international standards."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section bg-white border-b border-gray-200">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About Us</h2>
            <h3 className="text-4xl font-heading font-extrabold text-brand-navy mb-8 mt-6 leading-snug">
              Professionally Managed Contracting & Industrial Supplies
            </h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Saris Contracting is managed by a highly qualified, motivated, and experienced team to cope with the fast development of this Kingdom.
            </p>
            <div className="p-8 bg-[#F5F5F5] border-l-4 border-brand-gold rounded-r-xl shadow-sm">
              <p className="text-brand-navy italic text-lg leading-relaxed font-semibold">
                "We aim at bestowing the coming generation a wider, broader and a stronger base to provide better opportunities, innovation and standards of life."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Heavy Duty Excellence Image */}
            <div className="aspect-[4/3] bg-brand-navy rounded-2xl shadow-2xl border-8 border-white relative overflow-hidden flex items-center justify-center transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 group">
               <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Heavy duty construction machinery" 
                 className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 z-0" 
               />
            </div>
            
            {/* Stat Card Overlapping */}
            <div className="absolute -bottom-8 -left-8 bg-brand-gold text-brand-navy p-10 rounded-2xl shadow-2xl border-4 border-white hidden md:block z-20 transform lg:rotate-3">
              <div className="text-5xl font-black font-heading mb-2">10+</div>
              <div className="uppercase tracking-widest text-sm font-bold text-brand-navy/80">Years of<br/>Excellence</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 origin-left">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-black font-heading text-brand-navy mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <Stats />
      </div>
    </section>
  );
};

export default About;
