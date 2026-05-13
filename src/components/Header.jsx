import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#top" className="text-xl md:text-2xl font-medium tracking-[0.3em] uppercase text-charcoal hover:text-terracotta transition-colors duration-300">
              KUERDER
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8 text-sm font-medium">
                <li>
                  <a href="#top" className="text-terracotta transition-colors duration-300">{t('nav.home')}</a>
                </li>
                <li>
                  <a href="#hakkimizda" className="text-charcoal hover:text-terracotta transition-colors duration-300">{t('nav.about')}</a>
                </li>
                <li>
                  <a href="#haberler" className="text-charcoal hover:text-terracotta transition-colors duration-300">{t('nav.news')}</a>
                </li>
                <li>
                  <a href="#projelerimiz" className="text-charcoal hover:text-terracotta transition-colors duration-300">{t('nav.projects')}</a>
                </li>
                <li>
                  <a href="#iletisim" className="text-charcoal hover:text-terracotta transition-colors duration-300">{t('nav.contact')}</a>
                </li>
              </ul>
            </nav>
            <div className="border-l border-charcoal/10 pl-8">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={toggleMenu} className="text-charcoal focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-charcoal/10 absolute top-20 left-0 w-full shadow-lg">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
            <li>
              <a href="#top" className="block text-terracotta" onClick={toggleMenu}>{t('nav.home')}</a>
            </li>
            <li>
              <a href="#hakkimizda" className="block text-charcoal hover:text-terracotta" onClick={toggleMenu}>{t('nav.about')}</a>
            </li>
            <li>
              <a href="#haberler" className="block text-charcoal hover:text-terracotta" onClick={toggleMenu}>{t('nav.news')}</a>
            </li>
            <li>
              <a href="#projelerimiz" className="block text-charcoal hover:text-terracotta" onClick={toggleMenu}>{t('nav.projects')}</a>
            </li>
            <li>
              <a href="#iletisim" className="block text-charcoal hover:text-terracotta" onClick={toggleMenu}>{t('nav.contact')}</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
