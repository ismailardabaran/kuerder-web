import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { href: '#top',          sectionId: 'top',          key: 'nav.home'     },
  { href: '#hakkimizda',   sectionId: 'hakkimizda',   key: 'nav.about'    },
  { href: '#haberler',     sectionId: 'haberler',     key: 'nav.news'     },
  { href: '#projelerimiz', sectionId: 'projelerimiz', key: 'nav.projects' },
  { href: '#iletisim',     sectionId: 'iletisim',     key: 'nav.contact'  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header height

      // Check for bottom of page first
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('iletisim');
        return;
      }

      // Check each section's position
      const sections = navLinks.map(link => {
        const id = link.sectionId === 'top' ? 'hero-section' : link.sectionId;
        const el = document.getElementById(id);
        if (el) {
          return { id: link.sectionId, offset: el.offsetTop };
        }
        return null;
      }).filter(Boolean);

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (sectionId) =>
    `transition-colors duration-300 ${
      activeSection === sectionId
        ? 'text-terracotta'
        : 'text-charcoal hover:text-terracotta'
    }`;

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
                {navLinks.map(({ href, sectionId, key }) => (
                  <li key={sectionId}>
                    <a href={href} className={linkClass(sectionId)}>
                      {t(key)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-l border-charcoal/10 pl-8">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-cream border-b border-charcoal/10 absolute top-20 left-0 w-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
          {navLinks.map(({ href, sectionId, key }) => (
            <li key={sectionId}>
              <a
                href={href}
                className={`block ${linkClass(sectionId)}`}
                onClick={() => setIsOpen(false)}
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
