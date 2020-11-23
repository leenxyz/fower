export function rmAttr(path: any, sheet, props) {
  path.traverse({
    JSXAttribute(path) {
      const nodeName = path.node?.name?.name
      if (!nodeName) return

      const atomLength = sheet.atoms.length
      for (let i = 0; i < atomLength; i++) {
        const atom = sheet.atoms[i]
        if (atom.propKey in props) {
          if (nodeName === atom.propKey) {
            path.remove()
            continue
          }
        }
        if (atom.designSystemKey in props) {
          if (nodeName === atom.designSystemKey) {
            path.remove()
            continue
          }
        }
      }
    },
  })
}
