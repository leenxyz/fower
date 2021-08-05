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

const entries = Object.entries(presetWeb?.theme?.fontSizes || {})

const properties = entries.map(([key, value]) => {
  const name = `text${key === 'base' ? 'Base' : key.toUpperCase()}`
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          `set font-size to ${key}, default is ${value}px`,
          '```css',
          `{ font-size: ${value}px;}`,
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
              'https://fower.vercel.app/docs/font-size',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size',
            ],
          },
        ],
      },
    ],
  }
})

properties.unshift({
  name: 'text?',
  type: 'ResponsiveValue<string|number>',
  docs: [
    {
      description: [`set font-size to some value`, '```css', `{ font-size: $value;}`, '```'].join(
        '\n',
      ),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box text={16}></Box>`, `<Box text={20}></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [
            'https://fower.vercel.app/docs/font-size',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size',
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
