import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isTR = i18n.language === 'tr';

  const toggleLanguage = () => {
    i18n.changeLanguage(isTR ? 'en' : 'tr');
  };

  return (
    <button
      onClick={toggleLanguage}
      title={isTR ? 'Switch to English' : 'Türkçe\'ye Geç'}
      className="relative flex items-center gap-0.5 p-0.5 rounded-full border border-charcoal/15 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-terracotta/40 transition-all duration-300 group"
      style={{ minWidth: '72px' }}
    >
      {/* Sliding indicator */}
      <span
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-charcoal transition-all duration-300 ease-in-out"
        style={{ left: isTR ? '2px' : 'calc(50%)' }}
      />

      {/* TR label */}
      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-bold tracking-widest py-1 rounded-full transition-colors duration-300 select-none ${
          isTR ? 'text-cream' : 'text-charcoal/50 group-hover:text-charcoal/70'
        }`}
      >
        TR
      </span>

      {/* EN label */}
      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-bold tracking-widest py-1 rounded-full transition-colors duration-300 select-none ${
          !isTR ? 'text-cream' : 'text-charcoal/50 group-hover:text-charcoal/70'
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageSwitcher;
