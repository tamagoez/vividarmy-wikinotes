module.exports = {
  title: 'VividArmy WikiNotes',
  tagline: 'Wiki&Notes of vividarmy',
  url: 'https://wikinotes-vividarmy.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tamagoez', // Usually your GitHub org/user name.
  projectName: 'vividarmy-vividarmy', // Usually your repo name.
  onBrokenLinks: 'warn',
  themeConfig: {
    announcementBar: {
      id: 'Beta',
      content:
        '現在開発中です({process.env.VERCEL_GIT_COMMIT_SHA} - ({process.env.VERCEL_GIT_COMMIT_MESSAGE}))<br \>是非ご意見をお聞かせください!<a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
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
        {to: 'system/', label: 'システム', position: 'left'},
        {to: 'server/', label: 'サーバー', position: 'right'},
        {to: 'blog/', label: '編集後記', position: 'right'},
        {to: 'help/', label: 'ヘルプ', position: 'right'},
        {
          href: 'https://github.com/tamagoez/vividarmy-wikinotes',
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
              label: 'NUL',
              to: 'about:blank',
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
            'https://github.com/tamagoez/vividarmy-wikinotes/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tamagoez/vividarmy-wikinotes/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-219257980-1',
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'union',
        path: 'union',
        routeBasePath: 'union',
        editUrl: "https://github.com/tamagoez/vividarmy-wikinotes/edit/main",
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
        editUrl: "https://github.com/tamagoez/vividarmy-wikinotes/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./personal/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'system',
        path: 'system',
        routeBasePath: 'system',
        editUrl: "https://github.com/tamagoez/vividarmy-wikinotes/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./system/sidebars.js'),
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
        editUrl: "https://github.com/tamagoez/vividarmy-wikinotes/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./help/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'server',
        path: 'server',
        routeBasePath: 'server',
        editUrl: "https://github.com/tamagoez/vividarmy-wikinotes/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./server/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};
