import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Spotlight from './components/Spotlight';

function App() {
  return (
    <div id="top" className="w-full min-h-screen bg-cream text-charcoal font-sans bg-dot-pattern relative">
      <Spotlight />
      <Header />
      <main>
        <Hero />
        <MapSection />
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
