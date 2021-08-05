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
    namedImports: ['FowerPlugin', 'ResponsiveValue'],
    moduleSpecifier: '@fower/core',
  },
])
sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')
const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const props = [
  ['justifyContent', ['start', 'center', 'space-between']],
  ['justifyItems', ['start', 'center', 'stretch']],
  ['justifySelf', ['start', 'center', 'stretch']],
  ['alignItems', ['start', 'center', 'stretch']],
  ['alignContent', ['start', 'center', 'space-between']],
  ['alignSelf', ['start', 'center', 'stretch']],
].map(([name, arr]) => ({
  name: name + '?',
  type: `ResponsiveValue<CSS.Property.${upFirst(name)}>`,
  docs: [
    {
      description: [
        `Set ${kebab(name)} to some value`,
        '```css',
        `{ ${kebab(name)}: $value; }`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', ...arr.map((i) => `<Box ${name}="${i}"></Box>`), '```'],
        },
        {
          tagName: 'see',
          text: [`https://developer.mozilla.org/en-US/docs/Web/CSS/${kebab(name)}`],
        },
      ],
    },
  ],
}))

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: props,
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
