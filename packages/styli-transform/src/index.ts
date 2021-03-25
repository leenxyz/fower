import generate from '@babel/generator'
import traverse from '@babel/traverse'
import { parse } from '@babel/parser'
import { Sheet } from '@styli/core'
import { createProps } from './createProps'
import { removeParsedProp } from './removeParsedProp'
import { toCss } from './toCss'
import { toStyle } from './toStyle'

export function transform(source: string, styli: any) {
  // generate ast
  const ast: any = parse(source, {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  })

  let css = ''
  traverse(ast, {
    JSXOpeningElement(path: any) {
      const attrs: any = path.node.attributes
      if (!attrs.length) return

      const { props } = createProps(attrs)

      const sheet = new Sheet(props, styli.getTheme())

      if (styli.getConfig('inline')) {
        toStyle(path, sheet, attrs)
      } else {
        // inject className
        toCss(path, sheet, attrs)
        css += sheet.toCssRules().join('')
      }

      removeParsedProp(path, sheet, props)
    },
  })

  return {
    ...generate(ast),
    css,
  }
}
