import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "算想未来",
  favicon: "img/favicon.ico",

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "sxwl",
  projectName: "nascentcore.ai",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
    localeConfigs: {
      zh: {
        label: "简体中文",
        htmlLang: "zh",
      },
      en: {
        label: "English",
        htmlLang: "en",
      },
    },
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/NascentCore/docs.sxwl.ai/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/NascentCore/blog.sxwl.ai/tree/main/",
          blogSidebarCount: 10,
          blogSidebarTitle: "最近更新",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // image: "img/docusaurus-social-card.jpg",
    announcementBar: {
      id: "top_banner",
      content: `<div id="top-banner"><a target="_blank" href="https://github.com/NascentCore/3k/tree/main?tab=readme-ov-file#2024-%E5%B9%B4"></a></div>`,
      isCloseable: false,
    },
    navbar: {
      title: "title",
      logo: {
        alt: "nascentcore.ai",
        src: "img/favicon.ico",
      },
      items: [
        { to: "https://llm.sxwl.ai", label: "Cloud", position: "left" },
        { to: "/docs/sx3k/", label: "OnPrem", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "document",
          label: "Docs",
        },
        { to: "/pricing", label: "Pricing", position: "left" },
        { to: "tel:15910236560", label: "15910236560", position: "right" },
        { to: "mailto:help@sxwl.ai", label: "help@sxwl.ai", position: "right" },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/NascentCore/sxwl.ai",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: "copyright",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
