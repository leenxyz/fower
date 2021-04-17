import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'
import { presetWeb } from '@styli/preset-web'

const entries = Object.entries(presetWeb?.theme?.spacings || {})

const atoms = [
  { alias: 'p', properties: ['padding'] },
  { alias: 'px', properties: ['padding-left', 'padding-right'] },
  { alias: 'py', properties: ['padding-top', 'padding-bottom'] },
  { alias: 'pt', properties: ['padding-top'] },
  { alias: 'pr', properties: ['padding-right'] },
  { alias: 'pb', properties: ['padding-bottom'] },
  { alias: 'pl', properties: ['padding-left'] },
  { alias: 'm', properties: ['margin'] },
  { alias: 'mx', properties: ['margin-left', 'margin-right'] },
  { alias: 'my', properties: ['margin-top', 'margin-top'] },
  { alias: 'mt', properties: ['margin-top'] },
  { alias: 'mr', properties: ['margin-right'] },
  { alias: 'mb', properties: ['margin-bottom'] },
  { alias: 'ml', properties: ['margin-left'] },
  { alias: 'w', properties: ['width'] },
  { alias: 'h', properties: ['height'] },
  { alias: 'maxH', properties: ['max-height'] },
  { alias: 'maxW', properties: ['max-width'] },
  { alias: 'minH', properties: ['min-height'] },
  { alias: 'minW', properties: ['min-width'] },
  { alias: 'square', properties: ['width', 'height'] },
  { alias: 'circle', properties: ['width', 'height', 'border-radius'] },
  { alias: 'top', properties: ['top'] },
  { alias: 'right', properties: ['right'] },
  { alias: 'bottom', properties: ['bottom'] },
  { alias: 'left', properties: ['left'] },
  { alias: 'space', properties: [] },
  { alias: 'spaceX', properties: [] },
  { alias: 'spaceY', properties: [] },
]

export function getSpacing() {
  return atoms.reduce<CompletionItem[]>((completions, { alias, properties }) => {
    const items = entries.map((item) => {
      const [spaceKey, value] = item

      const rule = properties.map((p) => `${p}: ${value}px;`).join('\n')

      // for p="10", m="auto"...
      if (spaceKey === '0') {
        completions.push({
          label: alias,
          kind: CompletionItemKind.Property,
          detail: `
<div ${alias}="{{value}}"></div>
	`,
        })
      }

      return {
        label: alias + spaceKey,
        kind: CompletionItemKind.Property,
        detail: ``,
        documentation: {
          kind: 'markdown',
          value: `
\`\`\`html
<div ${alias + spaceKey}></div>
\`\`\`
\`\`\`css
.${alias + spaceKey} {
  ${rule}
}
\`\`\`
	  `,
        },
      } as CompletionItem
    })
    return completions.concat(items)
  }, [])
}
