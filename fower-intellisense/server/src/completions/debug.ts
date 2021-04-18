import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

export function getBoxSizing(): CompletionItem[] {
  return [
    {
      label: 'contentBox',
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div contentBox></div>
\`\`\`
	  `,
      },
    },

    {
      label: 'borderBox',
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div borderBox></div>
\`\`\`
	  `,
      },
    },
  ]
}
