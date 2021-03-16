/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require('path')

module.exports = {
  title: 'Styli',
  tagline: 'An Atomic CSS in JS library for rapid UI development',
  url: 'https://styli.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'forsigner', // Usually your GitHub org/user name.
  projectName: 'styli', // Usually your repo name.
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
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },

    sidebarCollapsible: false,
    disableSwitch: true,

    liveCodeBlock: {
      playgroundPosition: 'top'
    },

    gtag: {
      trackingID: 'G-XZJ9WJDM06',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },

    navbar: {
      title: 'Styli',
      logo: {
        alt: 'Logo',
        src: '/img/logo.png',
      },
      items: [
        {
          to: 'docs/installation',
          // activeBasePath: 'docs',
          activeBasePath: 'docs/introduction',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'docs/use-with-react',
          activeBasePath: 'docs/use-with-react',
          label: 'React',
          position: 'left',
        },
        {
          to: 'docs/use-with-vue',
          activeBasePath: 'docs/use-with-vue',
          label: 'Vue',
          position: 'left',
        },
        {
          to: 'docs/use-with-rn',
          activeBasePath: 'docs/use-with-rn',
          label: 'React native',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/forsigner/styli',
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
              label: 'Introduction',
              to: 'docs/introduction',
            },
            {
              label: 'Getting started',
              to: 'docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/styli',
            },
            {
              label: 'Github',
              href: 'https://github.com/forsigner/styli',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/forsigner/styli',
            // },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} Styli`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {

          path: 'docs',
          include: ['**/*.md', '**/*.mdx'], // Extensions to include.

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/forsigner/styli/edit/master/website/',
          remarkPlugins: [require('./src/plugins/remark-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/forsigner/styli/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
  ],
};
