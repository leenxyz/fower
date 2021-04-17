import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'

export function getTextAlign(): CompletionItem[] {
  return [
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
}
