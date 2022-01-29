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
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
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
};
