import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/YouTube-Dorgen-Docs/search',
    component: ComponentCreator('/YouTube-Dorgen-Docs/search', 'c1e'),
    exact: true
  },
  {
    path: '/YouTube-Dorgen-Docs/docs',
    component: ComponentCreator('/YouTube-Dorgen-Docs/docs', 'e9e'),
    routes: [
      {
        path: '/YouTube-Dorgen-Docs/docs',
        component: ComponentCreator('/YouTube-Dorgen-Docs/docs', '8a7'),
        routes: [
          {
            path: '/YouTube-Dorgen-Docs/docs',
            component: ComponentCreator('/YouTube-Dorgen-Docs/docs', '810'),
            routes: [
              {
                path: '/YouTube-Dorgen-Docs/docs/about/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/about/', '54e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/about/contacts',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/about/contacts', '0cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/accounts/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/accounts/', '450'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/accounts/add',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/accounts/add', 'aae'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/accounts/requirements',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/accounts/requirements', 'bd3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/extensions/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/extensions/', '102'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/extensions/2fa',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/extensions/2fa', '2df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/extensions/import-youtube-cookies/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/extensions/import-youtube-cookies/', 'dd4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/extensions/multi-channels',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/extensions/multi-channels', '612'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/install/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/install/', '6a0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/install/hwid',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/install/hwid', '424'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/install/projects/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/install/projects/', 'd9c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/install/projects/zennobox',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/install/projects/zennobox', 'e12'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/install/projects/zennoposter',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/install/projects/zennoposter', '8be'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/install/start',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/install/start', '7ac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/intro',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/intro', '7f6'),
                exact: true
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/navigation/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/navigation/', 'f52'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-manager/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-manager/', 'f81'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-manager/changelog',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-manager/changelog', '3c1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-parser/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-parser/', 'a0c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-parser/changelog',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-parser/changelog', 'cf8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-parser/docs',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-parser/docs', 'a96'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-parser/guide',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-parser/guide', '1d3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-parser/proxy',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-parser/proxy', '39d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-poster/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-poster/', 'c20'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-poster/changelog',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-poster/changelog', '63d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-recaptcha/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-recaptcha/', '3bf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-recaptcha/changelog',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-recaptcha/changelog', '00a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-recaptcha/install',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-recaptcha/install', '4e3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-recaptcha/optimization',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-recaptcha/optimization', 'b52'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-recaptcha/proxy/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-recaptcha/proxy/', 'b7d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-recaptcha/run',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-recaptcha/run', '1f7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-recaptcha/setup',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-recaptcha/setup', 'f0b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-uploader/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-uploader/', '42e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-uploader/changelog',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-uploader/changelog', '789'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-uploader/errors',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-uploader/errors', '2e0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-uploader/macroses',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-uploader/macroses', '5c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-uploader/sources/',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-uploader/sources/', '262'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-uploader/sources/files',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-uploader/sources/files', '320'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/YouTube-Dorgen-Docs/docs/youtube-uploader/sources/scheduler',
                component: ComponentCreator('/YouTube-Dorgen-Docs/docs/youtube-uploader/sources/scheduler', 'e4f'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
