import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset back to idle after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="iletisim" className="bg-transparent py-24 md:py-32 relative overflow-hidden border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Panel - Text & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-charcoal/70 font-light mb-12 max-w-lg leading-relaxed">
              {t('contact.subtitle')}
            </p>

            {/* Contact Details */}
            <div className="flex flex-col space-y-6 pt-4">
              
              {/* 1. Email */}
              <div className="flex items-center space-x-4 text-charcoal">
                <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">info@kuerder.org</span>
              </div>

              {/* 2. Instagram */}
              <div className="flex items-center space-x-4 text-charcoal">
                <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-medium">@kuerder_dernegi</span>
              </div>

              {/* 3. Phone */}
              <div className="flex items-center space-x-4 text-charcoal">
                <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">+90 555 000 00 00</span>
              </div>

              {/* 4. Address */}
              <div className="flex items-center space-x-4 text-charcoal">
                <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">{t('contact.info.address_value')}</span>
              </div>

            </div>
          </motion.div>

          {/* Right Panel - Glassmorphism Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-cream/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(45,43,42,0.05)] rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Soft internal glow for glassmorphism */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal/80 mb-2">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-5 py-4 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta/50 transition-all duration-300"
                    placeholder={t('contact.form.name')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-2">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-5 py-4 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta/50 transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Subject Select */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal/80 mb-2">{t('contact.form.subject')}</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-5 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta/50 transition-all duration-300 appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232D2B2A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25em 1.25em' }}
                  >
                    <option value="" disabled>{t('contact.form.subject')}</option>
                    <option value="Erasmus+ Partnership">{t('projects.categories.ka1')} / {t('projects.categories.ka2')}</option>
                    <option value="Volunteer">{t('about.cta')}</option>
                    <option value="Other">{t('nav.contact')}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-2">{t('contact.form.message')}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-5 py-4 text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta/50 transition-all duration-300 resize-none"
                    placeholder={t('contact.form.message')}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`relative w-full rounded-xl py-4 font-medium text-cream shadow-lg transition-all duration-300 overflow-hidden ${
                    status === 'success' 
                      ? 'bg-green-600 shadow-green-600/30' 
                      : 'bg-charcoal hover:bg-[#1a1918] shadow-charcoal/20 hover:-translate-y-1'
                  }`}
                >
                  <span className={`flex items-center justify-center space-x-2 transition-opacity duration-300 ${status === 'loading' ? 'opacity-0' : 'opacity-100'}`}>
                    {status === 'success' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t('contact.form.submit')} OK!</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  
                  {/* Loading Spinner */}
                  {status === 'loading' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-6 w-6 text-cream" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
