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
    namedImports: ['FowerPlugin', 'ResponsiveBoolean'],
    moduleSpecifier: '@fower/core',
  },
])
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')
const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const colorProps = Object.keys(colors).map((cur) => {
  const name = 'placeholder' + upFirst(cur)
  let exampleArr = [`<Box ${name}></Box>`]
  if (!['transparent'].includes(cur)) {
    exampleArr = [
      ...exampleArr,
      `<Box ${name}--T20></Box> // transparentize color`,
      `<Box ${name}--O20></Box> // opacify color`,
      `<Box ${name}--L20></Box> // lighten color`,
      `<Box ${name}--D20></Box> // darken color`,
    ]
  }
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: ['Set placeholder color to ' + cur].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', ...exampleArr, '```'],
          },

          {
            tagName: 'see',
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder'],
          },
        ],
      },
    ],
  }
})

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: colorProps,
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
