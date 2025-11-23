import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, Smartphone, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-brand-start to-brand-accent blur-[100px] opacity-40"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] -right-[10%] w-[50%] h-[70%] rounded-full bg-gradient-to-l from-brand-end to-purple-500 blur-[120px] opacity-40"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block py-2 px-6 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-md border border-brand-accent/30 text-brand-accent text-sm font-bold tracking-widest mb-8 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            DIGITAL AGENCY FOR GROWTH
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 drop-shadow-2xl"
          >
            We Build. <br/>
            <motion.span 
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-start via-brand-end to-brand-accent bg-[length:200%_auto] inline-block filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              You Grow.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl mx-auto text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed drop-shadow-md"
          >
            Floxenta creates stunning websites, powerful apps, and scalable digital solutions that turn visitors into loyal customers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(110, 231, 183, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 20px rgba(110,231,183,0.3)", "0 0 0px rgba(0,0,0,0)"] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                className="px-10 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-xl"
              >
                Get a Quote
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                 whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "#3B82F6" }}
                 whileTap={{ scale: 0.95 }}
                 className="px-10 py-5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 group"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Feature */}
      <section className="py-32 bg-white dark:bg-slate-950 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white drop-shadow-lg">Our Expertise</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Everything you need to succeed online.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              delay={0}
              icon={<Layout className="w-10 h-10 text-brand-start drop-shadow-[0_0_8px_rgba(110,231,183,0.8)]" />}
              title="Web Development"
              desc="Modern, fast, and SEO-friendly websites using React and Next.js."
            />
            <FeatureCard 
              delay={0.2}
              icon={<Smartphone className="w-10 h-10 text-brand-end drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
              title="Mobile Apps"
              desc="Native iOS and Android applications built with Flutter and React Native."
            />
            <FeatureCard 
              delay={0.4}
              icon={<Code className="w-10 h-10 text-brand-accent drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />}
              title="Custom Software"
              desc="Tailor-made portals, CRMs, and SaaS platforms for your business needs."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32 bg-gray-50 dark:bg-slate-900 relative">
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] dark:bg-grid-slate-700/[0.05] -z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white drop-shadow-lg">Featured Work</h2>
              <p className="text-slate-600 dark:text-slate-400">Recent projects we are proud of.</p>
            </motion.div>
            <Link to="/portfolio" className="hidden md:flex items-center text-brand-end font-bold text-lg hover:text-brand-accent hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all">
              View All <ArrowRight className="w-5 h-5 ml-2 animate-pulse" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Link to={`/portfolio/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-3xl aspect-video mb-6 shadow-2xl ring-4 ring-transparent group-hover:ring-brand-start/50 transition-all duration-500">
                    <motion.img 
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.span 
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-white font-bold text-xl px-6 py-3 border-2 border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md"
                      >
                        View Case Study
                      </motion.span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-end group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] transition-all">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{project.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold text-center mb-20 text-slate-900 dark:text-white drop-shadow-xl"
          >
            What Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.id} 
                initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(110, 231, 183, 0.3)" }}
                className="p-10 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 relative"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-start/10 rounded-full blur-2xl"></div>
                <div className="flex gap-1 text-yellow-400 mb-6 drop-shadow-[0_0_5px_rgba(250,204,21,0.6)]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-end rounded-full blur-md opacity-50 animate-pulse"></div>
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white dark:border-slate-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-xs text-brand-accent font-bold uppercase tracking-wide">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900 dark:to-purple-900 p-16 text-center text-white shadow-[0_20px_60px_-15px_rgba(139,92,246,0.6)] relative overflow-hidden border border-white/10"
          >
             {/* Decorative circles */}
             <motion.div animate={{ scale: [1, 1.5, 1], rotate: 360 }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 right-0 w-80 h-80 bg-brand-start/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></motion.div>
             <motion.div animate={{ scale: [1, 1.5, 1], rotate: -360 }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-0 left-0 w-80 h-80 bg-brand-end/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></motion.div>
             
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Ready to start your project?</h2>
               <p className="text-slate-200 mb-10 max-w-xl mx-auto text-lg">Get our "Small Business Starter Pack" or request a custom quote tailored to your specific needs.</p>
               <Link 
                 to="/contact" 
               >
                 <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl shadow-2xl"
                 >
                   Let's Talk
                 </motion.button>
               </Link>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string, delay: number}> = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ 
      y: -15, 
      boxShadow: "0 0 40px -5px rgba(139, 92, 246, 0.4)",
      borderColor: "rgba(139, 92, 246, 0.5)" 
    }}
    className="p-10 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-100 dark:border-slate-800 group transition-colors"
  >
    <div className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-2xl inline-block shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ring-1 ring-gray-100 dark:ring-slate-700">
      <motion.div 
        whileHover={{ rotate: 360 }} 
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
      {desc}
    </p>
  </motion.div>
);

export default Home;
