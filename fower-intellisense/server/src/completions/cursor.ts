import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node'
import { kebab } from '@fower/utils'

const keys = [
  'cursorAlias',
  'cursorAllScroll',
  'cursorAuto',
  'cursorCell',
  'cursorColResize',
  'cursorContextMenu',
  'cursorCopy',
  'cursorCrosshair',
  'cursorDefault',
  'cursorEResize',
  'cursorEwResize',
  'cursorGrab',
  'cursorGrabbing',
  'cursorHelp',
  'cursorMove',
  'cursorNResize',
  'cursorNeResize',
  'cursorNeswResize',
  'cursorNoDrop',
  'cursorNone',
  'cursorNotAllowed',
  'cursorNsResize',
  'cursorNwResize',
  'cursorNwseResize',
  'cursorPointer',
  'cursorProgress',
  'cursorRowResize',
  'cursorSResize',
  'cursorSeResize',
  'cursorSwResize',
  'cursorText',
  'cursorVerticalText',
  'cursorWResize',
  'cursorWait',
  'cursorZoomIn',
  'cursorZoomOut',
]

export function getCursor() {
  const items = keys.map<CompletionItem>((key) => {
    const [, value] = key.match(/^cursor(.*)$/) || []
    return {
      label: key,
      kind: CompletionItemKind.Property,
      documentation: {
        kind: 'markdown',
        value: `
\`\`\`html
<div ${key}></div>
\`\`\`

\`\`\`css
.${key} {
  cursor: ${kebab(value)};
}
\`\`\`
	  `,
      },
    } as CompletionItem
  })

  items.unshift({
    label: 'cursor',
    kind: CompletionItemKind.Property,
    documentation: {
      kind: 'markdown',
      value: `
\`\`\`html
<div cursor="{value}"></div>
\`\`\`
	  `,
    },
  })

  return items
}
