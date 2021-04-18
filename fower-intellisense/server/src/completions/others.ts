import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

export const otherCompletions: CompletionItem[] = [
  {
    label: 'opacity',
    kind: CompletionItemKind.Property,
    detail: `
<div opacity></div>
<div opacity-20></div>
<div opacity="40"></div>
	`,
  },

  {
    label: 'zIndex',
    kind: CompletionItemKind.Property,
    detail: ``,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<View zIndex-10></View>
<View zIndex--10></View>
<View zIndex="20"></View>
\`\`\`
	  `,
    },
  },

  {
    label: 'visibility',
    kind: CompletionItemKind.Property,
    detail: `
<div visibility="hidden">Hello world</div>
	`,
  },

  {
    label: 'visible',
    kind: CompletionItemKind.Property,
    detail: `
<div visible>Hello world</div>
	`,
  },

  {
    label: 'invisible',
    kind: CompletionItemKind.Property,
    detail: `
<div invisible>Hello world</div>
	`,
  },

  {
    label: 'normalcase',
    kind: CompletionItemKind.Property,
    detail: `Usage:\n
<Box normalcase></Box>\n
<Box normalcase="fasle"></Box>
`,
    documentation: {
      kind: 'markdown',
      value: 'Set textTransform to none',
    },
  },

  {
    label: 'uppercase',
    kind: CompletionItemKind.Property,
    detail: `Usage:
<Box uppercase></Box>`,
  },

  {
    label: 'lowercase',
    kind: CompletionItemKind.Property,
    detail: `Usage:
<Box lowercase></Box>`,
  },

  {
    label: 'capitalize',
    kind: CompletionItemKind.Property,
    detail: `Usage:
<Box capitalize></Box>`,
  },

  {
    label: 'textAlign',
    kind: CompletionItemKind.Property,
    detail: '<Box textAlign="center"></Box>',
  },

  {
    label: 'textLeft',
    kind: CompletionItemKind.Property,
    detail: '<Box textLeft></Box>',
  },

  {
    label: 'textCenter',
    kind: CompletionItemKind.Property,
    detail: '<Box textCenter></Box>',
  },

  {
    label: 'textRight',
    kind: CompletionItemKind.Property,
    detail: '<Box textRight></Box>',
  },

  {
    label: 'textJustify',
    kind: CompletionItemKind.Property,
    detail: '<Box textJustify></Box>',
  },
]
