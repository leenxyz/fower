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

const valueProps = ['overflow', 'overflowX', 'overflowY'].map((item) => ({
  name: `${item}?`,
  type: `ResponsiveValue<CSS.Property.${upFirst(item)}>`,
  docs: [
    {
      description: [
        `Set ${kebab(item)} to some value`,
        '```css',
        `{ ${kebab(item)}: $value; }`,
        '```',
      ].join('\n'),
      tags: [
        {
          tagName: 'example',
          text: ['\n', '```tsx', `<Box ${item}="auto"></Box>`, '```'],
        },
        {
          tagName: 'see',
          text: [
            'https://fower.vercel.app/docs/overflow',
            `https://developer.mozilla.org/en-US/docs/Web/CSS/${kebab(item)}`,
          ],
        },
      ],
    },
  ],
}))

const keys = ['Auto', 'Hidden', 'Visible', 'Scroll']

const booleanProps = ['overflow', 'overflowX', 'overflowY'].reduce((result, cur) => {
  const items = keys.map((key) => ({
    name: `${cur + key}?`,
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          `Set ${kebab(cur)} to ${key.toLowerCase()}`,
          '```css',
          `{ ${kebab(cur)}: ${key.toLowerCase()}; }`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', `<Box ${cur + key}></Box>`, '```'],
          },
          {
            tagName: 'see',
            text: [
              'https://fower.vercel.app/docs/overflow',
              `https://developer.mozilla.org/en-US/docs/Web/CSS/${kebab(cur)}`,
            ],
          },
        ],
      },
    ],
  }))
  return result.concat(items)
}, [])

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: [...valueProps, ...booleanProps],
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
