/**
 * 拾光时光 - 模拟数据库
 * 主打：温暖手感、惬意生活、治愈礼物
 * 薰衣草紫 (#7D6EAD) + 暖白 (#FCFBF9)
 */

import { s2t } from '../utils/lang';

export const BRAND_CONFIG = {
  name: {
    zh: "拾光时光",
    "zh-hant": "拾光时光",
    en: "TIMURA"
  },
  englishName: "TIMURA",
  themeColors: {
    primary: "#7D6EAD", // 薰衣草主紫
    primaryLight: "#9A8CDE",
    primaryDark: "#5B4B8A",
    warmWhite: "#FCFBF9",
    warmGray: "#F4F2EE",
    accentGold: "#D1C3A1",
  },
  contact: {
    phone: "400-888-9999",
    email: "hello@timura.com",
    address: {
      zh: "江苏省苏州市姑苏区暖风路 12 号拾光时光生活馆",
      "zh-hant": "江蘇省蘇州市姑蘇區暖風路 12 號拾光时光生活館",
      en: "No. 12 Nuanfeng Road, Gusu District, Suzhou, Jiangsu Province, China"
    },
    workingHours: {
      zh: "周一至周日 09:00 - 18:00 (国定节假日除外)",
      "zh-hant": "週一至週日 09:00 - 18:00 (國定節假日除外)",
      en: "Mon - Sun 09:00 - 18:00"
    },
    wechat: "TIMURA_Official",
    xhsStoreUrl: "https://www.xiaohongshu.com",
    dyStoreUrl: "https://www.douyin.com",
  },
  seo: {
    zh: {
      metaTitle: "拾光时光 | 传递温暖与质感的创意生活好物品牌",
      metaKeywords: "拾光时光, 温馨家居, 惬意户外, 治愈系好物, 减压玩具, 手工质感, 温暖礼物, 创意好物",
      metaDescription: "拾光时光是一家传递温暖与爱意的互联网生活品牌，主营富有温度的温馨家居、便携户外装备、治愈解压小玩具及创意好物，愿以真诚的物件给您的日常生活一个大大的拥抱。"
    },
    "zh-hant": {
      metaTitle: "拾光时光 | 傳遞溫慢與質感的創意生活好物品牌",
      metaKeywords: "拾光时光, 溫馨家居, 愜意戶外, 治癒系好物, 減壓玩具, 手工質感, 溫暖禮物, 創意好物",
      metaDescription: "拾光时光是一家傳遞溫暖與愛意的互聯網生活品牌，主營富有溫度的溫馨家居、便攜戶外裝備、治癒解壓小玩具及創意好物，願以真誠的物件給您的日常生活一個大大的擁抱。"
    },
    en: {
      metaTitle: "TIMURA | Cozy Home, Outdoors, Healing Gifts & Creative Goods",
      metaKeywords: "TIMURA, Cozy Home, Outdoors, Healing Gifts, Stress Relief, Tactile Decompression, Creative Goods",
      metaDescription: "TIMURA is an online brand sharing warmth and care. We feature hand-picked cozy home decors, outdoor escape tools, sensory fidget toys, and thoughtful creative goods."
    }
  }
};

// Warm Slogans
export const SLOGANS = {
  zh: {
    title: "拥抱当下，把时光留给美好",
    subtitle: "珍惜时光 • 热爱生活 • 放松心情 • 享受生活",
    description: "我们相信，好物件能够传递手心的温度。拾光时光精心挑选温馨家居、便携户外、治愈解压好物与独特创意好物，愿陪伴您慢下脚步，静静呼吸，温暖每一个平凡的日常。",
  },
  "zh-hant": {
    title: "擁抱當下，把時光留給美好",
    subtitle: "珍惜時光 • 熱愛生活 • 放鬆心情 • 享受生活",
    description: "我們相信，好物件能夠傳遞手心的溫度。拾光时光精心挑選溫馨家居、便攜戶外、治癒解壓好物與獨特創意好物，願陪伴您慢下腳步，靜靜呼吸，溫暖每一個平凡的日常。",
  },
  en: {
    title: "Embrace the Moment, Cherish the Time",
    subtitle: "Value Your Time • Love Your Life • Relax Your Mind • Enjoy the Present",
    description: "We believe in the power of touch. TIMURA carefully curates lifestyle goods. We specialize in warm home accessories, easy travel gears, therapeutic sensory toys, and thoughtful creative goods. Let us accompany your quiet breathing and soothe your busy mind.",
  }
};

// Carousel Slides
export const BANNER_SLIDES = [
  {
    id: "slide-1",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    title: {
      zh: "拥抱当下的温情治愈美学",
      "zh-hant": "擁抱當下的溫情治癒美學",
      en: "Heal the Mind with Warm Aesthetics"
    },
    desc: {
      zh: "精选柔软触感与天然材质，给忙碌的生活一个温暖踏实的拥抱。",
      "zh-hant": "精選柔軟觸感與天然材質，給忙碌的生活一個溫暖踏實的擁抱。",
      en: "Hand-picked soft textures and organic materials to embrace your daily rush."
    },
    tag: {
      zh: "温情慢生活",
      "zh-hant": "溫情慢生活",
      en: "Relaxing Living"
    },
    btnText: {
      zh: "探索生活好物",
      "zh-hant": "探索生活好物",
      en: "Discover Now"
    }
  },
  {
    id: "slide-2",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1600&auto=format&fit=crop",
    title: {
      zh: "手作木质，定义家的浪漫",
      "zh-hant": "手作木質，定義家的浪漫",
      en: "Handcrafted Wood, Define Home Romance"
    },
    desc: {
      zh: "温润木纹与柔和灯光，让家的每一个角落都流淌着惬意与安全感。",
      "zh-hant": "溫潤木紋與柔和燈光，讓家的每一個角落都流淌著愜意與安全感。",
      en: "Warm natural timber and soft ambient glow bring ultimate peace to your bedroom."
    },
    tag: {
      zh: "温馨家居饰品",
      "zh-hant": "溫馨家居飾品",
      en: "Sweet Home"
    },
    btnText: {
      zh: "去看看",
      "zh-hant": "去看看",
      en: "Browse Catalog"
    }
  },
  {
    id: "slide-3",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1600&auto=format&fit=crop",
    title: {
      zh: "惬意慢行，山野间的诗意",
      "zh-hant": "愜意慢行，山野間的詩意",
      en: "Slow Outdoors, Travel with Comfort"
    },
    desc: {
      zh: "手感扎实的保温暖杯与舒适帆布袋，把轻便旅行装进背包里。",
      "zh-hant": "手感紮實的保溫暖杯與舒適帆布袋，把輕便旅行裝進背包裡。",
      en: "Sturdy thermal travel mugs and cozy canvas carriers pack simple joy for your journeys."
    },
    tag: {
      zh: "便携慢行系列",
      "zh-hant": "便攜慢行系列",
      en: "Outdoor Escape"
    },
    btnText: {
      zh: "浏览慢行装备",
      "zh-hant": "瀏覽慢行裝備",
      en: "View Details"
    }
  }
];

// Empty list since Advantages section is requested to be removed
export const ADVANTAGES = [];

