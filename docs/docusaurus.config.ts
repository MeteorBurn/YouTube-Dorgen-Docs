import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'YouTube-DorGen',
  tagline: 'Документация по проекту YouTube-DorGen',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://meteorburn.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/YouTube-Dorgen-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MeteorBurn', // Usually your GitHub org/user name.
  projectName: 'YouTube-Dorgen-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    [
      '@orama/plugin-docusaurus-v3',
      {
        language: ['ru'],
        sitemapPath: 'sitemap.xml',
      }
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'YouTube-DorGen',
      logo: {
        alt: 'YouTube-DorGen Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://github.com/MeteorBurn/YouTube-Dorgen-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'О проекте',
              to: '/docs/about',
            },
            {
              label: 'YouTube-Uploader',
              to: '/docs/youtube-uploader',
            },
            {
              label: 'YouTube-Manager',
              to: '/docs/youtube-manager',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Telegram канал',
              href: 'https://t.me/youtube_dorgen',
            },
            {
              label: 'Telegram чат',
              href: 'https://t.me/youtube_dorgen_chat',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/MeteorburnRu',
            },
          ],
        },
        {
          title: 'Ссылки',
          items: [
            {
              label: 'Форум ZennoLab',
              href: 'https://zennolab.com/discussion/members/meteorburn.53235/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MeteorBurn/YouTube-Dorgen-Docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meteorburn. Документация создана с помощью Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
