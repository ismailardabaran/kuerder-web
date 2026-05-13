import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const newsItems = [
  {
    id: 1,
    tag: { tr: 'Yetişkin Eğitimi', en: 'Adult Education' },
    date: '12 Mayıs 2026',
    title: {
      tr: 'Yeni Dönem Erasmus+ Yetişkin Eğitimi Başvuruları Açıldı',
      en: 'New Term Erasmus+ Adult Education Applications Opened'
    },
    summary: {
      tr: 'Derneğimizin öncülüğünde yürütülen yeni dönem yetişkin eğitimi projeleri için başvurular başladı. Avrupa çapında gerçekleştirilecek bu özel program ile katılımcılar, uluslararası alanda vizyonlarını genişletme şansı yakalayacaklar.',
      en: 'Applications have started for the new term adult education projects carried out under the leadership of our association. With this special program to be carried out across Europe, participants will have the chance to expand their visions in the international arena.'
    },
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 2,
    tag: { tr: 'Gençlik Projeleri', en: 'Youth Projects' },
    date: '28 Nisan 2026',
    title: {
      tr: 'İtalya\'da Gençlik Değişimi Programı Tamamlandı',
      en: 'Youth Exchange Program in Italy Completed'
    },
    summary: {
      tr: 'Roma\'da gerçekleştirilen 10 günlük gençlik değişimi programımız başarıyla sona erdi. Farklı kültürlerden gelen gençler, sürdürülebilir çevre ve dijital yetkinlikler üzerine ortak atölye çalışmaları düzenledi.',
      en: 'Our 10-day youth exchange program held in Rome has successfully ended. Youth from different cultures organized joint workshops on sustainable environment and digital competences.'
    },
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 3,
    tag: { tr: 'Okul Eğitimi', en: 'School Education' },
    date: '15 Nisan 2026',
    title: {
      tr: 'Geleceğin Sınıfları İçin Dijital Dönüşüm Eğitimi',
      en: 'Digital Transformation Training for Classes of the Future'
    },
    summary: {
      tr: 'Kuşadası\'ndaki öğretmenlerimize yönelik düzenlenen dijital dönüşüm eğitimlerimiz yoğun katılımla gerçekleşti. Eğitimde yenilikçi metotların kullanımı ve uluslararası entegrasyon konuları ele alındı.',
      en: 'Our digital transformation training organized for our teachers in Kuşadası took place with intense participation. The use of innovative methods in education and international integration issues were discussed.'
    },
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    id: 4,
    tag: { tr: 'Mesleki Eğitim', en: 'Vocational Training' },
    date: '03 Nisan 2026',
    title: {
      tr: 'Avrupa Staj Konsorsiyumu Toplantısı Yapıldı',
      en: 'European Internship Consortium Meeting Held'
    },
    summary: {
      tr: 'Meslek lisesi öğrencilerimizin Avrupa\'da staj yapabilmelerini sağlayan yeni konsorsiyum projemizin ilk değerlendirme toplantısı paydaşlarımızın katılımıyla dernek merkezimizde gerçekleştirildi.',
      en: 'The first evaluation meeting of our new consortium project, which enables our vocational high school students to do internships in Europe, was held at our association headquarters with the participation of our stakeholders.'
    },
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  }
];

const NewsSection = () => {
  const scrollRef = useRef(null);
  const { t, i18n } = useTranslation();

  const getLang = () => i18n.language === 'tr' ? 'tr' : 'en';

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="haberler" className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              {t('news.title')}
            </h2>
            <p className="text-lg text-charcoal/70 font-light">
              {t('news.subtitle')}
            </p>
          </motion.div>

          {/* Slider Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4 mt-8 md:mt-0"
          >
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal/5 hover:border-terracotta hover:text-terracotta transition-all duration-300 group"
              aria-label="Önceki Haberler"
            >
              <svg className="w-5 h-5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal/5 hover:border-terracotta hover:text-terracotta transition-all duration-300 group"
              aria-label="Sonraki Haberler"
            >
              <svg className="w-5 h-5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Carousel Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="snap-start shrink-0 w-[320px] sm:w-[400px] flex flex-col group bg-transparent"
              >
                {/* Image */}
                <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 relative shadow-sm border border-charcoal/5">
                  <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title[getLang()]}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center space-x-3 mb-4 text-xs font-medium uppercase tracking-wider">
                  <span className="text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">{item.tag[getLang()]}</span>
                  <span className="text-charcoal/50">{item.date}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-charcoal mb-3 hover:text-terracotta transition-colors duration-300 line-clamp-2 cursor-pointer">
                  {item.title[getLang()]}
                </h3>
                <p className="text-charcoal/70 font-light leading-relaxed mb-6 line-clamp-3">
                  {item.summary[getLang()]}
                </p>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/kuerder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center space-x-2 text-charcoal/50 hover:text-terracotta font-medium transition-colors duration-300 group/link"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{t('news.view_on_instagram')}</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NewsSection;
