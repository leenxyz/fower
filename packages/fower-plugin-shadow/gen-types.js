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

const entries = Object.entries(presetWeb?.theme?.shadows || {})

const properties = entries.map(([key, value]) => {
  return {
    name: 'shadow' + upFirst(key) + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [`set box shadow to ${key}`, '```css', `{ box-shadow: ${value};}`, '```'].join(
          '\n',
        ),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', `<Box shadow${upFirst(key)}></Box>`, '```'],
          },
          {
            tagName: 'see',
            text: [`https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow`],
          },
        ],
      },
    ],
  }
})

properties.unshift({
  name: 'shadow?',
  type: 'ResponsiveValue<string|boolean>',
  docs: [
    {
      description: [`set box shadow`, '```css', `{ box-shadow: $value;}`, '```'].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: [
            '\n',
            '```tsx',
            `<Box shadow></Box>`,
            `<Box shadow="0 0 0 1px rgba(0, 0, 0, 0.05)"></Box>`,
            '```',
          ],
        },
        {
          tagName: 'see',
          text: [`https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow`],
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
