import { NodePath } from '@babel/core'
import { JSXAttribute, JSXOpeningElement } from '@babel/types'
import { Sheet } from '@styli/react'
import { Props } from '@styli/types'

export function rmAttr(path: NodePath<JSXOpeningElement>, sheet: Sheet, props: Props) {
  path.traverse({
    JSXAttribute(path: NodePath<JSXAttribute>) {
      const nodeName = path.node?.name?.name
      if (!nodeName) return

      const atomLength = sheet.atoms.length
      for (let i = 0; i < atomLength; i++) {
        const atom = sheet.atoms[i]
        if (atom.key in props) {
          if (nodeName === atom.key) {
            path.remove()
            continue
          }
        }
      }
    },
  })
}