export const CATEGORIES = [
  { id: "all", name: { zh: "全部产品", "zh-hant": "全部產品", en: "All Products" }, icon: "Grid" },
  { id: "home", name: { zh: "温馨家居", "zh-hant": "溫馨家居", en: "Cozy Home" }, icon: "Sun" },
  { id: "outdoor", name: { zh: "惬意户外", "zh-hant": "愜意戶外", en: "Outdoors" }, icon: "Leaf" },
  { id: "toy", name: { zh: "治愈解压玩具", "zh-hant": "治癒解壓玩具", en: "Healing Toys" }, icon: "Sparkles" },
  { id: "creative", name: { zh: "创意好物", "zh-hant": "創意好物", en: "Creative Goods" }, icon: "Heart" }
];

export const PRODUCTS = [
  {
    id: "prod-2",
    name: {
      zh: "物理温润重力深睡眠毯 DreamHug",
      en: "DreamHug Weighted Sleep Blanket"
    },
    subtitle: {
      zh: "仿手心抚摸微压设计，天然麦饭石微砂填充，像爱人拥抱般温暖安稳，好眠一整晚",
      en: "Mimicking human warm-touch gravity, natural mineral micro-bead filling, cozy as a snug hug for deep sleep."
    },
    category: "home",
    price: "¥259.00",
    rating: 4.8,
    reviewsCount: 920,
    tag: {
      zh: "温馨家居",
      en: "Sweet Home"
    },
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511295742364-92767fa62d9f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "科学微重力：均匀施压，模拟心理学“触觉拥抱”放松感，迅速平复焦虑不安情绪。",
        "天然石砂填充：精选无杂质防静音麦饭石重力微砂，吸湿防潮，完全无任何异味。",
        "亲肤加厚保温：多层羽丝棉贴心夹合，自然保温蓄热，温暖舒爽两全其美。",
        "双面不同触感：一面如丝般滑润舒爽，一面如猫咪毛茸般亲肤软糯，适合一年四季。"
      ],
      en: [
        "Scientific Micro-Gravity: Evenly distributed load simulates gentle, reassuring pressure to ease anxiety.",
        "Eco-mineral Fill: Fine, noise-free mineral micro-beads are moisture-proof and completely odorless.",
        "Premium Layering: Thermal down-alternative locks warm temperature naturally for snug comfort.",
        "Dual-texture fabric: One side silky smooth, other cozy plush fleece for winter snugness."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "150cm × 200cm (单人适用)",
        "重量": "4.5kg / 6.0kg (建议按体重的 10% 进行选择)",
        "表里面料": "高级丝滑面料、加厚密实超柔极细绒",
        "内部结构": "高密度细方格绗缝、麦饭石天然无害微珠、羽丝棉层",
        "水洗护理": "附带专属透气水洗防护袋，支持温和慢洗手洗模式",
        "包装清单": "DreamHug 重力毯×1、手织帆布提袋×1、薰衣草香草草本包×2"
      },
      en: {
        "Dimensions": "150cm × 200cm (Single/Full)",
        "Weight Options": "4.5kg / 6.0kg (Best around 10% of your body weight)",
        "Fabrics": "Silky smooth side, Premium ultra-soft cozy fleece side",
        "Interior": "Grid-stitched natural eco micro-beads, thick batting lining",
        "Wash Guide": "Machine washable in gentle hand-wash cycle with protective wash bag",
        "Package List": "DreamHug Blanket x1, Handcrafted Canvas Tote x1, Dried Lavender Herb Packs x2"
      }
    },
    description: {
      zh: "DreamHug 重力毯摒弃繁复的加热电路，回归最原始的温暖物理重力舒压方式。它用恰到好处、温和而均匀的压力将疲惫一天的您包裹起来，极度治愈，宛如被心爱之人紧紧拥入怀中，让纷繁的杂念 and 焦虑悄悄消退。每一个细密的方格都是纯手艺人精致缝制，填充微米砂在翻身时微弱无声。抱着这床软绵绵的毯子，枕着小店赠送的野薰衣草香包，享受踏实的酣眠。",
      en: "DreamHug Weighted Blanket brings natural stress-relief to your sleep. No complex electronic heater blocks needed, its carefully balanced organic mineral sand filling wraps around you to simulate a soothing full-body embrace. Every stitch is crafted with love to keep the weight evenly dispersed, bringing cozy quietness that helps you fall asleep faster."
    },
    redirectUrls: {
      pcUrl: "https://www.douyin.com",
      mobileAppUrl: "snssdk1128://feed",
      mobileH5Url: "https://www.douyin.com"
    }
  },
  {
    id: "prod-3",
    name: {
      zh: "手编伞绳钛合金保温暖行杯 GoWarm",
      en: "GoWarm Hand-woven Titanium Mug"
    },
    subtitle: {
      zh: "医用级钛金内胆，双层物理抽真空超长锁温，手编伞绳挂扣，伴您走过山野和清晨",
      en: "Biocompatible pure titanium lining, multi-layer physical vacuum heat retention, beautiful paracord carrier."
    },
    category: "outdoor",
    price: "¥139.00",
    rating: 4.9,
    reviewsCount: 560,
    tag: {
      zh: "野营良伴",
      en: "Classic Outdoor"
    },
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533632314232-a5b8229cf2a6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "医用钛金双胆：杯体采用 316L 钛金工艺复合双层内胆，耐腐蚀不泛金属味，健康纯净。",
        "长效物理锁温：双层抽真空隔热，24小时物理保温保冷，拒绝冰冷。",
        "手织降落伞绳：附赠独家纯手工编织降落伞绳挂扣套，轻奢户外感，提拎携带非常省心。",
        "哑光耐磨漆面：杯身外壁采用多层环保耐刮磨砂手感漆，握持手感沙糯舒服。"
      ],
      en: [
        "Pure Titanium Coating: Advanced 316L inner compound prevents metallic taste, preserving liquid freshness.",
        "Physical Vacuum Lock: High-efficiency dual-wall vacuum keeps water hot or ice-cold for 24 hours.",
        "Hand-woven Paracord: Adorned with a beautiful, rugged hand-braided tactical sling, convenient for travel.",
        "Matte Grippy Coating: Exterior has scratch-resistant sand-texture coat, incredibly tactile to hold."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "75mm × 75mm × 210mm",
        "容量": "460ml",
        "净重": "225g (极其轻盈)",
        "杯胆工艺": "双层高抽真空 316L 抗菌钛合金内胆",
        "保温性能": "常温20℃下灌装95℃热水，24小时后≥48℃",
        "包装清单": "GoWarm 暖心杯×1、手织伞绳提扣×1、手工亚麻布防尘收纳袋×1"
      },
      en: {
        "Dimensions": "75mm × 75mm × 210mm",
        "Capacity": "460ml",
        "Net Weight": "225g (Ultra-light)",
        "Insulation Tech": "Dual-wall 316L Stainless vacuum insulation",
        "Hot Performance": "At 20°C ambient, filled with 95°C water, keeps ≥48°C after 24h",
        "Package List": "GoWarm Cup x1, Handcrafted Paracord Sling x1, Organic Linen Carrying Sack x1"
      }
    },
    description: {
      zh: "GoWarm 钛金保温杯用实实在在的品质与精工陪伴您踏出城市的足迹。它是无电源纯物理抽真空锁温的代表，外表包裹着磨砂微粗糙的喷涂，即使手心有汗也抓得稳固。手织伞绳是暖风小店几个合伙人在木桌上一丝一缕手工编出的扎实吊绳。当您在山顶吹风看斜阳时，手捧这样一杯刚刚好的温水，热爱生活的诗意便在一呼一吸间流淌。",
      en: "The GoWarm Mug offers classic physical vacuum engineering at its finest. Free of batteries or software, this mug blocks heat convection through advanced vacuum metal walls. Every piece is equipped with an incredibly durable, customized paracord strap braided completely by hand in our little shop, bringing you natural comfort in your camping explorations."
    },
    redirectUrls: {
      pcUrl: "https://www.xiaohongshu.com",
      mobileAppUrl: "xhsdiscover://home",
      mobileH5Url: "https://www.xiaohongshu.com"
    }
  },
  {
    id: "prod-4",
    name: {
      zh: "匠人纯铜手作解压陀螺 FluxZen",
      en: "FluxZen Handcrafted Brass Fidget Spinner"
    },
    subtitle: {
      zh: "纯铜手工精抛光，进口高速微型静音陶瓷轴承，在纯粹的重力与机械旋转中沉淀焦虑",
      en: "Selected premium brass, German precision hybrid ceramic ball bearing, ultra-silent mechanical spin for mindfulness."
    },
    category: "toy",
    price: "¥99.00",
    rating: 5.0,
    reviewsCount: 1450,
    tag: {
      zh: "心流解压",
      en: "Quiet Zen"
    },
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "手工抛光纯铜：精选高规格黄铜实心雕琢，手艺人反复打磨，色泽温润，时间越久越有岁月包浆。",
        "进口陶瓷轴承：配备精密陶瓷微型轴承，轻抚指尖即可顺滑高速旋转，绝对静音无声。",
        "黑胡桃木木座：手工磨制微斜北美黑胡桃木原木凹槽底座，完美置于办公书桌、床头作为摆件。",
        "极长稳定旋转：依靠极高精密度物理平衡重力，单次随手轻拨旋转可长达 6 - 8 分钟之久。"
      ],
      en: [
        "Hand-polished Brass: Carved from high-purity solid brass blocks, manually polished to develop beautiful patina.",
        "German Silent Bearing: High-grade hybrid ceramic balls allow frictionless, whisper-quiet spins.",
        "North American Walnut Base: Features a matching solid dark walnut concave base plate for desk showcase.",
        "Ultra-Stable Spins: Flawlessly calculated weight distribution ensures extremely stable 6-8 mins continuous spin."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "胡桃木座 90mm × 90mm × 20mm，铜陀螺直径 38mm",
        "重量": "全套约 195g",
        "材质": "高纯黄铜、特级北美黑胡桃木、精密陶瓷微型轴承",
        "使用方式": "指尖单手把玩 / 置于胡桃木座中单指滑转",
        "能量特征": "无需任何电源，依靠纯物理机械离心力，环保治愈",
        "包装清单": "抛光纯黄铜陀螺×1、手工打磨胡桃木底座×1、手工烫金包装盒×1"
      },
      en: {
        "Dimensions": "Walnut Base 90mm × 90mm × 20mm, Spinner Diameter 38mm",
        "Weight": "Full kit ~195g",
        "Material": "Solid high-grade brass, premium North American Walnut, hybrid ceramic bearing",
        "Usage": "Pocket fidget toy, or spin smoothly in the customized concave wooden base",
        "Power source": "100% passive, no batteries required. Pure mechanical momentum.",
        "Package List": "Brass Spinner x1, Walnut Tray x1, Custom Kraft Giftbox x1"
      }
    },
    description: {
      zh: "FluxZen 纯铜手作解压陀螺是一款摆在桌头、能帮您静心、安神、过滤负面杂念的物理治愈艺术摆件。在写字码字、思考的缝隙里，轻轻一拨，看它在空旷古朴的胡桃木托盘上无声凌空旋转，持久而极其沉稳。没有冰冷的数字光幕和喧哗的提示音，只有黄铜材质在岁月和手掌摩挲下越来越有味道的温存。送给每一个渴望慢下来的紧绷心灵。",
      en: "FluxZen Spinner is a minimal, elegant desk toy crafted to ground your busy thoughts. Spinning quietly on its custom-crafted walnut tray, it helps reduce sensory overload with silent, smooth kinetic energy. No electronic buttons, glowing LED chips, or buzzes—just raw solid brass, beautifully balanced by physical laws, developing its own warm personal story the longer you hold it."
    },
    redirectUrls: {
      pcUrl: "https://www.douyin.com",
      mobileAppUrl: "snssdk1128://feed",
      mobileH5Url: "https://www.douyin.com"
    }
  },
  {
    id: "prod-5",
    name: {
      zh: "复古手提调光野营氛围灯 GlowLantern",
      en: "GlowLantern Retro Dimming Camp Lamp"
    },
    subtitle: {
      zh: "无级旋钮控光，LED暖光钨丝拟真烛火，防水防摔，营造温暖露营慢时光",
      en: "Stepless rotary brightness control, warm LED filament mimicking real candle flicker, IPX4 waterproof."
    },
    category: "outdoor",
    price: "¥128.00",
    rating: 4.8,
    reviewsCount: 340,
    tag: {
      zh: "温馨氛围",
      en: "Cozy Ambient"
    },
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "无级旋钮调光：轻松旋转阻尼旋钮，实现0-100%暖色无级亮度自由调节。",
        "仿生钨丝光效：特殊定制柔性LED发光线，完美重现复古煤油灯或烛火般的宁静质感。",
        "长效 Type-C 充电：大容量循环锂电池，长达60小时低亮续航，并配有呼吸电量指示灯。",
        "全防雨铝合金：加厚抗摔压铸铝底座及防爆玻璃防护罩，让户外野营充满扎实守护感。"
      ],
      en: [
        "Stepless Rotation Dimming: Responsive metal dial adjusts glow smoothly from dark twilight to warm campfire.",
        "True Candle Filament: Elegant customized flexible LED filament produces beautiful 2200K retro warm glow.",
        "Type-C Rechargeable: Built-in high capacity lithium battery, delivering up to 60 hours of soothing ambient light.",
        "All-weather Aluminum: Robust die-cast aluminum frame with shatter-proof dome shade safeguards outdoor campers."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "110mm × 110mm × 220mm (含手柄高)",
        "重量": "380g",
        "材质": "压铸铝合金、高硼硅防爆罩、麻绳编织手柄",
        "防水等级": "IPX4 级全方位防护雨淋",
        "充电接口": "USB Type-C (5V 1A)",
        "包装清单": "GlowLantern 露营灯×1、Type-C 充电线×1、手绘牛皮纸礼盒×1"
      },
      en: {
        "Dimensions": "110mm × 110mm × 220mm (including handle)",
        "Weight": "380g",
        "Material": "Die-cast Aluminum Alloy, High-borosilicate Glass, Hemp Rope Grip",
        "Waterproof": "IPX4 water splash resistant",
        "Charge Port": "USB Type-C (5V 1A)",
        "Package List": "GlowLantern Lamp x1, Charging Cable x1, Kraft Gift Box x1"
      }
    },
    description: {
      zh: "GlowLantern 复古氛围灯带您重返没有繁杂光幕的质朴岁月。暖融融的柔光不仅能照亮您的小帐篷或卧室床角，更能在安静的空气中播撒一缕温情。特别选用的麻绳材质手柄带有一丝大地粗糙的野趣，握在手心倍感踏实。转动小旋钮，让晃动的昏黄色灯光轻抚一整天的匆忙与疲惫。",
      en: "GlowLantern brings classic warm luminance to your bedside tables or evening camping setups. No flashlights or aggressive spotlights, its cozy 2200K color tone mimics old-fashioned gas lighting. Complete with a natural rustic hemp woven carry handle, it gives you a piece of natural tranquility wherever your journey leads."
    },
    redirectUrls: {
      pcUrl: "https://www.xiaohongshu.com",
      mobileAppUrl: "xhsdiscover://home",
      mobileH5Url: "https://www.xiaohongshu.com"
    }
  },
  {
    id: "prod-6",
    name: {
      zh: "便携纯手工亚麻编织慢行拎袋 TravelWeave",
      en: "TravelWeave Hand-woven Linen Carrier"
    },
    subtitle: {
      zh: "纯天然野生粗亚麻，古法手工经纬编织，大容量结实耐磨，装满野餐的惬意",
      en: "100% natural organic flax linen, traditional loom manual weaving, large volume and heavy duty for escape."
    },
    category: "outdoor",
    price: "¥89.00",
    rating: 4.7,
    reviewsCount: 210,
    tag: {
      zh: "手作美学",
      en: "Pure Craft"
    },
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "100%野生粗亚麻：精选天然长纤维亚麻线，无化学漂白，散发古朴的大自然草本清香。",
        "古法手工梭编：由多年经验的老手艺人一针一线编织，针脚密实结实耐用，极具手作感。",
        "加厚宽肩背带：双层加厚棉麻肩带设计，符合人体工程学，有效减缓肩部下坠感不勒肉。",
        "内设防水夹层：精巧融入一块食品级TPU超薄防渗隔离里布，便于盛放水壶或湿毛巾。"
      ],
      en: [
        "100% Organic Linen: Raw, dye-free wilderness flax retaining a fresh grassy fragrance.",
        "Traditional Manual Weaving: Crafted lovingly by skilled weavers, presenting subtle, beautiful imperfections.",
        "Thick Padded Straps: Dual-layer wide handle wraps naturally around your shoulders without pressure.",
        "Waterproof Interior Layer: Features a thin, eco-friendly TPU lining to store fresh fruits or wet towels safely."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "宽 380mm × 高 420mm (肩带垂直高 260mm)",
        "承重上限": "最大可承受 15kg 物品重量",
        "材质": "特级野生粗亚麻线、有机纯棉编带、食品级TPU防水里布",
        "清洗建议": "建议使用温水手洗，平铺自然阴干，越洗越有质朴的柔软触感",
        "包装清单": "TravelWeave 编织袋×1、拾光时光木刻徽章×1"
      },
      en: {
        "Dimensions": "Width 380mm x Height 420mm (Strap Drop 260mm)",
        "Max Payload": "Comfortably holds up to 15kg (33 lbs)",
        "Material": "Organic Coarse Flax Linen, Thick Cotton Straps, Eco TPU Inner Liner",
        "Wash Method": "Gentle hand wash in warm water, air dry flat. Gets softer over time.",
        "Package List": "TravelWeave Bag x1, Custom Engraved TIMURA Wooden Tag x1"
      }
    },
    description: {
      zh: "TravelWeave 亚麻编织袋是对低碳慢行生活的完美礼赞。没有繁琐拉链和喧嚣的拼色，它带着最原始的浅褐色亚麻质地，粗放、扎实、大方。随身背着它，去菜场、图书馆或林间，装满热面包、几本书与刚采摘的花。每一个结节都是匠人指尖的温度，带您重新感受劳作的美丽和踏实的归属感。",
      en: "TravelWeave Bag celebrates a slower, mindful lifestyle. Stripping away heavy metal buckles and loud prints, this tote relies on high-quality woven organic flax. Perfect for carrying groceries, warm books, or portable camp utilities, its heavy stitches hold tight and soft, aging beautifully with every journey you take."
    },
    redirectUrls: {
      pcUrl: "https://www.xiaohongshu.com",
      mobileAppUrl: "xhsdiscover://home",
      mobileH5Url: "https://www.xiaohongshu.com"
    }
  },
  {
    id: "prod-7",
    name: {
      zh: "天然香薰大豆蜡重力减压烛 WarmFlame",
      en: "WarmFlame Soy Wax Stress-Relief Candle"
    },
    subtitle: {
      zh: "进口纯大豆蜡基底，不含石蜡更健康，实木十字烛芯噼啪声，自带温暖白噪音",
      en: "100% natural pure soy wax, natural cross wood wick with soothing crackling fire sounds, herbal scents."
    },
    category: "home",
    price: "¥79.00",
    rating: 4.9,
    reviewsCount: 810,
    tag: {
      zh: "疗愈芬芳",
      en: "Mind Therapy"
    },
    image: "https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "100%进口大豆蜡：天然大豆压榨，无石蜡添加，低温无毒燃烧，即使有宠物婴儿也十分安全。",
        "十字原木烛芯：独特的十字双层樱桃木片设计，燃烧时会发出细微美妙的噼里啪啦木火燃烧白噪音。",
        "高级植物精油：萃取自薰衣草、佛手柑、洋甘菊等天然草本，舒缓中枢神经、温柔助眠减压。",
        "磨砂粗陶罐：手工拉坯磨砂粗陶杯体，燃尽后可作为温馨的小多肉多功能小绿植花盆使用。"
      ],
      en: [
        "100% Pure Soy Base: Clean, non-toxic burns derived entirely from pressed soy beans, completely pet safe.",
        "Double Wood Cross Wick: Dual cherrywood plates recreate a micro campfire with delightful crackles.",
        "Pure Essential Oils: Enriched with certified lavender, chamomile, and sweet orange oils for sleep aid.",
        "Terracotta Clay Jar: Hand-thrown textured clay pottery vessel, perfectly reusable as a tiny succulent pot."
      ]
    },
    specs: {
      zh: {
        "净含量": "180g (可燃烧约 35 小时)",
        "材质": "有机天然大豆蜡、纯植物精油、天然樱桃木片、手工粗陶杯",
        "前调": "佛手柑、甜橙 (清爽提神)",
        "中调": "高地薰衣草、白茶 (安神宁静)",
        "后调": "檀香、香根草 (温厚沉静)",
        "包装清单": "WarmFlame 香薰烛×1、手绘木盖盖子×1、火柴一小盒"
      },
      en: {
        "Net Weight": "180g (Burn time ~35 hours)",
        "Ingredients": "Natural Soy Wax, Herb-extracted Essential Oils, Cherrywood Wick, Clay Pottery Cup",
        "Top Notes": "Bergamot, Sweet Orange (Refreshing citrus)",
        "Middle Notes": "Highland Lavender, White Tea (Calming tranquility)",
        "Base Notes": "Sandalwood, Vetiver (Warm earthiness)",
        "Package List": "WarmFlame Candle x1, Natural Finished Wood Cover x1, Safety Matchbox x1"
      }
    },
    description: {
      zh: "WarmFlame 香薰蜡烛用光明、香气与纯粹的听觉抚慰您的心灵。摒弃化学棉绳，我们采用优质十字樱桃木片作为烛芯，点燃它时，小小的噼啪声犹如深夜森林里的小炉火，营造出极度安宁治愈的氛围。伴随着空气中徐徐弥漫的高地薰衣草和檀香气息，仿佛所有的烦闷和压力都在这一簇暖光中飘然散去。",
      en: "WarmFlame candle brings multisensory comfort to your evening meditation. Standard candles might use bleached cotton strings, but we chose dual cherrywood wicks. As it burns, it sings a soothing melody of gentle crackles—like a tiny personal campfire. Together with its premium lavender and sandalwood oil extracts, it creates an absolute haven of quietude."
    },
    redirectUrls: {
      pcUrl: "https://www.douyin.com",
      mobileAppUrl: "snssdk1128://feed",
      mobileH5Url: "https://www.douyin.com"
    }
  },
  {
    id: "prod-8",
    name: {
      zh: "手作实木猫爪按摩多功能解压梳 PawSoothe",
      en: "PawSoothe Handcrafted Massage Comb"
    },
    subtitle: {
      zh: "整木雕琢猫爪造型，高回弹气囊纯天然原木圆齿，温和按摩，梳走一天焦虑",
      en: "Crafted from solid maple wood, ultra-elastic airbag with rounded timber bristles for cozy scalp relaxation."
    },
    category: "toy",
    price: "¥59.00",
    rating: 4.8,
    reviewsCount: 430,
    tag: {
      zh: "趣味解压",
      en: "Playful Comfort"
    },
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "北美硬枫木整雕：精选质地细腻无疤结的整块高档枫木雕琢，猫爪背影萌趣圆润，手感饱满。",
        "高弹亲肤大气囊：特制乳胶防老化气囊，按压触感如猫咪爪垫般Q弹，回弹极其温柔舒畅。",
        "打磨原木圆齿：梳齿均为纯手工圆头打磨，无痛不伤头皮，深度促进头部微循环放松。",
        "双重解压体验：除了用来梳理秀发并按摩头皮，其萌趣的手感与可捏按的Q弹气囊更是出色的手部解压玩具。"
      ],
      en: [
        "Solid Hard Maple Body: Whole-block solid maple wood engraving, creating an incredibly cute, chubby cat-paw shape.",
        "Pliable Latex Airbag: Specialized anti-static soft rubber pad feels like a squishy kitten paw for ultimate satisfaction.",
        "Polished Wood Pins: Rounded wooden bristles glide smoothly to stimulate circulation and release tight head muscles.",
        "Dual-use Fidget: Use it for hair styling and massage, or simply squish the soft rubber cushion at your work desk."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "95mm × 80mm × 45mm",
        "重量": "105g (小巧便携)",
        "主要材质": "北美硬枫木、天然抗菌乳胶气囊、精抛光原木齿",
        "适用部位": "头皮按摩、颈部放松、手抓把玩",
        "工艺等级": "精雕机削起胚 + 纯手工六次精细磨砂抛光",
        "包装清单": "PawSoothe 解压梳×1、手绘收纳亚麻袋×1、猫咪温馨卡片×1"
      },
      en: {
        "Dimensions": "95mm × 80mm × 45mm",
        "Weight": "105g (Compact size)",
        "Material": "North American Hard Maple, Natural Latex Airbag, Polished Beech Bristles",
        "Target area": "Scalp massaging, neck kneading, sensory squeezing",
        "Finishing": "Advanced machine carving + 6-step manual smooth polishing",
        "Package List": "PawSoothe Comb x1, Cotton Carrying Pouch x1, Cozy Greeting Card x1"
      }
    },
    description: {
      zh: "PawSoothe 枫木解压梳将萌趣动物美学与实用个护巧妙结合。圆滚滚的实木手柄握在掌心，细腻的天然木纹散发着暖和的光泽，让您的指尖时刻触摸到大自然。轻轻在头皮梳拂按压，高弹气囊吸入空气的声音犹如猫咪满足的哈欠，温润的圆木齿深度按摩每个穴位，让您紧绷的思绪一瞬间瓦解，重拾轻松的自我。",
      en: "PawSoothe Comb merges the delightful innocence of our pets with functional stress relief. The solid natural maple block fits snugly in your hand, with polished grain details that feel premium and warm. Combing through your hair or gently kneading your temples with its thick, ultra-elastic rubber core releases daily pressure immediately."
    },
    redirectUrls: {
      pcUrl: "https://www.douyin.com",
      mobileAppUrl: "snssdk1128://feed",
      mobileH5Url: "https://www.douyin.com"
    }
  },
  {
    id: "prod-9",
    name: {
      zh: "纯棉加厚云朵暖脚拖鞋 CloudSlippers",
      en: "CloudSlippers Thickened Cozy Cotton Slides"
    },
    subtitle: {
      zh: "超柔加厚长绒毛里，环保物理防滑厚底，漫步云端般的居家软糯触感",
      en: "Thick plush fleece interior, eco-friendly physical anti-slip sole, walking on clouds feeling."
    },
    category: "home",
    price: "¥49.00",
    rating: 4.8,
    reviewsCount: 1120,
    tag: {
      zh: "居家暖物",
      en: "Winter Warm"
    },
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511295742364-92767fa62d9f?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "云朵蓬松触感：精选加厚超细毛绒面料，细腻丰满、蓄热强、不掉毛、呵护敏感双足。",
        "4.5cm物理厚底：高密度慢回弹海绵搭配轻质EVA厚底，长效抗疲劳舒缓足底受力。",
        "物理锯齿防滑：鞋底采用科学防滑锯齿凹槽，即使浴室瓷砖积水，也能行步稳固踏实。",
        "透气环保材质：纯棉表层配合无甲醛环保胶水贴合，鞋履清爽透气不闷汗。"
      ],
      en: [
        "Fluffy Cloud Lining: High-density long-staple cotton-fleece guarantees heat storage and skin-friendly cuddle.",
        "4.5cm Rebounding Cushion: High density memory sponge with lightweight EVA base offers orthopedic fatigue relief.",
        "Geometric Non-slip Grooves: Specially engineered textured tread patterns ensure safe traction on slick tiling.",
        "Breathable Materials: All-natural organic cotton shell, zero toxic glue chemicals, preventing sweat odors."
      ]
    },
    specs: {
      zh: {
        "尺码范围": "36-37 (适合23cm)、38-39 (适合24cm)、40-41 (适合25.5cm)、42-43 (适合27cm)",
        "颜色款式": "燕麦色、薰衣草紫、奶茶咖",
        "重量": "整双约 280g (异常轻巧无负担)",
        "鞋底厚度": "4.5cm 物理缓压层",
        "洗涤说明": "可直接放入洗衣袋进行机洗或刷洗，不易变形掉色",
        "包装清单": "CloudSlippers一双、环保防潮拉链收纳袋×1"
      },
      en: {
        "Sizes Available": "US Women 5-6 / 7-8 / 9-10, US Men 8-9 / 10-11",
        "Color Options": "Warm Oatmeal, Lavender Violet, Milk-tea Khaki",
        "Weight": "Around 280g for pair (extremely light)",
        "Sole Thickness": "4.5cm slow-rebound foam layer",
        "Care Guide": "Machine washable using laundry pouch, tumble dry low, keeps shape",
        "Package List": "CloudSlippers x1 Pair, Biodegradable Zipper Travel Bag x1"
      }
    },
    description: {
      zh: "CloudSlippers 云朵拖鞋为您洗去跨进家门的第一抹疲惫。4.5厘米厚的加厚慢回弹底层，巧妙化解了您双足的酸痛与劳累，让您每一步都像踩在松软香甜的舒芙蕾上。精选极细长绒毛内里贴身包裹，温和蓄热不冰冷，是寒冷冬夜里、或空调房中，给您最贴心的物理呵护。",
      en: "CloudSlippers welcome you home by instantly cushioning your hard-working feet. Boasting an ultra-comfy 4.5cm thick rebounding sole, they absorb foot pressure like walking over fluffy marsh-mallows. Lined with premium velvet fleece, they keep your toes snug without trapping heat—the absolute definition of warm, barefoot freedom."
    },
    redirectUrls: {
      pcUrl: "https://www.xiaohongshu.com",
      mobileAppUrl: "xhsdiscover://home",
      mobileH5Url: "https://www.xiaohongshu.com"
    }
  },
  {
    id: "prod-12",
    name: {
      zh: "纯手工慢刻黑胡桃木杯垫 TimberCoaster",
      en: "TimberCoaster Handcrafted Walnut Mug Coaster"
    },
    subtitle: {
      zh: "北美特级黑胡桃，手工慢刀刻痕防滑，天然蜂蜡润色，隔热护桌的小精灵",
      en: "North American dark walnut, manual hand-sculpted textures, polished with pure organic beeswax."
    },
    category: "creative",
    price: "¥32.00",
    rating: 4.9,
    reviewsCount: 380,
    tag: {
      zh: "手作温情",
      en: "Lovely Woodwork"
    },
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "特级黑胡桃整木：整料切割，无拼接无木屑压制，天然深色黑巧克力木色，高贵沉稳。",
        "手工凿刻起伏痕：刀尖在木质上留下的一道道波浪起伏凹凸刻痕，完美增加水杯抓力防滑。",
        "纯蜂蜡温和润色：拒绝化学清漆，采用纯天然森林蜂蜡手工反复擦拭，保留原木天然呼吸孔。",
        "厚实重力隔热：12mm厚实实木板，天然高隔热屏障，不惧沸水杯底，牢牢守护您的桌面。"
      ],
      en: [
        "Solid Black Walnut: Cut from select single-block timber, featuring rich chocolate grain without splices.",
        "Hand-sculpted Grooves: Each ripple-like textured valley is chiseled individually for non-slip cup placement.",
        "Organic Beeswax Finish: Sealed beautifully with raw pure beeswax instead of heavy chemical lacquers.",
        "Solid Thermal Barrier: 12mm thick dense solid wood shields glass counters from scalding tea water."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "正方形 95mm × 95mm × 12mm / 圆形直径 95mm",
        "重量": "约 55g",
        "材质": "北美黑胡桃木、有机矿物润色白蜂蜡",
        "工艺方式": "古法木凿手凿工艺 + 八遍砂纸干磨",
        "吸水隔音": "木纹天然物理微孔，可吸收微量冷饮凝结水珠",
        "包装清单": "TimberCoaster 杯垫×1、手工扎绳棉布袋×1"
      },
      en: {
        "Dimensions": "Square: 95mm x 95mm x 12mm / Round: 95mm Diameter",
        "Weight": "55g (Pocket item)",
        "Material": "North American Black Walnut, Organic Beeswax",
        "Technique": "Traditional carpentry hand chiseling + 8-step hand sanding",
        "Properties": "Micro-porous grain captures condensation drips silently",
        "Package List": "TimberCoaster Coaster x1, Thread-tied Cotton Gift Bag x1"
      }
    },
    description: {
      zh: "TimberCoaster 杯垫是由苏杭老木匠纯手作凿刻的诚意之作。在清晨的第一缕阳光中，把盛满温热牛奶的杯子轻落在这块泛着深褐色色泽的胡桃木上。它不求惹眼，却用厚实宽厚的胸膛替您的办公桌、床头承载着每一次温暖的重托。手掌摩挲间，每一道刻痕都倾诉着匠人对自然的敬畏和慢工细活的质朴坚持。",
      en: "TimberCoaster adds a gorgeous slice of manual craftsmanship to your daily desks. Hand-carved with chisel and sweat, its ripple ridges prevent slippery glasses from sticking, while looking like a miniature work of art. Wiped carefully with raw beeswax to show off the beautiful natural grains, it provides durable thermal protection while letting you touch real nature daily."
    },
    redirectUrls: {
      pcUrl: "https://www.douyin.com",
      mobileAppUrl: "snssdk1128://feed",
      mobileH5Url: "https://www.douyin.com"
    }
  },
  {
    id: "prod-13",
    name: {
      zh: "治愈系猫咪尾巴慢回弹抱枕 CatTail",
      en: "CatTail Healing Memory Foam Pillow"
    },
    subtitle: {
      zh: "人体工学记忆棉，精细超柔防静电兔毛套，猫尾巴缠绕包围，释压超萌伴侣",
      en: "Ergonomic slow-rebound memory foam, super-soft anti-static faux rabbit fur, plush cat-tail design."
    },
    category: "toy",
    price: "¥108.00",
    rating: 4.9,
    reviewsCount: 740,
    tag: {
      zh: "温暖守护",
      en: "Warm Cuddle"
    },
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511295742364-92767fa62d9f?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "慢回弹舒压记忆棉：采用50D高密度太空记忆海绵，5秒缓慢回弹，物理化解颈椎腰椎压迫力。",
        "精梳加厚超柔兔毛：精选食品级环保合成兔毛，绒毛密实软糯，极度亲肤防静电、安全不掉色。",
        "人体工学环抱托：独特的猫咪猫尾巴环状缠绕曲线，科学贴合脊骨，提供三维环抱般的惬意依靠。",
        "拉链可拆洗夹套：底部配有隐藏式顺滑YKK拉链，几秒即可剥离绒毛外套进行水洗，长保洁净。"
      ],
      en: [
        "5-Sec Slow Rebound: High-density 50D memory foam contours beautifully to relieve shoulder and neck strain.",
        "Silky Static-free Fleece: Premium faux rabbit fur shell delivers an ultra-soft touch that is hypoallergenic.",
        "Ergonomic Body Cuddle: Playful curved cat-tail wraps snug around your neck, waist, or lap like a real pet.",
        "Washable Detachable Cover: Smooth bottom-hidden YKK zipper allows quick shell washing for continuous freshness."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "全长 80cm × 宽 18cm × 厚 12cm",
        "净重": "490g (饱满厚实)",
        "内胆填充": "50D 慢回弹温感太空记忆棉",
        "外套材质": "100% 极细涤纶仿兔毛超柔绒",
        "安全等级": "GB 18401-2010 A类 (婴幼儿可直接皮肤接触安全级)",
        "包装清单": "CatTail 抱枕×1、猫咪插画束口袋×1、温暖贺卡×1"
      },
      en: {
        "Dimensions": "Length 80cm × Width 18cm × Thickness 12cm",
        "Weight": "490g (Thick and supportive)",
        "Inner core": "50D space-grade slow-rebound memory foam",
        "Fleece material": "100% fine synthetic skin-friendly rabbit plush fleece",
        "Safety Standard": "Class A Certified (Safe for direct contact with infant skin)",
        "Package List": "CatTail Pillow x1, Cotton Illustrated Carry Bag x1, Warm Note Card x1"
      }
    },
    description: {
      zh: "CatTail 治愈系抱枕是拾光时光团队为紧绷都市白领打造的温情良伴。它不仅是一个托举酸疼腰颈的记忆枕，更像一只温顺懂事的猫咪静静蜷缩在您身侧。490克沉甸甸的抱感，超柔的白兔毛触感在指尖划过，如同正在温柔地抚摸一只满足的小猫，用最温和柔糯的物理质地抚慰您所有的焦躁。",
      en: "CatTail Memory Pillow provides a quiet, pet-like companionship to heal your tired spirit. Crafted with medical-grade memory foam inside, it curves beautifully around your body to provide customized lumbar or neck alignment. Covered in static-free, ultra-soft bionic rabbit fleece, stroking it feels incredibly lifelike and comforting—relieving stress through warm sensory connection."
    },
    redirectUrls: {
      pcUrl: "https://www.douyin.com",
      mobileAppUrl: "snssdk1128://feed",
      mobileH5Url: "https://www.douyin.com"
    }
  },
  {
    id: "prod-14",
    name: {
      zh: "户外防水帆布防潮野餐垫 CanvasLawn",
      en: "CanvasLawn Waterproof Camping Picnic Mat"
    },
    subtitle: {
      zh: "加厚重磅加密帆布，底层环保防水TPU，皮质挽带提手，装满周末的微风与斜阳",
      en: "Thick heavy-duty canvas top, eco-friendly waterproof TPU base, beautiful leather buckle carrier."
    },
    category: "outdoor",
    price: "¥118.00",
    rating: 4.8,
    reviewsCount: 310,
    tag: {
      zh: "慢行野营",
      en: "Slow Picnic"
    },
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "加密纯棉粗帆布：采用高磅数加密纯棉粗帆布面料，触手沙糯坚韧、耐磨抗拉扯、透气不过敏。",
        "底层双重防潮TPU：贴心压合超轻TPU防渗透隔潮塑料底层，隔绝泥土和绿草地潮气水珠。",
        "复古真皮束带套：配备纯手工缝制牛皮挽扣及提绳，收纳紧凑，尽显复古工匠质感。",
        "宽敞聚会大尺寸：展开可容纳 4 - 6 人舒适围坐，平铺平整不易起褶，便于摆放点心水杯。"
      ],
      en: [
        "Heavy-duty Cotton Canvas: Soft sand-textured cotton canvas top is abrasion-resistant and skin-friendly.",
        "Waterproof TPU Underlay: Thin pressed bottom blocks cold dampness and muddy water on the field perfectly.",
        "Leather Carrying Harness: Complete with beautiful handcrafted cowhide binding buckles and handles.",
        "Spacious Layout size: Opens up to 150cm x 180cm, cozy for 4-6 people to share coffee, cakes, or books."
      ]
    },
    specs: {
      zh: {
        "展开尺寸": "150cm × 180cm (适宜4-6人)",
        "折叠尺寸": "直径 15cm × 高 38cm",
        "重量": "1.2kg (重磅扎实质感)",
        "面料材质": "12安高档重磅纯棉帆布、食品级TPU环保防潮底",
        "捆扎配件": "精工头层牛皮带×2、复古黄铜合金针扣",
        "包装清单": "CanvasLawn 野餐垫×1、真皮收纳皮带×1、手绘森林贴纸×1"
      },
      en: {
        "Unfolded size": "150cm × 180cm (comfortably seats 4-6 adults)",
        "Folded size": "15cm Diameter x 38cm Length cylindrical roll",
        "Weight": "1.2kg (highly weighted robust quality)",
        "Material": "12oz Premium Canvas Top, Non-toxic TPU Barrier Bottom",
        "Strap kit": "Full grain genuine leather belts with vintage solid brass buckles",
        "Package List": "CanvasLawn Picnic Mat x1, Leather Straps x1, Hand-drawn Forest Decal x1"
      }
    },
    description: {
      zh: "CanvasLawn 野餐垫是您周末逃离城市喧嚷、重投自然怀抱的心灵桥梁。它不依赖充电接口，只用结实扎实的纯棉帆布和环保的TPU防水层，替您撑起一片清整、干燥、充满惬意草香的午后乐土。纯手工缝制的真皮挽带提手带有一股浓郁的古典匠人质朴，像一件陪伴您多年的老朋友，陪伴您躺看云卷云舒，享受松弛时光。",
      en: "CanvasLawn Picnic Mat connects you with peaceful Saturday sunrises. Featuring thick textured canvas and a robust waterproof shield underneath, it keeps you dry and warm on morning lawns or sea beaches. Bound tightly with top-grain leather straps and solid brass buckles, it delivers timeless tactile charm for your weekend family getaways."
    },
    redirectUrls: {
      pcUrl: "https://www.xiaohongshu.com",
      mobileAppUrl: "xhsdiscover://home",
      mobileH5Url: "https://www.xiaohongshu.com"
    }
  },
  {
    id: "prod-15",
    name: {
      zh: "指尖流体磁力减压时光沙漏 SandFlow",
      en: "SandFlow Magnetic Flow Stress Hourglass"
    },
    subtitle: {
      zh: "高硼硅手工吹制玻璃，超细纳米磁铁沙，在流沙堆积成黑森林的物理过程中沉静身心",
      en: "Hand-blown borosilicate glass bulb, premium iron magnetic filings building gorgeous 3D black forest shapes."
    },
    category: "creative",
    price: "¥89.00",
    rating: 4.9,
    reviewsCount: 510,
    tag: {
      zh: "静心微观",
      en: "Mindful Sight"
    },
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"
    ],
    features: {
      zh: [
        "手工高硼硅吹制：特聘苏杭老玻璃工匠、1300℃高温手工吹制一体成型，无缝透亮，优雅抗压。",
        "纳米级黑色磁沙：填充特殊打磨球形磁铁微细沙，落沙轻盈均匀，不沾内壁，顺滑流畅。",
        "黑胡桃木磁底座：实心胡桃木底座中心手工内嵌一块特级高斯永磁铁，为落沙注入三维重力磁场。",
        "三维黑森林物理成像：细沙落下时，在磁力作用下，底座会长出一朵朵极其惊艳奇特的磁性结晶黑森林树，美妙万分。"
      ],
      en: [
        "Hand-blown Glassware: Formed by experienced glassblowers at 1300°C, seamless, exceptionally transparent.",
        "Nano Magnetic Sand: Filled with micro-spherical iron fillings that flow naturally without sticking to glass.",
        "Solid Walnut Magnet Base: Features a raw dark walnut wooden base embedded with a strong neodymium magnet.",
        "Fascinating 3D Structures: Falling iron sand erects into stunning, spiky geometric forest formations physically."
      ]
    },
    specs: {
      zh: {
        "产品尺寸": "玻璃体 145mm × 65mm，木底座 80mm × 80mm × 20mm",
        "重量": "全套约 180g",
        "主要材质": "高硼硅玻璃、高规格黑色纳米铁粉、黑胡桃木、钕铁硼强磁铁",
        "漏沙时间": "约 1 分钟 (符合静心一分钟呼吸冥想科学周期)",
        "能量特征": "纯物理磁学离心平衡引力，完全无电磁辐射，安全环保",
        "包装清单": "SandFlow 玻璃沙漏×1、磁性黑胡桃木底座×1、棉纸牛皮防撞包装盒×1"
      },
      en: {
        "Dimensions": "Glass bulb: 145mm x 65mm, Wooden base: 80mm x 80mm x 20mm",
        "Weight": "180g",
        "Material": "High-borosilicate glass, premium bionic magnetic sand, black walnut block, strong neodymium magnet",
        "Flow Period": "Around 1 minute (Perfect length for standard mindful breathing exercise)",
        "Principle": "100% passive, powered by physical magnetic attraction and gravitational fields",
        "Package List": "SandFlow Hourglass x1, Solid Walnut Base x1, Protective Kraft Giftbox x1"
      }
    },
    description: {
      zh: "SandFlow 磁力减压沙漏是您办公桌上一分钟心灵短逃逸的完美物理道具。轻轻翻转它，当黑色纳米磁沙穿过纤细颈部、坠落到蕴含磁铁的黑胡桃木底座上时，不会堆积成扁平沙堆，而是神奇地向上生长、站立，最终形成一朵朵仿佛有生命的刺猬或黑森林。静下心来注视这神秘又寂静的一分钟落沙，听自己的呼吸，在纯粹的重力磁力舞蹈中寻回内心的松弛。",
      en: "SandFlow Hourglass creates a beautiful 60-second visual retreat on your busy office desks. Just flip it over, and as the dark mineral filings trickle down, they interact with the strong magnetic fields hidden inside the dark walnut wood base. Instead of gathering in a boring pile, they physically sculpt beautiful spiky crystalline trees, encouraging you to slow down, take a deep breath, and appreciate the laws of physics."
    },
    redirectUrls: {
      pcUrl: "https://www.douyin.com",
      mobileAppUrl: "snssdk1128://feed",
      mobileH5Url: "https://www.douyin.com"
    }
  }
];

