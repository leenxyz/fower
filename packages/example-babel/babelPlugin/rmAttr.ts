export function rmAttr(path: any, sheet, props) {
  path.traverse({
    JSXAttribute(path) {
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
