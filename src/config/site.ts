export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; children: NavLink[] };

/** 首页轮播页（固定 3 篇；少于 3 篇时轮播按实际条数渲染） */
export type CarouselSlide = {
  /** 轮播配图（放 public/images/，宽高比按 790:292 裁切） */
  image: string;
  title: string;
  href: string;
};

/** 右侧游戏信息卡的字段行（原站字段：制作公司/发行公司/发售日期/游戏平台/游戏类型） */
export type GameInfoField = { label: string; value: string };

/** 左视频列的 YouTube 条目（官方频道代表作优先；2–4 个） */
export type VideoItem = { youtubeId: string; title: string };

/**
 * 主题色 token 名（供组件以 var() 引用）。
 * ⚠️ 色值唯一来源 = src/app/globals.css 的 @theme 块，本文件不重复定义色值。
 * 每站正式配色由 g-art-design 从游戏官方素材提取后覆盖 globals.css 的三个主槽位。
 */
export const themeTokens = {
  primary: "--color-primary",
  accent: "--color-accent",
  auxiliary: "--color-auxiliary",
} as const;

export type SiteConfig = {
  /** 游戏名（全站唯一来源） */
  name: string;
  shortName: string;

  /** SEO 三件套 */
  seo: {
    title: string;
    description: string;
    keywords: string;
  };

  /** Hero 大图区（无顶栏，Hero 直顶） */
  hero: {
    /** keyart 大图路径；同时用作内容页右栏 banner */
    image: string;
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };

  /** 首页横向轮播：3 篇，5s 自动换页 */
  carousel: {
    autoPlayMs: number;
    slides: CarouselSlide[];
  };

  /** 右侧游戏信息卡 */
  gameInfo: {
    title: string;
    /** 封面图路径（125×166 比例） */
    cover: string;
    fields: GameInfoField[];
    /** Steam 入口按钮（文案统一 View on Steam ↗） */
    ctaLabel: string;
    ctaHref: string;
  };

  /** 左视频列 YouTube id 列表（2–4 个，数量由右攻略区高度反推） */
  videos: VideoItem[];

  /** 官方链接（页脚展示；建议至少 1 条，其余留空则不渲染） */
  officialLinks: NavLink[];

  /** 全站攻略导航分组（首页攻略区 / 内容页右栏导航树共用；每站按真实内容增减） */
  nav: NavGroup[];

  /** 栏目简介（栏目页 L2 顶部一段话，key=section 目录名；缺省回退到「N guides…」） */
  sectionIntros?: Record<string, string>;

  /** 栏目兑底图池：内容页缺图时按栏目取图，避免与右栏 keyart 同图同屏（扬哥 2026-09-16） */
  sectionFallbackImages?: Record<string, string>;

  /** 页脚 */
  footer: {
    copyright: string;
    contactLabel: string;
    /** 联系方式（邮箱/表单链接文本）；不填则页脚不显示联系位 */
    contact?: string;
  };

  /** 广告位（骨架预制）：填入广告代码（HTML/JS）即生效；留空则完全不渲染不占位 */
  ads?: {
    /** 首页攻略区顶部 banner（内容区宽度） */
    contentBanner?: string;
    /** 页面底部 banner 广告位（页脚上方，每页都有） */
    footerBanner?: string;
    /** 正文中横幅广告位（728×90）：位置在第一屏之后，长文自动多插一个位（同一份代码可多处复用） */
    articleInline?: string;
    /** 正文第二坑位代码（扬哥 2026-09-16：长文双广告位时用不同代码/创意，避免同屏重复）；缺省回退 articleInline */
    articleInline2?: string;
    /** 左右浮动竖幅 160×600 旧写法：只填此字段=左右共用同一单元（同屏创意相同） */
    sideRail?: string;
    /** 左侧竖幅广告单元（独立 key=独立竞价/创意/统计；优先于 sideRail） */
    sideRailLeft?: string;
    /** 右侧竖幅广告单元（独立 key=独立竞价/创意/统计；优先于 sideRail） */
    sideRailRight?: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Fields of Mistria",
  shortName: "FoM",

  // ⚠️ 每站必改：SEO 三件套（title ≤60 字符 / description ≤160 字符）
  seo: {
    title: "Fields of Mistria Wiki — Guides, Tips & Game Info",
    description:
      "Fan-made Fields of Mistria wiki: release info, price, system requirements, languages, controller support, and crash fixes for the cozy farm sim RPG.",
    keywords: "Fields of Mistria, Fields of Mistria wiki, Fields of Mistria guide, farm sim RPG",
  },

  // ⚠️ 每站必改：keyart 大图（放 public/images/）
  hero: {
    image: "/images/hero-keyart.webp",
    eyebrow: "Wiki & Guide",
    title: "Fields of Mistria",
    subtitle: "Farm Sim RPG · Guides · Game Info",
  },

  // ⚠️ 每站必改：轮播 3 篇
  carousel: {
    autoPlayMs: 5000,
    slides: [
      {
        image: "/images/slide-release-date.webp",
        title: "Fields of Mistria 1.0 Is Out — Launch Timeline",
        href: "/release/release-date",
      },
      {
        image: "/images/slide-what-type-of-game.webp",
        title: "What Type of Game Is Fields of Mistria?",
        href: "/intro/what-type-of-game",
      },
      {
        image: "/images/slide-system-requirements.webp",
        title: "System Requirements: Can Your PC Run It?",
        href: "/guide/system-requirements",
      },
    ],
  },

  // ⚠️ 每站必改：信息卡字段（保持 5 行结构）
  gameInfo: {
    title: "Fields of Mistria",
    cover: "/images/cover.webp",
    fields: [
      { label: "Developer", value: "NPC Studio" },
      { label: "Publisher", value: "NPC Studio" },
      { label: "Release Date", value: "August 5, 2026 (1.0)" },
      { label: "Platforms", value: "PC · Windows · Linux · Steam Deck" },
      { label: "Genre", value: "Farm Life Sim / RPG" },
    ],
    ctaLabel: "View on Steam ↗",
    ctaHref: "https://store.steampowered.com/app/2142790/",
  },

  // ⚠️ 每站必改：YouTube 视频 id（2–4 个）
  videos: [
    { youtubeId: "utHOieev6Pk", title: "1.0 Official Trailer" },
    { youtubeId: "SlKzf6oKQ4g", title: "1.0 Announcement Trailer" },
    { youtubeId: "2jLRehEg1dM", title: "Major Update 1 Trailer" },
  ],

  officialLinks: [
    { label: "Official Site", href: "https://fieldsofmistria.com" },
    { label: "Steam", href: "https://store.steampowered.com/app/2142790/" },
    { label: "X (Twitter)", href: "https://x.com/FieldsofMistria" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCroUBxlJHHlNrU5l5Jmd3vA" },
  ],

  // ⚠️ 导航按实际内容增减，不做死链接（有内容才留按钮）
  nav: [
    {
      title: "Game Info",
      children: [
        { label: "What Type of Game Is It?", href: "/intro/what-type-of-game" },
        { label: "Steam Name & Store Page", href: "/intro/steam-name" },
      ],
    },
    {
      title: "Release & Price",
      children: [
        { label: "Release Date & 1.0 Timeline", href: "/release/release-date" },
        { label: "Platforms & Steam Deck", href: "/release/platforms" },
        { label: "Price & Editions", href: "/release/price" },
      ],
    },
    {
      title: "Guides & Help",
      children: [
        { label: "System Requirements", href: "/guide/system-requirements" },
        { label: "Supported Languages", href: "/guide/supported-languages" },
        { label: "Controller Support", href: "/guide/controller-support" },
        { label: "Crash Fixes", href: "/guide/crash-fixes" },
      ],
    },
  ],

  sectionIntros: {
    intro: "The essentials: what Fields of Mistria is and how to find it on Steam.",
    release: "Launch dates, platforms, and everything about the $13.99 price.",
    guide: "Practical help: specs, languages, controllers, and crash fixes.",
  },

  footer: {
    copyright:
      "Fan-made wiki. Not affiliated with the game developer or publisher.",
    contactLabel: "Contact",
  },

  ads: {
    sideRailLeft: `<script>
  atOptions = {
    'key' : '24399ba86615de3379d0961766c435a0',
    'format' : 'iframe',
    'height' : 300,
    'width' : 160,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/24399ba86615de3379d0961766c435a0/invoke.js"></script>`,
    sideRailRight: `<script>
  atOptions = {
    'key' : 'c95619e36630d1a7518989dae45c5d54',
    'format' : 'iframe',
    'height' : 600,
    'width' : 160,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/c95619e36630d1a7518989dae45c5d54/invoke.js"></script>`,
    footerBanner: `<script>
  atOptions = {
    'key' : '41b5ba7282d0c836afa81485d56b6a49',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/41b5ba7282d0c836afa81485d56b6a49/invoke.js"></script>`,
    articleInline: `<script async="async" data-cfasync="false" src="https://pl31264211.profitableratecpmnetwork.com/b78e9d2c50036624202ddada3421c894/invoke.js"></script>
<div id="container-b78e9d2c50036624202ddada3421c894"></div>`,
  },
};
