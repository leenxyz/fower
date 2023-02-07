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
sourceFile.addStatements('declare const _default: () => FowerPlugin')
sourceFile.addStatements('export default _default')

const typingModule = sourceFile.addModule({
  name: `'@fower/atomic-props'`,
})

const entries = Object.entries(presetWeb?.theme?.radii || {})

const atoms = [
  { alias: 'rounded', properties: ['border-radius'] },
  { alias: 'roundedTop', properties: ['border-top-left-radius', 'border-top-right-radius'] },
  { alias: 'roundedRight', properties: ['border-top-right-radius', 'border-bottom-right-radius'] },
  {
    alias: 'roundedBottom',
    properties: ['border-bottom-left-radius', 'border-bottom-right-radius'],
  },
  { alias: 'roundedLeft', properties: ['border-top-left-radius', 'border-bottom-left-radius'] },
  { alias: 'roundedTopLeft', properties: ['border-top-left-radius'] },
  { alias: 'roundedTopRight', properties: ['border-top-right-radius'] },
  { alias: 'roundedBottomLeft', properties: ['border-bottom-left-radius'] },
  { alias: 'roundedBottomRight', properties: ['border-bottom-right-radius'] },
]

const props = atoms.reduce((result, { alias, properties }) => {
  const items = entries.reduce((r, item, index) => {
    const [spaceKey, value] = item
    const getItem = (isBase = false) => {

      const isSpecialKey = ['full', 'none'].includes(spaceKey)
      const postfix = isSpecialKey ? upFirst(spaceKey) : spaceKey.toUpperCase()

      const baseExample = [
        `<Box ${alias}-4></Box>`,
        `<Box ${alias}-1rem></Box>`,
        `<Box ${alias}-8px></Box>`,
        `<Box ${alias}={8}></Box>`,
        `<Box ${alias}={a + b}></Box>`
      ]

      let examples = isBase ? baseExample : [`<Box ${alias + postfix}></Box>`]

      return {
        name: isBase ? `${alias}?` : alias + postfix + '?',
        type: isBase
          ? `ResponsiveValue<string|number${alias === 'rounded' ? '|boolean' : ''}>`
          : 'ResponsiveBoolean',
        docs: [
          {
            description: [
              `set ${properties.join(' ')} to ${isBase ? 'some value' : value}`,
              '```css',
              '{',
              ...properties.map((p) => `  ${p}: ${isBase ? '$value' : value + 'px'};`),
              '}',
              '```',
            ].join('\n'),
            tags: [
              {
                tagName: 'example',
                text: ['\n', '```tsx', ...examples, '```'],
              },
              {
                tagName: 'see',
                text: [`https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius`],
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
  properties: [...props],
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
