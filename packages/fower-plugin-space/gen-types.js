const { colors } = require('@fower/colors')
const { presetWeb } = require('@fower/preset-web')
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

const entries = Object.entries(presetWeb?.theme?.spacings || {})

const atoms = [
  { alias: 'space', properties: [] },
  { alias: 'spaceX', properties: [] },
  { alias: 'spaceY', properties: [] },
]

const props = atoms.reduce((result, { alias, properties }) => {
  const items = entries.reduce((r, item, index) => {
    const [spaceKey, value] = item
    const getItem = (isBase = false) => {
      let examples = isBase
        ? [
            `<Box ${alias}-8></Box>`,
            `<Box ${alias}-1rem></Box>`,
            `<Box ${alias}-4px></Box>`,
            `<Box ${alias}={8}></Box>`,
            `<Box ${alias}={a + b}></Box>`,
          ]
        : [`<Box ${alias + spaceKey}></Box>`]
      return {
        name: isBase ? `${alias}?` : alias + spaceKey + '?',
        type: isBase ? 'ResponsiveValue<string|number>' : 'ResponsiveBoolean',
        docs: [
          {
            description: [
              `set the space between child elements to ${isBase ? 'some value' : value}`,
            ].join('\n'),
            tags: [
              {
                tagName: 'example',
                text: ['\n', '```tsx', ...examples, '```'],
              },
              {
                tagName: 'see',
                text: [`https://developer.mozilla.org/en-US/docs/Web/CSS/position`],
              },
            ],
          },
        ],
      }
    }

    // for m="auto", mx={10}, my-20...
    if (index === 0) r.push(getItem(true))

    r.push(getItem())
    return r
  }, [])
  return result.concat(items)
}, [])

typingModule.addInterface({
  name: 'AtomicProps',
  isExported: true,
  properties: props,
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
