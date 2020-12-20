import { Sheet } from '@styli/core'
import { Props } from '@styli/types'

export function removeParsedProp(path: any, sheet: Sheet, props: Props) {
  path.traverse({
    JSXAttribute(path: any) {
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
