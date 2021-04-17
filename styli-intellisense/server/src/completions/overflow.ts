import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'
import { kebab } from '@styli/utils'

const keys1 = ['overflow', 'overflowX', 'overflowY']

const keys2 = [
  'overflowAuto',
  'overflowHidden',
  'overflowVisible',
  'overflowScroll',
  'overflowXAuto',
  'overflowYAuto',
  'overflowXHidden',
  'overflowYHidden',
  'overflowXVisible',
  'overflowYVisible',
  'overflowXScroll',
  'overflowYScroll',
]

export function getOverflow() {
  const c1 = keys1.map<CompletionItem>((key) => {
    return {
      label: key,
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div ${key}="{value}"></div>
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  const c2 = keys2.map<CompletionItem>((key) => {
    const [, k, v] = key.match(/^(.*)(Auto|Hidden|Visible|Scroll)$/) || []
    return {
      label: key,
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div ${key}></div>
\`\`\`

\`\`\`css
.${key} {
  ${kebab(k)}: ${v.toLowerCase()};
}
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  return [...c1, ...c2]
}
