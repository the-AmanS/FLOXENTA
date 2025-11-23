import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  // Dark mode initialization
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10">
            <motion.span 
              whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(110, 231, 183)"
              }}
              className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-start to-brand-end filter drop-shadow-sm"
            >
              FLOXENTA
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => setHoveredPath(link.path)}
                    onMouseLeave={() => setHoveredPath(null)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full outline-none"
                  >
                    {/* Active State Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-brand-start/20 to-brand-end/20 rounded-full shadow-[0_0_15px_rgba(110,231,183,0.3)] border border-brand-start/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover State Pill (Ghost) */}
                    {!isActive && hoveredPath === link.path && (
                      <motion.div
                        layoutId="hover-nav-pill"
                        className="absolute inset-0 bg-gray-100 dark:bg-slate-800 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-brand-end font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                      {link.name}
                    </span>
                  </Link>
                );
            })}
            
            <motion.button
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors ml-4 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_rgba(255,255,255,0.05)]"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </motion.button>

            <Link to="/contact">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 20px rgba(59,130,246,0.6)", "0px 0px 0px rgba(59,130,246,0)"]
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                    className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-medium hover:from-brand-start hover:to-brand-accent transition-all"
                >
                    Get a Quote
                </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
            >
               {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-brand-end focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <X className="w-6 h-6 drop-shadow-md" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Menu className="w-6 h-6 drop-shadow-md" />
                    </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-slate-800 shadow-2xl overflow-hidden"
            >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
                {navLinks.map((link, i) => (
                <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${isLinkActive(link.path) ? 'bg-brand-start/10 text-brand-end shadow-[0_0_10px_rgba(110,231,183,0.2)]' : 'text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
                >
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                    >
                        {link.name}
                    </motion.div>
                </Link>
                ))}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4"
                >
                <Link
                    to="/contact"
                    className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-brand-start to-brand-end text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                    Get a Quote
                </Link>
                </motion.div>
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={item} className="col-span-1 md:col-span-1">
             <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-start to-brand-end drop-shadow-sm">
              FLOXENTA
            </span>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We build high-performance digital solutions that help your business grow. From concept to code.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ scale: 1.2, color: "#8B5CF6", textShadow: "0 0 8px rgba(139, 92, 246, 0.6)" }}
                  className="text-slate-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={item}>
            <h3 className="text-slate-900 dark:text-white font-bold mb-4 drop-shadow-md">Company</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-brand-end hover:shadow-brand-end/50 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] transition-all">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-end hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] transition-all">Our Work</Link></li>
              <li><Link to="/services" className="hover:text-brand-end hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] transition-all">Services</Link></li>
              <li><Link to="/careers" className="hover:text-brand-end hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] transition-all">Careers</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h3 className="text-slate-900 dark:text-white font-bold mb-4 drop-shadow-md">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center group"><Mail className="w-4 h-4 mr-2 group-hover:text-brand-start group-hover:animate-bounce" /> dev.amansingh1/li>
              <li className="flex items-center group"><MapPin className="w-4 h-4 mr-2 group-hover:text-brand-end group-hover:animate-bounce" /> 123 Tech Blvd, Innovation City</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item}>
            <h3 className="text-slate-900 dark:text-white font-bold mb-4 drop-shadow-md">Stay Updated</h3>
            <p className="text-xs text-slate-500 mb-4">Get the latest tech trends in your inbox.</p>
            <form className="flex group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 rounded-l-lg bg-gray-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-start outline-none text-sm transition-shadow focus:shadow-[0_0_15px_rgba(110,231,183,0.3)]"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-accent hover:bg-brand-end text-white px-4 rounded-r-lg transition-colors shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              >
                Go
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={item}
          initial="hidden"
          whileInView="show"
          className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500"
        >
          <p>&copy; {new Date().getFullYear()} Floxenta. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
