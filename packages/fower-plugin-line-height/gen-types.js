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
sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')

const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const entries = Object.entries(presetWeb?.theme?.lineHeights || {})

const properties = entries.map(([key, value]) => {
  return {
    name: 'leading' + upFirst(key) + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          `set line-height to ${key}`,
          '```css',
          `{ line-height: ${value};}`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', `<Box leading${upFirst(key)}></Box>`, '```'],
          },
          {
            tagName: 'see',
            text: [
              'https://fower.vercel.app/docs/line-height',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height',
            ],
          },
        ],
      },
    ],
  }
})

properties.unshift({
  name: 'leading?',
  type: 'ResponsiveValue<CSS.Property.LineHeight>',
  docs: [
    {
      description: [
        `set line-height to some value`,
        '```css',
        `{ line-height: $value;}`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box leading={1.5}></Box>`, `<Box leading={2}></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [
            'https://fower.vercel.app/docs/line-height',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height',
          ],
        },
      ],
    },
  ],
})

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties,
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
