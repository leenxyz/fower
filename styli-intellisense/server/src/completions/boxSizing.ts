import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

export function getDebug(): CompletionItem[] {
  return [
    {
      label: 'debug',
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div debug></div>
\`\`\`
	  `,
      },
    },
    {
      label: 'debugChildren',
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div debugChildren></div>
\`\`\`
	  `,
      },
    },
  ]
}
