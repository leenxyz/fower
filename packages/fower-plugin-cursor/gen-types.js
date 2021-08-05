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
    namedImports: ['FowerPlugin', 'ResponsiveValue', 'ResponsiveBoolean'],
    moduleSpecifier: '@fower/core',
  },
])
sourceFile.addStatements(`import * as CSS from 'csstype'`)
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')

/** config */
const lists = [
  {
    name: 'cursor',
    type: 'ResponsiveValue<CSS.Property.Cursor>',
    desc: 'Set cursor to any value',
    css: 'cursor: $value',
    examples: ['cursor="pointer"'],
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
            text: ['\n', '```', ...item.examples.map((i) => `<Box ${i}></Box>`), '```'],
          },
          {
            tagName: 'see',
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/cursor'],
          },
        ],
      },
    ],
  }
})

const keys = [
  'Alias',
  'AllScroll',
  'Auto',
  'Cell',
  'ColResize',
  'ContextMenu',
  'Copy',
  'Crosshair',
  'Default',
  'EResize',
  'EwResize',
  'Grab',
  'Grabbing',
  'Help',
  'Move',
  'NResize',
  'NeResize',
  'NeswResize',
  'NoDrop',
  'None',
  'NotAllowed',
  'NsResize',
  'NwResize',
  'NwseResize',
  'Pointer',
  'Progress',
  'RowResize',
  'SResize',
  'SeResize',
  'SwResize',
  'Text',
  'VerticalText',
  'WResize',
  'Wait',
  'ZoomIn',
  'ZoomOut',
]

const properties = keys.reduce((result, cur) => {
  const name = 'cursor' + cur
  result.push({
    name: name + '?',
    type: 'ResponsiveBoolean',
    docs: [
      {
        description: [
          'Set cursor to ' + kebab(cur),
          '```css',
          `{ cursor: ${kebab(cur)}; }`,
          '```',
        ].join('\n'),
        tags: [
          {
            tagName: 'example',
            text: ['\n', '```tsx', `<Box ${name}></Box>`, '```'],
          },
          {
            tagName: 'see',
            text: ['https://developer.mozilla.org/en-US/docs/Web/CSS/cursor'],
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
