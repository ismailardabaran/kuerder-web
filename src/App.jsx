import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Spotlight from './components/Spotlight';

// Lazy load MapSection to prevent heavy SVG/Framer Motion loading on mobile
const MapSection = lazy(() => import('./components/MapSection'));

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Initial check
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);

    // Listener for window resize
    const handleResize = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div id="top" className="w-full min-h-screen bg-cream text-charcoal font-sans bg-dot-pattern relative">
      <Spotlight />
      <Header />
      <main>
        <Hero />
        
        {/* Conditional Rendering & Lazy Loading for Map */}
        <div className="hidden md:block">
          {isDesktop && (
            <Suspense fallback={<div className="h-24 w-full bg-transparent" />}>
              <MapSection />
            </Suspense>
          )}
        </div>

        <AboutSection />
        <NewsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="bg-charcoal text-cream py-8 text-center">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} KUERDER - Kuşadası Eğitimin Renkleri Derneği. Tüm Hakları Saklıdır.
        </p>
      </footer>
    </div>
  );
}

export default App;
