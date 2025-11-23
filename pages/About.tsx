import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 overflow-hidden">
      {/* Intro */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 drop-shadow-xl">
          Who We Are
        </h1>
        <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          Floxenta is more than a digital agency. We are your technical partners, committed to solving complex problems with elegant code and stunning design.
        </p>
      </motion.div>

      {/* Stats/Values */}
      <div className="bg-brand-start/5 dark:bg-slate-800/50 py-20 mb-32 border-y border-brand-start/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Support', value: '24/7' },
            ].map((stat, i) => (
                <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, textShadow: "0 0 20px rgba(59,130,246,0.5)" }}
                    className="text-5xl md:text-6xl font-extrabold text-brand-end mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  >
                      {stat.value}
                  </motion.div>
                  <div className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-4xl font-bold text-center mb-20 text-slate-900 dark:text-white drop-shadow-lg">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {['Discovery', 'Design', 'Development', 'Testing', 'Launch'].map((step, i) => (
            <motion.div 
                key={step} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(110,231,183,0.6)" }}
                className="w-16 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-2xl mb-6 z-10 shadow-xl transition-all"
              >
                {i + 1}
              </motion.div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white group-hover:text-brand-start transition-colors">{step}</h3>
              {i < 4 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 dark:bg-slate-700 -z-0">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
                        className="h-full bg-brand-start shadow-[0_0_10px_rgba(110,231,183,0.5)]"
                    />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-20 text-slate-900 dark:text-white drop-shadow-lg">Meet The Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {TEAM.map((member, i) => (
            <motion.div 
                key={member.id} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-gray-100 dark:border-slate-800 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              <motion.div 
                className="relative mb-8"
                whileHover={{ rotate: 5 }}
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-brand-start to-brand-end rounded-full blur-lg opacity-50 animate-pulse"></div>
                 <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-40 h-40 rounded-full object-cover relative z-10 border-4 border-white dark:border-slate-800 shadow-2xl"
                />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
              <p className="text-brand-end font-bold text-lg mb-6">{member.role}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
