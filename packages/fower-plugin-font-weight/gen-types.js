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

const entries = Object.entries(presetWeb?.theme?.fontWeights || {})

const properties = entries.map(([key, value]) => {
  return {
    name: 'font' + upFirst(key) + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          `set font-weight to ${key}`,
          '```css',
          `{ font-weight: ${value};}`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', `<Box font${upFirst(key)}></Box>`, '```'],
          },
          {
            tagName: 'see',
            text: [
              'https://fower.vercel.app/docs/font-weight',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight',
            ],
          },
        ],
      },
    ],
  }
})

properties.unshift({
  name: 'fontWeight?',
  type: 'ResponsiveValue<CSS.Property.FontWeight>',
  docs: [
    {
      description: [
        `set font-weight to some value`,
        '```css',
        `{ font-weight: $value;}`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: [
            '\n',
            '```tsx',
            `<Box fontWeight="bold"></Box>`,
            `<Box fontWeight={600}></Box>`,
            '```',
          ],
        },
        {
          tagName: 'see',
          text: [
            'https://fower.vercel.app/docs/font-weight',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight',
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
