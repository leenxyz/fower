import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

export const outlineCompletions: CompletionItem[] = [
  {
    label: 'outlineNone',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div outlineNone></div>
\`\`\`

\`\`\`css
.outlineNone {
  outline: none;
}
\`\`\`
	  `,
    },
  },

  {
    label: 'outline',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<View outline="{value}"></View>
\`\`\`
	  `,
    },
  },

  {
    label: 'outlineOffset',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<View outlineOffset-1></View>
<View outlineOffset-3></View>
\`\`\`
	  `,
    },
  },
]
