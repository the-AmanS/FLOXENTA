import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = ['All', 'Website', 'App', 'Portal', 'E-commerce'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                            project.client.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Our Work
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Explore our latest projects showcasing our expertise in design, development, and digital strategy.
        </p>
      </motion.div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border-2 ${
                filter === cat 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-[0_0_15px_rgba(110,231,183,0.5)]' 
                  : 'bg-transparent border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-start hover:shadow-[0_0_10px_rgba(110,231,183,0.3)]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-brand-start transition-colors" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-3 rounded-full bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 focus:outline-none focus:border-brand-start focus:shadow-[0_0_20px_rgba(110,231,183,0.2)] text-sm transition-all"
          />
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div key={project.id} variants={item} layout>
                 <PortfolioCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-xl text-slate-500">No projects found matching your criteria.</p>
              <button 
                onClick={() => { setFilter('All'); setSearch(''); }}
                className="mt-4 text-brand-end font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/portfolio/${project.slug}`} className="group flex flex-col h-full perspective-1000">
      <motion.div 
        whileHover={{ 
          y: -10,
          rotateX: 2,
          boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 bg-gray-200 dark:bg-slate-800 border-2 border-transparent group-hover:border-brand-end/50 transition-colors"
      >
        {/* Placeholder / Skeleton Background */}
        <div className={`absolute inset-0 bg-gray-200 dark:bg-slate-800 animate-pulse ${isLoaded ? 'hidden' : 'block'}`} />
        
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`object-cover w-full h-full transform transition-all duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
            <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">View Case Study &rarr;</span>
        </div>

        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-xs font-extrabold px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] text-slate-900 dark:text-white border border-white/20">
            {project.category}
          </span>
        </div>
      </motion.div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-end group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] transition-all">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map(tech => (
          <span key={tech} className="text-xs font-medium px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-transparent hover:border-brand-start hover:shadow-[0_0_10px_rgba(110,231,183,0.3)] transition-all">
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Portfolio;