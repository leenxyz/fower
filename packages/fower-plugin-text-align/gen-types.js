const { kebab } = require('@fower/utils')
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

const keys = ['Left', 'Center', 'Right', 'Justify']

const properties = keys.map((key) => {
  const name = 'text' + key
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          'Set text-align to ' + kebab(key),
          '```css',
          `{ text-align: ${kebab(key)}; }`,
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
              'https://fower.vercel.app/docs/text-alignment',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align',
            ],
          },
        ],
      },
    ],
  }
})

properties.unshift({
  name: 'textAlign' + '?',
  type: 'ResponsiveValue<CSS.Property.TextAlign>',
  docs: [
    {
      description: [
        'Set text-align to some value',
        '```css',
        `{ text-align: $value; }`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: [
            '\n',
            '```tsx',
            '<Box textAlign="center"></Box>',
            '<Box textAlign="right"></Box>',
            '```',
          ],
        },
        {
          tagName: 'see',
          text: [
            'https://fower.vercel.app/docs/text-alignment',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align',
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
