import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import EuropeMapSVG from './EuropeMapSVG';
import { useTranslation } from 'react-i18next';

const MapSection = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">

        {/* Top Gradient & Text */}
        <div
          className="absolute top-0 left-0 w-full z-20 pointer-events-none pt-24 pb-32 bg-cream/30 flex flex-col items-center backdrop-blur-md"
          style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-16 px-6 text-center drop-shadow-sm">
            {t('map.title_main')} <span className="text-terracotta italic" style={{ fontFamily: "'Lora', serif" }}>{t('map.title_highlight')}</span> {t('map.title_sub')}
          </h2>
        </div>

        {/* Bottom Gradient for soft edge */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 bg-cream/30 z-20 pointer-events-none backdrop-blur-md"
          style={{ maskImage: 'linear-gradient(to top, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)' }}
        />

        <div className="flex-1 w-full h-full flex items-center justify-center pt-36 pb-16">
          <EuropeMapSVG scrollProgress={scrollYProgress} />
        </div>

      </div>
    </section>
  );
};

export default MapSection;
