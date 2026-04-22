import React from 'react';
import { motion } from 'framer-motion';

const ClientsMarquee = () => {
  const clients = [
    "SAUDI ARAMCO", "SABIC", "MA'ADEN", "SEC", "SWCC", "SATORP", "SASREF", "YASREF"
  ];

  return (
    <div className="py-10 bg-brand-navy/5 overflow-hidden whitespace-nowrap border-y border-brand-gold/10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        <div className="flex items-center gap-20">
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-black font-heading text-brand-navy/20 uppercase tracking-tighter"
            >
              {client}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientsMarquee;
