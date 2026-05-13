import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Erdal TUNÇ',
      role: t('about.roles.president'),
    },
    {
      name: 'Erdal TUNÇ',
      role: t('about.roles.coordinator'),
    },
    {
      name: 'Erdal TUNÇ',
      role: t('about.roles.education'),
    },
    {
      name: 'Erdal TUNÇ',
      role: t('about.roles.relations'),
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="hakkimizda" className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Block 1: Intro Text */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-8 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-light">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Block 2: Team Grid */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-semibold text-charcoal mb-12 text-center"
          >
            {t('about.team_title')}
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center group"
              >
                {/* Profile Placeholder */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-charcoal/5 mb-6 overflow-hidden relative shadow-sm border border-charcoal/10 transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 flex items-center justify-center text-charcoal/20">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>

                {/* Details */}
                <h4 className="text-lg font-semibold text-charcoal mb-1 text-center">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-terracotta text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Block 3: CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <a
            href="#iletisim"
            className="inline-block px-10 py-4 bg-terracotta text-cream rounded-full font-medium text-lg hover:bg-[#c06548] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {t('about.cta')}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
