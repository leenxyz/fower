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

const commons = [
  {
    name: 'display',
    type: 'ResponsiveValue<CSS.Property.Display>',
    desc: 'Set display to some value',
    css: 'display: $value',
    examples: [
      '<Box display="block"></Box>',
      '<Box display="flex"></Box>',
      '<Box display="inline-block"></Box>',
    ],
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
            text: [
              'https://fower.vercel.app/docs/display',
              'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
            ],
          },
        ],
      },
    ],
  }
})

const props = ['inline', 'inlineBlock', 'inlineFlex', 'block', 'grid', 'table', 'hidden'].map(
  (name) => ({
    name: name + '?',
    type: `ResponsiveBoolean`,
    docs: [
      {
        description: [
          `Set display to ${name === 'hidden' ? 'none' : kebab(name)}`,
          '```css',
          `{ display: ${name === 'hidden' ? 'none' : kebab(name)}; }`,
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
              'https://fower.vercel.app/docs/display',
              `https://developer.mozilla.org/en-US/docs/Web/CSS/display`,
            ],
          },
        ],
      },
    ],
  }),
)

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: [...commonProps, ...props],
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
