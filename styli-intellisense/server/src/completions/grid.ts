import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

export const gridCompletions: CompletionItem[] = [
  {
    label: 'gap',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div gap-10></div>
<div gap-1rem></div>
<div gap-10p></div>
<div gap="10"></div>
\`\`\`

\`\`\`css
.gap-10 {
  gap: 10px;
}
\`\`\`
	  `,
    },
  },

  {
    label: 'columnGap',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div columnGap-10></div>
<div columnGap-1rem></div>
<div columnGap-10p></div>
<div columnGap={10}></div>
\`\`\`

\`\`\`css
.columnGap-10 {
  column-gap: 10px;
}
\`\`\`
	  `,
    },
  },

  {
    label: 'rowGap',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div rowGap-10></div>
<div rowGap-1rem></div>
<div rowGap-10p></div>
<div rowGap={10}></div>
\`\`\`

\`\`\`css
.rowGap-10 {
  row-gap: 10px;
}
\`\`\`
	  `,
    },
  },

  {
    label: 'gridTemplateColumns',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div gridTemplateColumns-4></div>
\`\`\`

	  `,
    },
  },
]
