export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; children: NavLink[] };

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Hero 区顶部小徽章文字（如 "WIKI GUIDE"），空串则不显示 */
  eyebrow?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;

  // 官方链接
  platformUrl?: string;
  discordUrl?: string;
  youtubeChannelUrl?: string;

  // 顶部导航（Header 用的平铺链接；不填则取 nav 第一组前 4 项）
  topNav?: NavLink[];

  // 侧边栏目录树（按实际内容增减，不做死链接）
  nav: NavGroup[];

  // 首页 YouTube 视频（Workflow 建站时填入：官方频道代表作 > 播放量最高热门视频）
  heroVideo?: {
    youtubeId: string;
    title?: string;
    description?: string;
  };

  // 首页「Trending Now」：精选文章（不填则整块隐藏）
  trending?: { label: string; href: string; description?: string }[];

  // 首页「What is <Game>?」介绍区（不填则整块隐藏）
  gameIntro?: {
    title?: string;
    paragraphs: string[];
    facts?: { label: string; value: string }[];
  };

  // 底部 CTA 大横幅（光晕容器，不填则整块隐藏）
  ctaBanner?: {
    title: string;
    description?: string;
    buttonLabel: string;
    buttonHref: string;
  };

  // 站点级 SEO 关键词
  keywords?: string[];

  // 广告位（骨架预制）：填入广告代码（HTML/JS）即生效；留空则完全不渲染不展示
  ads?: {
    /** 侧边栏底部广告位（菜单栏下方） */
    sidebar?: string;
    /** 页面底部 banner 广告位（页脚上方，每页都有） */
    footerBanner?: string;
  };

  // 可选：FAQ
  faq?: { question: string; answer: string }[];
};

export const siteConfig: SiteConfig = {
  name: "Fields of Mistria Wiki",
  shortName: "FoM Wiki",
  description:
    "A fan-made Fields of Mistria wiki: release date, platforms, price, relationships and gifting guides, playtime, system requirements and a full FAQ — everything confirmed.",
  heroTitle: "Fields of Mistria",
  heroSubtitle: "Release Date • Guides • Relationships • FAQ",
  eyebrow: "Cozy Farm Life Sim",
  primaryCtaLabel: "What is Fields of Mistria?",
  primaryCtaHref: "/intro/what-is-fields-of-mistria",

  platformUrl: "https://store.steampowered.com/app/2142790/Fields_of_Mistria/",
  keywords: ["fields of mistria", "fields of mistria wiki", "fields of mistria release date", "fields of mistria guide", "fields of mistria relationships"],
  discordUrl: "",
  youtubeChannelUrl: "https://www.youtube.com/channel/UCroUBxlJHHlNrU5l5Jmd3vA",

  topNav: [
    { label: "What is it?", href: "/intro/what-is-fields-of-mistria" },
    { label: "Release Date", href: "/release/release-date-and-platforms" },
    { label: "Relationships", href: "/guide/relationships-and-gifting" },
    { label: "FAQ", href: "/guide/faq-everything-we-know" },
  ],

  // ⚠️ 导航按实际内容增减，不做死链接（8 页全登记）
  nav: [
    {
      title: "About",
      children: [
        { label: "What is Fields of Mistria?", href: "/intro/what-is-fields-of-mistria" },
        { label: "Story & Setting", href: "/intro/story-and-setting" },
      ],
    },
    {
      title: "Release",
      children: [
        { label: "Release Date & Platforms", href: "/release/release-date-and-platforms" },
        { label: "Price & Editions", href: "/release/price-and-editions" },
      ],
    },
    {
      title: "Guides",
      children: [
        { label: "Relationships & Gifting", href: "/guide/relationships-and-gifting" },
        { label: "How Long to Beat", href: "/guide/how-long-to-beat" },
        { label: "System Requirements", href: "/guide/system-requirements" },
        { label: "FAQ: Everything We Know", href: "/guide/faq-everything-we-know" },
      ],
    },
  ],

  // ⚠️ Workflow 建站时必须填入该游戏的 YouTube 视频（官方频道最高播放 1.0 预告 38.5K）
  heroVideo: {
    youtubeId: "utHOieev6Pk",
    title: "Fields of Mistria 1.0 Official Trailer",
    description: "Watch the official 1.0 launch trailer from the Fields of Mistria channel.",
  },

  trending: [
    { label: "Release Date & Platforms", href: "/release/release-date-and-platforms", description: "1.0 launched August 5, 2026 — PC, Switch, PS5 and Xbox status explained." },
    { label: "Relationships & Gifting", href: "/guide/relationships-and-gifting", description: "Romanceable characters, favorite gifts and the 10-heart path." },
    { label: "FAQ: Everything We Know", href: "/guide/faq-everything-we-know", description: "Multiplayer, mods, updates, museum, fishing — quick answers." },
    { label: "How Long to Beat", href: "/guide/how-long-to-beat", description: "Story, completionist and busywork hours per playstyle." },
  ],

  gameIntro: {
    title: "What is Fields of Mistria?",
    paragraphs: [
      "Fields of Mistria is a cozy farm life simulation RPG by NPC Studio, fully released as version 1.0 on August 5, 2026 after two years of Early Access. You restore an old farmhouse in the seaside town of Mistria, mastering ten farming, crafting and combat skills while befriending a cast of 25 villagers.",
      "It blends classic Harvest Moon-style farm life — crops, animals, fishing, mining and seasonal festivals — with real-time combat, magic and a dragon-centric story, which is why fans call it the strongest Stardew Valley rival out there.",
    ],
    facts: [
      { label: "Developer", value: "NPC Studio" },
      { label: "1.0 Release", value: "August 5, 2026" },
      { label: "Price", value: "$13.99 USD" },
      { label: "Platforms", value: "PC (Steam) • Nintendo Switch" },
      { label: "Genre", value: "Farming sim / RPG" },
    ],
  },

  ctaBanner: {
    title: "Ready to start your life in Mistria?",
    description: "Read the relationships & gifting guide before you ship your first gift, or check the full FAQ for confirmed facts.",
    buttonLabel: "Browse the Guides",
    buttonHref: "/guide/relationships-and-gifting",
  },

  faq: [],
};
