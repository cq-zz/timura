import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BANNER_SLIDES } from '../data/mockData';
import { translate } from '../utils/lang';
import { zh } from '../locales/zh';
import { hant } from '../locales/zh-hant';
import { en } from '../locales/en';

export default function Hero({ onExploreClick, onAboutClick, lang }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const tLoc = (key) => {
    const locales = {
      'zh': zh,
      'zh-hant': hant,
      'en': en
    };
    const currentLoc = locales[lang] || locales['en'];
    const parts = key.split('.');
    let val = currentLoc;
    for (const part of parts) {
      if (val && val[part] !== undefined) {
        val = val[part];
      } else {
        return key;
      }
    }
    return val;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === BANNER_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const setSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.02
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.7, ease: 'easeInOut' },
        scale: { duration: 0.7, ease: 'easeInOut' }
      }
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.98,
      transition: {
        opacity: { duration: 0.7, ease: 'easeInOut' },
        scale: { duration: 0.7, ease: 'easeInOut' }
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-900">
      
      {/* Warm & Tech Glowing Ambient Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-30">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#E1D5F5] mix-blend-screen filter blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -90, 50, 0],
            y: [0, 70, -50, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 -right-40 w-[380px] h-[380px] rounded-full bg-[#7D6EAD]/20 mix-blend-screen filter blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -60, 0],
            y: [0, 80, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-orange-200/20 mix-blend-screen filter blur-[100px]"
        />
      </div>
      
      {/* TOP CAROUSEL BANNER SECTION */}
      <div className="relative h-[550px] sm:h-[620px] lg:h-[700px] w-full overflow-hidden flex items-center">
        {/* Carousel Slides */}
        <AnimatePresence initial={false} custom={direction}>
          {BANNER_SLIDES.map((slide, idx) => {
            if (idx !== current) return null;
            return (
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full flex items-center"
              >
                {/* Full-bleed background image with elegant dark gradients for extreme readability */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={translate(slide.title, lang)}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
                </div>

                {/* Floating Banner Content Container */}
                <div className="max-w-7xl mx-auto w-full px-12 sm:px-24 md:px-28 lg:px-36 relative z-20">
                  <div className="max-w-2xl text-left space-y-4 sm:space-y-6 text-white">
                    
                    {/* Tag badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center gap-1.5 bg-white/15 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/20"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FCFBF9]" />
                      <span>{translate(slide.tag, lang)}</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
                    >
                      {translate(slide.title, lang)}
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="text-xs sm:text-sm md:text-base text-gray-100 max-w-xl leading-relaxed drop-shadow-sm"
                    >
                      {translate(slide.desc, lang)}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col sm:flex-row gap-3.5 pt-2"
                    >
                      <button
                        id={`hero-explore-btn-${idx}`}
                        onClick={onExploreClick}
                        className="flex items-center justify-center gap-2 bg-[#7D6EAD] hover:bg-[#5B4B8A] text-white px-7 py-3 rounded-2xl font-bold shadow-md hover:shadow-lg hover:translate-y-[-1px] transition-all cursor-pointer text-xs sm:text-sm group"
                      >
                        {tLoc('hero.exploreBtn')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        id={`hero-about-btn-${idx}`}
                        onClick={onAboutClick}
                        className="flex items-center justify-center bg-white/10 text-white hover:bg-white/25 px-7 py-3 rounded-2xl font-semibold border border-white/25 shadow-sm hover:translate-y-[-1px] transition-all cursor-pointer text-xs sm:text-sm backdrop-blur-sm"
                      >
                        {tLoc('hero.aboutBtn')}
                      </button>
                    </motion.div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Manual Arrow Controls (Hidden on ultra small screens) */}
        <button
          id="hero-carousel-prev"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-[#5B4B8A] p-2.5 rounded-full shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95 hidden sm:flex"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          id="hero-carousel-next"
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-[#5B4B8A] p-2.5 rounded-full shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95 hidden sm:flex"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Bullets */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {BANNER_SLIDES.map((_, index) => (
            <button
              key={index}
              id={`hero-bullet-${index}`}
              onClick={() => setSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'w-6 bg-[#7D6EAD]' : 'w-2 bg-[#7D6EAD]/35'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
