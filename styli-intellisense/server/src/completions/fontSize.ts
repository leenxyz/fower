import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'
import { presetWeb } from '@styli/preset-web'
import { toPostfix } from '../utils'

const entries = Object.entries(presetWeb?.theme?.fontSizes || {})

const atomKey = 'text'

export function getFontSize() {
  const items = entries.map<CompletionItem>((item) => {
    const [key, value] = item
    const postfix = toPostfix(key)
    return {
      label: atomKey + postfix,
      kind: CompletionItemKind.Property,
      documentation: value.toString(),
      detail: `<div ${atomKey + postfix}></div>`,
    } as CompletionItem
  })

  items.unshift({
    label: atomKey,
    kind: CompletionItemKind.Property,
    detail: `<div ${atomKey}="16"></div>`,
  })
  return items
}
