# 拾光时光 (TIMURA)

拾光时光官方品牌展示网站，主营温馨家居、惬意户外、治愈解压玩具及创意好物。融合温润设计与实用美学，支持简体中文、繁体中文、英文三语切换。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + Vite 6 |
| 样式 | Tailwind CSS 4 |
| 动画 | Motion (Framer Motion) |
| 国际化 | react-i18next |
| 图标 | Lucide React |
| 后端 | Express |

## 项目结构

```
src/
├── assets/images/       # 图片资源
├── components/          # React 组件
│   ├── Navbar.jsx       # 导航栏
│   ├── Hero.jsx         # 首页 Hero 区域
│   ├── ProductCard.jsx  # 产品卡片
│   ├── ProductDetails.jsx # 产品详情弹窗
│   ├── AboutSection.jsx # 关于我们
│   ├── Footer.jsx       # 页脚
│   └── PrivacyPolicy.jsx # 隐私政策
├── data/
│   └── mockData.js      # 品牌配置、产品数据
├── locales/
│   ├── zh.js            # 简体中文
│   ├── zh-hant.js       # 繁体中文
│   └── en.js            # 英文
├── utils/
│   ├── i18n.js          # i18n 初始化
│   └── lang.js          # 语言工具函数
├── App.jsx              # 主应用组件
├── main.jsx             # 入口文件
└── index.css            # 全局样式
```

## 本地运行

**前提条件：** Node.js

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

开发服务器默认运行在 `http://localhost:3000`。

## 构建部署

```bash
npm run build   # 构建生产版本
npm run preview # 预览构建结果
```

## 多语言

支持三种语言，通过 IP 自动检测或手动切换：

- **简体中文** (`zh`) — 中国大陆
- **繁体中文** (`zh-hant`) — 台湾/香港/澳门
- **English** (`en`) — 其他地区（默认）

语言偏好保存在 `localStorage` 中，下次访问自动恢复。