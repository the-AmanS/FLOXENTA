import React from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';

const Contact: React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const serviceParam = query.get('service') || undefined;

  const iconVariant: Variants = {
    hover: { scale: 1.2, rotate: 10, backgroundColor: "#3B82F6", color: "#fff", transition: { type: "spring" } }
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Info Column */}
        <div className="order-2 lg:order-1">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 drop-shadow-xl"
          >
            Let's Build Something <span className="text-brand-start">Great</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-16"
          >
            Whether you need a new website, a mobile app, or a complete digital overhaul, we're here to help.
          </motion.p>

          <div className="space-y-12 mb-16">
             <motion.div 
               initial={{ x: -30, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex items-start group"
            >
               <motion.div variants={iconVariant} whileHover="hover" className="w-16 h-16 rounded-2xl bg-brand-start/10 flex items-center justify-center text-brand-end shrink-0 shadow-lg cursor-pointer">
                 <Mail className="w-8 h-8" />
               </motion.div>
               <div className="ml-6">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-end transition-colors">Email Us</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-lg">dev.amansingh1@gmail.com</p>
                 <p className="text-slate-500 text-sm">Response time: &lt; 24 hours</p>
               </div>
             </motion.div>
             
             <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-start group"
            >
               <motion.div variants={iconVariant} whileHover="hover" className="w-16 h-16 rounded-2xl bg-brand-end/10 flex items-center justify-center text-brand-end shrink-0 shadow-lg cursor-pointer">
                 <Phone className="w-8 h-8" />
               </motion.div>
               <div className="ml-6">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-end transition-colors">Call Us</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-lg">+91 12345 67890</p>
                 <p className="text-slate-500 text-sm">Mon-Fri, 9am - 6pm IST</p>
               </div>
             </motion.div>

             <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-start group"
            >
               <motion.div variants={iconVariant} whileHover="hover" className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0 shadow-lg cursor-pointer">
                 <MapPin className="w-8 h-8" />
               </motion.div>
               <div className="ml-6">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-end transition-colors">Visit Us</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-lg">Mumabi, </p>
                 <p className="text-slate-600 dark:text-slate-400 text-lg">Innovation City, CA 90210</p>
               </div>
             </motion.div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-slate-900 rounded-3xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-start rounded-full blur-[60px] opacity-20"></div>
             <h3 className="font-bold text-xl mb-3 relative z-10">Book a Free Consultation</h3>
             <p className="text-slate-300 mb-6 relative z-10">Skip the email tag and schedule a 30-min discovery call directly on our calendar.</p>
             <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-white text-slate-900 rounded-xl font-bold shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all relative z-10"
            >
               Schedule Now
             </motion.a>
          </motion.div>
        </div>

        {/* Form Column */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="order-1 lg:order-2 bg-white dark:bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(139,92,246,0.15)] border border-gray-100 dark:border-slate-800 relative"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-brand-start/20 pointer-events-none"></div>
          <ContactForm initialService={serviceParam} />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;