import React from 'react';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { translate, s2t } from '../utils/lang';
import { zh } from '../locales/zh';
import { hant } from '../locales/zh-hant';
import { en } from '../locales/en';

export default function ProductCard({ product, onViewDetails, lang }) {
  const tLoc = (key, fallback = "") => {
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

  return (
    <motion.div
      id={`product-card-${product.id}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#7D6EAD]/30 shadow-sm hover:shadow-2xl hover:shadow-[#7D6EAD]/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        {product.tag && (
          <span className="absolute top-4 left-4 z-10 bg-[#7D6EAD] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md">
            {translate(product.tag, lang)}
          </span>
        )}
        <img
          src={product.image}
          alt={translate(product.name, lang)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Soft Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Details Area */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div className="space-y-2 text-left">
          {/* Category & Star Rating */}
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#7D6EAD] bg-[#7D6EAD]/5 px-2.5 py-1 rounded-md font-semibold tracking-wide">
              {tLoc(`productCard.categories.${product.category}`, product.category)}
            </span>
            <div className="flex items-center gap-1 text-[#D1C3A1]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold text-gray-700">{product.rating.toFixed(1)}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-bold text-gray-800 tracking-tight group-hover:text-[#7D6EAD] transition-colors leading-snug">
            {translate(product.name, lang)}
          </h3>

          {/* Slogan Sub */}
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {translate(product.subtitle, lang)}
          </p>

          {/* Features Snippet */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {(() => {
              const cardFeatures = (() => {
                if (!product.features) return [];
                if (Array.isArray(product.features)) {
                  return product.features.map(f => {
                    if (typeof f === 'string') {
                      return lang === 'zh-hant' ? s2t(f, lang) : f;
                    }
                    return translate(f, lang);
                  });
                }
                const list = product.features[lang] || product.features.zh || [];
                if (lang === 'zh-hant' && (!product.features['zh-hant'] && !product.features.zht)) {
                  return list.map(f => s2t(f, lang));
                }
                return list;
              })();

              return cardFeatures.slice(0, 2).map((feat, idx) => {
                const label = feat.includes('：') ? feat.split('：')[0] : (feat.includes(':') ? feat.split(':')[0] : feat);
                return (
                  <span key={idx} className="inline-flex items-center gap-1 text-[10px] bg-[#FCFBF9] text-[#5B4B8A] border border-gray-100 px-2.5 py-1 rounded-full font-medium">
                    <Sparkles className="w-2.5 h-2.5 text-[#7D6EAD]" />
                    {label}
                  </span>
                );
              });
            })()}
          </div>
        </div>

        {/* Pricing and Button Action */}
        <div className="pt-5 mt-4 border-t border-gray-50 flex items-center justify-between text-left">
          <div>
            <span className="text-xs text-gray-400 block font-normal">{tLoc('productCard.priceLabel')}</span>
            <span className="text-lg font-extrabold text-[#7D6EAD] tracking-tight">{product.price}</span>
          </div>

          <button
            id={`product-view-btn-${product.id}`}
            onClick={() => onViewDetails(product)}
            className="flex items-center justify-center gap-1 bg-[#FCFBF9] hover:bg-[#7D6EAD] text-[#5B4B8A] hover:text-white px-4 py-2.5 rounded-xl border border-gray-100 hover:border-[#7D6EAD] text-xs font-semibold shadow-sm transition-all cursor-pointer group/btn"
          >
            {tLoc('productCard.viewBtn')}
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
