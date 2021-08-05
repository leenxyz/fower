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
    namedImports: ['FowerPlugin', 'ResponsiveBoolean', 'ResponsiveValue'],
    moduleSpecifier: '@fower/core',
  },
])
// sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')
const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const commons = [
  {
    name: 'fillNone',
    type: 'ResponsiveBoolean',
    desc: 'Set svg fill to none',
    css: 'fill: none',
    examples: ['<Box as="svg" fillNone></Box>'],
    see: ['https://fower.vercel.app/docs/fill'],
  },
  {
    name: 'fillCurrent',
    type: 'ResponsiveBoolean',
    desc: 'Set svg fill to currentColor',
    css: 'fill: currentColor',
    examples: ['<Box as="svg" fillCurrent></Box>'],
    see: ['https://fower.vercel.app/docs/fill'],
  },
  {
    name: 'strokeCurrent',
    type: 'ResponsiveBoolean',
    desc: 'Set svg stroke to currentColor',
    css: 'stroke: currentColor',
    examples: ['<Box as="svg" strokeCurrent></Box>'],
    see: ['https://fower.vercel.app/docs/stroke'],
  },

  {
    name: 'stroke',
    type: 'ResponsiveValue<string|number>',
    desc: 'Set stroke to some value',
    examples: ['<Box as="svg" stroke={2}></Box>'],
    css: 'stroke: $value',
    see: [],
  },
]

const commonProps = commons.map((item) => {
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
            text: item.see,
          },
        ],
      },
    ],
  }
})

const colorProps = Object.keys(colors).map((cur) => {
  const name = 'fill' + upFirst(cur)
  let exampleArr = [`<Box as="svg" ${name}></Box>`]
  if (!['transparent'].includes(cur)) {
    exampleArr = [
      ...exampleArr,
      `<Box as="svg" ${name}--T20></Box> // transparentize color`,
      `<Box as="svg" ${name}--O20></Box> // opacify color`,
      `<Box as="svg" ${name}--L20></Box> // lighten color`,
      `<Box as="svg" ${name}--D20></Box> // darken color`,
    ]
  }
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: ['Set fill to ' + cur].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', ...exampleArr, '```'],
          },

          {
            tagName: 'see',
            text: [
              'https://fower.vercel.app/docs/fill',
              'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill',
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
  properties: [...commonProps, ...colorProps],
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
