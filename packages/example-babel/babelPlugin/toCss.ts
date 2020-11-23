import * as t from '@babel/types'
import { output } from './output'

export function toCss(path: any, sheet: any, attrs: any) {
  const css: any = sheet.toCss()
  const classNames = sheet.getClassNames()

  // get origin style
  const oClassName: any = attrs.find((node: any) => node.name?.name === 'className')

  if (oClassName) {
    // merge style
    oClassName.value.value = oClassName.value.value + ' ' + classNames
  } else {
    // insert style
    const className = t.jsxAttribute(t.jsxIdentifier('className'), t.stringLiteral(classNames))
    path.node.attributes.push(className)
  }

  output(css)
}
