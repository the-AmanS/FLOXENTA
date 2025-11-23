import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { ContactFormData } from '../types';
import { SERVICES } from '../constants';

const schema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  businessName: yup.string().optional(),
  phone: yup.string().optional(),
  budgetRange: yup.string().required('Please select a budget range'),
  service: yup.string().required('Please select a service'),
  message: yup.string().required('Please tell us about your project').min(20, 'Message is too short'),
  consent: yup.boolean().oneOf([true], 'You must accept the terms').required(),
  honeypot: yup.string().optional() // Should remain empty
}).required();

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      service: initialService || '',
      budgetRange: '$5k - $10k',
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return; // Spam trap
    
    setStatus('submitting');
    
    try {
      // Simulate API call to serverless function
      // In production: await axios.post('/api/contact', data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form Data:', data);
      setStatus('success');
      reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const inputClasses = `w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 outline-none transition-all dark:text-white focus:border-brand-start focus:ring-0 focus:shadow-[0_0_15px_rgba(110,231,183,0.4)]`;

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-900/20 p-10 rounded-[2rem] text-center border border-green-200 dark:border-green-800 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
      >
        <h3 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4 drop-shadow-md">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-300 mb-8 text-lg">Thank you for reaching out. We will get back to you within 24 hours.</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStatus('idle')}
          className="text-base font-bold underline text-green-800 dark:text-green-400 hover:text-green-600"
        >
          Send another message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Honeypot */}
      <input type="text" {...register('honeypot')} className="hidden" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Full Name *</label>
          <input 
            {...register('fullName')}
            className={`${inputClasses} ${errors.fullName ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]' : ''}`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-2 font-semibold ml-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Email *</label>
          <input 
            {...register('email')}
            className={`${inputClasses} ${errors.email ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]' : ''}`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-2 font-semibold ml-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Business Name (Optional)</label>
          <input 
            {...register('businessName')}
            className={inputClasses}
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Phone (Optional)</label>
          <input 
            {...register('phone')}
            className={inputClasses}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Interested Service *</label>
          <div className="relative">
            <select 
                {...register('service')}
                className={`${inputClasses} appearance-none cursor-pointer`}
            >
                <option value="">Select a service...</option>
                {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                <option value="Other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
          </div>
          {errors.service && <p className="text-red-500 text-xs mt-2 font-semibold ml-1">{errors.service.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Budget Range *</label>
          <div className="relative">
            <select 
                {...register('budgetRange')}
                className={`${inputClasses} appearance-none cursor-pointer`}
            >
                <option value="$1k - $5k">$1k - $5k</option>
                <option value="$5k - $10k">$5k - $10k</option>
                <option value="$10k - $25k">$10k - $25k</option>
                <option value="$25k+">$25k+</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
          </div>
          {errors.budgetRange && <p className="text-red-500 text-xs mt-2 font-semibold ml-1">{errors.budgetRange.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Project Details *</label>
        <textarea 
          {...register('message')}
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your goals, timeline, and any specific requirements..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-2 font-semibold ml-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-start">
        <input 
          type="checkbox" 
          id="consent"
          {...register('consent')}
          className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-end focus:ring-brand-start cursor-pointer"
        />
        <label htmlFor="consent" className="ml-3 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          I agree to the processing of my personal data as described in the Privacy Policy.
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs font-semibold">{errors.consent.message}</p>}

      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={{ 
            boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 25px rgba(59,130,246,0.6)", "0 0 0px rgba(59,130,246,0)"]
        }}
        transition={{ 
            boxShadow: { duration: 2, repeat: Infinity }
        }}
        className="w-full py-5 px-8 rounded-xl bg-gradient-to-r from-brand-start to-brand-end text-white font-extrabold text-xl shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </motion.button>
      
      {status === 'error' && (
        <p className="text-red-500 text-center text-sm font-bold animate-pulse">Something went wrong. Please try again later.</p>
      )}
    </form>
  );
};
