import React from 'react';
import { motion } from 'framer-motion';
import { Users, Truck, ShieldAlert } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-brand-gold" />,
      title: "Skilled Manpower Supply",
      desc: "A premier organization specialized in manpower supply in Saudi Arabia, committed to quality performance, high integrity, and speed.",
      list: [
        "All Category Engineers",
        "Instrument Technician, Foreman",
        "QA/QC Mechanical Inspector",
        "Civil & Safety Categories"
      ]
    },
    {
      icon: <Truck className="w-12 h-12 text-brand-gold" />,
      title: "Rental Vehicle & Equipment",
      desc: "We offer the largest rental fleet with industry-leading availability, inspection, safety training, and certification for your needs.",
      list: [
        "Buses, Coaster, Hiace",
        "Bobcat, Rigger, JCB",
        "Excavator, Wheel Loader",
        "Multiple Boom & Scissor Lifts"
      ]
    },
    {
      icon: <ShieldAlert className="w-12 h-12 text-brand-gold" />,
      title: "HSE Policy Integration",
      desc: "Safety practices framed to regulate working conditions. We protect the place of work for each of our employees engaged in construction work.",
      list: [
        "Safe Access and Egress",
        "Occupational Health Hazard Protection",
        "International Practice Standards",
        "Environmental Regulations Manual"
      ]
    }
  ];

  return (
    <section id="services" className="section bg-[#F5F5F5] border-b border-gray-200">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-title">Services We Provide</h2>
          <p className="text-slate-600 text-lg mt-8 leading-relaxed">
            Delivering comprehensive contracting and industrial solutions backed by specialized expertise and a commitment to absolute safety.
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
                      <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-1.5 shrink-0 shadow-sm"></span>
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
