const { parseComponent } = require('vue-template-compiler')
const posthtml = require('posthtml')

module.exports = require('vue-template-compiler')
module.exports.parseComponent = (content, opts) => {
  const sfc = parseComponent(content, opts)

  if (sfc.template) {
    sfc.template.content = posthtml([
      (tree) => {
        tree.walk((node) => {
          if (node && node.tag) {
            if (node.attrs) {
              node.attrs['v-css'] = true
            } else {
              node.attrs = {}
              node.attrs['v-css'] = true
            }
          }
          return node
        })

        console.log('tree:', tree)

        return tree
      },
    ]).process(sfc.template.content, {
      sync: true,
      recognizeSelfClosing: true,
    }).html
  }

  console.log('sfc.template.content:', sfc.template.content)

  return sfc
}
