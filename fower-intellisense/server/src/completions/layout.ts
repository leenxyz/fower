import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

const keys = [
  'row',
  'column',
  'toLeft',
  'toRight',
  'toTop',
  'toBottom',

  'toCenter',
  'toCenterX',
  'toCenterY',

  'toBetween',
  'toAround',
  'toEvenly',
]

export function getLayout() {
  const items = keys.map<CompletionItem>((key) => {
    return {
      label: key,
      kind: CompletionItemKind.Property,
      detail: `<div ${key}></div>`,
    } as CompletionItem
  })

  return items
}
