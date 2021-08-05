const { presetWeb } = require('@fower/preset-web')
const { upFirst } = require('@fower/utils')
const { SemicolonPreference } = require('typescript')
const { join } = require('path')
const { Project } = require('ts-morph')

/** init somethings */
const project = new Project()
const cwd = process.cwd()
const outPath = join(cwd, 'types', 'index.d.ts')
const sourceFile = project.createSourceFile(outPath, undefined, {
  overwrite: true,
})

/** add something to sourceFile */
sourceFile.addImportDeclarations([
  {
    namedImports: ['FowerPlugin', 'ResponsiveValue', 'ResponsiveBoolean'],
    moduleSpecifier: '@fower/core',
  },
])
// sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')

const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const transitionMaps = {
  none: 'none',
  all: 'all',
  common:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  colors: 'background-color, border-color, color, fill, stroke',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',
}

const transitionProps = Object.entries(transitionMaps).map(([key, value]) => {
  const name = `transition${upFirst(key)}`
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          `set transition-property to ${key}`,
          '```css',
          `{ transition-property: ${value}; }`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', `<Box ${name}></Box>`, '```'],
          },
          {
            tagName: 'see',
            text: [
              'https://fower.vercel.app/docs/transition-property',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property',
            ],
          },
        ],
      },
    ],
  }
})

const easeMaps = {
  easeLinear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

const easeProps = Object.entries(easeMaps).map(([key, value]) => {
  return {
    name: key + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          `set transition-timing-function to ${key}`,
          '```css',
          `{ transition-timing-function: ${value}; }`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', `<Box ${key}></Box>`, '```'],
          },
          {
            tagName: 'see',
            text: [
              'https://fower.vercel.app/docs/transition-timing-function',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function',
            ],
          },
        ],
      },
    ],
  }
})

const valueProps = ['duration', 'delay'].map((key) => ({
  name: `${key}?`,
  type: 'ResponsiveValue<number>',
  docs: [
    {
      description: [
        `set transition-${key} to some value`,
        '```css',
        `{ transition-${key}: 400ms;}`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box ${key}-{200}></Box>`, `<Box ${key}={400}></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [
            `https://fower.vercel.app/docs/transition-${key}`,
            `https://developer.mozilla.org/en-US/docs/Web/CSS/transition-${key}`,
          ],
        },
      ],
    },
  ],
}))

transitionProps.unshift({
  name: 'transition?',
  type: 'ResponsiveValue<string>',
  docs: [
    {
      description: [`set transition to some value`, '```css', `{ transition: $value;}`, '```'].join(
        '\n',
      ),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box transition="all 1s ease-out;"></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [
            'https://fower.vercel.app/docs/transition-property',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/transition',
          ],
        },
      ],
    },
  ],
})

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: [...valueProps, ...transitionProps, ...easeProps],
})

/** format types code */
sourceFile.formatText({
  indentSize: 2,
  semicolons: SemicolonPreference.Remove,
})

/** save to file */
sourceFile.save().then(function () {
  console.log('typing file created...')
})
