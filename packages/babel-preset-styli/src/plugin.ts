import { Sheet, styli } from '@styli/core'
import { presetDefault } from '@styli/preset-default'
import * as types from '@babel/types'
import { NodePath } from '@babel/traverse'

styli.configure(presetDefault)

export default ({ types: t }: any) => {
  return {
    visitor: {
      JSXOpeningElement(path: NodePath<types.JSXOpeningElement>) {

        const attrs: any = path.node.attributes
        if (!attrs.length) return

        let toHandleProps: any = []
        const props = attrs.reduce((result: any, node: any) => {
          if (!node.name?.name || node.value?.expression) return result
          toHandleProps.push(node.name?.name)
          return { ...result, [node.name?.name]: node.value?.value || true }
        }, {})

        const sheet = new Sheet(props, {} as any)

        const style: any = sheet.toStyles()
        const propExpression = t.objectExpression(Object.keys(style).map(key => t.objectProperty(t.identifier(key), t.stringLiteral(style[key]))))

        // get origin style
        const oStyle: any = attrs.find((node: any) => node.name?.name === 'style')

        if (oStyle) {
          // merge style
          oStyle.value.expression.properties = [...((propExpression as any).properties), ...oStyle.value.expression.properties]
        } else {
          // insert style
          const style = t.jSXAttribute(
            t.jSXIdentifier('style'),
            t.jSXExpressionContainer(propExpression)
          )
          path.node.attributes.push(style)
        }

        // remove no use attr
        path.traverse({
          JSXAttribute(path) {
            const nodeName = path.node?.name?.name
            if (!nodeName) return
            sheet.atoms.forEach((atom => {
              const find = toHandleProps.find((a: any) => a === atom.propKey || atom.designSystemKey)
              if (find && nodeName === find) {
                path.remove()
              }
            }))
          }
        })
      },
    },
  }
}
