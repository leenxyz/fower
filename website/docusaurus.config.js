/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require('path')

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
      apiKey: '68b76fc3428450c3eca0f5632239c6fc',
      indexName: 'fower',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'YO2DWOAMI1',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },

    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
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
          to: 'docs/about',
          // activeBasePath: 'docs',
          activeBasePath: 'docs/introduction',
          label: 'Docs',
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
          to: 'docs/use-with-svelte',
          activeBasePath: 'docs/use-with-svelte',
          label: 'Svelte',
          position: 'left',
        },
        // {
        //   to: 'docs/use-with-rn',
        //   activeBasePath: 'docs/use-with-rn',
        //   label: 'React native',
        //   position: 'left',
        // },
        // {
        //   to: 'docs/use-with-taro',
        //   activeBasePath: 'docs/use-with-taro',
        //   label: 'Taro',
        //   position: 'left',
        // },

        {
          to: 'blog',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/forsigner/fower',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
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
  plugins: [],
}
