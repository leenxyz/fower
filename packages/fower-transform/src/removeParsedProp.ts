import { Parser } from '@fower/parser'
import { Props } from '@fower/types'

export function removeParsedProp(path: any, parser: Parser, props: Props) {
  path.traverse({
    JSXAttribute(path: any) {
      const nodeName = path.node?.name?.name
      if (!nodeName) return

      const atomLength = parser.atoms.length
      for (let i = 0; i < atomLength; i++) {
        const atom = parser.atoms[i]
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
