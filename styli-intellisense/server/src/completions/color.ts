import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'
import { colors } from '@styli/colors'
import { upFirst } from '@styli/utils'

const entries = Object.entries(colors)

const colorCompletions: CompletionItem[] = entries.map((item) => {
  const [name, value] = item
  return {
    label: name,
    kind: CompletionItemKind.Color,
    documentation: value,
    detail: `
<div ${name}></div>
<div color="${name}"></div>
	`,
  } as CompletionItem
})

const bgCompletions: CompletionItem[] = entries.map((item) => {
  const [name, value] = item
  return {
    label: 'bg' + upFirst(name),
    kind: CompletionItemKind.Color,
    documentation: value,
    detail: `
<div bg${upFirst(name)}></div>
<div bg="${name}"></div>
	`,
  } as CompletionItem
})

const borderCompletions: CompletionItem[] = entries.map((item) => {
  const [name, value] = item
  return {
    label: 'border' + upFirst(name),
    kind: CompletionItemKind.Color,
    documentation: value,
    detail: `
<div border${upFirst(name)}></div>
<div borderColor="${name}"></div>
	`,
  } as CompletionItem
})

export function getColor() {
  return [...colorCompletions, ...bgCompletions, ...borderCompletions]
}
