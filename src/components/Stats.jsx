import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Set initial display value immediately so span is never blank
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = "0" + suffix;
    }
  }, [suffix]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-4xl md:text-5xl font-bold text-terracotta" />;
};

const Stats = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-12 border-t border-charcoal/10 mt-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-charcoal/5 transition-colors duration-300">
            <Counter value={10} suffix="+" />
            <p className="mt-4 text-charcoal font-medium tracking-wide">{t('stats.projects')}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-charcoal/5 transition-colors duration-300">
            <Counter value={500} suffix="+" />
            <p className="mt-4 text-charcoal font-medium tracking-wide">{t('stats.participants')}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-charcoal/5 transition-colors duration-300">
            <Counter value={30} suffix="+" />
            <p className="mt-4 text-charcoal font-medium tracking-wide">{t('stats.partners')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
