import React from 'react';
import Stats from './Stats';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-transparent">
      {/* Background abstract shapes for depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-charcoal/5 rounded-full blur-3xl" />
      </div>

      <div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6">
            <span className="text-terracotta font-medium tracking-wider text-sm">{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight mb-8">
            {t('hero.title_main')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-terracotta">{t('hero.title_sub')}</span>
          </h1>

          <div className="relative pl-6 border-l-4 border-terracotta mb-10">
            <p className="text-xl md:text-2xl text-charcoal/80 italic font-light leading-relaxed">
              "{t('hero.quote')}"
            </p>
            <p className="mt-4 text-charcoal font-medium text-sm tracking-widest uppercase">
              — {t('hero.quote_author')}
            </p>
          </div>

          <p className="text-lg text-charcoal/70 max-w-2xl leading-relaxed mb-12">
            {t('hero.description')}
          </p>

          <div className="flex items-center space-x-6">
            <a href="#projelerimiz" className="inline-block px-8 py-4 bg-charcoal text-cream rounded-lg font-medium hover:bg-[#1a1918] transition-all duration-300 shadow-lg shadow-charcoal/20 hover:shadow-charcoal/40 transform hover:-translate-y-1">
              {t('hero.cta_projects')}
            </a>
            <a href="#iletisim" className="inline-block px-8 py-4 bg-transparent text-charcoal border border-charcoal/20 rounded-lg font-medium hover:border-terracotta hover:text-terracotta transition-all duration-300">
              {t('hero.cta_join')}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 w-full">
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
