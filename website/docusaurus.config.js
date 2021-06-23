const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fower',
  tagline: 'An Atomic CSS in JS library for rapid UI development',
  url: 'https://fower.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'forsigner', // Usually your GitHub org/user name.
  projectName: 'fower', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    prism: {
      theme: require('./theme'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },

    sidebarCollapsible: false,
    disableSwitch: false,

    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    algolia: {
      apiKey: '5c75ee25a3984e48c52bd2a0e36a7988',
      indexName: 'fower',
      contextualSearch: true,
    },

    gtag: {
      trackingID: 'G-FSWFZVP0LN',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },

    navbar: {
      title: 'Fower',
      logo: {
        alt: 'Logo',
        src: '/img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'doc',
          docId: 'fower-layout-introduction',
          position: 'left',
          label: 'Atoms',
        },
        {
          type: 'doc',
          docId: 'packages/core',
          position: 'left',
          label: 'API',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/forsigner/fower',
          // label: 'GitHub',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Tutorial',
              to: '/docs/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/forsigner/fower/edit/master/website/',
          remarkPlugins: [require('./src/plugins/remark-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/forsigner/fower/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
