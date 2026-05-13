import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const projectCategories = ['all', 'ka1', 'ka2', 'local'];

// Dummy data for projects
const projectsData = [
  {
    id: 1,
    category: 'ka1',
    code: '2023-1-TR01-KA122-SCH-000135790',
    title: {
      tr: 'Dijital Gelecek İçin Eğitimde İnovasyon',
      en: 'Innovation in Education for Digital Future'
    },
    description: {
      tr: 'Eğitimde dijitalleşmeyi temel alan bu proje kapsamında, öğretmenlerimizin Avrupa standartlarında teknolojik pedagojik eğitimler alması sağlanmıştır. Proje, yerel eğitim ekosistemine kalıcı dijital araçlar ve yenilikçi metotlar entegre etmeyi amaçlamaktadır.',
      en: 'Within the scope of this project based on digitalization in education, our teachers were provided with technological pedagogical training at European standards. The project aims to integrate permanent digital tools and innovative methods into the local education ecosystem.'
    },
    logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '2023-09-01'
  },
  {
    id: 2,
    category: 'ka2',
    code: '2022-2-TR01-KA210-YOU-000094123',
    title: {
      tr: 'Sürdürülebilir İklim Eylemi',
      en: 'Sustainable Climate Action'
    },
    description: {
      tr: 'Avrupa\'daki gençlik örgütleriyle ortaklaşa yürütülen bu stratejik ortaklık projesi, iklim değişikliği ve çevre bilinci üzerine yenilikçi iyi uygulamaların paylaşılmasını hedeflemektedir. Gençlerin karar alma süreçlerine katılımı ön planda tutulmuştur.',
      en: 'This strategic partnership project, carried out in cooperation with youth organizations in Europe, aims to share innovative good practices on climate change and environmental awareness. The participation of youth in decision-making processes has been prioritized.'
    },
    logo: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '2022-11-15'
  },
  {
    id: 3,
    category: 'ka1',
    code: '2022-1-TR01-KA122-ADU-000078456',
    title: {
      tr: 'Yetişkin Eğitiminde Kapsayıcılık',
      en: 'Inclusion in Adult Education'
    },
    description: {
      tr: 'Dezavantajlı yetişkinlerin toplumsal uyumunu artırmak amacıyla hazırlanan bu hareketlilik projesinde, kurum personelimiz İspanya ve Portekiz\'de işbaşı gözlem faaliyetleri gerçekleştirmiştir.',
      en: 'In this mobility project prepared to increase the social harmony of disadvantaged adults, our institution staff carried out job-shadowing activities in Spain and Portugal.'
    },
    logo: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '2022-06-20'
  },
  {
    id: 4,
    category: 'local',
    code: 'KUERDER-2024-YEREL-01',
    title: {
      tr: 'Gençler İçin Mesleki Rehberlik',
      en: 'Vocational Guidance for Youth'
    },
    description: {
      tr: 'Yerel yönetimler ve İŞKUR ortaklığında yürütülen bu proje, lise son sınıf öğrencilerine ve yeni mezunlara yönelik kariyer planlama, CV hazırlama ve mülakat teknikleri atölyeleri sunmaktadır.',
      en: 'This project, carried out in partnership with local governments and İŞKUR, offers career planning, CV preparation, and interview techniques workshops for high school seniors and new graduates.'
    },
    logo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '2024-01-10'
  },
  {
    id: 5,
    category: 'ka2',
    code: '2021-1-TR01-KA220-VET-000032987',
    title: {
      tr: 'Mesleki Eğitimde Robotik Kodlama',
      en: 'Robotic Coding in Vocational Education'
    },
    description: {
      tr: 'Mesleki eğitim veren kurumların müfredatlarına güncel robotik kodlama ve otomasyon sistemlerinin entegre edilmesi amacıyla 4 farklı Avrupa ülkesi ile geliştirilen devasa bir yenilik transferi projesidir.',
      en: 'It is a huge innovation transfer project developed with 4 different European countries in order to integrate current robotic coding and automation systems into the curricula of vocational education institutions.'
    },
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '2021-05-05'
  },
  {
    id: 6,
    category: 'local',
    code: 'KUERDER-2023-YEREL-02',
    title: {
      tr: 'Kültürel Miras Elçileri',
      en: 'Cultural Heritage Ambassadors'
    },
    description: {
      tr: 'Kuşadası ve çevresindeki tarihi dokunun korunması ve genç nesillere aktarılması için üniversite öğrencileriyle yürütülen, saha çalışmaları ve dijital arşivlemeyi kapsayan vizyoner bir yerel inisiyatif.',
      en: 'A visionary local initiative involving university students, field studies, and digital archiving for the protection and transfer of the historical fabric in and around Kuşadası to younger generations.'
    },
    logo: 'https://images.unsplash.com/photo-1518998053401-878c735c084c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '2023-03-12'
  }
].sort((a, b) => new Date(b.date) - new Date(a.date));

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [gridVisible, setGridVisible] = useState(true);
  const timerRef = useRef(null);

  const handleFilterChange = (category) => {
    if (category === activeFilter) return;
    setGridVisible(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = category === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === category);
      setDisplayedProjects(next);
      setActiveFilter(category);
      setGridVisible(true);
    }, 320);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  // Sync displayed projects if language changes or logic changes
  useEffect(() => {
    const next = activeFilter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === activeFilter);
    setDisplayedProjects(next);
  }, [activeFilter]);

  // Close modal when pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling and compensate for scrollbar width to avoid layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedProject]);

  const getLang = () => i18n.language === 'tr' ? 'tr' : 'en';

  return (
    <section id="projelerimiz" className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header & Filters */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-8">
              {t('projects.title')}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-charcoal text-cream shadow-md' 
                    : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
                }`}
              >
                {t(`projects.categories.${category}`)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            opacity: gridVisible ? 1 : 0,
            transition: gridVisible
              ? 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              : 'opacity 0.28s cubic-bezier(0.4, 0, 1, 1)',
          }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-charcoal/5 rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl hover:bg-cream border border-transparent hover:border-charcoal/10 transition-all duration-300"
            >
              {/* Logo */}
              <div className="w-28 h-28 rounded-full overflow-hidden mb-6 shadow-sm ring-4 ring-white/50 group-hover:ring-terracotta/20 transition-all duration-300">
                <img
                  src={project.logo}
                  alt={project.title[getLang()]}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Code */}
              <span className="text-[10px] sm:text-xs font-mono text-charcoal/40 mb-3 tracking-wider break-all">
                {project.code}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors duration-300 line-clamp-3">
                {project.title[getLang()]}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-charcoal/30"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-cream rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-charcoal/5 hover:bg-charcoal/10 rounded-full flex items-center justify-center text-charcoal transition-colors z-10"
                aria-label={t('projects.modal.close')}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable Content */}
              <div className="p-8 sm:p-12 overflow-y-auto hide-scrollbar flex flex-col items-center text-center">
                
                {/* Modal Logo */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md ring-4 ring-white">
                  <img 
                    src={selectedProject.logo} 
                    alt={selectedProject.title[getLang()]} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Meta & Title */}
                <span className="text-xs font-mono text-terracotta mb-4 px-4 py-1 bg-terracotta/10 rounded-full tracking-widest">
                  {selectedProject.code}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">
                  {selectedProject.title[getLang()]}
                </h3>

                {/* Description Paragraph */}
                <div className="text-charcoal/80 font-light leading-relaxed mb-10 max-w-lg">
                  <p>{selectedProject.description[getLang()]}</p>
                </div>

                {/* Primary Button */}
                <a 
                  href="https://www.kukset.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center space-x-3 px-8 py-4 bg-terracotta text-cream rounded-full font-medium shadow-lg shadow-terracotta/30 hover:bg-[#c06548] hover:shadow-terracotta/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>{t('projects.modal.visit_website')}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ProjectsSection;
