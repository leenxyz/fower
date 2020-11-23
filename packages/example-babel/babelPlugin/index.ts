import { Sheet, styli } from '@styli/core'
import { presetDefault } from '@styli/preset-default'
import { JSXOpeningElement } from '@babel/types'
import { PluginObj, NodePath } from '@babel/core'
import { createProps } from './createProps'
import { rmAttr } from './rmAttr'
import { toStyle } from './toStyle'
import { toCss } from './toCss'

export default (api: any, opt: any): PluginObj => {
  const { inline = true } = opt

  styli.configure({
    ...presetDefault,
    inline,
  })

  return {
    visitor: {
      JSXOpeningElement(path: NodePath<JSXOpeningElement>) {
        const attrs: any = path.node.attributes
        if (!attrs.length) return

        const { props } = createProps(attrs)

        const sheet = new Sheet(props, {} as any)

        if (inline) {
          toStyle(path, sheet, attrs)
        } else {
          toCss(path, sheet, attrs)
        }

        rmAttr(path, sheet, props)
      },
    },
  }
}
