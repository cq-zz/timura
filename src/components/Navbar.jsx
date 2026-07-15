import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, PhoneCall, Globe, ChevronDown } from 'lucide-react';
import { BRAND_CONFIG } from '../data/mockData';
import { translate } from '../utils/lang';
import logoImg from '../assets/images/logo.png';
import { motion, AnimatePresence } from 'motion/react';
import { zh } from '../locales/zh';
import { hant } from '../locales/zh-hant';
import { en } from '../locales/en';

export default function Navbar({ activePage, setActivePage, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelKey: 'navbar.home', fallback: '首页' },
    { id: 'products', labelKey: 'navbar.products', fallback: '产品中心' },
    { id: 'about', labelKey: 'navbar.about', fallback: '关于我们' },
  ];

  const langLabels = {
    'zh': '简体',
    'zh-hant': '繁體',
    'en': 'EN'
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FCFBF9] border-gray-100 shadow-sm py-1.5'
          : 'bg-[#FCFBF9] border-transparent py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14">
          {/* Logo + Slogan */}
          <div
            id="logo-container"
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center cursor-pointer group mr-2 gap-3"
          >
            <div className="relative h-10 sm:h-12 rounded-lg group-hover:scale-105 transition-transform flex items-center justify-center">
              <img src={logoImg} alt="TIMURA Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="hidden lg:block text-[11px] text-gray-400 font-medium tracking-wide italic border-l border-gray-200 pl-3">
              {translate(BRAND_CONFIG.slogan, lang)}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => {
                  setActivePage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  (activePage === item.id || (item.id === 'products' && activePage === 'product-details'))
                    ? 'text-[#5B4B8A] font-semibold'
                    : 'text-gray-500 hover:text-[#7D6EAD]'
                }`}
              >
                {tLoc(item.labelKey)}
                {(activePage === item.id || (item.id === 'products' && activePage === 'product-details')) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7D6EAD] rounded-full" />
                )}
              </button>
            ))}

            {/* Language Switcher - Compact Dropdown */}
            <div id="lang-selector-desktop" className="relative">
              <button
                id="lang-dropdown-btn-desktop"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 bg-[#7D6EAD]/5 hover:bg-[#7D6EAD]/10 text-gray-700 px-3.5 py-1.5 rounded-full border border-gray-200/40 text-xs font-semibold transition-all cursor-pointer select-none"
              >
                <Globe className="w-3.5 h-3.5 text-[#7D6EAD]" />
                <span>{langLabels[lang]}</span>
                <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-28 bg-[#FCFBF9] border border-gray-100 rounded-2xl shadow-xl py-1.5 z-50 text-left overflow-hidden"
                    >
                      {Object.entries(langLabels).map(([code, label]) => (
                        <button
                          key={code}
                          onClick={() => {
                            setLang(code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                            lang === code
                              ? 'bg-[#7D6EAD]/10 text-[#5B4B8A] font-semibold'
                              : 'text-gray-600 hover:bg-[#7D6EAD]/5 hover:text-[#7D6EAD]'
                          }`}
                        >
                          {label === 'EN' ? 'English (EN)' : label === '简体' ? '简体中文 (简)' : '繁體中文 (繁)'}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile buttons: Language Switcher + Hamburger */}
          <div className="md:hidden flex items-center space-x-1.5 flex-shrink-0">
            {/* Mobile Language Switcher - Compact Dropdown */}
            <div id="lang-selector-mobile-container" className="relative shrink-0">
              <button
                id="lang-dropdown-btn-mobile"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 bg-[#7D6EAD]/5 hover:bg-[#7D6EAD]/10 text-gray-700 px-2 py-1.5 rounded-full border border-gray-200/40 text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer select-none shrink-0 whitespace-nowrap"
              >
                <Globe className="w-2.5 h-2.5 text-[#7D6EAD] shrink-0" />
                <span className="shrink-0">{langLabels[lang]}</span>
                <ChevronDown className={`w-2.5 h-2.5 text-gray-400 shrink-0 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.12 }}
                      className="absolute right-0 mt-1.5 w-28 bg-[#FCFBF9] border border-gray-100 rounded-2xl shadow-xl py-1 z-50 text-left overflow-hidden"
                    >
                      {Object.entries(langLabels).map(([code, label]) => (
                        <button
                          key={code}
                          onClick={() => {
                            setLang(code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                            lang === code
                              ? 'bg-[#7D6EAD]/10 text-[#5B4B8A] font-semibold'
                              : 'text-gray-600 hover:bg-[#7D6EAD]/5 hover:text-[#7D6EAD]'
                          }`}
                        >
                          {label === 'EN' ? 'English (EN)' : label === '简体' ? '简体' : '繁體'}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#5B4B8A] hover:text-[#7D6EAD] p-1.5 rounded-lg hover:bg-[#7D6EAD]/10 transition-colors shrink-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#FCFBF9] border-b border-gray-100 shadow-inner px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-item-${item.id}`}
              onClick={() => {
                setActivePage(item.id);
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                (activePage === item.id || (item.id === 'products' && activePage === 'product-details'))
                  ? 'bg-[#7D6EAD] text-white'
                  : 'text-gray-600 hover:bg-[#7D6EAD]/10 hover:text-[#5B4B8A]'
              }`}
            >
              {tLoc(item.labelKey)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
