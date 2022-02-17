// const FontAwesomeIcon = require('@fortawesome/react-fontawesome');
// require('@fortawesome/fontawesome-svg-core');
// <FontAwesomeIcon icon="fa-solid fa-bell" />

module.exports = {
  title: 'VividArmy WikiNotes',
  tagline: 'Wiki&Notes of vividarmy',
  url: 'https://vividarmy-wikinotes.vercel.app/',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'tamagoez', // Usually your GitHub org/user name.
  projectName: 'vividarmy-vividarmy', // Usually your repo name.
  onBrokenLinks: 'warn',
  themeConfig: {
    announcementBar: {
      id: 'Beta',
      content:
        '<a target="_blank" rel="noopener noreferrer" href="https://forms.gle/tbEG2UxjZFwvwzYF7"><b>現在絶賛編集中です。是非あなたのご意見をお聞かせください!</b>  [' + process.env.VERCEL_GIT_COMMIT_MESSAGE + ' - ' + process.env.VERCEL_GIT_COMMIT_SHA.substr( 0, 7 ) + ']</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    navbar: {
      title: 'VividArmy WikiNotes',
      hideOnScroll: true,
      logo: {
        alt: 'vividarmy-wikinotes Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'q-and-a/', label: 'Q&A', position: 'left'},
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
      copyright: `<a href="https://vividarmy-wikinotes.vercel.app/help/LICENSE">Copyright © ${new Date().getFullYear()} たまご(tamagoez), 抜け殻P, 白にゃんこ, もしゃ</a>`,
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
        gtag: {
          trackingID: 'G-H51WGDPNGY',
          anonymizeIP: false,
        },
        googleAnalytics: {
          trackingID: 'UA-220738076-1',
          anonymizeIP: false,
        },
        sitemap: {
          changefreq: 'hourly',
          priority: 0.5,
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
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'q-and-a',
        path: 'q-and-a',
        routeBasePath: 'q-and-a',
        editUrl: "https://github.com/tamagoez/vividarmy-wikinotes/edit/main",
        // editCurrentVersion: true,
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Q & A 一覧',
        postsPerPage: 20,
        blogTitle: 'Q&A',
      },
    ],
  ],
};
