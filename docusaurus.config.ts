import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'YouTube-DorGen',
  tagline: 'Документация по проекту YouTube-DorGen',
  favicon: 'img/favicon.ico',

  url: 'https://meteorburn.github.io',
  baseUrl: '/YouTube-Dorgen-Docs/',

  organizationName: 'MeteorBurn', // Usually your GitHub org/user name.
  projectName: 'YouTube-Dorgen-Docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['ru'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/MeteorBurn/YouTube-Dorgen-Docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/MeteorBurn/YouTube-Dorgen-Docs/edit/main',
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
