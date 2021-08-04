const { colors } = require('@fower/colors')
const { upFirst } = require('@fower/utils')
const { SemicolonPreference } = require('typescript')
const { join } = require('path')
const {
  Project,
  VariableDeclarationKind,
  MethodDeclarationStructure,
  PropertyDeclarationStructure,
  OptionalKind,
} = require('ts-morph')

/** init somethings */
const project = new Project()
const cwd = process.cwd()
const outPath = join(cwd, 'types', 'index.d.ts')
const sourceFile = project.createSourceFile(outPath, undefined, {
  overwrite: true,
})

/** config */

const lists = [
  {
    name: 'bg',
    type: 'ResponsiveValue<FowerColor>',
    desc: 'Set background',
    css: 'background-color: $value;',
    examples: ['<Box bg="#112233"></Box>', '<Box bg="red"></Box>', '<Box bg="red500"></Box>'],
  },
  {
    name: 'backgroundImage',
    type: 'ResponsiveValue<CSS.Property.BackgroundImage>',
    desc: 'Set backgroundImage',
    css: 'background-image: $value;',
    examples: [`<Box backgroundImage="url('http...')"></Box>`],
  },
  {
    name: 'backgroundPosition',
    type: 'ResponsiveValue<CSS.Property.BackgroundPosition>',
    desc: ' Set backgroundPosition',
    css: 'background-position: $value;',
    examples: ['<Box backgroundPosition="top left"></Box>'],
  },
  {
    name: 'backgroundSize',
    type: 'ResponsiveValue<string>',
    desc: 'Set backgroundSize',
    css: 'background-size: $value;',
    examples: ['<Box backgroundSize="100% 100%"></Box>'],
  },
  {
    name: 'backgroundRepeat',
    type: 'ResponsiveValue<CSS.Property.BackgroundRepeat>',
    desc: 'Set backgroundRepeat',
    css: 'background-repeat: $value;',
    examples: ['<Box backgroundRepeat="no-repeat"></Box>'],
  },
  {
    name: 'bgClip',
    type: 'ResponsiveValue<CSS.Property.BackgroundClip>',
    desc: '',
    css: 'background-clip: $value;',
    examples: ['<Box bgClip="$value"></Box>'],
  },
  {
    name: 'bgClipBorder',
    type: 'ResponsiveBoolean',
    desc: '',
    css: 'background-clip: border-box;',
    examples: ['<Box bgClipBorder></Box>'],
  },
  {
    name: 'bgClipPadding',
    type: 'ResponsiveBoolean',
    desc: '',
    css: 'background-clip: padding-box;',
    examples: ['<Box bgClipPadding></Box>'],
  },
  {
    name: 'bgClipContent',
    type: 'ResponsiveBoolean',
    desc: '',
    css: 'background-clip: content-box;',
    examples: ['<Box bgClipContent></Box>'],
  },
  {
    name: 'bgClipText',
    type: 'ResponsiveBoolean',
    desc: '',
    css: 'background-clip: text;',
    examples: ['<Box bgClipText></Box>'],
  },
]

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

const listProps = lists.map((item) => {
  return {
    name: item.name + '?',
    type: item.type,
    docs: [
      {
        description: [item.desc, '```css', '{', `  ${item.css}`, '}', '```'].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```', ...item.examples, '```'],
          },
        ],
      },
    ],
  }
})

const properties = Object.keys(colors).reduce(function (result, cur) {
  const name = 'bg' + upFirst(cur)
  result.push({
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          'Set background to ' + cur,
          '```css',
          '{',
          `  background-color: ${colors[cur]};`,
          '}',
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```', `<Box ${name}></Box>`, '```'],
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
sourceFile.formatText({
  indentSize: 2,

  semicolons: SemicolonPreference.Remove,
})

sourceFile.save().then(function () {
  console.log('typing file created...')
})
