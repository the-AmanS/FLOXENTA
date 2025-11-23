import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate data fetching
    const found = PROJECTS.find(p => p.slug === slug);
    if (found) {
      setProject(found);
    }
    setLoading(false);
  }, [slug]);

  if (loading) return <div className="min-h-screen pt-20 flex justify-center items-center"><div className="w-12 h-12 border-4 border-brand-start border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(110,231,183,0.5)]"></div></div>;

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <button onClick={() => navigate('/portfolio')} className="text-brand-end hover:underline">
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-32">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-slate-900 overflow-hidden">
        {/* Skeleton Placeholder */}
        <div className={`absolute inset-0 bg-slate-800 animate-pulse ${imageLoaded ? 'hidden' : 'block'}`} />
        
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
        >
            <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
                imageLoaded ? 'opacity-40' : 'opacity-0'
            }`}
            />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 w-full p-8 md:p-16"
        >
          <div className="max-w-7xl mx-auto">
            <Link to="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Works
            </Link>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight">
                {project.title.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.03) }}
                        className="inline-block"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </h1>
            <div className="flex flex-wrap gap-4 text-slate-300">
              <motion.span 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 1, type: 'spring' }}
                className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Client: {project.client}
              </motion.span>
              <motion.span 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 1.1, type: 'spring' }}
                className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Category: {project.category}
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Content */}
          <div className="lg:col-span-2 space-y-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-start pl-4">The Challenge</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-end pl-4">The Solution</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-brand-accent pl-4">Key Features</h2>
              <ul className="space-y-4">
                {['Responsive and mobile-first architecture', 'Custom backend integration', 'Optimized performance (95+ Lighthouse)'].map((feat, i) => (
                    <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center text-slate-600 dark:text-slate-300 text-lg"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-start mr-4 shadow-[0_0_10px_rgba(110,231,183,0.8)]"></span>
                        {feat}
                    </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-10 border border-gray-100 dark:border-slate-700 sticky top-28 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {project.techStack.map(tech => (
                  <motion.span 
                    key={tech} 
                    whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "#ffffff" }}
                    className="px-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] cursor-default transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-slate-700">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center py-4 px-6 rounded-xl bg-gradient-to-r from-brand-end to-brand-accent text-white font-bold transition-all shadow-lg"
                  >
                    Start a project like this
                  </motion.button>
                </Link>
                <button 
                   disabled
                   className="flex w-full items-center justify-center gap-2 text-slate-500 cursor-not-allowed text-sm mt-6 hover:text-slate-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Visit Live Site
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