export const ABOUT_INFO = {
  intro: {
    zh: "「拾光时光」成立于2021年，是一家专注于把‘手心的温情与美好时光’带回千家万户的创意生活美学品牌。我们不追求宏大冰冷的科技概念，不谈空洞的数据指标。我们是一群热爱生活的年轻人，因为共同的热情聚在这个温润的品牌团队中。我们坚信，生活里的物件应该带有呼吸 and 厚度，能够在你感到疲惫的瞬间，给身心一个踏踏实实、充满善意与温存的拥抱。",
    en: "Founded in 2021, TIMURA is an online brand dedicated to restoring touch and warmth to our cozy home and outdoor items. We steer clear of cold high-tech terms, complex sensors, or data metrics. We are simply a group of friends passionate about crafted living. We strongly believe that everyday items should hold organic tactile value, offering you a quiet, warm, and loving hug whenever you feel overwhelmed."
  },
  philosophy: {
    zh: "「拾光时光」名字的由来，是‘在平凡的日常中拾起美好时光，发现生活的无限乐趣’。我们主营温馨家居、惬意户外好物以及纯手作指尖解压玩具。正如我们不变的誓言：拥抱当下，把时光留给美好。愿您在这里找到热爱，放松心情，享受生活里的每个温存当下。",
    en: "The name 'TIMURA' holds a beautiful wish: to gather the warm moments of time and discover the true joy of life. We carry warm bedroom supplies, travel carriers, and handcrafted stress-relief toys. Enjoy the present, value your time, and cherish every single beautiful moment of peace."
  },
  certificates: {
    zh: [
      { name: "暖风生活馆合法营业执照", image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=400&auto=format&fit=crop" },
      { name: "绿色环保天然原材料质检表", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop" }
    ],
    en: [
      { name: "TIMURA Business License", image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=400&auto=format&fit=crop" },
      { name: "Eco-friendly Materials Assessment", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop" }
    ]
  }
};

// Automatic Traditional Chinese (zh-hant) Translation Generator
function convertObjectToHant(sourceObj) {
  if (!sourceObj || typeof sourceObj !== 'object') return sourceObj;
  if (Array.isArray(sourceObj)) {
    return sourceObj.map(item => typeof item === 'string' ? s2t(item, 'zh-hant') : convertObjectToHant(item));
  }
  const result = {};
  for (const [k, v] of Object.entries(sourceObj)) {
    const keyHant = s2t(k, 'zh-hant');
    let valHant = v;
    if (typeof v === 'string') {
      valHant = s2t(v, 'zh-hant');
    } else if (typeof v === 'object') {
      valHant = convertObjectToHant(v);
    }
    result[keyHant] = valHant;
  }
  return result;
}

function injectHant(obj) {
  if (!obj || typeof obj !== 'object') return;
  
  if (Array.isArray(obj)) {
    for (const item of obj) {
      injectHant(item);
    }
    return;
  }
  
  // If the object has a 'zh' field but no 'zh-hant' field, add it
  if (obj.zh !== undefined && obj['zh-hant'] === undefined) {
    if (typeof obj.zh === 'string') {
      obj['zh-hant'] = s2t(obj.zh, 'zh-hant');
    } else if (Array.isArray(obj.zh)) {
      obj['zh-hant'] = obj.zh.map(item => typeof item === 'string' ? s2t(item, 'zh-hant') : convertObjectToHant(item));
    } else if (typeof obj.zh === 'object') {
      obj['zh-hant'] = convertObjectToHant(obj.zh);
    }
  }
  
  // Recursively process all properties
  for (const key of Object.keys(obj)) {
    if (key !== 'zh' && key !== 'zh-hant' && typeof obj[key] === 'object') {
      injectHant(obj[key]);
    }
  }
}

// Apply to all exports to automatically generate Traditional Chinese (zh-hant)
injectHant(BRAND_CONFIG);
injectHant(SLOGANS);
injectHant(BANNER_SLIDES);
injectHant(CATEGORIES);
injectHant(PRODUCTS);
injectHant(ABOUT_INFO);

