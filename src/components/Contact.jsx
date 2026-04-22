import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white relative">
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Info Side */}
          <div className="bg-brand-navy text-white p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute bottom-0 right-0 w-64 h-64 border-[40px] border-brand-gold/10 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-heading font-black mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-12 text-base leading-relaxed">
                Ready to start your project? Reach out to our team of experts to discuss your specific requirements. We are here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-brand-gold transition-colors relative">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-brand-gold rounded-xl -z-10"
                    />
                    <Phone className="w-5 h-5 text-white group-hover:text-brand-navy transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold mb-2">Phone</h4>
                    <a href="tel:+966561570997" className="text-xl font-medium hover:text-brand-gold transition-colors">+966 56 157 0997</a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-brand-gold transition-colors relative">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-brand-gold rounded-xl -z-10"
                    />
                    <Mail className="w-5 h-5 text-white group-hover:text-brand-navy transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold mb-2">Email</h4>
                    <a href="mailto:Info@sariscontracting.com" className="text-xl font-medium hover:text-brand-gold transition-colors break-all">Info@sariscontracting.com</a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-brand-gold transition-colors relative">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-brand-gold rounded-xl -z-10"
                    />
                    <MapPin className="w-5 h-5 text-white group-hover:text-brand-navy transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold mb-2">Location</h4>
                    <p className="text-lg leading-relaxed font-medium">King Fahad Road, Jeddah Street<br/>Al Jubail 31951, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="p-12 lg:w-3/5 bg-[#F5F5F5] flex flex-col justify-center">
            <h3 className="text-3xl font-heading font-black text-brand-navy mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all shadow-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all shadow-sm" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all shadow-sm" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Message</label>
                <textarea rows="5" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all resize-none shadow-sm" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full py-4 text-base mt-2 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
