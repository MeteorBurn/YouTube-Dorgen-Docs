import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      label: 'О проекте',
      link: {
        type: 'doc',
        id: 'about/index',
      },
      items: [
        'about/contacts',
      ],
    },
    {
      type: 'category',
      label: 'Аккаунты',
      link: {
        type: 'doc',
        id: 'accounts/index',
      },
      items: [
        'accounts/add',
        'accounts/requirements',
      ],
    },
    {
      type: 'category',
      label: 'YouTube-Uploader',
      link: {
        type: 'doc',
        id: 'youtube-uploader/index',
      },
      items: [
        'youtube-uploader/errors',
        'youtube-uploader/changelog',
        'youtube-uploader/macroses',
        {
          type: 'category',
          label: 'Источники данных',
          link: {
            type: 'doc',
            id: 'youtube-uploader/sources/index',
          },
          items: [
            'youtube-uploader/sources/files',
            'youtube-uploader/sources/scheduler',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'YouTube-Manager',
      link: {
        type: 'doc',
        id: 'youtube-manager/index',
      },
      items: [
        'youtube-manager/changelog',
      ],
    },
    {
      type: 'category',
      label: 'YouTube-Parser',
      link: {
        type: 'doc',
        id: 'youtube-parser/index',
      },
      items: [
        'youtube-parser/guide',
        'youtube-parser/docs',
        'youtube-parser/proxy',
        'youtube-parser/changelog',
      ],
    },
    {
      type: 'category',
      label: 'YouTube-Poster',
      link: {
        type: 'doc',
        id: 'youtube-poster/index',
      },
      items: [
        'youtube-poster/changelog',
      ],
    },
    {
      type: 'category',
      label: 'YouTube-ReCaptcha',
      link: {
        type: 'doc',
        id: 'youtube-recaptcha/index',
      },
      items: [
        'youtube-recaptcha/install',
        'youtube-recaptcha/setup',
        'youtube-recaptcha/run',
        'youtube-recaptcha/optimization',
        'youtube-recaptcha/changelog',
        {
          type: 'category',
          label: 'Прокси',
          link: {
            type: 'doc',
            id: 'youtube-recaptcha/proxy/index',
          },
          items: [],
        },
      ],
    },
    {
      type: 'category',
      label: 'Установка',
      link: {
        type: 'doc',
        id: 'install/index',
      },
      items: [
        'install/hwid',
        'install/start',
        {
          type: 'category',
          label: 'Установка шаблонов',
          link: {
            type: 'doc',
            id: 'install/projects/index',
          },
          items: [],
        },
      ],
    },
    {
      type: 'category',
      label: 'Расширения',
      link: {
        type: 'doc',
        id: 'extensions/index',
      },
      items: [
        'extensions/2fa',
        'extensions/multi-channels',
        {
          type: 'category',
          label: 'Импорт cookies YouTube',
          link: {
            type: 'doc',
            id: 'extensions/import-youtube-cookies/index',
          },
          items: [],
        },
      ],
    },
  ],
};

export default sidebars;
