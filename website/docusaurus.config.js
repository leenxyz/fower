// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fower',
  tagline: 'An Atomic CSS in JS library for rapid UI development',
  url: 'https://fower.vercel.app',
  favicon: 'img/favicon.ico',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'forsigner', // Usually your GitHub org/user name.
  projectName: 'fower', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'zh-cn'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //       path: 'en',
  //     },
  //     'zh-cn': {
  //       label: '简体中文',
  //       path: 'zh-cn',
  //     },

  //   },
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        gtag: {
          trackingID: 'G-FSWFZVP0LN',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/forsigner/fower/edit/master/website/',
          remarkPlugins: [require('./src/plugins/remark-npm2yarn')],
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),

    ],
  ],

  plugins: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      algolia: {
        appId: 'UAWCOXV5CQ',
        apiKey: 'd6c4971452672644ff3f312d97db1171',
        // apiKey: '5c75ee25a3984e48c52bd2a0e36a7988',
        indexName: 'fower',
        contextualSearch: true,
      },

      liveCodeBlock: {
        playgroundPosition: 'top',
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
            docId: 'to-center',
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
      // footer: {
      // },
      prism: {
        // theme: lightCodeTheme,
        theme: require('./theme'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
