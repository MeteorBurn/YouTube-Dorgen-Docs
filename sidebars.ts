import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '☑️ Меню',
      link: {
        type: 'doc',
        id: 'navigation/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: '🛠️ Установка',
      link: {
        type: 'doc',
        id: 'install/index',
      },
      items: [
        {
          type: 'category',
          label: '1️⃣ Установка шаблонов',
          link: {
            type: 'doc',
            id: 'install/projects/index',
          },
          items: [
            'install/projects/zennoposter',
            'install/projects/zennobox',
          ],
        },
        'install/start',
        'install/hwid',
      ],
    },
    {
      type: 'category',
      label: '🅰️ Аккаунты',
      link: {
        type: 'doc',
        id: 'accounts/index',
      },
      items: [
        'accounts/requirements',
        'accounts/add',
      ],
    },
    {
      type: 'category',
      label: '❤️ YOUTUBE-UPLOADER',
      link: {
        type: 'doc',
        id: 'youtube-uploader/index',
      },
      items: [
        {
          type: 'category',
          label: '🎦 Загрузка видео',
          link: {
            type: 'doc',
            id: 'youtube-uploader/sources/index',
          },
          items: [
            'youtube-uploader/sources/files',
            'youtube-uploader/sources/scheduler',
          ],
        },
        'youtube-uploader/macroses',
        'youtube-uploader/errors',
        'youtube-uploader/changelog',
      ],
    },
    {
      type: 'category',
      label: '💛 YOUTUBE-PARSER',
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
      label: '🩵 YOUTUBE-RECAPTCHA',
      link: {
        type: 'doc',
        id: 'youtube-recaptcha/index',
      },
      items: [
        'youtube-recaptcha/install',
        'youtube-recaptcha/setup',
        'youtube-recaptcha/run',
        {
          type: 'category',
          label: '🌐 Прокси',
          link: {
            type: 'doc',
            id: 'youtube-recaptcha/proxy/index',
          },
          items: [],
        },
        'youtube-recaptcha/optimization',
        'youtube-recaptcha/changelog',
      ],
    },
    {
      type: 'category',
      label: '💚 YOUTUBE-MANAGER',
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
      label: '💙 YOUTUBE-POSTER',
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
      label: '⚡ Расширения',
      link: {
        type: 'doc',
        id: 'extensions/index',
      },
      items: [
        'extensions/multi-channels',
        'extensions/2fa',
        {
          type: 'category',
          label: '🍪 Импорт cookies YouTube',
          link: {
            type: 'doc',
            id: 'extensions/import-youtube-cookies/index',
          },
          items: [],
        },
      ],
    },
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
  ],
};

export default sidebars;
