import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

const k1 = ['border', 'borderT', 'borderR', 'borderB', 'borderL']

const k2 = ['borderSolid', 'borderDashed', 'borderDotted', 'borderDouble', 'borderNone']

const k3 = ['borderStyle', 'borderColor']

export function getBorder() {
  const c1 = k1.map<CompletionItem>((key) => {
    return {
      label: key,
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<Box ${key}-1></Box>
<Box ${key}-2px></Box>
<Box ${key}="2"></Box>
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  const c2 = k2.map<CompletionItem>((key) => {
    return {
      label: key,
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<Box ${key}></Box>
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  const c3 = k3.map<CompletionItem>((key) => {
    return {
      label: key,
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<Box ${key}="{value}"></Box>
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  return [...c1, ...c2, ...c3]
}
