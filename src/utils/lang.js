/**
 * Translates a dynamic multilingual configuration object into the target language.
 * Currently supports:
 * - 'zh': Simplified Chinese (default)
 * - 'zh-hant': Traditional Chinese
 * - 'en': English
 * 
 * @param {Object} obj - The translation object, e.g. { zh: "时", en: "time" }
 * @param {string} lang - The target language ('zh', 'zh-hant', or 'en')
 * @returns {string} - The translated text
 */
export function translate(obj, lang) {
  if (!obj) return "";
  
  // If the data is already a simple string, return it directly. No automatic conversion.
  if (typeof obj === "string") {
    return obj;
  }
  
  // Robustly handle various key structures often returned by backend APIs
  const getValueByPriorityKeys = (keys) => {
    for (const key of keys) {
      if (obj[key] !== undefined && obj[key] !== null) {
        return obj[key];
      }
    }
    return null;
  };

  if (lang === "en") {
    const enVal = getValueByPriorityKeys([
      "en", "name_en", "title_en", "desc_en", "subtitle_en", "tag_en", "btnText_en",
      "english", "en-US", "en-GB"
    ]);
    if (enVal !== null) return String(enVal);
    // Fallback to Chinese if English is missing
    const zhFallback = getValueByPriorityKeys([
      "zh", "name_zh", "title_zh", "desc_zh", "subtitle_zh", "tag_zh", "btnText_zh"
    ]);
    return zhFallback !== null ? String(zhFallback) : "";
  }
  
  if (lang === "zh-hant") {
    const hantVal = getValueByPriorityKeys([
      "zh-hant", "zht", "name_zht", "name_zh-hant", "title_zht", "title_zh-hant", "desc_zht", "tag_zht",
      "zh-TW", "zh-HK"
    ]);
    if (hantVal !== null) return String(hantVal);
    
    // Fallback to Simplified Chinese directly WITHOUT automatic conversion
    const zhText = getValueByPriorityKeys([
      "zh", "name_zh", "title_zh", "desc_zh", "subtitle_zh", "tag_zh", "btnText_zh"
    ]);
    if (zhText !== null) {
      return String(zhText);
    }
    return "";
  }
  
  // Default to Simplified Chinese ('zh')
  const zhVal = getValueByPriorityKeys([
    "zh", "name_zh", "title_zh", "desc_zh", "subtitle_zh", "tag_zh", "btnText_zh",
    "zh-CN"
  ]);
  if (zhVal !== null) return String(zhVal);
  
  // Absolute fallback to whatever is available
  const anyVal = getValueByPriorityKeys(["en", "zht", "zh-hant"]);
  return anyVal !== null ? String(anyVal) : "";
}

/**
 * No automatic conversion function, returns the input text as is.
 * 
 * @param {string} text - The input text string
 * @param {string} lang - The target language
 * @returns {string} - The input text string returned without conversion
 */
export function s2t(text, lang) {
  return text;
}

/**
 * Detects the target language ('zh', 'zh-hant', or 'en') based on the user's IP.
 * Defaults to 'en' if detection fails or is unmatched.
 */
export async function detectLanguageByIP() {
  const apis = [
    { url: 'https://ipapi.co/json/', key: 'country_code' },
    { url: 'https://freeipapi.com/api/json', key: 'countryCode' },
    { url: 'https://api.country.is', key: 'country' }
  ];

  for (const api of apis) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1800); // 1.8s timeout
      const res = await fetch(api.url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        const code = String(data[api.key] || '').toUpperCase();
        if (code) {
          if (code === 'CN') return 'zh';
          if (['TW', 'HK', 'MO'].includes(code)) return 'zh-hant';
          return 'en';
        }
      }
    } catch (e) {
      console.warn(`Fetch to ${api.url} failed:`, e);
    }
  }
  return 'en';
}
