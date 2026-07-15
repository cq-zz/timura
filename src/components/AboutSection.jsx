import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Copy, Check, Leaf, FileText, MessageCircle, Globe } from 'lucide-react';
import { BRAND_CONFIG, ABOUT_INFO } from '../data/mockData';
import { translate } from '../utils/lang';
import { zh } from '../locales/zh';
import { hant } from '../locales/zh-hant';
import { en } from '../locales/en';

export default function AboutSection({ lang }) {
  const [copiedId, setCopiedId] = useState(null);

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

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {
      // Fallback for iframe sandboxing
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    });
  };

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-b from-white to-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7D6EAD] bg-[#7D6EAD]/5 px-3 py-1 rounded-full">
            {tLoc('aboutSection.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4B8A] tracking-tight">
            {tLoc('aboutSection.title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            {tLoc('aboutSection.subtitle')}
          </p>
        </div>

        {/* Company Vision & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 text-left">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#7D6EAD] rounded-full inline-block" />
              {tLoc('aboutSection.visionHeading')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              {translate(ABOUT_INFO.intro, lang)}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              {translate(ABOUT_INFO.philosophy, lang)}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#FCFBF9] p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
                <div className="bg-[#7D6EAD]/10 p-2.5 rounded-xl text-[#7D6EAD]">
                  <Leaf className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-800 block">{tLoc('aboutSection.qualBadge1')}</span>
                  <span className="text-[10px] text-gray-500">{tLoc('aboutSection.qualDesc1')}</span>
                </div>
              </div>
              <div className="bg-[#FCFBF9] p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
                <div className="bg-[#7D6EAD]/10 p-2.5 rounded-xl text-[#7D6EAD]">
                  <Globe className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-800 block">{tLoc('aboutSection.qualBadge2')}</span>
                  <span className="text-[10px] text-gray-500">{tLoc('aboutSection.qualDesc2')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop"
                alt="Cozy store interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5B4B8A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-left">
                <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">{tLoc('aboutSection.imgTag')}</p>
                <h4 className="text-lg font-bold">{tLoc('aboutSection.imgTitle')}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Qualification Documents Section */}
        <div className="mb-20 text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-2 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#7D6EAD] rounded-full inline-block" />
            {tLoc('aboutSection.certHeading')}
          </h3>
          <p className="text-xs text-gray-500 mb-8 max-w-2xl">
            {tLoc('aboutSection.certSub')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {ABOUT_INFO.certificates[lang === 'en' ? 'en' : 'zh'].map((cert, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group p-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 mb-3 border border-gray-50 relative">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-bold text-green-600 border border-gray-100">
                    ✓ {tLoc('aboutSection.certVerified')}
                  </div>
                </div>
                <div className="p-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#7D6EAD] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-1">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Humbler Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left" id="contact-info-section">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                {tLoc('aboutSection.contactHeading')}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {tLoc('aboutSection.contactSub')}
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone item */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#7D6EAD]/20 shadow-sm transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-[#7D6EAD]/10 rounded-xl text-[#7D6EAD]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-normal">{tLoc('aboutSection.phoneLabel')}</span>
                    <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="text-base sm:text-lg font-bold text-[#5B4B8A] hover:underline block">
                      {BRAND_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${BRAND_CONFIG.contact.phone}`}
                  className="bg-[#7D6EAD] text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[#5B4B8A] transition-all cursor-pointer"
                >
                  {tLoc('aboutSection.phoneBtn')}
                </a>
              </div>

              {/* Email item */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#7D6EAD]/20 shadow-sm transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-[#7D6EAD]/10 rounded-xl text-[#7D6EAD]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-normal">{tLoc('aboutSection.emailLabel')}</span>
                    <span className="text-sm font-semibold text-gray-700 block select-all">{BRAND_CONFIG.contact.email}</span>
                  </div>
                </div>
                <button
                  id="copy-email-btn"
                  onClick={() => handleCopy(BRAND_CONFIG.contact.email, 'email')}
                  className="p-2.5 bg-gray-50 hover:bg-[#7D6EAD]/10 text-gray-500 hover:text-[#5B4B8A] rounded-xl transition-all cursor-pointer border border-gray-100 hover:border-transparent"
                >
                  {copiedId === 'email' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WeChat item */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#7D6EAD]/20 shadow-sm transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-[#7D6EAD]/10 rounded-xl text-[#7D6EAD]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-normal">{tLoc('aboutSection.wechatLabel')}</span>
                    <span className="text-sm font-semibold text-gray-700 block select-all">{BRAND_CONFIG.contact.wechat}</span>
                  </div>
                </div>
                <button
                  id="copy-wechat-btn"
                  onClick={() => handleCopy(BRAND_CONFIG.contact.wechat, 'wechat')}
                  className="p-2.5 bg-gray-50 hover:bg-[#7D6EAD]/10 text-gray-500 hover:text-[#5B4B8A] rounded-xl transition-all cursor-pointer border border-gray-100 hover:border-transparent"
                >
                  {copiedId === 'wechat' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Address item */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#7D6EAD]/20 shadow-sm transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-[#7D6EAD]/10 rounded-xl text-[#7D6EAD] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-normal">{tLoc('aboutSection.addressLabel')}</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 block leading-relaxed">
                      {translate(BRAND_CONFIG.contact.address, lang)}
                    </span>
                  </div>
                </div>
                <button
                  id="copy-address-btn"
                  onClick={() => handleCopy(translate(BRAND_CONFIG.contact.address, lang), 'address')}
                  className="p-2.5 bg-gray-50 hover:bg-[#7D6EAD]/10 text-gray-500 hover:text-[#5B4B8A] rounded-xl transition-all cursor-pointer border border-gray-100 hover:border-transparent shrink-0 ml-2"
                >
                  {copiedId === 'address' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#7D6EAD]/5 p-8 rounded-3xl border border-[#7D6EAD]/10 flex flex-col justify-center space-y-4">
            <h4 className="text-lg font-bold text-[#5B4B8A]">
              {lang === 'en' ? 'Warm Greetings' : '温馨店主寄语'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {translate({
                zh: "我们深信：生活里的每一个小物件都不应该是冰冷没有生命的。拾光时光起步于一个极小的阁楼，我们会在每一个寄出的包裹中，悄悄塞进两小包我们自己晾晒的薰衣草干花包。希望当大家打开纸盒的瞬间，能闻到山野的味道，感受到我们真诚的手心温存。珍惜时间、热爱生活、享受放松。",
                en: "We believe that items are not just cold tools, they should warm your hands and soul. TIMURA starts from a very tiny room, and we put special local lavender herbs inside your parcel. May you cherish your time, breathe slowly, and love life."
              }, lang)}
            </p>
            <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">EST. 2026 — TIMURA</span>
              <span className="text-[#7D6EAD] text-sm font-semibold">✿ {translate({ zh: "拾光时光", en: "TIMURA" }, lang)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
