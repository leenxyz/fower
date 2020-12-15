import { Sheet, styli } from '@styli/react'
import { JSXOpeningElement } from '@babel/types'
import { PluginObj, NodePath } from '@babel/core'
import { createProps } from './createProps'
import { rmAttr } from './rmAttr'
import { toStyle } from './toStyle'
import { toCss } from './toCss'
import { Preset } from '@styli/types'
import { output } from './output'

export interface Config {
  outDir: string
  styliPreset?: Preset
}

export const styliBabelPlugin = (__: any, opt?: Config): PluginObj => {
  const { styliPreset = {}, outDir = './styli.css' } = opt || {}

  styli.configure(() => styliPreset)

  const { inline = true } = styli.getConfig()

  return {
    pre() {
      this.cssStr = ''
    },
    visitor: {
      JSXOpeningElement(path: NodePath<JSXOpeningElement>) {
        const attrs: any = path.node.attributes
        if (!attrs.length) return

        const { props } = createProps(attrs)

        const sheet = new Sheet(props, styli.getTheme())

        if (inline) {
          toStyle(path, sheet, attrs)
        } else {
          this.cssStr += sheet.toCss()
          toCss(path, sheet, attrs)
        }

        rmAttr(path, sheet, props)
      },
    },
    post() {
      output(outDir, this.cssStr as any)
    },
  }
}
