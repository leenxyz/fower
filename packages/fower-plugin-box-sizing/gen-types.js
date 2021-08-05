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

const properties = ['Content', 'Border'].map((key) => {
  const name = 'box' + key
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          `Set box-sizing to ${kebab(key)}-box`,
          '```css',
          `{ box-sizing: ${kebab(key)}-box; }`,
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
              'https://fower.vercel.app/docs/box-sizing',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
            ],
          },
        ],
      },
    ],
  }
})

properties.unshift({
  name: 'boxSizing' + '?',
  type: 'ResponsiveValue<CSS.Property.BoxSizing>',
  docs: [
    {
      description: [
        'Set box-sizing to some value',
        '```css',
        `{ box-sizing: $value; }`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: [
            '\n',
            '```tsx',
            '<Box boxSizing="content-box"></Box>',
            '<Box boxSizing="border-box"></Box>',
            '```',
          ],
        },
        {
          tagName: 'see',
          text: [
            'https://fower.vercel.app/docs/box-sizing',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
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
