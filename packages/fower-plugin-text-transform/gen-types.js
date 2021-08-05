const { colors } = require('@fower/colors')
const { kebab, upFirst } = require('@fower/utils')
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

const props = ['normalcase', 'uppercase', 'lowercase', 'capitalize'].map((name) => {
  return {
    name: name + '?',
    type: `ResponsiveBoolean`,
    docs: [
      {
        description: [
          `Set text-transform to ${name === 'normalcase' ? 'none' : kebab(name)}`,
          '```css',
          `{ text-transform: ${name === 'normalcase' ? 'none' : kebab(name)}; }`,
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
              'https://fower.vercel.app/docs/text-transform',
              `https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform`,
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
  properties: [...props],
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
