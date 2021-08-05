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
  const name = 'ring' + upFirst(cur)
  let exampleArr = [`<Box ${name}></Box> // default with is 1`]
  if (!['transparent'].includes(cur)) {
    exampleArr = [
      ...exampleArr,
      `<Box ${name}-2></Box> // ring with is 2`,
      `<Box ${name}--T20></Box> // transparentize color`,
      `<Box ${name}--O20></Box> // opacify color`,
      `<Box ${name}--L20></Box> // lighten color`,
      `<Box ${name}--D20></Box> // darken color`,
      `<Box ${name}-2--T20></Box>`,
    ]
  }
  return {
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: ['Set ring color and ring width'].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', ...exampleArr, '```'],
          },
          {
            tagName: 'see',
            text: ['https://fower.vercel.app/docs/ring'],
          },
        ],
      },
    ],
  }
})

colorProps.unshift({
  name: 'ring' + '?',
  type: 'ResponsiveBoolean',
  docs: [
    {
      description: ['Set ring color and ring width'].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: [
            '\n',
            '```tsx',
            ...['<Box ring-2></Box>', '<Box ring={3}></Box>', '<Box ring="4"></Box>'],
            '```',
          ],
        },
        {
          tagName: 'see',
          text: ['https://fower.vercel.app/docs/ring'],
        },
      ],
    },
  ],
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
