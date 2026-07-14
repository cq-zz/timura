import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, ShoppingBag, AlertCircle, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translate, s2t } from '../utils/lang';
import { zh } from '../locales/zh';
import { hant } from '../locales/zh-hant';
import { en } from '../locales/en';

export default function ProductDetails({ product, onClose, lang }) {
  const [activeImg, setActiveImg] = useState(product.images[0] || product.image);
  const [isMobile, setIsMobile] = useState(false);
  const [redirectingState, setRedirectingState] = useState(null); // 'checking', 'app', 'web', null

  const t = (key, fallback = "") => {
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
        return fallback || key;
      }
    }
    return val;
  };

  const images = product.images || [product.image];
  const activeIndex = images.indexOf(activeImg) !== -1 ? images.indexOf(activeImg) : 0;

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const [previewTouchStart, setPreviewTouchStart] = useState(null);
  const [previewTouchEnd, setPreviewTouchEnd] = useState(null);

  const handlePrevImage = (e) => {
    e?.stopPropagation();
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveImg(images[newIndex]);
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    const newIndex = (activeIndex + 1) % images.length;
    setActiveImg(images[newIndex]);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPreviewOpen) return;
      if (e.key === 'ArrowRight') {
        setPreviewIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setPreviewIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        setIsPreviewOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPreviewOpen, images.length]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreviewOpen]);

  // Touch handlers for main image swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNextImage();
    }
    if (isRightSwipe) {
      handlePrevImage();
    }
  };

  const openPreview = () => {
    setPreviewIndex(activeIndex);
    setIsPreviewOpen(true);
  };

  // Touch handlers for preview lightbox swipe
  const onPreviewTouchStart = (e) => {
    setPreviewTouchEnd(null);
    setPreviewTouchStart(e.targetTouches[0].clientX);
  };

  const onPreviewTouchMove = (e) => {
    setPreviewTouchEnd(e.targetTouches[0].clientX);
  };

  const onPreviewTouchEnd = () => {
    if (!previewTouchStart || !previewTouchEnd) return;
    const distance = previewTouchStart - previewTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setPreviewIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      setPreviewIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleRedirect = () => {
    if (!isMobile) {
      // PC redirection: standard open in new tab
      setRedirectingState('web');
      setTimeout(() => {
        window.open(product.redirectUrls.pcUrl, '_blank', 'noopener,noreferrer');
        setRedirectingState(null);
      }, 800);
    } else {
      // Mobile redirection: attempt to open App, otherwise open H5
      setRedirectingState('checking');
      const startTime = Date.now();
      
      // Attempt to wake up the app (e.g. Taobao / JD protocol)
      window.location.href = product.redirectUrls.mobileAppUrl;
      
      // Fallback timer
      setTimeout(() => {
        if (Date.now() - startTime < 2500) {
          setRedirectingState('web');
          setTimeout(() => {
            window.location.href = product.redirectUrls.mobileH5Url;
            setRedirectingState(null);
          }, 1000);
        } else {
          setRedirectingState('app');
          setTimeout(() => setRedirectingState(null), 3000);
        }
      }, 1500);
    }
  };

  // Get localized features robustly
  const featureList = (() => {
    if (!product.features) return [];
    if (Array.isArray(product.features)) {
      return product.features.map(f => {
        if (typeof f === 'string') {
          return lang === 'zh-hant' ? s2t(f, lang) : f;
        }
        return translate(f, lang);
      });
    }
    // If it is a localized object (e.g., { zh: [...], en: [...] })
    const list = product.features[lang] || product.features.zh || [];
    if (lang === 'zh-hant' && (!product.features['zh-hant'] && !product.features.zht)) {
      return list.map(f => s2t(f, lang));
    }
    return list;
  })();

  // Get localized specifications robustly
  const specObj = (() => {
    if (!product.specs) return {};
    if (product.specs[lang]) return product.specs[lang];
    const baseSpecs = product.specs.zh || product.specs.en || product.specs || {};
    if (lang === 'zh-hant' && (!product.specs['zh-hant'] && !product.specs.zht)) {
      const converted = {};
      for (const [k, v] of Object.entries(baseSpecs)) {
        const keyConverted = s2t(k, lang);
        const valConverted = typeof v === 'string' ? s2t(v, lang) : v;
        converted[keyConverted] = valConverted;
      }
      return converted;
    }
    return baseSpecs;
  })();

  return (
    <div id="product-details-page" className="w-full">
      
      {/* Redirection Overlay */}
      <AnimatePresence>
        {redirectingState && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FCFBF9]/95 z-50 flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
              className="p-4 bg-[#7D6EAD]/10 rounded-full text-[#7D6EAD] mb-6 animate-spin"
            >
              <ShoppingBag className="w-12 h-12" />
            </motion.div>
            
            {redirectingState === 'checking' && (
              <div className="space-y-3 max-w-sm">
                <h3 className="text-xl font-bold text-[#5B4B8A]">{t('productDetails.loadingAppTitle')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t('productDetails.loadingAppDesc')}</p>
              </div>
            )}
            
            {redirectingState === 'web' && (
              <div className="space-y-3 max-w-sm">
                <h3 className="text-xl font-bold text-[#5B4B8A]">{t('productDetails.loadingWebTitle')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t('productDetails.loadingWebDesc')}</p>
              </div>
            )}

            {redirectingState === 'app' && (
              <div className="space-y-3 max-w-sm">
                <h3 className="text-xl font-bold text-green-600">{t('productDetails.successTitle')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t('productDetails.successDesc')}</p>
                <button onClick={() => setRedirectingState(null)} className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-xs font-semibold">
                  {t('productDetails.backBtn')}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header & Breadcrumb */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
        <button
          id="back-to-list-btn"
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold text-[#7D6EAD] hover:text-[#5B4B8A] transition-all group/back self-start cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
          <span>{t('productDetails.back')}</span>
        </button>
        
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{t('footer.navHome')}</span>
          <span>/</span>
          <span>{t('navbar.products')}</span>
          <span>/</span>
          <span className="font-semibold text-[#7D6EAD]">{translate(product.name, lang)}</span>
        </div>
      </div>

      {/* Main Content Layout Card */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Gallery Left */}
          <div className="lg:col-span-5 space-y-4">
            {/* Big Image Display Container */}
            <div 
              className="aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100 relative shadow-sm group/main cursor-pointer select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={openPreview}
            >
              <img
                src={activeImg}
                alt={translate(product.name, lang)}
                className="w-full h-full object-cover transition-transform duration-300 sm:group-hover/main:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Hover Zoom/Maximize Indicator */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 sm:group-hover/main:opacity-100 transition-opacity duration-200 z-10">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Tap to Preview Indicator for Mobile */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full sm:hidden z-10 flex items-center gap-1">
                <Maximize2 className="w-3 h-3" />
                <span>{lang === 'en' ? 'Tap to Zoom' : (lang === 'zh-hant' ? '點擊放大' : '点击放大')}</span>
              </div>

              {/* Left/Right Switch Arrows on Big Image */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer sm:opacity-0 sm:group-hover/main:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer sm:opacity-0 sm:group-hover/main:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Slide Counter on Big Image */}
              <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-full font-mono z-10">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails list supporting >3 images */}
            <div className="relative group/thumbs-wrapper">
              <div className="flex gap-2.5 overflow-x-auto py-1.5 scrollbar-none snap-x scroll-smooth">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    id={`thumb-${product.id}-${idx}`}
                    onClick={() => setActiveImg(img)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all snap-start cursor-pointer ${
                      activeImg === img ? 'border-[#7D6EAD] shadow-md scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover pointer-events-none" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Info Right */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {product.tag && (
                <span className="text-xs font-bold uppercase tracking-wider text-[#7D6EAD] bg-[#7D6EAD]/5 px-3 py-1.5 rounded-full inline-block mb-3">
                  {translate(product.tag, lang)}
                </span>
              )}
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {translate(product.name, lang)}
              </h1>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {translate(product.subtitle, lang)}
              </p>
            </div>

            {/* Price Tag */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl flex items-center justify-between border border-gray-100">
              <div>
                <span className="text-xs text-gray-400 block font-normal">{t('productDetails.suggestPrice')}</span>
                <span className="text-2xl font-extrabold text-[#7D6EAD] tracking-tight">{product.price}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 block font-normal">{t('productDetails.warrantyLabel')}</span>
                <span className="text-xs font-semibold text-[#5B4B8A] bg-[#7D6EAD]/10 px-2.5 py-1 rounded-md inline-block mt-1">
                  {t('productDetails.warrantyVal')}
                </span>
              </div>
            </div>

            {/* Redirection Notice & Button */}
            <div className="space-y-3">
              <div className="bg-[#E1D5F5]/30 rounded-2xl p-4 border border-[#7D6EAD]/10 flex gap-3">
                <AlertCircle className="w-5 h-5 text-[#7D6EAD] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-gray-600">
                  <span className="font-bold text-[#5B4B8A] block mb-1">
                    {isMobile ? t('productDetails.noticeTitleMobile') : t('productDetails.noticeTitlePC')}
                  </span>
                  <span>
                    {isMobile ? t('productDetails.noticeDescMobile') : t('productDetails.noticeDescPC')}
                  </span>
                </div>
              </div>

              <button
                id="redirect-to-purchase-btn"
                onClick={handleRedirect}
                className="w-full bg-[#7D6EAD] hover:bg-[#5B4B8A] text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{t('productDetails.buyBtn')}</span>
                <span className="text-xs font-normal opacity-85 ml-1 border-l border-white/30 pl-2">
                  {isMobile ? t('productDetails.mobileTag') : t('productDetails.desktopTag')}
                </span>
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-800 tracking-wide uppercase">{t('productDetails.techHeading')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureList.map((feature, idx) => {
                  const parts = feature.includes('：') ? feature.split('：') : (feature.includes(':') ? feature.split(':') : [feature, ""]);
                  const title = parts[0];
                  const body = parts[1];
                  return (
                    <div key={idx} className="bg-[#FCFBF9] p-3.5 rounded-xl border border-gray-100 flex gap-2.5">
                      <div className="bg-green-50 p-1 rounded-full text-green-600 shrink-0 self-start">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs text-left">
                        <span className="font-bold text-gray-800 block mb-0.5">{title}</span>
                        {body && <span className="text-gray-500 line-clamp-3 leading-relaxed">{body}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Depth analysis & technical specifications */}
        <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          {/* Description Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-gray-900 pb-2 border-b border-gray-100">{t('productDetails.deepHeading')}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
              {translate(product.description, lang)}
            </p>
          </div>

          {/* Specifications Box */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-gray-900 pb-2 border-b border-gray-100">{t('productDetails.specHeading')}</h3>
            <div className="bg-[#FCFBF9] border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100">
              {Object.entries(specObj).map(([key, value], idx) => (
                <div key={idx} className="grid grid-cols-12 p-3 text-xs gap-2">
                  <div className="col-span-4 font-bold text-gray-500">{key}</div>
                  <div className="col-span-8 text-gray-700 leading-relaxed">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Image Preview */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 sm:p-6 select-none"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-white z-10 pt-2 px-2 sm:px-6">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-300 max-w-[60%] truncate">
                {translate(product.name, lang)}
              </span>
              <span className="text-sm font-mono text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                {previewIndex + 1} / {images.length}
              </span>
              <button
                id="close-preview-btn"
                onClick={() => setIsPreviewOpen(false)}
                className="text-gray-300 hover:text-white p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Close preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Interactive Preview Image */}
            <div 
              className="flex-grow flex items-center justify-center relative max-h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow Button */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewIndex((prev) => (prev - 1 + images.length) % images.length);
                  }}
                  className="absolute left-2 sm:left-6 bg-white/10 hover:bg-white/20 active:scale-95 text-white p-3.5 rounded-full hover:scale-105 transition-all z-10 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Central Image Container */}
              <div 
                className="w-full h-full flex items-center justify-center p-4 sm:p-8 cursor-grab active:cursor-grabbing"
                onTouchStart={onPreviewTouchStart}
                onTouchMove={onPreviewTouchMove}
                onTouchEnd={onPreviewTouchEnd}
              >
                <motion.img
                  key={previewIndex}
                  src={images[previewIndex]}
                  alt={`Preview ${previewIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", damping: 25, stiffness: 180 }}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Arrow Button */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewIndex((prev) => (prev + 1) % images.length);
                  }}
                  className="absolute right-2 sm:right-6 bg-white/10 hover:bg-white/20 active:scale-95 text-white p-3.5 rounded-full hover:scale-105 transition-all z-10 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnail Strip */}
            <div 
              className="w-full flex justify-center py-4 z-10 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2.5 px-4 bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10 max-w-full overflow-x-auto scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    id={`preview-thumb-${idx}`}
                    onClick={() => setPreviewIndex(idx)}
                    className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      previewIndex === idx ? 'border-white scale-105 shadow-lg font-bold' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-102'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover pointer-events-none" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
