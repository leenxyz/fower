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
sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')
const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const directionProps = ['row', 'column'].map((key) => ({
  name: `${key}?`,
  type: `ResponsiveBoolean`,
  docs: [
    {
      description: [
        `Set flex-direction to ${key}`,
        '```css',
        `{ flex-direction: ${key}; }`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box ${key}></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [`https://fower.vercel.app/docs/flex-direction`],
        },
      ],
    },
  ],
}))

directionProps.push({
  name: 'flexDirection?',
  type: `ResponsiveValue<CSS.Property.FlexDirection>`,
  docs: [
    {
      description: [
        `Set flex-direction to some value`,
        '```css',
        `{ flex-direction: $value; }`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: [
            '\n',
            '```tsx',
            `<Box flexDirection="row"></Box>`,
            `<Box flexDirection="column"></Box>`,
            `<Box flexDirection={['column', 'row', 'column', 'row']}></Box>`,
            `<Box flexDirection="row-reverse"></Box>`,
            '```',
          ],
        },
        {
          tagName: 'see',
          text: [`https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction`],
        },
      ],
    },
  ],
})

const toKeys = [
  'Top',
  'Left',
  'Right',
  'Bottom',
  'Between',
  'Around',
  'Evenly',
  'Center',
  'CenterX',
  'CenterY',
]

const toProps = toKeys.map((key) => ({
  name: `to${key}?`,
  type: `ResponsiveBoolean`,
  docs: [
    {
      description: [
        `Make all children elements to ${key} in flex container, whether it's row or column`,
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box to${key}></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [`https://fower.vercel.app/docs/to-${key.toLowerCase()}`],
        },
      ],
    },
  ],
}))

const selfKeys = ['Auto', 'Top', 'Right', 'Bottom', 'Left', 'Center', 'Stretch']

const selfProps = selfKeys.map((key) => ({
  name: `self${key}?`,
  type: `ResponsiveBoolean`,
  docs: [
    {
      description: [`Make an element to ${key} in flex container, whether it's row or column`].join(
        '\n',
      ),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box self${key}></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [`https://fower.vercel.app/docs/self-${key.toLowerCase()}`],
        },
      ],
    },
  ],
}))

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: [...directionProps, ...toProps, ...selfProps],
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
