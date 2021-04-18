import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

const keys = ['static', 'fixed', 'absolute', 'relative', 'sticky']

export function getPosition() {
  const items = keys.map<CompletionItem>((key) => {
    return {
      label: key,
      kind: CompletionItemKind.Property,
      detail: `Set position to ${key}`,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<View ${key}></View>
\`\`\`
\`\`\`css
.${key} {
  position: ${key};
}
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  items.unshift({
    label: 'position',
    kind: CompletionItemKind.Property,
    detail: `<div position="absolute"></div>`,
  })

  return items
}
