module.exports = {
  title: 'VividArmy WikiNotes',
  tagline: 'Wiki&Notes of vividarmy',
  url: 'https://wikinotes-vividarmy.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tamagoez', // Usually your GitHub org/user name.
  projectName: 'wikinotes-vividarmy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VividArmy WikiNotes',
      logo: {
        alt: 'vividarmy-wikinotes Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'personal/',
          activeBasePath: 'personal',
          label: '個人',
          position: 'left',
        },
        {to: 'union/', label: '連盟', position: 'left'},
        {to: 'event/', label: 'イベント', position: 'left'},
        {to: 'blog/', label: '編集後記', position: 'right'},
        {to: 'help/', label: 'ヘルプ', position: 'right'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '元祖',
              href: 'https://jcap-board.vercel.app',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'NUL',
              href: 'about:blank',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tamagoez(たまご), 抜け殻P`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tamagoez/wikinotes-vividarmy/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tamagoez/wikinotes-vividarmy/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'union',
        path: 'union',
        routeBasePath: 'union',
        editUrl: "https://github.com/tamagoez/wikinotes-vividarmy/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./union/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'personal',
        path: 'personal',
        routeBasePath: 'personal',
        editUrl: "https://github.com/tamagoez/wikinotes-vividarmy/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./personal/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'event',
        path: 'event',
        routeBasePath: 'event',
        editUrl: "https://github.com/tamagoez/wikinotes-vividarmy/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./event/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'help',
        path: 'help',
        routeBasePath: 'help',
        editUrl: "https://github.com/tamagoez/wikinotes-vividarmy/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./help/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};
