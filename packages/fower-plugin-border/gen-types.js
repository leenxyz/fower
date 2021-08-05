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
    namedImports: ['FowerPlugin', 'FowerColor', 'ResponsiveValue', 'ResponsiveBoolean'],
    moduleSpecifier: '@fower/core',
  },
])
sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')
const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const commons = [
  {
    name: 'borderStyle',
    type: 'ResponsiveValue<CSS.Property.BorderStyle>',
    desc: 'Set border style to some value',
    css: 'border-style: $value',
    examples: ['<Box borderStyle="none"></Box>', '<Box borderStyle="solid"></Box>'],
  },
  {
    name: 'borderColor',
    type: 'ResponsiveValue<FowerColor>',
    desc: 'Set border color to some value',
    css: 'border-color: $value',
    examples: [
      '<Box borderColor="gray200"></Box>',
      '<Box borderColor="#fc0"></Box>',
      '<Box borderColor="#000"></Box>',
    ],
  },
]

const commmonProps = commons.map((item) => {
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
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/' + kebab(item.name)],
          },
        ],
      },
    ],
  }
})

const borderProps = ['border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft'].map(
  (item) => ({
    name: item + '?',
    type: 'ResponsiveValue<boolean|number|string>',
    docs: [
      {
        description: [
          `Set border width ${item === 'border' ? '' : `to ${item.replace('border', '')}`}`,
          '```css',
          `{ ${kebab(item)}-width: $value; }`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: [
              '\n',
              '```tsx',
              `<Box ${item}></Box>`,
              `<Box ${item}-2></Box>`,
              `<Box ${item}-4px></Box>`,
              '```',
            ],
          },
          {
            tagName: 'see',
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/border-width'],
          },
        ],
      },
    ],
  }),
)

const borderStyleProps = ['Solid', 'Dashed', 'Dotted', 'Double', 'None'].map((item) => ({
  name: 'border' + item + '?',
  type: 'ResponsiveBoolean',
  docs: [
    {
      description: [
        'Set border style to ' + item.toLowerCase(),
        '```css',
        `{ border-style: ${item.toLowerCase()}; }`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box border${item}></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/border-style'],
        },
      ],
    },
  ],
}))

const colorProps = Object.keys(colors).map((cur) => {
  const name = 'border' + upFirst(cur)
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
        description: [
          'Set border color to ' + cur,
          '```css',
          `{ border-color: ${colors[cur]}; }`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', ...exampleArr, '```'],
          },
          {
            tagName: 'see',
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/border-color'],
          },
        ],
      },
    ],
  }
})

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: [...commmonProps, ...borderProps, ...borderStyleProps, ...colorProps],
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
