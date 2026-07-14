import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Heart, ShieldCheck, ArrowRight, Grid, Wind, Sparkles, Sun, Droplets, PhoneCall } from 'lucide-react';
import { BRAND_CONFIG, CATEGORIES, PRODUCTS } from './data/mockData';
import { translate, detectLanguageByIP } from './utils/lang';
import { zh } from './locales/zh';
import { hant } from './locales/zh-hant';
import { en } from './locales/en';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const syncingFromHash = useRef(false);

  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home', 'products', 'about', 'privacy'].includes(hash) ? hash : 'home';
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prevPage, setPrevPage] = useState('home');
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('preferred_lang') || 'en'; // default language, unmatched defaults to English
  });
  const [currentPage, setCurrentPage] = useState(1);

  const t = (key, params = {}) => {
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
    if (typeof val === 'string') {
      let result = val;
      for (const [k, v] of Object.entries(params)) {
        result = result.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), v);
      }
      return result;
    }
    return val;
  };

  // Load language based on IP if no user preference is saved
  React.useEffect(() => {
    const savedLang = localStorage.getItem('preferred_lang');
    if (!savedLang) {
      detectLanguageByIP().then((detected) => {
        setLang(detected);
      });
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('preferred_lang', lang);
  }, [lang]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleViewProductDetails = (product) => {
    setPrevPage(activePage);
    setSelectedProduct(product);
    setActivePage('product-details');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCloseProductDetails = () => {
    setActivePage(prevPage || 'products');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Sync activePage to URL hash (skip if change originated from hash)
  React.useEffect(() => {
    if (!syncingFromHash.current) {
      window.location.hash = `#${activePage}`;
    }
  }, [activePage]);

  // Listen for hash changes (browser back/forward, manual URL edit)
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'products', 'about', 'privacy'].includes(hash) && hash !== activePage) {
        syncingFromHash.current = true;
        setActivePage(hash);
        setSelectedCategory('all');
        setCurrentPage(1);
        window.scrollTo({ top: 0, behavior: 'instant' });
        // Reset flag after state update
        setTimeout(() => { syncingFromHash.current = false; }, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activePage]);

  // Helper to map string to Lucide component icon
  const renderIcon = (iconName, className) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Grid': return <Grid className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Sun': return <Sun className={className} />;
      case 'Droplets': return <Droplets className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  // Pagination calculation
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const activeCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));
  const paginatedProducts = filteredProducts.slice(
    (activeCurrentPage - 1) * itemsPerPage,
    activeCurrentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FCFBF9] text-gray-800 selection:bg-[#E1D5F5] selection:text-[#5B4B8A]">
      
      {/* Universal Sticky Header Navigation */}
      {activePage !== 'privacy' && (
        <Navbar activePage={activePage} setActivePage={setActivePage} lang={lang} setLang={setLang} />
      )}

      {/* Main Content Area */}
      <main className={`flex-grow ${activePage !== 'privacy' ? 'pt-[68px] sm:pt-[76px]' : ''}`}>
        <AnimatePresence mode="wait">
          
          {/* HOME VIEW */}
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16 sm:space-y-24"
            >
              {/* Banner Carousel Hero */}
              <Hero
                onExploreClick={() => setActivePage('products')}
                onAboutClick={() => setActivePage('about')}
                lang={lang}
              />

              {/* Best Sellers Showcase Preview Section */}
              <motion.section 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#7D6EAD] bg-[#7D6EAD]/5 px-3 py-1 rounded-full">
                      {t('app.bestSellersBadge')}
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#5B4B8A] tracking-tight">
                      {t('app.bestSellersTitle')}
                    </h2>
                  </div>
                  <button
                    id="home-view-all-products-btn"
                    onClick={() => setActivePage('products')}
                    className="flex items-center gap-1 text-sm font-semibold text-[#7D6EAD] hover:text-[#5B4B8A] transition-colors group cursor-pointer"
                  >
                    <span>{t('app.viewAllBtn')} ({PRODUCTS.length})</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PRODUCTS.slice(0, 6).map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onViewDetails={handleViewProductDetails}
                      lang={lang}
                    />
                  ))}
                </div>
              </motion.section>

              {/* Bottom Call To Action Warm Banner */}
              <motion.section 
                initial={{ opacity: 0, scale: 0.97, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
              >
                <div className="bg-gradient-to-br from-[#7D6EAD]/10 via-[#FAF6FF] to-[#D1C3A1]/15 rounded-3xl p-8 sm:p-12 border border-[#7D6EAD]/10 text-center relative overflow-hidden flex flex-col items-center">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#7D6EAD]/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="max-w-2xl space-y-6 relative z-10 flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5B4B8A] tracking-tight">
                      {t('app.ctaTitle')}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg">
                      {t('app.ctaDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        id="cta-browse-btn"
                        onClick={() => setActivePage('products')}
                        className="bg-[#7D6EAD] hover:bg-[#5B4B8A] text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md hover:translate-y-[-1px] transition-all cursor-pointer"
                      >
                        {t('app.ctaBtn')}
                      </button>
                      <a
                        id="cta-phone-btn"
                        href={`tel:${BRAND_CONFIG.contact.phone}`}
                        className="bg-white hover:bg-[#F4F2EE] text-gray-700 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-sm border border-gray-200 hover:border-gray-300 hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2"
                      >
                        <PhoneCall className="w-4 h-4 text-[#7D6EAD]" />
                        {t('app.ctaPhone')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          )}

          {/* PRODUCTS VIEW */}
          {activePage === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-left"
              id="products-section"
            >
              {/* Product header */}
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7D6EAD] bg-[#7D6EAD]/5 px-3 py-1 rounded-full">
                  {t('app.prodCenterBadge')}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#5B4B8A] tracking-tight">
                  {t('app.prodCenterTitle')}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                  {t('app.prodCenterSub')}
                </p>
              </div>

              {/* Categorized Filtration tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    id={`cat-filter-${cat.id}`}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm border cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#7D6EAD] text-white border-[#7D6EAD]'
                        : 'bg-white text-gray-600 hover:text-[#5B4B8A] border-gray-100 hover:bg-[#7D6EAD]/5'
                    }`}
                  >
                    {renderIcon(cat.icon, "w-4 h-4")}
                    <span>{translate(cat.name, lang)}</span>
                  </button>
                ))}
              </div>

              {/* Products List Grid */}
              <motion.div
                key={selectedCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {paginatedProducts.map((prod, idx) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      index={idx}
                      onViewDetails={handleViewProductDetails}
                      lang={lang}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">
                    {t('app.showingItems', {
                      start: (activeCurrentPage - 1) * itemsPerPage + 1,
                      end: Math.min(activeCurrentPage * itemsPerPage, filteredProducts.length),
                      total: filteredProducts.length
                    })}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      id="pagination-prev-btn"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={activeCurrentPage === 1}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        activeCurrentPage === 1
                          ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                          : 'bg-white text-gray-700 hover:text-[#5B4B8A] hover:bg-[#7D6EAD]/5 border-gray-200 cursor-pointer'
                      }`}
                    >
                      {t('app.prevBtn')}
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        id={`pagination-page-${pageNum}-btn`}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                          activeCurrentPage === pageNum
                            ? 'bg-[#7D6EAD] text-white border-[#7D6EAD] shadow-sm'
                            : 'bg-white text-gray-600 hover:text-[#5B4B8A] hover:bg-[#7D6EAD]/5 border-gray-200'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}

                    <button
                      id="pagination-next-btn"
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={activeCurrentPage === totalPages}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        activeCurrentPage === totalPages
                          ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                          : 'bg-white text-gray-700 hover:text-[#5B4B8A] hover:bg-[#7D6EAD]/5 border-gray-200 cursor-pointer'
                      }`}
                    >
                      {t('app.nextBtn')}
                    </button>
                  </div>
                </div>
              )}

              {/* No Products Placeholder */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl mt-6 p-8">
                  <p className="text-gray-400 font-medium">{t('app.noProd')}</p>
                  <button
                    id="reset-category-btn"
                    onClick={() => setSelectedCategory('all')}
                    className="mt-4 px-4 py-2 bg-[#7D6EAD]/10 text-[#5B4B8A] rounded-xl text-xs font-semibold"
                  >
                    {t('app.resetCategory')}
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* ABOUT VIEW */}
          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AboutSection lang={lang} />
            </motion.div>
          )}

          {/* PRIVACY POLICY VIEW */}
          {activePage === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PrivacyPolicy lang={lang} />
            </motion.div>
          )}

          {/* PRODUCT DETAILS VIEW */}
          {activePage === 'product-details' && selectedProduct && (
            <motion.div
              key="product-details"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-left"
            >
              <ProductDetails
                product={selectedProduct}
                onClose={handleCloseProductDetails}
                lang={lang}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Universal Footer Component */}
      {activePage !== 'privacy' && (
        <Footer setActivePage={setActivePage} lang={lang} />
      )}
      
    </div>
  );
}
