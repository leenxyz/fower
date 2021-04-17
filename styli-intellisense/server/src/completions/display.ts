import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

const keys = ['inline', 'inlineBlock', 'inlineFlex', 'block', 'grid', 'hidden', 'table']

export function getDisplay() {
  const items = keys.map<CompletionItem>((key) => {
    return {
      label: key,
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div ${key}></div>
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  items.unshift({
    label: 'display',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div display="{value}"></div>
\`\`\`
	  `,
    },
  })

  return items
}
