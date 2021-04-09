import generate from '@babel/generator'
import traverse from '@babel/traverse'
import { parse } from '@babel/parser'
import { Parser } from '@styli/parser'
import { store } from '@styli/store'
import { createProps } from './createProps'
import { removeParsedProp } from './removeParsedProp'
import { toCss } from './toCss'
import { toStyle } from './toStyle'

export function transform(source: string) {
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

      const parser: any = new Parser(props)

      if (store.config.inline) {
        toStyle(path, parser, attrs)
      } else {
        // inject className
        toCss(path, parser, attrs)
        css += parser.toRules().join('')
      }

      removeParsedProp(path, parser, props)
    },
  })

  return {
    ...generate(ast),
    css,
  }
}
