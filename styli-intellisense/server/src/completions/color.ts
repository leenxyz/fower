import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'
import { colors } from '@styli/colors'
import { toRgb } from '@styli/color-helper'
import { upFirst } from '@styli/utils'

const entries = Object.entries(colors)

const colorCompletions: CompletionItem[] = entries.map((item) => {
  const [name, value] = item
  return {
    label: name,
    kind: CompletionItemKind.Color,
    detail: value,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div ${name}></div>
\`\`\`

\`\`\`css
.${name} {
  /* ${toRgb(value)} */
  color: ${value};
}
\`\`\`
	  `,
    },
  } as CompletionItem
})

colorCompletions.push({
  label: 'color',
  kind: CompletionItemKind.Color,
  documentation: {
    kind: 'markdown',
    value: `
\`\`\`html
<Box color="#fff"></Box>

<!-- lighten color 变亮 -->
<Box color="red500--L20"></Box>

<!-- darken color 变暗 -->
<Box color="red500--D20"></Box>

<!-- transparentize color 变更透明 -->
<Box color="red500--T20"></Box>

<!-- opacify color 变不透明 -->
<Box color="red500--O20"></Box>
\`\`\`
	  `,
  },
})

const bgCompletions: CompletionItem[] = entries.map((item) => {
  const [name, value] = item
  return {
    label: 'bg' + upFirst(name),
    kind: CompletionItemKind.Color,
    detail: value,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div bg${upFirst(name)}></div>
\`\`\`

\`\`\`css
.bg${upFirst(name)} {
  /* ${toRgb(value)} */
  backgroundColor: ${value};
}
\`\`\`
	  `,
    },
  } as CompletionItem
})

bgCompletions.push({
  label: 'bg',
  kind: CompletionItemKind.Color,
  documentation: {
    kind: 'markdown',
    value: `
\`\`\`html
<Box bg="#fff"></Box>

<!-- lighten color 变亮 -->
<Box bg="red500--L20"></Box>

<!-- darken color 变暗 -->
<Box bg="red500--D20"></Box>

<!-- transparentize color 变更透明 -->
<Box bg="red500--T20"></Box>

<!-- opacify color 变不透明 -->
<Box bg="red500--O20"></Box>
\`\`\`
	  `,
  },
})

const borderCompletions: CompletionItem[] = entries.map((item) => {
  const [name, value] = item
  return {
    label: 'border' + upFirst(name),
    detail: value,
    kind: CompletionItemKind.Color,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div border${upFirst(name)}></div>
\`\`\`

\`\`\`css
.border${upFirst(name)} {
  /* ${toRgb(value)} */
  borderColor: ${value};
}
\`\`\`
	  `,
    },
  } as CompletionItem
})

borderCompletions.push({
  label: 'border',
  kind: CompletionItemKind.Color,
  documentation: {
    kind: 'markdown',
    value: `
\`\`\`html
<Box borderColor="#fff"></Box>

<!-- lighten color 变亮 -->
<Box borderColor="red500--L20"></Box>

<!-- darken color 变暗 -->
<Box borderColor="red500--D20"></Box>

<!-- transparentize color 变更透明 -->
<Box borderColor="red500--T20"></Box>

<!-- opacify color 变不透明 -->
<Box borderColor="red500--O20"></Box>
\`\`\`
	  `,
  },
})

export function getColor() {
  return [...colorCompletions, ...bgCompletions, ...borderCompletions]
}
