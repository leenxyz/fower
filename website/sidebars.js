/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['about', 'about-atomic-props', 'comparison', 'differences-with-tailwindcss'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'use-with-react',
        'use-with-rn',
        'use-with-taro',
        'use-with-remax',
        // 'use-with-vanilla',
      ],
    },
    {
      type: 'category',
      label: 'Basics',
      items: [
        'basic',
        'css-prop',
        'pseudo',
        'responsive',
        'keyframes',
        'global-style',
        'dynamic-style',
        'programmable',
        'styled',
      ],
    },

    {
      type: 'category',
      label: 'Cool Features',
      items: [
        'layout-toolkit',
        'predictable-style',
        'color-helper',
        'composition-postfix',
        'auto-dark-mode',
      ],
    },

    {
      type: 'category',
      label: 'Advanced',
      items: [
        'configuration',
        'theme-mode',
        'add-atom',
        'compose-atom',
        // 'plugin',
        'ssr',
        'typescript',
        //  'intellisense'
      ],
    },

    {
      type: 'category',
      label: 'Design System',
      items: [
        'theme',
        'design-system-spacings',
        'design-system-colors',
        'design-system-radii',
        'design-system-shadows',
        'design-system-breakpoints',
        'design-system-font-sizes',
        'design-system-font-weights',
        // 'design-system-letter-spacings',
        'design-system-line-heights',
      ],
    },

    {
      type: 'category',
      label: 'FAQs',
      items: [
        'faq-1',
        'faq-2',
        // 'faq-3'
      ],
    },
  ],

  api: [
    'packages/react',
    'packages/core',
    'packages/styled',
    // 'packages/vue',
    'packages/react-native',
    'packages/taro',
    'packages/types',
    // 'packages/babel-preset-fower',
    // 'packages/vue-template-compiler',
    // 'packages/preset-web',
    // 'packages/preset-web-rem',
    // 'packages/preset-react-native',
    // 'packages/preset-taro',
    // 'packages/color-helper',
    // 'packages/colors',
  ],

  atoms: [
    {
      type: 'category',
      label: 'Layout Toolkit',
      items: [
        'to-center',
        'to-center-x',
        'to-center-y',
        'to-left',
        'to-right',
        'to-top',
        'to-bottom',
        'to-between',
        'to-evenly',
        'to-around',
      ],
    },

    {
      type: 'category',
      label: 'Spacing',
      items: ['padding', 'margin', 'space-between'],
    },
    {
      type: 'category',
      label: 'Sizing',
      items: [
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'square',
        'circle',
      ],
    },
    {
      type: 'category',
      label: 'Typography',
      items: [
        'font-size',
        'font-style',
        'font-weight',
        'text-color',
        'line-height',
        'list-type',
        'placeholder-color',
        'text-alignment',
        'text-decoration',
        'text-transform',
        'text-overflow',
        // 'ellipsis',
      ],
    },
    {
      type: 'category',
      label: 'Background',
      items: [
        'background-color',
        'background-clip',
        'gradient',
        // 'background-repeat',
        // 'background-image',
      ],
    },

    {
      type: 'category',
      label: 'Border',
      items: ['rounded', 'border-width', 'border-color', 'border-style', 'ring'],
    },
    {
      type: 'category',
      label: 'Flexbox',
      items: [
        'flex-direction',
        'flex-wrap',
        'flex',
        'flex-grow',
        'flex-shrink',
        // 'flex-basis',
        // Order
      ],
    },
    {
      type: 'category',
      label: 'Grid',
      items: ['grid-template-columns', 'gap'],
    },

    {
      type: 'category',
      label: 'Box Alignment',
      items: ['justify-content', 'align-items', 'align-content', 'align-self'],
    },
    {
      type: 'category',
      label: 'Layout',
      items: [
        'box-sizing',
        'display',
        'position',
        'top-right-bottom-left',
        'z-index',
        'visibility',
        'overflow',
        // 'debug'
      ],
    },
    {
      type: 'category',
      label: 'Effect',
      items: ['shadow', 'opacity'],
    },
    {
      type: 'category',
      label: 'Transition and Animation',
      items: [
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay',
        'animation',
      ],
    },
    {
      type: 'category',
      label: 'Interactivity',
      items: ['outline', 'cursor', 'appearance', 'user-select'],
    },
    {
      type: 'category',
      label: 'Svg',
      items: ['fill', 'stroke', 'stroke-width'],
    },
  ],

};

module.exports = sidebars;
