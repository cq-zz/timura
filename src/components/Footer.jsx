import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG, CATEGORIES, SLOGANS } from '../data/mockData';
import { translate } from '../utils/lang';
import logoImg from '../assets/images/logo.png';
import { zh } from '../locales/zh';
import { hant } from '../locales/zh-hant';
import { en } from '../locales/en';

export default function Footer({ setActivePage, lang }) {
  const currentYear = new Date().getFullYear();
  
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

  return (
    <footer id="app-footer" className="bg-[#FAF8F5] text-gray-600 border-t border-gray-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-gray-100">
          
          {/* Col 1 - 4 columns - Brand Slogan */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-11 flex items-center justify-center">
                <img src={logoImg} alt="TIMURA Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <p className="text-[11px] text-[#7D6EAD] font-semibold tracking-wide italic">
              {translate(BRAND_CONFIG.slogan, lang)}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              {(SLOGANS[lang] || SLOGANS.zh).description}
            </p>
            <div className="pt-2 flex gap-3">
              <a
                id="footer-xhs-link"
                href={BRAND_CONFIG.contact.xhsStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all"
              >
                {tLoc('footer.xhs')}
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                id="footer-dy-link"
                href={BRAND_CONFIG.contact.dyStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all"
              >
                {tLoc('footer.dy')}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2 - 3 columns - Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest">
              {tLoc('footer.navTitle')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D6EAD] transition-colors text-left"
                >
                  {tLoc('footer.navHome')}
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-products"
                  onClick={() => { setActivePage('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D6EAD] transition-colors text-left"
                >
                  {tLoc('footer.navProducts')}
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D6EAD] transition-colors text-left"
                >
                  {tLoc('footer.navAbout')}
                </button>
              </li>
              <li>
                <a
                  id="footer-nav-contact"
                  href="#contact-info-section"
                  onClick={(e) => {
                    setActivePage('about');
                    setTimeout(() => {
                      const el = document.getElementById('contact-info-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#7D6EAD] transition-colors text-left block"
                >
                  {tLoc('footer.navContact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 - 2 columns - Product Categories */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest">
              {tLoc('footer.catTitle')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <button
                    id={`footer-cat-${cat.id}`}
                    onClick={() => {
                      setActivePage('products');
                      setTimeout(() => {
                        const filterBtn = document.getElementById(`cat-filter-${cat.id}`);
                        if (filterBtn) filterBtn.click();
                        const scrollEl = document.getElementById('products-section');
                        if (scrollEl) scrollEl.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-[#7D6EAD] transition-colors text-left"
                  >
                    {translate(cat.name, lang)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - 3 columns - Direct Contacts info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest">
              {tLoc('footer.contactTitle')}
            </h4>
            <div className="space-y-3 text-xs text-gray-500">
              <div className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 text-[#7D6EAD] shrink-0 mt-0.5" />
                <span>{tLoc('footer.phoneLabel')}{BRAND_CONFIG.contact.phone}</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <Mail className="w-4 h-4 text-[#7D6EAD] shrink-0 mt-0.5" />
                <span className="break-all">{tLoc('footer.emailLabel')}{BRAND_CONFIG.contact.email}</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-[#7D6EAD] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{tLoc('footer.addressLabel')}{translate(BRAND_CONFIG.contact.address, lang)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Filings & Declarations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          {/* Copyright */}
          <div>
            <span>© {currentYear} {translate(BRAND_CONFIG.name, lang)}. {tLoc('footer.allRights')}</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">{tLoc('footer.registerDesc')}</span>
          </div>

          {/* Filings badges and seals */}
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            <span className="hover:text-gray-500 transition-colors cursor-help flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>{tLoc('footer.filing1')}</span>
            </span>
            <span className="hover:text-gray-500 transition-colors cursor-help">
              {tLoc('footer.filing2')}
            </span>
            <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded border border-gray-200">
              {tLoc('footer.httpsLabel')}
            </span>
          </div>

        </div>

        {/* Safe transactional notice */}
        <div className="mt-6 pt-4 border-t border-gray-50 text-center text-[10px] text-gray-400 leading-relaxed max-w-3xl mx-auto">
          <span className="font-bold block mb-1">{tLoc('footer.noticeTitle')}</span>
          <span>{tLoc('footer.noticeDesc')}</span>
        </div>

      </div>
    </footer>
  );
}
