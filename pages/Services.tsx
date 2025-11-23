import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 drop-shadow-xl">
          Our Services
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          We provide end-to-end digital solutions designed to help your business scale efficiently.
        </p>
      </motion.div>

      <div className="space-y-20">
        {SERVICES.map((service, index) => {
          // Dynamic Icon Rendering
          const IconComponent = (Icons as any)[service.icon] || Icons.Zap;
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className={`flex flex-col md:flex-row gap-10 md:gap-20 items-center p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/50 backdrop-blur border border-gray-100 dark:border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(110,231,183,0.15)] transition-shadow duration-500 ${!isEven ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-start/20 to-brand-end/20 flex items-center justify-center text-brand-end shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <IconComponent className="w-10 h-10 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                </motion.div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white drop-shadow-md">{service.title}</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">{service.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-center text-slate-700 dark:text-slate-300 text-base font-medium"
                    >
                      <div className="mr-3 p-1 rounded-full bg-brand-start/20 text-brand-start">
                        <Check className="w-4 h-4" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-100 dark:border-slate-800">
                  <div className="flex items-center text-sm font-bold text-slate-500 bg-gray-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 mr-2 text-brand-accent" />
                    {service.timeline}
                  </div>
                  <div className="flex items-center text-sm font-bold text-slate-500 bg-gray-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                    <DollarSign className="w-4 h-4 mr-2 text-brand-start" />
                    {service.priceRange}
                  </div>
                </div>

                <div className="pt-4">
                  <Link to={`/contact?service=${encodeURIComponent(service.title)}`}>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-600 hover:from-brand-start hover:to-brand-end transition-all shadow-lg"
                    >
                      Request Quote
                    </motion.button>
                  </Link>
                </div>
              </div>
              
              <motion.div 
                className="flex-1 w-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="aspect-square md:aspect-[4/3] rounded-[2rem] bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white dark:border-slate-700">
                   {/* Abstract visualization placeholder */}
                   <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-700">
                      <IconComponent className="w-48 h-48 opacity-10 blur-sm animate-pulse" />
                   </div>
                   <img 
                      src={`https://picsum.photos/600/400?random=${index + 100}`} 
                      alt={service.title} 
                      className="w-full h-full object-cover mix-blend-overlay opacity-60 hover:opacity-80 transition-opacity duration-700" 
                      loading="lazy"
                    />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
