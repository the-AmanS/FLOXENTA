import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Page Not Found</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        Oops! The page you are looking for has been moved or doesn't exist.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;