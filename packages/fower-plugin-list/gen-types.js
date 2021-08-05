const { kebab } = require('@fower/utils')
const { SemicolonPreference } = require('typescript')
const { join } = require('path')
const { Project } = require('ts-morph')

/** init somethings */
const project = new Project()
const cwd = process.cwd()
// const outPath = join(cwd, 'types', 'index.d.ts')
const outPath = join(cwd, 'index.d.ts')
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

const keys = ['None', 'Disc', 'Decimal']

const properties = keys.map((key) => {
  const name = 'list' + key
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          'Set list-style-type to ' + kebab(key),
          '```css',
          `{ list-style-type: ${kebab(key)}; }`,
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
              'https://fower.vercel.app/docs/list-type',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type',
            ],
          },
        ],
      },
    ],
  }
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
