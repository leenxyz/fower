const { colors } = require('@fower/colors')
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
    namedImports: ['FowerPlugin', 'FowerColor', 'ResponsiveValue', 'ResponsiveBoolean'],
    moduleSpecifier: '@fower/core',
  },
])
sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')

/** config */
const lists = [
  {
    name: 'color',
    type: 'ResponsiveValue<FowerColor>',
    desc: 'Set color to any value',
    css: 'color: $value',
    examples: [
      '<Box color="#fff"></Box>',
      '<Box color="red500--T20"></Box> // transparentize color',
      '<Box color="red500--O20"></Box> // opacify color',
      '<Box color="red500--L20"></Box> // lighten color',
      '<Box color="red500--D20"></Box> // darken  color',
    ],
  },
]

const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const listProps = lists.map((item) => {
  return {
    name: item.name + '?',
    type: item.type,
    docs: [
      {
        description: [item.desc, '```css', `{ ${item.css} }`, '```'].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```', ...item.examples, '```'],
          },
          {
            tagName: 'see',
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/color'],
          },
        ],
      },
    ],
  }
})

const properties = Object.keys(colors).reduce((result, cur) => {
  const name = cur
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

  result.push({
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: ['Set color to ' + name, '```css', `{ color: ${colors[name]}; }`, '```'].join(
          '\n',
        ),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', ...exampleArr, '```'],
          },
          {
            tagName: 'see',
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/color'],
          },
        ],
      },
    ],
  })
  return result
}, listProps)

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
